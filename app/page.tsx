import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/brian-headshot.jpg"
              alt="Brian Flett"
              width={120}
              height={120}
              priority
              className="h-28 w-28 rounded-full object-cover ring-1 ring-hairline sm:h-32 sm:w-32"
            />
          </div>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            AI Agents for Nonprofits
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Practical AI agents built with{" "}
            <span className="text-ochre italic">small to mid sized nonprofits</span>{" "}
            to amplify the work they were always going to do anyway.
          </p>
        </div>

        {/* Two-Choice Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Link href="/nonprofits" className="group">
            <Card className="h-full border-hairline bg-card transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">For Nonprofits</CardTitle>
                <CardDescription className="text-base">
                  What AI agents can do for your organization &mdash; and what they can&rsquo;t.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-8 space-y-2 text-sm text-muted-foreground">
                  <li>&middot; What AI can actually do for nonprofits</li>
                  <li>&middot; Real examples from real engagements</li>
                  <li>&middot; Honest framing of cost, time, and limits</li>
                  <li>&middot; Practical entry points by use case</li>
                </ul>
                <Button className="w-full">
                  For Nonprofits
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/ai-engineers" className="group">
            <Card className="h-full border-hairline bg-card transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">For AI Engineers</CardTitle>
                <CardDescription className="text-base">
                  A small network of tech professionals building AI automation for nonprofits.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-8 space-y-2 text-sm text-muted-foreground">
                  <li>&middot; Collaborate with peers building similar things</li>
                  <li>&middot; Share AI agent and n8n automation patterns</li>
                  <li>&middot; Learn while building real solutions</li>
                  <li>&middot; Informal monthly knowledge sharing</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Join the Network
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-20 text-center">
          <p className="mb-4 text-sm text-muted-foreground">Or explore directly:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/projects">
              <Button variant="ghost" size="sm">
                Projects
              </Button>
            </Link>
            <Link href="/tech-stack">
              <Button variant="ghost" size="sm">
                Tech Stack
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="sm">
                About Brian
              </Button>
            </Link>
            <Link href="/mas-ai">
              <Button variant="ghost" size="sm">
                MAS AI
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
