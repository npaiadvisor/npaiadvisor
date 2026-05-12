import Link from "next/link"
import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "MAS AI for Nonprofits — NPAIAdvisor",
  description:
    "MAS Advise's AI for Nonprofits landing page, embedded here for reference. The canonical version is hosted at masadvise.org.",
}

export default function MasAiPage() {
  const masUrl = "https://www.masadvise.org/ai?source=npaiadvisor"

  return (
    <div className="flex flex-col">
      <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2 text-sm dark:border-zinc-800 dark:bg-zinc-900 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-zinc-600 dark:text-zinc-400">
          <span>
            Embedded from{" "}
            <a
              href="https://www.masadvise.org/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-900 underline hover:no-underline dark:text-zinc-50"
            >
              masadvise.org/ai
              <ExternalLink className="h-3 w-3" />
            </a>
          </span>
          <Link
            href="/"
            className="text-zinc-900 hover:underline dark:text-zinc-50"
          >
            ← Back to NPAIAdvisor
          </Link>
        </div>
      </div>
      <iframe
        src={masUrl}
        title="MAS AI for Nonprofits (masadvise.org/ai)"
        className="block w-full border-0"
        style={{ height: "calc(100vh - 8rem)" }}
      />
    </div>
  )
}
