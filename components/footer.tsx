import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact form
                </Link>
              </li>
              <li>
                <a
                  href="https://ca.linkedin.com/in/brian-flett-2a43691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/briangflett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">
              Work
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/mas-ai"
                  className="text-muted-foreground hover:text-primary"
                >
                  MAS AI for Nonprofits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">
              Organizations
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://masadvise.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Management Advisory Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-hairline pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Brian Flett. Practical AI agents
            for nonprofits.
          </p>
        </div>
      </div>
    </footer>
  )
}
