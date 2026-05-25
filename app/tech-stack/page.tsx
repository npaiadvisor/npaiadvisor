import Link from "next/link"
import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MasOriginBanner } from "@/components/mas-origin-banner"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

type StackRow = {
  category: string
  description?: string
  selection: string[]
  alternatives: string[]
  comments: React.ReactNode
}

const rows: StackRow[] = [
  {
    category: "AI LLM",
    description:
      "The AI model that does the reasoning — the “brain” that reads, writes, and answers questions.",
    selection: ["Anthropic Claude"],
    alternatives: ["OpenAI ChatGPT", "Google Gemini", "Microsoft Copilot"],
    comments: (
      <>
        All four are mature enough for nonprofit use. The choice often comes
        down to which company you already trust with your data and whether
        they offer nonprofit pricing. Anthropic&rsquo;s{" "}
        <a
          href="https://claude.com/solutions/nonprofits"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          nonprofit program
        </a>{" "}
        offers great pricing on a great model.
      </>
    ),
  },
  {
    category: "Website",
    description:
      "The platform for building and managing your organization’s public website.",
    selection: ["WordPress"],
    alternatives: ["Squarespace", "Wix", "Webflow", "Lovable"],
    comments: (
      <>
        WordPress is a legacy decision for MAS &mdash; powerful and
        extensible, but it needs ongoing care and feeding (updates, security
        patches, plugin maintenance). For my personal website I take a more
        modern approach: I use Claude to write the code, store it in GitHub,
        and host it on Vercel. Squarespace and Wix are the friendliest options
        if you don&rsquo;t have a technical hand to lean on.
      </>
    ),
  },
  {
    category: "Office Productivity",
    description:
      "Email, documents, spreadsheets, calendar, and file storage — the day-to-day office tools.",
    selection: ["Microsoft 365"],
    alternatives: ["Google Workspace"],
    comments: (
      <>
        We use Microsoft 365 for MAS; I use Google Workspace for myself. Both
        offer good packages for nonprofits &mdash;{" "}
        <a
          href="https://www.microsoft.com/en-us/nonprofits/microsoft-365"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Microsoft 365 for Nonprofits
        </a>{" "}
        and{" "}
        <a
          href="https://www.google.com/nonprofits/offerings/workspace/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Google Workspace for Nonprofits
        </a>
        . Either is fine; pick the one your team already knows.
      </>
    ),
  },
  {
    category: "CRM",
    description:
      "Constituent Relationship Management — where you track donors, members, volunteers, and other supporters.",
    selection: ["CiviCRM"],
    alternatives: [
      "Salesforce",
      "Blackbaud",
      "Bloomerang",
      "HubSpot",
      "Keela",
    ],
    comments: (
      <>
        CiviCRM is not the most user-friendly, but it&rsquo;s free, open
        source, and has great nonprofit functionality. Salesforce offers ten
        free licenses to verified nonprofits; Bloomerang and Keela are easier
        to get started with but charge monthly. The right CRM depends less on
        features than on whether someone on your team will actually keep the
        data clean.
      </>
    ),
  },
  {
    category: "Code Repository",
    description:
      "Where the code for custom websites and apps is stored, with a full history of every change.",
    selection: ["GitHub"],
    alternatives: ["GitLab", "Bitbucket"],
    comments: (
      <>
        Free for most uses. If you&rsquo;re not writing custom code, you may
        never touch this directly &mdash; but anyone building tools for you
        should be using one. Most AI coding tools integrate with GitHub by
        default.
      </>
    ),
  },
  {
    category: "Code Execution (Hosting)",
    description:
      "Where your website or app actually runs so people on the internet can reach it.",
    selection: ["OVH Cloud", "Vercel"],
    alternatives: ["GoDaddy", "DigitalOcean", "Cloudflare", "Netlify"],
    comments: (
      <>
        You may need different hosting providers for different systems.
        Traditional WordPress and CiviCRM sites usually live on shared hosting
        like GoDaddy or OVH &mdash; cheap, but more maintenance falls on you.
        Modern AI-driven sites run on platforms like Vercel that handle
        deployment, scaling, and security automatically. New code I write
        goes to GitHub and is automatically deployed to Vercel.
      </>
    ),
  },
  {
    category: "Database",
    description:
      "Where your data lives — donor records, contact lists, form submissions, anything you need to look up later.",
    selection: ["Neon"],
    alternatives: ["Supabase", "PlanetScale", "Amazon RDS"],
    comments: (
      <>
        Most nonprofits never pick a database directly &mdash; their CRM or
        website chooses one for them. WordPress ships with MySQL. Neon is a
        modern Postgres database that integrates well with Vercel and has a
        generous free tier. Worth knowing about if you&rsquo;re building
        anything custom.
      </>
    ),
  },
  {
    category: "LLM Router",
    description:
      "A go-between service that lets you test or switch between different AI models from one place.",
    selection: ["OpenRouter"],
    alternatives: ["Vercel AI Gateway", "Portkey", "LiteLLM"],
    comments: (
      <>
        Mostly useful when you&rsquo;re building AI tools and want to compare
        models on price and performance before committing. Most nonprofits
        won&rsquo;t need this directly &mdash; but the engineer building for
        you probably will.
      </>
    ),
  },
  {
    category: "Scraping Tools",
    description:
      "Tools that automatically pull information from websites, social media, and search results.",
    selection: ["Apify"],
    alternatives: ["Tavily", "SerpAPI", "Firecrawl"],
    comments: (
      <>
        Basic web search will get you started, but often you need a tool like
        one of these to get at social media data or to crawl an entire
        website. Used mostly behind the scenes by AI agents that need to
        gather public information &mdash; the Allard Prize donor-intelligence
        system is one example.
      </>
    ),
  },
]

export default function TechStackPage() {
  return (
    <>
      <Suspense fallback={null}>
        <MasOriginBanner />
      </Suspense>
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
              Reference
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Tech Stack
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              The tools I use personally and for MAS. It is constantly evolving.
            </p>
          </div>

          {/* Intro / advice */}
          <section className="mb-12">
            <Card className="border-hairline">
              <CardHeader>
                <CardTitle className="text-2xl">
                  How to read this page
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I would recommend selecting an{" "}
                  <strong className="text-foreground">AI LLM</strong> first, and
                  then having a technical planning discussion with it on the
                  rest of your stack.
                </p>
                <p>
                  Explain what you currently use, your level of comfort with
                  technology and code, what you want to accomplish, and then
                  evaluate alternatives in each category below.
                </p>
                <p className="text-ochre italic">
                  The goal isn&rsquo;t to copy this stack &mdash; it&rsquo;s to
                  make deliberate choices in each category for your own
                  context.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Stack rows */}
          <section className="mb-12 space-y-6">
            {rows.map((row) => (
              <Card key={row.category} className="border-hairline">
                <CardHeader>
                  <CardTitle className="text-2xl">{row.category}</CardTitle>
                  {row.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {row.description}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
                        My selection
                      </h3>
                      <ul className="space-y-1">
                        {row.selection.map((item) => (
                          <li
                            key={item}
                            className="text-base font-medium text-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                        Alternatives
                      </h3>
                      {row.alternatives.length > 0 ? (
                        <ul className="space-y-1">
                          {row.alternatives.map((item) => (
                            <li
                              key={item}
                              className="text-base text-muted-foreground"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm italic text-muted-foreground">
                          &mdash;
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="border-t border-hairline pt-4">
                    <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                      Comments
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {row.comments}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Closing note */}
          <section className="mb-12">
            <Card className="border-hairline bg-secondary">
              <CardHeader>
                <CardTitle className="text-2xl">
                  One last note
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Every choice here reflects a trade-off between cost, comfort,
                  flexibility, and the time available to maintain it. None of
                  these tools are the &ldquo;right&rdquo; answer in isolation.
                </p>
                <p>
                  Pick the LLM. Have the conversation. The rest follows.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                See projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg">
                Discuss your stack
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
