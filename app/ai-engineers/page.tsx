import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowRight } from "lucide-react"

export default function AIEngineersPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Looking for AI Engineer Collaborators
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            A small, informal circle of tech professionals building{" "}
            <span className="italic text-ochre">agents and automations</span>{" "}
            for nonprofits.
          </p>
        </div>

        {/* What This Is */}
        <section className="mb-16">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">What I&rsquo;m looking for</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I build AI agents and automations with nonprofits &mdash; some of the
                work is full-blown agentic (Claude Code, MCP, persistent memory, tool
                use), some is classic workflow automation (n8n, scheduled tasks, glue
                code). Both are legitimate, and most real engagements involve some of
                each.
              </p>
              <p>
                I&rsquo;m looking for a few peers who enjoy this kind of building &mdash;
                whether you identify as an agent developer, an n8n hacker, an
                automation engineer, or somewhere in between. Informal, async-first,
                periodic video calls, no formal commitment.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Three Columns */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-hairline">
              <CardHeader>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
                  What we&rsquo;ll do
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&middot; Async collaboration</li>
                  <li>&middot; Periodic video calls</li>
                  <li>&middot; Share what we&rsquo;re building</li>
                  <li>&middot; Bounce ideas off each other</li>
                  <li>&middot; Learn together</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
                  Tech I use
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&middot; Claude Code, MCP, Claude Agent SDK</li>
                  <li>&middot; n8n (self-hosted)</li>
                  <li>&middot; Next.js + Vercel + Postgres</li>
                  <li>&middot; CiviCRM + WordPress</li>
                  <li>&middot; Self-hosted infra</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
                  What this isn&rsquo;t
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&middot; Not a formal commitment</li>
                  <li>&middot; Not community management</li>
                  <li>&middot; Not a service business</li>
                  <li>&middot; Not a mentorship program</li>
                  <li>&middot; Just peer learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Work */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">
            What I&rsquo;m working on
          </h2>

          <div className="space-y-6">
            <Card className="border-hairline">
              <CardHeader>
                <CardTitle className="text-xl">Allard Prize donor outreach agent</CardTitle>
                <CardDescription>
                  AI agent that monitors prospects and surfaces only the moments worth acting on.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Built on n8n with Claude as the relevance-scoring brain. Watches 50+
                  RSS feeds daily, scrapes LinkedIn activity, scores entries against
                  the foundation&rsquo;s criteria, drafts personalised outreach
                  recommendations. Currently being productionalised to Next.js +
                  Postgres + Vercel for handoff to client infrastructure.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    n8n
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Claude
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Next.js
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Postgres
                  </span>
                </div>
                <Link href="/projects/allard-prize">
                  <Button variant="outline" size="sm">
                    View case study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader>
                <CardTitle className="text-xl">Klaus personal AI assistant</CardTitle>
                <CardDescription>
                  A full agent with persistent memory, sitting on top of my tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Claude Code + a constellation of n8n workflows, MCP servers, and
                  Postgres-backed memory. The kind of thing I&rsquo;d like to help every
                  nonprofit lead end up with for their own work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader>
                <CardTitle className="text-xl">MAS volunteer consulting</CardTitle>
                <CardDescription>
                  Technology advisor for Management Advisory Services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I volunteer with MAS on CiviCRM implementation, AI adoption
                  strategy, agent prototyping, and n8n workflow work for nonprofits
                  in the Greater Toronto Area.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ideal Collaborator */}
        <section className="mb-16">
          <Card className="border-hairline bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl">You might be a good fit if&hellip;</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>&middot; You build AI agents (Claude Code, MCP, OpenAI Agents SDK, LangGraph &mdash; whatever)</li>
                <li>&middot; You build workflow automations (n8n, Zapier, Temporal, hand-rolled)</li>
                <li>&middot; You&rsquo;re moving from one to the other and want a sounding board</li>
                <li>&middot; You care about nonprofit technology and social impact</li>
                <li>&middot; You prefer learning by building over theorising</li>
                <li>&middot; You want peer exchange, not formal networking</li>
                <li>&middot; You&rsquo;re comfortable with self-hosted infrastructure</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Connect */}
        <section className="mb-16">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Let&rsquo;s connect</CardTitle>
              <CardDescription className="text-base">
                Reach out if you&rsquo;re interested in informal AI engineer collaboration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-wrap gap-3">
                <Link href="/contact?type=ai-engineer">
                  <Button>Get in touch</Button>
                </Link>
                <a
                  href="https://www.linkedin.com/in/brianflett-2a43691/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <a
                  href="https://github.com/briangflett"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </div>

              <div className="border-t border-hairline pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> I&rsquo;m looking for
                  a few people for regular collaboration. If you&rsquo;re just curious
                  about the work, check out the{" "}
                  <Link href="/projects" className="text-primary hover:underline">
                    projects page
                  </Link>{" "}
                  or{" "}
                  <Link href="/about" className="text-primary hover:underline">
                    learn more about Brian
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Me Quick Link */}
        <section className="text-center">
          <p className="mb-4 text-muted-foreground">
            Want to learn more about my background first?
          </p>
          <Link href="/about">
            <Button variant="outline">About Brian</Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
