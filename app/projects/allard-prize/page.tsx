import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MasOriginBanner } from "@/components/mas-origin-banner"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

export default function AllardPrizePage() {
  return (
    <>
      <Suspense fallback={null}>
        <MasOriginBanner />
      </Suspense>
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
            Case study
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            How the Allard Prize Foundation built an AI donor-intelligence system &mdash; without starting with AI
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            An AI agent that watches a small list of high-value prospects and surfaces only the moments worth acting on. Built for a foundation promoting global integrity and anti-corruption work.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["n8n", "Claude API", "Google Sheets", "SendGrid", "Next.js + Postgres"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Why this story */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Why this story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Most &ldquo;AI for nonprofits&rdquo; stories start with a tool and look
                for a use. This one started the other way around: with a small
                foundation that mapped its constraints, identified a single
                bottleneck &mdash; building fundraising capability &mdash; and only
                then asked how AI could help. The result is a system that does one
                job well, leaves judgment with the human, and runs for less than the
                cost of a streaming subscription.
              </p>
              <p>
                This case study is the story of that build, told plainly. No
                promises that AI fixes fundraising. No claim that it replaces
                relationship work. Just an honest account of what worked, what it
                cost, and where the limits are.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* About */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">The Allard Prize Foundation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The Allard Prize for International Integrity recognizes individuals
                and organizations fighting corruption and protecting human rights.
                It&rsquo;s a small foundation with a big platform &mdash; three
                pillars: <strong className="text-foreground">integrity, recognition, and the platform itself.</strong>{" "}
                Like most nonprofits, it has more relationships worth nurturing than
                people available to nurture them, and the cost of a mis-timed or
                generic outreach to a senior stakeholder is real.
              </p>
              <p>
                Preet Noor leads the foundation&rsquo;s donor cultivation. The
                prospects she tracks fall into a handful of categories: institutional
                funders, individual donors, connectors who can open doors,
                credibility nodes whose endorsement matters, and potential
                collaborators. Each category needs a different kind of attention.
                None of them want a &ldquo;checking in&rdquo; email.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Discovery */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">The discovery process &mdash; before any AI was on the table</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The first principle of the project, in Preet&rsquo;s words, was{" "}
                <em className="text-foreground">&ldquo;we didn&rsquo;t start with AI.&rdquo;</em>{" "}
                Together we walked through five steps:
              </p>
              <ol className="list-inside list-decimal space-y-2">
                <li><strong className="text-foreground">Map the core functions</strong> of the foundation.</li>
                <li><strong className="text-foreground">Identify the gaps</strong> between what the team needed to do and what it had capacity for.</li>
                <li><strong className="text-foreground">Prioritize</strong> &mdash; what would move the mission most?</li>
                <li><strong className="text-foreground">Name the immediate need</strong> &mdash; in this case, building fundraising capability.</li>
                <li><strong className="text-foreground">Then, and only then, ask how AI could help.</strong></li>
              </ol>
              <p>
                The point of that order is to keep the technology in service of the
                work. If we&rsquo;d started with &ldquo;let&rsquo;s use AI,&rdquo;
                we&rsquo;d have built a chatbot or an email blaster &mdash; the obvious
                things. By starting with constraints, we identified the actual
                bottleneck: monitoring a small set of high-value prospects for
                moments when reaching out would be welcome and earned, rather than
                transactional.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What we built */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">What we built &mdash; a donor intelligence system</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                The system has three parts: <strong className="text-foreground">inputs, processing, and outputs.</strong>
              </p>

              <figure className="my-2">
                <Image
                  src="/case-studies/allard-what-we-built.png"
                  alt="Diagram of the Allard Prize donor intelligence system: public + internal signals feed into an AI processor that produces a weekly briefing and draft outreach"
                  width={1200}
                  height={675}
                  className="w-full rounded-lg border border-hairline"
                />
              </figure>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Inputs
                </h3>
                <p className="mb-3">
                  The system watches each prospect through two kinds of signals:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">Public signals</strong> &mdash; news mentions (via Google Alerts), newsletter posts, LinkedIn activity</li>
                  <li>&middot; <strong className="text-foreground">Internal signals</strong> &mdash; a history of every touchpoint Allard Prize has had with the prospect, plus context notes Preet maintains</li>
                </ul>
                <p className="mt-3 text-sm">
                  All of this lives in Google Sheets that Preet can inspect and
                  edit. There&rsquo;s no hidden database; if she wants to know what
                  the system saw last week, she opens a tab.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Processing
                </h3>
                <p className="mb-3">
                  Once a week, the system passes the captured signals through an AI
                  agent. The agent&rsquo;s job is to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">Interpret the relationship</strong> &mdash; is it dormant, warm, active, stalled?</li>
                  <li>&middot; <strong className="text-foreground">Apply Preet&rsquo;s criteria</strong> &mdash; different prospect types allow different kinds of outreach</li>
                  <li>&middot; <strong className="text-foreground">Score the opportunity</strong> &mdash; on a 1&ndash;10 scale, how clearly is outreach justified <em>right now</em>?</li>
                </ul>
                <p className="mt-3 text-sm">
                  The agent is built around restraint. Its first instruction is to
                  default to <em>no action</em> &mdash; to recommend a touchpoint only when
                  the case for one is clear. Anything scoring 7 or below is filed
                  away. Only opportunities scoring 8 or higher surface to a human.
                </p>
                <p className="mt-3 text-sm">
                  This is the part most &ldquo;AI for outreach&rdquo; tools get
                  backwards. They&rsquo;re optimized to generate messages. Ours is
                  optimized to <em>withhold</em> them &mdash; because in donor
                  relationships, the cost of a clumsy email to a senior person is
                  far higher than the cost of saying nothing.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Outputs
                </h3>
                <p className="mb-3">
                  When the agent finds a high-priority opportunity, the human gets:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">A weekly briefing email</strong> &mdash; what changed, who matters this week, what&rsquo;s recommended</li>
                  <li>&middot; <strong className="text-foreground">A pre-written draft</strong> &mdash; a starting point for the outreach, tailored to the prospect type and the relationship state</li>
                </ul>
                <p className="mt-3 text-sm">
                  The human reads it, edits it (or rejects it), and sends it from
                  their own account. The AI never contacts a prospect directly. As
                  Preet&rsquo;s slide puts it:{" "}
                  <em className="text-foreground">AI is not deciding &mdash; you are.</em>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The real value */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">The real value</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                After several months of running the system, three benefits stand out:
              </p>
              <ul className="space-y-3">
                <li><strong className="text-foreground">Better timing.</strong> Reaching people when something genuinely warrants it &mdash; not on an arbitrary cadence.</li>
                <li><strong className="text-foreground">Better judgment.</strong> A consistent filter applied to every prospect every week, instead of &ldquo;whoever has capacity this Friday.&rdquo;</li>
                <li><strong className="text-foreground">Better preparation.</strong> Walking into a meeting already aware of what the person has been doing, saying, and announcing.</li>
              </ul>
              <p>
                Notice what&rsquo;s <em>not</em> on this list: more outreach, faster
                outreach, automated outreach. The system&rsquo;s value is not in
                volume &mdash; it&rsquo;s in restraint and in quality of attention.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Cost */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">What it cost</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>This is the part most case studies skip. We won&rsquo;t.</p>
              <dl className="space-y-4">
                <div>
                  <dt className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Time</dt>
                  <dd className="mt-1 text-sm">Mostly upfront &mdash; brainstorming, mapping prospect types, defining what &ldquo;good&rdquo; outreach looks like for each. Ongoing: a 1&ndash;2 hour prep block before each working meeting, every 1&ndash;2 weeks.</dd>
                </div>
                <div>
                  <dt className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Money</dt>
                  <dd className="mt-1 text-sm">Single-digit dollars per month for the AI calls. No CRM purchase, no enterprise platform.</dd>
                </div>
                <div>
                  <dt className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Maintenance</dt>
                  <dd className="mt-1 text-sm">Updating the prospect list, refining the criteria when the agent gets it wrong, watching for output drift. Not zero &mdash; but small.</dd>
                </div>
              </dl>
              <p className="pt-2">
                The honest summary, again from Preet&rsquo;s slide:{" "}
                <em className="text-foreground">AI is not plug-and-play. It requires intentional design and ongoing calibration.</em>{" "}
                The model is the cheap part. The thinking around the model is the work.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Safety */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Safety and data privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A foundation that works on integrity has to take this seriously.
                Five principles shaped how the system handles data:
              </p>
              <ul className="space-y-2 text-sm">
                <li>&middot; <strong className="text-foreground">No sensitive donor data</strong> flows through the AI. The agent sees public signals plus internal <em>context notes</em> &mdash; written deliberately, not pulled from a CRM.</li>
                <li>&middot; <strong className="text-foreground">Inputs are public or controlled.</strong> News, LinkedIn, newsletters; or text Preet has chosen to put in.</li>
                <li>&middot; <strong className="text-foreground">Every output is reviewed</strong> by a human before anything reaches a prospect.</li>
                <li>&middot; <strong className="text-foreground">The AI&rsquo;s boundaries are explicit.</strong> It doesn&rsquo;t decide; it doesn&rsquo;t send; it can&rsquo;t access anything the human hasn&rsquo;t given it.</li>
                <li>&middot; <strong className="text-foreground">An internal AI policy</strong> documents the above so it&rsquo;s not reliant on any one person remembering it.</li>
              </ul>
              <p className="text-ochre italic">Safety by design. Trust by default.</p>
            </CardContent>
          </Card>
        </section>

        {/* Broader uses */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Broader uses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The pattern &mdash;{" "}
                <em className="text-foreground">watch a list, filter for meaningful change, surface only what matters, draft something to act on</em>{" "}
                &mdash; generalizes well beyond donor outreach. The same shape works for:
              </p>
              <ul className="space-y-2 text-sm">
                <li>&middot; <strong className="text-foreground">Content creation</strong> &mdash; drafting newsletter copy from research notes</li>
                <li>&middot; <strong className="text-foreground">Research & insights</strong> &mdash; summarizing what&rsquo;s happening in a sector</li>
                <li>&middot; <strong className="text-foreground">Donor engagement</strong> &mdash; what we&rsquo;ve described</li>
                <li>&middot; <strong className="text-foreground">Meeting support</strong> &mdash; preparing briefs from public information</li>
                <li>&middot; <strong className="text-foreground">Strategic planning</strong> &mdash; surfacing trends across a portfolio</li>
                <li>&middot; <strong className="text-foreground">Operations efficiency</strong> &mdash; automating low-value triage so humans can do high-value work</li>
              </ul>
              <p>The Allard Prize system is one application of this pattern. Most nonprofits have at least three.</p>
            </CardContent>
          </Card>
        </section>

        {/* Next steps */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Next steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>The system isn&rsquo;t finished. Preet and the team are working in three directions:</p>
              <ul className="space-y-2 text-sm">
                <li>&middot; <strong className="text-foreground">System expansion</strong> &mdash; applying the same pattern to adjacent functions, starting with social-media content drafting.</li>
                <li>&middot; <strong className="text-foreground">System refinement</strong> &mdash; sharpening the donor-intelligence loop with better criteria, sharper scoring, and more useful briefings.</li>
                <li>&middot; <strong className="text-foreground">Internal ownership</strong> &mdash; running and improving the system in-house, rather than depending on outside help indefinitely.</li>
              </ul>
              <p>
                That last point is the framing they put on it themselves:{" "}
                <em className="text-foreground">Building capability, not dependency.</em>{" "}
                AI for nonprofits isn&rsquo;t a project you ship and walk away from.
                It&rsquo;s a relationship you maintain with a tool that&rsquo;s
                powerful, fallible, and getting better only if you make it.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Lessons */}
        <section className="mb-12">
          <Card className="border-hairline bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl">What we&rsquo;d tell another nonprofit considering this</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-inside list-decimal space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Start with constraints, not tools.</strong> Map the work first. The right AI use case will be obvious; the wrong one will look obvious too.</li>
                <li><strong className="text-foreground">Build something small that respects judgment.</strong> A tool that drafts outreach for human review is a different beast from a tool that sends it.</li>
                <li><strong className="text-foreground">Bias the system toward restraint.</strong> If your AI&rsquo;s default is to do something, it will do too much.</li>
                <li><strong className="text-foreground">Keep the data legible.</strong> Google Sheets are not a limitation &mdash; they&rsquo;re a feature. Anyone on the team can audit what the system saw and what it concluded.</li>
                <li><strong className="text-foreground">Budget time, not just money.</strong> The dollars are small. The thinking is the cost.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          <a href="https://allardprize.org" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <ExternalLink className="h-4 w-4" />
              About Allard Prize
            </Button>
          </a>
          <Link href="/projects">
            <Button variant="outline" size="lg">
              More projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg">Discuss a similar project</Button>
          </Link>
        </div>
        </div>
      </div>
    </>
  )
}
