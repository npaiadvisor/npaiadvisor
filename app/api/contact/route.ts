import { NextRequest, NextResponse } from "next/server"

interface RecaptchaResponse {
  success: boolean
  score: number
  action: string
  challenge_ts: string
  hostname: string
  "error-codes"?: string[]
}

// Where contact-form submissions are emailed. Matches the recipient the retired
// n8n "Send eMail" node used (contact-form.json, workspace/workflows/personal/npaiadvisor).
const NOTIFY_TO = "brian.g.flett@gmail.com"

/**
 * Mint a short-lived Gmail API access token from the long-lived refresh token.
 * Done with a raw fetch (no googleapis dependency) so this public site stays lean;
 * mirrors the OAuth refresh-token grant used by Klaus's lib/integrations/google-auth.ts.
 */
async function getGmailAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET
  const refreshToken = process.env.GMAIL_OAUTH_REFRESH_TOKEN
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Missing Gmail OAuth env (GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET / GMAIL_OAUTH_REFRESH_TOKEN)"
    )
  }

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    throw new Error(`Gmail token exchange failed: ${res.status} ${detail}`)
  }

  const data: { access_token?: string } = await res.json()
  if (!data.access_token) {
    throw new Error("Gmail token exchange returned no access_token")
  }
  return data.access_token
}

/** Base64url-encode (RFC 4648 §5) — Gmail's raw-message wire format. */
function base64url(s: string): string {
  return Buffer.from(s, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "")
}

/** Build a minimal RFC 822 text/plain message, encoded for the Gmail send API. */
function buildRawMessage(opts: {
  to: string
  subject: string
  body: string
  replyTo?: string
}): string {
  const headers = [
    `To: ${opts.to}`,
    opts.replyTo ? `Reply-To: ${opts.replyTo}` : undefined,
    `Subject: ${opts.subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
  ].filter(Boolean) as string[]
  return base64url(`${headers.join("\r\n")}\r\n\r\n${opts.body}`)
}

/** Send the contact-form notification email via the Gmail API. */
async function sendNotificationEmail(opts: {
  firstName: string
  lastName: string
  email: string
  type: string
  message: string
}): Promise<void> {
  const accessToken = await getGmailAccessToken()

  const subject = `npaiadvisor form submitted by ${opts.firstName} ${opts.lastName}`
  const body = [
    `First Name: ${opts.firstName}`,
    `Last Name: ${opts.lastName}`,
    `Email: ${opts.email}`,
    `Type: ${opts.type}`,
    "",
    "Message:",
    opts.message,
  ].join("\n")

  const raw = buildRawMessage({
    to: NOTIFY_TO,
    subject,
    body,
    // Replying to the notification goes straight back to the submitter.
    replyTo: opts.email || undefined,
  })

  const res = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
    }
  )

  if (!res.ok) {
    const detail = await res.text()
    throw new Error(`Gmail send failed: ${res.status} ${detail}`)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { recaptchaToken, firstName, lastName, email, type, message } = body

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification required" },
        { status: 400 }
      )
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY not configured")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Verify with Google
    const verifyResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaToken,
        }),
      }
    )

    const recaptchaResult: RecaptchaResponse = await verifyResponse.json()

    // Check if verification succeeded and score is acceptable (0.5+ is typical threshold)
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.warn("reCAPTCHA verification failed:", {
        success: recaptchaResult.success,
        score: recaptchaResult.score,
        errors: recaptchaResult["error-codes"],
      })
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      )
    }

    // Email the submission directly (replaces the n8n webhook forward + its
    // Gmail node). reCAPTCHA has already gated the request above.
    await sendNotificationEmail({
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      email: email ?? "",
      type: type ?? "",
      message: message ?? "",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
