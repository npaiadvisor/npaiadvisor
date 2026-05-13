import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

export default function AllardPrizePage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
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
            Allard Prize Donor Outreach
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            An AI agent that watches a list and recommends when to act &mdash; built
            for a foundation promoting global integrity and anti-corruption work.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["n8n", "Claude API", "SendGrid", "Google Sheets", "Next.js + Postgres"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">The Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The Allard Prize for International Integrity needed to identify and
                engage potential donors aligned with their mission of promoting
                global integrity and anti-corruption work.
              </p>
              <p>
                Manual monitoring of news sources, social media, and email was
                time-consuming and inconsistent. The organisation needed an
                automated system that could:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Monitor multiple information sources continuously</li>
                <li>Identify prospects with relevant interests and capacity</li>
                <li>Draft personalised outreach recommendations</li>
                <li>Track all interactions for the development team</li>
                <li>Scale without adding significant manual workload</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">The Solution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                A comprehensive n8n workflow with Claude as the relevance-scoring
                brain &mdash; an agent that runs on a schedule, watches the world for
                prospects matching the foundation&rsquo;s criteria, and surfaces only
                the few names worth attention each week.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    1. Automated data collection
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Daily RSS feed monitoring captures relevant news and updates.
                    LinkedIn scraping identifies prospect activities and interests.
                    Email capture workflow processes incoming communications
                    automatically.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    2. AI-powered analysis
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Claude evaluates each data point for relevance to the Allard
                    Prize mission, assesses donor-capacity indicators, and drafts
                    personalised touchpoint recommendations based on prospect
                    interests and engagement patterns.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    3. Data tracking & reporting
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All prospect data and AI insights sync to Google Sheets,
                    maintaining a single view of each donor relationship with
                    flexible tracking and reporting for the development team.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    4. Workflow architecture
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>&middot; <strong className="text-foreground">update-rss-results.json</strong> &mdash; daily RSS monitoring + processing</li>
                    <li>&middot; <strong className="text-foreground">capture-ap-emails.json</strong> &mdash; email capture and analysis</li>
                    <li>&middot; <strong className="text-foreground">capture-linkedin-posts.json</strong> &mdash; LinkedIn activity scraping</li>
                    <li>&middot; <strong className="text-foreground">ap-donor-outreach.json</strong> &mdash; weekly AI analysis and touchpoint generation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    Core Platform
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>&middot; <strong className="text-foreground">n8n</strong> &mdash; self-hosted workflow automation</li>
                    <li>&middot; <strong className="text-foreground">Claude API</strong> &mdash; natural language analysis and scoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
                    Integrations
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>&middot; <strong className="text-foreground">SendGrid</strong> &mdash; email delivery infrastructure</li>
                    <li>&middot; <strong className="text-foreground">Google Sheets</strong> &mdash; data tracking and reporting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Results */}
        <section className="mb-12">
          <Card className="border-hairline">
            <CardHeader>
              <CardTitle className="text-2xl">Results & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>&middot; Automated daily monitoring of 50+ RSS feeds</li>
                <li>&middot; AI-drafted outreach recommendations for high-value prospects</li>
                <li>&middot; Single source of truth in Google Sheets for donor tracking</li>
                <li>&middot; Significant reduction in manual research time</li>
                <li>&middot; A scalable foundation that grows with the organisation</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://allardprize.org"
            target="_blank"
            rel="noopener noreferrer"
          >
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
        </div>
      </div>
    </div>
  )
}
