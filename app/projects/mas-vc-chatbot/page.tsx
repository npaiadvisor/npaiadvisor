import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

export default function MasVcChatbotPage() {
  return (
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
            How MAS gave 100 volunteer consultants their own AI assistant &mdash; without giving them new tools to learn
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            A research and lookup partner grounded in MAS&rsquo;s own data and
            scoped to who each volunteer is. Built into the VC Portal volunteers
            already log into.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["n8n", "Claude", "pgvector", "CiviCRM", "WordPress"].map((tag) => (
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
                MAS is a Canadian charity that runs on donated time. About a
                hundred senior business volunteers &mdash; VCs &mdash; give hours
                that don&rsquo;t get billed, helping small nonprofits with strategic
                planning, fundraising, governance, communications, and operations.
                In a charity built on donated time, every minute lost to wrestling
                with bad tools is a minute <em>not</em> spent advising the client.
              </p>
              <p>
                The volunteer consultants at MAS were spending real time hunting
                through CiviCRM, SharePoint, the Resource Library, and
                masadvise.org for client history, process docs, and policies. New
                volunteers struggled most &mdash; without a single place to ask,
                ramp-up was measured in months. And there was a meta-problem: MAS
                advises nonprofits on how to adopt AI; doing that credibly meant
                MAS had to use AI itself.
              </p>
              <p>
                So we built the volunteer consultants an AI assistant. But we did
                it carefully: mapped where time was actually being lost, constrained
                what the AI could see, and tested on a small group of trusted users
                before announcing. This is the story of that build, told plainly.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* About MAS */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Who is MAS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Management Advisory Service (MAS) is a Canadian charity that
                connects senior business volunteers &mdash; about a hundred of them
                &mdash; with small nonprofits that can&rsquo;t afford management
                consulting. The volunteers help with strategic planning, fundraising,
                governance, communications, and operations. Clients pay a modest fee.
                The volunteers donate their time.
              </p>
              <p>
                Three pillars hold MAS up:{" "}
                <strong className="text-foreground">the volunteer consultants (VCs)</strong>{" "}
                themselves, <strong className="text-foreground">the nonprofit clients</strong>{" "}
                they serve, and{" "}
                <strong className="text-foreground">the shared platform</strong>{" "}
                &mdash; masadvise.org &mdash; that connects them. The chatbot lives
                on that platform, in a portal called the <strong className="text-foreground">VC Portal</strong>{" "}
                that VCs already log into.
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
                The first principle of the project was the same one Preet used for
                Allard Prize:{" "}
                <em className="text-foreground">we didn&rsquo;t start with AI.</em>{" "}
                We started with where time was being lost. Five steps:
              </p>
              <ol className="list-inside list-decimal space-y-2">
                <li><strong className="text-foreground">Map what a VC actually does</strong> on a typical engagement &mdash; intake, client research, deliverables, handoff.</li>
                <li><strong className="text-foreground">Identify where they lose time</strong> &mdash; hunting for case history in CiviCRM, finding the right MAS process doc on SharePoint, looking up policies on the website, asking the same questions in volunteer Slack channels week after week.</li>
                <li><strong className="text-foreground">Prioritize the painful, low-judgment work</strong> &mdash; the lookups, the formatting, the &ldquo;remind me what we said about X.&rdquo;</li>
                <li><strong className="text-foreground">Name the immediate need</strong> &mdash; give VCs one place to ask, with answers grounded in MAS&rsquo;s own information.</li>
                <li><strong className="text-foreground">Then, and only then, ask how AI could help.</strong></li>
              </ol>
              <p>
                Note what&rsquo;s missing from that list: AI was not in step 1, step 2,
                or step 3. It only entered after we knew exactly what problem we were
                trying to solve.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What we built */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">What we built &mdash; a volunteer consultant assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                The system has three parts: <strong className="text-foreground">inputs, processing, and outputs.</strong>
              </p>

              <figure className="my-2">
                <Image
                  src="/case-studies/mas-vc-solution.jpeg"
                  alt="Diagram of the MAS VC Chatbot: CiviCRM and knowledge inputs feed an AI agent that answers VC questions with citations"
                  width={1200}
                  height={675}
                  className="w-full rounded-lg border border-hairline"
                />
              </figure>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Inputs
                </h3>
                <p className="mb-3">The chatbot draws from three kinds of source:</p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">MAS data (CiviCRM)</strong> &mdash; contacts, cases, who-worked-with-whom, project history</li>
                  <li>&middot; <strong className="text-foreground">MAS knowledge</strong> &mdash; SharePoint VC Support Centre, Resource Library, masadvise.org content, Google Drive PDFs</li>
                  <li>&middot; <strong className="text-foreground">External knowledge</strong> &mdash; nonprofit-AI guidance from ai.ccndr.ca, used to answer &ldquo;how could AI help my client?&rdquo;</li>
                </ul>
                <p className="mt-3 text-sm">
                  The CRM access is <strong className="text-foreground">read-only</strong>.
                  The chatbot cannot edit, delete, or create CiviCRM records. It also
                  enforces a per-VC scope: each VC sees only the cases they&rsquo;re
                  working on, plus unassigned projects available for them to take.
                  The AI doesn&rsquo;t decide that &mdash; a rule does, sitting between
                  the AI and the data.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Processing
                </h3>
                <p className="mb-3">
                  When a VC types a question, an AI agent picks the right tool for
                  the job: a CRM lookup, a knowledge-base search, a web search of
                  the client&rsquo;s site. It gathers the results and writes a plain-English
                  answer with the sources visible. The VC can click through to verify
                  any claim.
                </p>
                <p className="mb-3 text-sm">The agent is built around a few constraints:</p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">Tools, not free-form access.</strong> The AI doesn&rsquo;t write database queries &mdash; it calls a small set of named tools that the rules can audit.</li>
                  <li>&middot; <strong className="text-foreground">Scoped data, every time.</strong> No matter how a question is phrased, the per-VC scope filter is applied before any data leaves CiviCRM.</li>
                  <li>&middot; <strong className="text-foreground">Sources visible.</strong> Every answer cites where it came from. If there&rsquo;s no source, the answer says so.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                  Outputs
                </h3>
                <p className="mb-3">The VC gets, depending on what they asked:</p>
                <ul className="space-y-2 text-sm">
                  <li>&middot; <strong className="text-foreground">A direct answer with citations</strong> &mdash; for &ldquo;what&rsquo;s our intake process?&rdquo; or &ldquo;who&rsquo;s worked with this client?&rdquo;</li>
                  <li>&middot; <strong className="text-foreground">A consolidated brief</strong> &mdash; when researching a new client, combining CRM history with information from the client&rsquo;s own website</li>
                  <li>&middot; <strong className="text-foreground">A brainstorming partner</strong> &mdash; for &ldquo;how should I approach this engagement?&rdquo; or &ldquo;what could AI do for this client&rsquo;s work?&rdquo;</li>
                </ul>
                <p className="mt-3 text-sm">
                  What it does <em>not</em> output: messages sent on a VC&rsquo;s
                  behalf, edits to MAS records, or recommendations the VC
                  didn&rsquo;t ask for. The chatbot is a research and drafting
                  partner, not an autonomous agent.
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
                After several weeks of running the system with a small group of VCs,
                three benefits stand out &mdash; observed on the user side, expected
                on the organizational side:
              </p>
              <ul className="space-y-3">
                <li><strong className="text-foreground">More advisory hours per donated VC hour.</strong> Less time hunting context, more time on the client&rsquo;s problem. In a charity where capacity is volunteer time, that&rsquo;s the metric that matters.</li>
                <li><strong className="text-foreground">New VCs ramp up in weeks, not months.</strong> The chatbot answers the questions a senior VC used to field over Slack. Senior VCs get their time back, and new VCs become effective faster.</li>
                <li><strong className="text-foreground">AI credibility &mdash; earned, not claimed.</strong> When MAS advises a nonprofit on adopting AI, it now points to a tool MAS uses every day.</li>
              </ul>
              <p>
                Notice what&rsquo;s <em>not</em> on this list: replacing the
                VC&rsquo;s judgment, automating client communications, or
                eliminating MAS staff roles. The system is a research and drafting
                layer, not an oracle.
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
                  <dd className="mt-1 text-sm">Mostly upfront &mdash; defining what should and shouldn&rsquo;t be in scope, ingesting and structuring the knowledge base, iterating on what the AI is allowed to do. Ongoing: monitoring feedback and tuning.</dd>
                </div>
                <div>
                  <dt className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Money</dt>
                  <dd className="mt-1 text-sm">Single-digit dollars per VC per month for AI calls. No new enterprise software. The chatbot lives on the same WordPress site MAS already runs.</dd>
                </div>
                <div>
                  <dt className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Maintenance</dt>
                  <dd className="mt-1 text-sm">Refreshing the knowledge base when MAS documents change. Tightening the rules when the AI gets something wrong. Watching the thumbs-up / thumbs-down feedback.</dd>
                </div>
              </dl>
              <p className="pt-2">
                The honest summary:{" "}
                <em className="text-foreground">AI is not plug-and-play. It requires intentional design and ongoing calibration.</em>{" "}
                The model is the cheap part. The work is in the scoping, the data,
                and the calibration.
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
                This is the question every nonprofit asks first, and rightly so. CRM
                data &mdash; even just contact and case data &mdash; is a position
                of trust. Five principles shaped how the system handles it:
              </p>
              <ul className="space-y-2 text-sm">
                <li>&middot; <strong className="text-foreground">Read-only access.</strong> The chatbot cannot modify a single CiviCRM record. Anything that needs to change still goes through MAS staff.</li>
                <li>&middot; <strong className="text-foreground">Scoped by user.</strong> Each VC only sees what they&rsquo;re permitted to see &mdash; their own cases plus unassigned projects. The scope is enforced in infrastructure, not just in the AI&rsquo;s prompt.</li>
                <li>&middot; <strong className="text-foreground">Public or controlled inputs.</strong> The knowledge base is built from MAS-owned documents and the public MAS website. No sensitive client data is ingested into the AI&rsquo;s memory.</li>
                <li>&middot; <strong className="text-foreground">Review before action.</strong> Drafts and recommendations are starting points for a human, not finished outputs. The chatbot doesn&rsquo;t email anyone.</li>
                <li>&middot; <strong className="text-foreground">Documented AI policy.</strong> What the chatbot can and can&rsquo;t do is written down, so trust isn&rsquo;t dependent on any one person remembering it.</li>
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
                <em className="text-foreground">give a defined audience a single place to ask, grounded in your own data, scoped by who they are</em>{" "}
                &mdash; generalizes well beyond volunteer consultants. Other places it could fit:
              </p>
              <ul className="space-y-2 text-sm">
                <li>&middot; <strong className="text-foreground">A client-facing chatbot</strong> for a nonprofit&rsquo;s public website, helping prospective clients understand what the org does and how to engage.</li>
                <li>&middot; <strong className="text-foreground">A board portal assistant</strong> for member directors, surfacing meeting history, policies, and decisions.</li>
                <li>&middot; <strong className="text-foreground">A donor or member assistant</strong> for any nonprofit using CiviCRM &mdash; &ldquo;what&rsquo;s the giving history of this household?&rdquo; or &ldquo;which volunteers have done this kind of project before?&rdquo;</li>
                <li>&middot; <strong className="text-foreground">Onboarding support</strong> for new volunteers, walking them through orientation interactively.</li>
                <li>&middot; <strong className="text-foreground">Process search</strong> across any document library larger than people can hold in their heads.</li>
              </ul>
              <p>The MAS VC chatbot is one application of this pattern. Most mid-sized nonprofits have at least three.</p>
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
              <p>The system is live with a small group of trusted VCs. The road ahead has two stages:</p>
              <ul className="space-y-2 text-sm">
                <li>&middot; <strong className="text-foreground">Soft launch</strong> with 30 VCs from the VC Portal, with structured feedback collection so we can see exactly which questions the chatbot handles well and which need more work.</li>
                <li>&middot; <strong className="text-foreground">Refine and expand</strong> &mdash; better client-research tools, VC-client skills matching, persistent conversation history, and eventually a public client-facing chatbot built on what we learn here.</li>
              </ul>
              <p className="text-ochre italic">Start narrow. Earn trust. Then widen.</p>
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
                <li><strong className="text-foreground">Find the time-sink first.</strong> Don&rsquo;t ask &ldquo;where can we use AI?&rdquo; Ask &ldquo;where are we losing time on work that&rsquo;s important but low-judgment?&rdquo; The answer is your starting point.</li>
                <li><strong className="text-foreground">Constrain the data before constraining the AI.</strong> A read-only, per-user-scoped data layer is worth more than any prompt-engineering trick.</li>
                <li><strong className="text-foreground">Build for one audience first.</strong> A chatbot for &ldquo;everyone at the nonprofit&rdquo; is harder to design than one for &ldquo;the 30 volunteer consultants who use the portal.&rdquo;</li>
                <li><strong className="text-foreground">Make the sources visible.</strong> If the AI can&rsquo;t cite where its answer came from, the user shouldn&rsquo;t trust it. Neither should you.</li>
                <li><strong className="text-foreground">Plan to maintain it.</strong> A chatbot grounded in your knowledge base is only as good as the knowledge base. Plan the upkeep before launch.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          <a href="https://masadvise.org" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <ExternalLink className="h-4 w-4" />
              About MAS
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
  )
}
