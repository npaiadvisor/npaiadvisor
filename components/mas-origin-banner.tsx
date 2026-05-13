"use client"

import { useSearchParams } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"

/**
 * Renders a thin "Reading from masadvise.org" banner when the visitor arrived
 * via a `?source=masadvise` query parameter. The banner provides a clear path
 * back to masadvise.org/ai so MAS visitors landing on these case study pages
 * don't feel orphaned.
 *
 * Wrap usage in <Suspense /> per Next.js useSearchParams() requirement.
 */
export function MasOriginBanner() {
  const searchParams = useSearchParams()
  const source = searchParams.get("source")

  if (source !== "masadvise") {
    return null
  }

  return (
    <div className="border-b border-hairline bg-secondary px-4 py-2 text-sm sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-ochre">
            Reading from masadvise.org
          </span>
        </span>
        <a
          href="https://www.masadvise.org/ai"
          className="inline-flex items-center gap-1 text-primary hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to masadvise.org/ai
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}
