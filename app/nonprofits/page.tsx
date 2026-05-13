import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function NonprofitsPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            AI Agents for Nonprofits
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Practical AI work for small to mid sized nonprofits &mdash;{" "}
            <span className="italic text-ochre">grounded, honest, and bounded.</span>
          </p>
        </div>

        {/* What is an AI Agent */}
        <section className="mb-16">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">What is an AI agent?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                An AI agent is software that does <em className="text-foreground">work</em> on
                a schedule or in response to something happening &mdash; not just a chatbot
                that answers questions. It watches a list, summarises a stack of documents,
                drafts an outreach email when the moment looks right, files a routine
                report. The human stays in the loop; the agent handles the parts that were
                always going to slip.
              </p>
              <p>
                Agents are the next step beyond conversational AI. Most nonprofits start
                with ChatGPT, Copilot, or Gemini in their daily work; the strongest ones
                eventually get a single agent doing one well-scoped job, and grow from there.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Three-tier services */}
        <section className="mb-16">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight">
            How I can help
          </h2>
          <p className="mb-8 text-muted-foreground">
            Three ways nonprofits typically engage, depending on where you are in
            your AI journey.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-hairline">
              <CardHeader>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
                  Stage 1
                </p>
                <CardTitle className="text-xl">AI strategy</CardTitle>
                <CardDescription>
                  Map your work, find the time-sinks, identify where AI actually fits.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A short engagement to cut through the AI hype and identify the one or
                two places where AI would make a real difference to your specific
                organisation. No pitch deck of generic use cases.
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
                  Stage 2
                </p>
                <CardTitle className="text-xl">Optimise your conversational AI</CardTitle>
                <CardDescription>
                  Get more out of ChatGPT, Copilot, Gemini, or Claude in your day-to-day.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Most nonprofits already have an LLM subscription that they barely use.
                A focused engagement to set up Custom GPTs, Copilot Agents, or Gemini
                Gems grounded in your own knowledge &mdash; so the AI you already pay for
                actually does work.
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
                  Stage 3
                </p>
                <CardTitle className="text-xl">Build your first AI agent</CardTitle>
                <CardDescription>
                  Ship one well-scoped agent doing one well-scoped job.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A multi-week co-build engagement to take an idea from prototype to
                production. The agent ends up in your own infrastructure, paid for by
                your organisation directly, maintainable by your team or a hired
                contractor &mdash; not locked to me.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real Example */}
        <section className="mb-16">
          <Card className="border-hairline bg-secondary">
            <CardHeader>
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
                Real example
              </p>
              <CardTitle className="text-2xl">Allard Prize Donor Outreach</CardTitle>
              <CardDescription className="text-base">
                An AI agent that watches a list and recommends when to act.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  The Challenge
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Allard Prize needed to identify and engage potential donors
                  aligned with their global integrity mission, but manual monitoring
                  of news and social media was time-consuming and inconsistent.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  The Solution
                </h4>
                <p className="mb-3 text-sm text-muted-foreground">
                  An agent that monitors 50+ news sources daily, scrapes LinkedIn
                  activity, and uses AI to score relevance and draft personalised
                  outreach recommendations &mdash; surfacing only the few names that
                  deserve attention each week.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&middot; Automated daily monitoring of 50+ RSS feeds</li>
                  <li>&middot; AI-drafted outreach recommendations, human-approved</li>
                  <li>&middot; CRM integration for downstream donor tracking</li>
                  <li>&middot; Honest about what the AI does and does <em>not</em> do</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/projects/allard-prize">
                  <Button>
                    Read full case study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Safe Adoption */}
        <section className="mb-16">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Safe AI adoption</CardTitle>
              <CardDescription className="text-base">
                The principles I bring to every engagement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <span className="min-w-36 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    Start small
                  </span>
                  <span>One specific workflow with clear, measurable impact.</span>
                </li>
                <li className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <span className="min-w-36 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    Build understanding
                  </span>
                  <span>Learn by doing &mdash; hands-on experience builds confidence and capability.</span>
                </li>
                <li className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <span className="min-w-36 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    Maintain control
                  </span>
                  <span>AI suggests, humans decide. You stay in control of every action.</span>
                </li>
                <li className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <span className="min-w-36 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    Scale gradually
                  </span>
                  <span>Expand to new use cases once your team is comfortable.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* MAS Resources */}
        <section className="mb-16">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Learn more with MAS</CardTitle>
              <CardDescription className="text-base">
                Free resources for nonprofits exploring AI.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I volunteer with Management Advisory Services (MAS), helping nonprofits
                understand and safely adopt AI. MAS publishes case studies, white papers,
                webinars, and a free AI Advisor that installs in your own LLM.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.masadvise.org/ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4" />
                    Explore MAS AI Resources
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="mb-4 text-2xl font-semibold tracking-tight">
            Ready to explore?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Get in touch to discuss where AI could fit in your organisation, or browse
            other nonprofit AI projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact?type=nonprofit">
              <Button size="lg">Get in touch</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                About Brian
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
