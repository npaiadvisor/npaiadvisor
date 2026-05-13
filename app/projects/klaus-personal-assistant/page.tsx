import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MasOriginBanner } from "@/components/mas-origin-banner"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function KlausPersonalAssistantPage() {
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
            What a real AI assistant looks like &mdash; and why it matters for nonprofits
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            A personal AI assistant with persistent memory, sitting on top of the
            tools I already use. Built and used daily to inform how I advise
            nonprofits on adopting AI.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Claude Code", "MCP", "n8n", "Postgres", "Next.js", "Obsidian"].map((tag) => (
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
                I work at MAS as a technology advisor. My job is to help Canadian
                nonprofits adopt AI &mdash; and that means staying ahead of a field
                that changes weekly, and showing nonprofit leaders concretely how AI
                fits <em>their</em> work, not someone else&rsquo;s.
              </p>
              <p>
                The path of least resistance &mdash; generic chatbots &mdash; falls
                short for that job. Every conversation starts at zero. Your work
                history lives in someone else&rsquo;s walled garden. Useful for
                twenty minutes, then forgotten.
              </p>
              <p>
                So for the past year I&rsquo;ve been building and using something I
                call <strong className="text-foreground">Klaus</strong> &mdash; a
                personal AI assistant that knows my work, persists my context, and
                grows alongside it. This case study is the story of what it is, what
                it cost, and why the pattern matters for any nonprofit thinking
                seriously about AI.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Who is Klaus */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Who is Klaus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Klaus isn&rsquo;t a product you can buy. It&rsquo;s a pattern &mdash; three pillars hold it up:</p>
              <ul className="space-y-3">
                <li><strong className="text-foreground">Persistent memory.</strong> Klaus remembers what&rsquo;s happening across my projects, decisions I&rsquo;ve made, and conversations I&rsquo;ve had &mdash; in a database I own.</li>
                <li><strong className="text-foreground">Connected to my tools.</strong> Klaus reads from and writes to my files, my code, my notes, my task list &mdash; the systems my work already lives in.</li>
                <li><strong className="text-foreground">My data, my systems.</strong> Nothing important is locked inside the AI vendor. The AI is the engine. The data is mine.</li>
              </ul>
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
                The most common mistake nonprofits make with AI is starting with the
                tool: <em>&ldquo;We should use ChatGPT for&hellip;&rdquo;</em> When I
                built Klaus, I deliberately did the opposite. Five steps:
              </p>
              <ol className="list-inside list-decimal space-y-2">
                <li><strong className="text-foreground">Map my actual work</strong> &mdash; advising nonprofits, staying current on AI, building tools (workshops, chatbots, case studies) to help leaders imagine how AI fits their organization.</li>
                <li><strong className="text-foreground">Identify where the field&rsquo;s pace exceeded my human capacity</strong> &mdash; keeping up with weekly capability shifts, drafting outreach faster than I could from scratch, retaining lessons across nonprofit conversations.</li>
                <li><strong className="text-foreground">Prioritize the proactive gaps</strong> &mdash; no daily AI-news triage, no persistent memory across sessions, no compounding pattern recognition.</li>
                <li><strong className="text-foreground">Name the immediate need</strong> &mdash; an assistant that could <em>learn me</em> over time and surface what I needed to know.</li>
                <li><strong className="text-foreground">Then, and only then, ask how AI could help.</strong></li>
              </ol>
              <p>
                The point of that order is to keep the technology in service of the
                work. If I&rsquo;d started with <em>&ldquo;let&rsquo;s use AI,&rdquo;</em>{" "}
                I&rsquo;d have built another stateless chatbot.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What we built */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">What I built &mdash; a personal AI on top of tools I already use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                Klaus has three parts: <strong className="text-foreground">inputs, processing, and outputs.</strong>
              </p>

              <figure className="my-2">
                <Image
                  src="/case-studies/klaus-solution.jpeg"
                  alt="Diagram of Klaus: memory, files, and tasks feed into Claude which produces knowledge documents, tasks, and long memory"
                  width={1200}
                  height={675}
                  className="w-full rounded-lg border border-hairline"
                />
              </figure>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Inputs
                </h3>
                <p className="mb-3">Klaus draws from three kinds of source:</p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">Memory</strong> &mdash; notes, decisions, prior conversations &mdash; in a Postgres database I own</li>
                  <li>&middot; <strong className="text-foreground">Files</strong> &mdash; my GitHub repositories, my Obsidian notes, my Google Drive</li>
                  <li>&middot; <strong className="text-foreground">Tasks</strong> &mdash; a to-do list, conversation handoffs that carry context across sessions, automated background jobs</li>
                </ul>
                <p className="mt-3 text-sm">
                  Critically, none of this is stored <em>inside</em> the AI vendor.
                  It&rsquo;s stored in systems I control. The AI sees what I send it
                  for a given conversation, then forgets. The persistence is in{" "}
                  <em>my</em> database.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Processing
                </h3>
                <p className="mb-3">
                  When I start a conversation, Claude reads what&rsquo;s relevant,
                  drafts what I need, and uses small tools to touch my real systems
                  &mdash; read a file, append a task, log a decision, query a
                  database. Some of those tools run on demand; others run in the
                  background while I sleep, monitoring AI capability shifts, scoring
                  articles, and drafting summaries.
                </p>
                <p className="mb-3 text-sm">The agent is built on a few principles:</p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">The AI is the engine, not the database.</strong> I never put my data inside the AI vendor&rsquo;s memory features. Everything important lives in systems I own.</li>
                  <li>&middot; <strong className="text-foreground">Tools, not free-form access.</strong> Claude calls a small set of named tools that I built. Each tool is auditable.</li>
                  <li>&middot; <strong className="text-foreground">Working memory, not perfect memory.</strong> Klaus doesn&rsquo;t try to &ldquo;remember everything.&rdquo; It writes down what matters, and re-reads it next session.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Outputs
                </h3>
                <p className="mb-3">Day-to-day, Klaus produces three kinds of artifact:</p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">Knowledge base documents</strong> &mdash; research summaries, enhancement specs, strategy docs. The body of writing that informs my MAS advisory work.</li>
                  <li>&middot; <strong className="text-foreground">Tasks and handoffs</strong> &mdash; a prioritized list of what to do next, with full context attached so I can pick up tomorrow where I left off today.</li>
                  <li>&middot; <strong className="text-foreground">Long memory</strong> &mdash; every architectural decision, every &ldquo;we tried that and it didn&rsquo;t work,&rdquo; findable months later.</li>
                </ul>
                <p className="mt-3 text-sm">
                  What it doesn&rsquo;t output: messages sent on my behalf without
                  review, automatic CRM updates I didn&rsquo;t authorize, or
                  anything that pretends to be me to a third party.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Real value */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">The real value</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>After about a year of running Klaus daily, three benefits stand out:</p>
              <ul className="space-y-3">
                <li><strong className="text-foreground">Keeping current.</strong> Daily briefings surface AI capability shifts I&rsquo;d otherwise miss. A knowledge base of articles, tools, and talks builds itself in the background, scored against the topics I actually advise nonprofits on. Without Klaus, I&rsquo;d lose half a day each week just to <em>keeping up</em>.</li>
                <li><strong className="text-foreground">Building outreach.</strong> I&rsquo;m producing more substantive outreach to nonprofits &mdash; webinars, workshops, AI chatbots, public case studies like this one &mdash; and each new piece is faster because Klaus carries the context across them.</li>
                <li><strong className="text-foreground">Compounding judgment.</strong> Patterns from one nonprofit conversation surface when I&rsquo;m prepping for the next. Lessons aren&rsquo;t lost between sessions, and over time my advice gets sharper, not staler.</li>
              </ul>
              <p>
                Notice what&rsquo;s <em>not</em> on this list: more output, faster
                output, AI-doing-my-job-for-me. The value isn&rsquo;t that Klaus
                does my work. It&rsquo;s that Klaus removes the friction between me
                and my work, and surfaces what I&rsquo;d otherwise miss.
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
              <dl className="space-y-4">
                <div>
                  <dt className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Time</dt>
                  <dd className="mt-1 text-sm">Significant upfront &mdash; deciding what to track, what to automate, what <em>not</em> to automate. Daily: a few minutes on a briefing, a few minutes wrapping up. Ongoing: architectural changes as my work evolves.</dd>
                </div>
                <div>
                  <dt className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Money</dt>
                  <dd className="mt-1 text-sm">Modest. AI-model usage plus a few cloud-service subscriptions. Built on tools I already paid for plus free open source.</dd>
                </div>
                <div>
                  <dt className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Maintenance</dt>
                  <dd className="mt-1 text-sm">Tuning the background jobs. Keeping the documentation honest. Letting the assistant improve itself, with checks I review.</dd>
                </div>
              </dl>
              <p className="pt-2">
                The honest summary:{" "}
                <em className="text-foreground">AI is not plug-and-play. It requires intentional design and ongoing calibration.</em>{" "}
                The model is the cheap part. The thinking around it is the work.
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
                This is the question every nonprofit asks first, and the answer
                depends entirely on how the system is built. Five principles shaped
                Klaus:
              </p>
              <ul className="space-y-2 text-sm">
                <li>&middot; <strong className="text-foreground">My data lives in my systems.</strong> Postgres for memory, Google Drive for files, GitHub for code. The AI vendor doesn&rsquo;t store any of it.</li>
                <li>&middot; <strong className="text-foreground">Auditable connections.</strong> Every read and write Klaus does is logged. I can see exactly what was sent and received.</li>
                <li>&middot; <strong className="text-foreground">The AI sees only what I send.</strong> I control what context goes into each conversation. Anything sensitive I don&rsquo;t want shared, doesn&rsquo;t go.</li>
                <li>&middot; <strong className="text-foreground">No client data without consent.</strong> Same rule I&rsquo;d apply to a paper file. Confidential information isn&rsquo;t fed into AI tools without the client&rsquo;s permission.</li>
                <li>&middot; <strong className="text-foreground">Clear AI boundaries.</strong> Klaus drafts; I send. Klaus suggests; I decide. Nothing leaves my computer addressed to a real person without a human review.</li>
              </ul>
              <p>
                This is fundamentally different from pasting donor data into a
                public chatbot window. That approach <em>does</em> send data to a
                third party, and often into model training. A well-designed AI
                assistant doesn&rsquo;t need to.
              </p>
              <p className="text-ochre italic">Safety by design. Trust by default.</p>
            </CardContent>
          </Card>
        </section>

        {/* Broader uses */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">The pattern, applied to nonprofit roles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Even without Klaus&rsquo;s specific architecture, the underlying
                pattern &mdash;{" "}
                <em className="text-foreground">AI on top of YOUR data, scoped to YOUR role, drafting from YOUR context</em>{" "}
                &mdash; applies broadly:
              </p>
              <ul className="space-y-2 text-sm">
                <li>&middot; <strong className="text-foreground">A development director</strong> who can ask her assistant &ldquo;what do we know about this donor&rsquo;s giving history and interests?&rdquo; and get a briefing pulled from the CRM, ready for a call.</li>
                <li>&middot; <strong className="text-foreground">An executive director</strong> who dictates notes after a board meeting and has them automatically organized, stored, and linked to the relevant strategic plan items.</li>
                <li>&middot; <strong className="text-foreground">A program manager</strong> who can ask for a summary of all the outcome data collected this quarter, drafted in the format needed for the funder report.</li>
                <li>&middot; <strong className="text-foreground">A communications lead</strong> who drafts grounded in the organization&rsquo;s actual voice and mission, not a generic AI&rsquo;s guess at it.</li>
                <li>&middot; <strong className="text-foreground">An operations lead</strong> with one place to ask &ldquo;what&rsquo;s our policy on&hellip;?&rdquo; across the whole document library.</li>
              </ul>
              <p>
                None of this requires the organization to replace its existing
                systems. It requires building a thin layer of AI on top of what
                already exists.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Next steps */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">What&rsquo;s next</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Klaus is at the start of a longer arc, not the finish line.</p>
              <ul className="space-y-3 text-sm">
                <li><strong className="text-foreground">More outreach formats.</strong> The webinars, workshops, and chatbots I&rsquo;m building for nonprofits are all built on top of Klaus. Each new format teaches me something I feed back in.</li>
                <li><strong className="text-foreground">Open-sourcing the pattern.</strong> What I&rsquo;ve built isn&rsquo;t proprietary. Over the coming year I&rsquo;m working toward making this something other nonprofits (or technical leads at one) can adapt for their own work, without having to start from scratch.</li>
              </ul>
              <p>
                Building something like this for a nonprofit isn&rsquo;t a weekend
                project, but it&rsquo;s also not a multi-year enterprise software
                implementation. With the right technical partner, a useful first
                version can be operational in a few weeks &mdash; starting with the
                area where staff lose the most time to repetitive, information-management
                work.
              </p>
              <p className="text-ochre italic">The AI is the easy part. The thinking around it is the work.</p>
            </CardContent>
          </Card>
        </section>

        {/* Lessons */}
        <section className="mb-12">
          <Card className="border-hairline bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl">What we&rsquo;d tell another organization considering this</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-inside list-decimal space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Live it before you teach it.</strong> If you&rsquo;re advising others on AI, build something small for yourself first. The lessons that translate are the ones that survive contact with real work.</li>
                <li><strong className="text-foreground">Find the time-sink first.</strong> &ldquo;Where can we use AI?&rdquo; is the wrong question. &ldquo;Where are we losing time on important-but-low-judgment work?&rdquo; is the right one.</li>
                <li><strong className="text-foreground">Keep your data in your systems.</strong> Anything important should live where you control it. AI is the engine, not the storage.</li>
                <li><strong className="text-foreground">Build for one role first.</strong> A general-purpose assistant for everyone is harder than a focused one for the development director. Start narrow.</li>
                <li><strong className="text-foreground">Make every AI action reviewable.</strong> Drafts, not sends. Suggestions, not decisions. At least until trust is earned.</li>
                <li><strong className="text-foreground">Plan to maintain it.</strong> AI assistants drift. Knowledge bases go stale. The system improves only if you keep working on it.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
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
