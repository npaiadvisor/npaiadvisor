import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            AI agents and automations helping nonprofits work more effectively.
          </p>
        </div>

        {/* Featured Project — Allard Prize */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
              Featured
            </span>
            <span className="mt-2 block">Allard Prize Donor Outreach</span>
          </h2>

          <Card className="overflow-hidden border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">An agent that watches a list and recommends when to act</CardTitle>
              <CardDescription className="text-base">
                AI-powered workflow that surfaces only the prospects worth acting on.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                A system that monitors potential donors through RSS feeds, LinkedIn,
                and email; analyses relevance using Claude; and drafts personalised
                outreach recommendations. All data tracked in Google Sheets, with
                SendGrid for delivery. Currently being productionalised to Next.js +
                Postgres + Vercel for handoff to client infrastructure.
              </p>

              <div>
                <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Key features
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>&middot; Automated daily RSS feed monitoring</li>
                  <li>&middot; LinkedIn post scraping and analysis</li>
                  <li>&middot; Email capture and processing</li>
                  <li>&middot; AI relevance scoring + drafted outreach recommendations</li>
                  <li>&middot; Google Sheets integration for tracking and reporting</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Tech stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["n8n (self-hosted)", "Claude API", "SendGrid", "Google Sheets", "Next.js + Postgres"].map(t => (
                    <span key={t} className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link href="/projects/allard-prize">
                  <Button>
                    View full case study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* More Projects */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            More case studies
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/projects/mas-vc-chatbot" className="group">
              <Card className="h-full border-hairline transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">MAS VC Chatbot</CardTitle>
                  <CardDescription>
                    An agent as a research partner grounded in MAS knowledge.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    A hundred volunteer consultants at Management Advisory Services
                    get a lookup partner scoped to who they are and what MAS actually
                    knows &mdash; grounded in MAS&rsquo;s own documents and data, so
                    every answer is sourced and nothing is made up.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["n8n", "Claude", "pgvector", "WordPress"].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="pt-2 text-sm font-medium text-primary group-hover:underline">
                    Read the case study <ArrowRight className="ml-1 inline h-3 w-3" />
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/klaus-personal-assistant" className="group">
              <Card className="h-full border-hairline transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Klaus Personal Assistant</CardTitle>
                  <CardDescription>
                    An agent as a thin layer on top of your tools, with persistent memory.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    A personal AI assistant that remembers across projects, files, and
                    schedule &mdash; sitting on top of the tools you already use rather
                    than replacing them. The pattern any nonprofit can adapt for an ED,
                    a fundraising lead, or a program manager.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Claude Code", "MCP", "n8n", "Postgres", "Next.js"].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="pt-2 text-sm font-medium text-primary group-hover:underline">
                    Read the case study <ArrowRight className="ml-1 inline h-3 w-3" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
