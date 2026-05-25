import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header — photo + intro side by side */}
        <section className="mb-16 grid items-center gap-12 md:grid-cols-[1fr_1.5fr]">
          <div>
            <Image
              src="/brian-full.jpg"
              alt="Brian Flett at his desk in Oakville, Ontario"
              width={600}
              height={800}
              priority
              className="w-full rounded-lg border border-hairline object-cover shadow-sm"
            />
          </div>
          <div>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              About Brian
            </h1>
            <p className="mb-4 text-lg text-muted-foreground">
              I&rsquo;m a retired senior director from Bentley Systems, where I led
              software development teams in the energy sector. After stepping away
              from corporate tech, I focused my energy on applying AI and automation
              to help nonprofits work more effectively.
            </p>
            <p className="mb-4 text-lg text-muted-foreground">
              I volunteer with Management Advisory Services (MAS), a nonprofit
              consulting organization serving organizations in the Greater Toronto
              Area, and am open to international clients. My focus areas include
              CiviCRM implementation, AI adoption strategy, n8n workflow
              automation, and AI agent development.
            </p>
            <p className="text-lg text-muted-foreground">
              Based in Oakville, Ontario, Canada.
            </p>
          </div>
        </section>

        {/* Technical Focus */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    Tools & Platforms
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Claude Code</strong> &mdash; AI-assisted development</li>
                    <li><strong className="text-foreground">n8n</strong> &mdash; self-hosted automation workflows</li>
                    <li><strong className="text-foreground">CiviCRM</strong> &mdash; nonprofit CRM implementation</li>
                    <li><strong className="text-foreground">WordPress</strong> &mdash; website development</li>
                    <li><strong className="text-foreground">Next.js</strong> &mdash; modern web applications</li>
                    <li><strong className="text-foreground">Vercel</strong> &mdash; application deployment</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    <Link
                      href="/tech-stack"
                      className="text-ochre hover:underline"
                    >
                      See my full tech stack &rarr;
                    </Link>
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    Specializations
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>&middot; AI agents</li>
                    <li>&middot; Workflow automation with n8n</li>
                    <li>&middot; AI integration (Claude, OpenAI APIs)</li>
                    <li>&middot; CiviCRM + AI workflows</li>
                    <li>&middot; Nonprofit technology strategy</li>
                    <li>&middot; Data integration & ETL pipelines</li>

                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Work */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Current Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Management Advisory Services (MAS)
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Technology advisor providing CiviCRM implementation, AI strategy,
                  and automation consulting to nonprofits in the GTA.
                </p>
                <a
                  href="https://masadvise.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Visit MAS
                  </Button>
                </a>
              </div>

              <div className="border-t border-hairline pt-6">
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Allard Prize Donor Outreach
                </h3>
                <p className="text-sm text-muted-foreground">
                  Building AI-powered donor outreach automation using n8n, Claude
                  AI, and Google Sheets to help the Allard Prize team identify and
                  engage potential supporters.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Looking For */}
        <section className="mb-12">
          <Card className="border-hairline bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl">Looking for tech peer collaborators</CardTitle>
              <CardDescription className="text-base">
                Seeking a few professionals who share my interests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                I&rsquo;m looking for tech peers who enjoy building AI agents,  
                working with n8n and AI/LLMs, and applying technology to nonprofit challenges. Not
                looking to build a formal community or business &mdash; just informal
                monthly calls to share what we&rsquo;re building and bounce ideas around.
              </p>
              <div>
                <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Interests Include
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>&middot; AI agents</li>
                  <li>&middot; n8n and workflow automation tools</li>
                  <li>&middot; AI/LLMs (Claude, OpenAI, etc.)</li>
                  <li>&middot; Nonprofit technology and CiviCRM</li>
                  <li>&middot; Learning while building real projects</li>

                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Outside Interests */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Outside Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="mb-1 font-serif text-lg font-semibold text-primary">Guitar</h4>
                  <p className="text-sm text-muted-foreground">Playing and collecting</p>
                </div>
                <div>
                  <h4 className="mb-1 font-serif text-lg font-semibold text-primary">Squash</h4>
                  <p className="text-sm text-muted-foreground">Staying active</p>
                </div>
                <div>
                  <h4 className="mb-1 font-serif text-lg font-semibold text-primary">Live Jazz</h4>
                  <p className="text-sm text-muted-foreground">Local shows</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Connect */}
        <section>
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Let&rsquo;s connect</CardTitle>
              <CardDescription className="text-base">
                Reach out if you&rsquo;re interested in tech peer collaboration or
                nonprofit AI automation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>Get in touch</Button>
                </Link>
                <a
                  href="https://ca.linkedin.com/in/brian-flett-2a43691"
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
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
