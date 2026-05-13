"use client"

import { Suspense, useState, useEffect, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import Script from "next/script"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

type ContactType = "nonprofit" | "ai-engineer" | "other"

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""

const INPUT_CLASS =
  "w-full rounded-md border border-hairline bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"

const RADIO_CLASS =
  "h-4 w-4 border-hairline text-primary focus:ring-ring"

function ContactForm() {
  const searchParams = useSearchParams()
  const defaultType = (searchParams.get("type") as ContactType) || "nonprofit"

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: defaultType,
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  const handleRecaptchaLoad = useCallback(() => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setRecaptchaLoaded(true)
      })
    }
  }, [])

  useEffect(() => {
    if (window.grecaptcha) {
      handleRecaptchaLoad()
    }
  }, [handleRecaptchaLoad])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      if (!window.grecaptcha || !recaptchaLoaded) {
        throw new Error("reCAPTCHA not loaded. Please refresh the page and try again.")
      }

      const recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "contact_form",
      })

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          type: defaultType,
          message: "",
        })
      } else {
        console.error("Form submission failed:", response.status, result.error)
        throw new Error(result.error || "Failed to submit form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "There was a problem submitting your message. Please try again or reach out via LinkedIn."
      )
    }
  }

  if (status === "success") {
    return (
      <Card className="border-hairline">
        <CardContent className="pt-6">
          <div className="space-y-4 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-ochre" />
            <h2 className="text-2xl font-semibold tracking-tight">Message sent</h2>
            <p className="text-muted-foreground">
              Thanks for reaching out. I&rsquo;ll get back to you soon.
            </p>
            <Button onClick={() => setStatus("idle")} variant="outline">
              Send another message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        onLoad={handleRecaptchaLoad}
      />
      <Card className="border-hairline">
        <CardHeader>
          <CardTitle>Contact form</CardTitle>
          <CardDescription>
            Fill out the form and I&rsquo;ll get back to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={INPUT_CLASS}
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={INPUT_CLASS}
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={INPUT_CLASS}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-foreground">
                I am a&hellip;
              </label>
              <div className="space-y-2">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="type"
                    value="nonprofit"
                    checked={formData.type === "nonprofit"}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as ContactType })}
                    className={RADIO_CLASS}
                  />
                  <span className="text-sm text-muted-foreground">
                    Nonprofit professional exploring AI agents or automations
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="type"
                    value="ai-engineer"
                    checked={formData.type === "ai-engineer"}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as ContactType })}
                    className={RADIO_CLASS}
                  />
                  <span className="text-sm text-muted-foreground">
                    AI engineer interested in collaboration
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="type"
                    value="other"
                    checked={formData.type === "other"}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as ContactType })}
                    className={RADIO_CLASS}
                  />
                  <span className="text-sm text-muted-foreground">Other</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={INPUT_CLASS}
                placeholder="Tell me about your interest in AI agents, automation, or collaboration..."
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-destructive">
                <AlertCircle className="h-4 w-4" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <Button type="submit" disabled={status === "submitting" || !recaptchaLoaded} className="w-full">
              {status === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

function ContactFormLoading() {
  return (
    <Card className="border-hairline">
      <CardHeader>
        <CardTitle>Contact form</CardTitle>
        <CardDescription>Fill out the form and I&rsquo;ll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="animate-pulse space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-16 rounded-md bg-secondary" />
            <div className="h-16 rounded-md bg-secondary" />
          </div>
          <div className="h-16 rounded-md bg-secondary" />
          <div className="h-24 rounded-md bg-secondary" />
          <div className="h-32 rounded-md bg-secondary" />
          <div className="h-10 rounded-md bg-secondary" />
        </div>
      </CardContent>
    </Card>
  )
}

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 text-muted-foreground">
            Interested in nonprofit AI agents, automation work, or engineer
            collaboration? I&rsquo;d love to hear from you.
          </p>
        </div>

        <Suspense fallback={<ContactFormLoading />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  )
}
