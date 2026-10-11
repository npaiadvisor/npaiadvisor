# NPAIAdvisor - Claude Guide

@/home/brian/workspace/development/klaus/.claude/home/protocols/security-preamble.md

---

## ⚠️ Use Web Interface (Not Android App)

**Required for**: GitHub file access, MCP tools, strategic planning

**Decision**: Web interface for planning → CLI for implementation

---

## Project Overview

**Three Related Directories**:
1. `/home/brian/workspace/development/npaiadvisor/npaiadvisor` - Website (Next.js)
2. `/home/brian/workspace/workflows/npaiadvisor-strategy` - Strategic docs
3. n8n workflows - ARCHIVED 2026-07 (historical JSON only); retired with their `workflows/personal` repo to `/home/brian/obsolete/n8n-brian-workflows/npaiadvisor/` on 2026-10-11

**GitHub Access** (web interface):
```
web_fetch: https://raw.githubusercontent.com/briangflett/npaiadvisor/main/[file]
web_fetch: https://raw.githubusercontent.com/briangflett/npaiadvisor-strategy/main/[file]
```

---

## Working Principles

1. **Read files first** - Check all 3 directories before changes
2. **Strategy alignment** - Read strategy docs before coding
3. **Simple changes** - Minimal, focused modifications
4. **Use proper tools** - `view`/`web_fetch` for reading, `str_replace` for editing

---

## Tech Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui
- **Package manager**: pnpm (not npm!)
- **Deployment**: Vercel at npaiadvisor.com
- **Local dev port**: 3002

```bash
pnpm install            # Install dependencies
pnpm run dev -p 3002    # Dev server on port 3002
pnpm run build          # Production build
```

---

## Key Files

**Strategy docs** (read before content changes):
- `/home/brian/workspace/workflows/npaiadvisor-strategy/docs/STRATEGY.md`
- `/home/brian/workspace/workflows/npaiadvisor-strategy/docs/COLLABORATION_MODEL.md`
- `/home/brian/workspace/workflows/npaiadvisor-strategy/docs/AI_ADOPTION_FRAMEWORK.md`

**Website**:
- `/home/brian/workspace/development/npaiadvisor/npaiadvisor/README.md`
- `/home/brian/workspace/development/npaiadvisor/npaiadvisor/app/*/page.tsx`

---

## Design Principles

- Minimal portfolio (not selling services)
- No pricing, no "hire me" CTAs
- Technical peer-to-peer tone
- Collaboration-oriented
- Strategy before implementation

---

## Session Lifecycle

- **Start**: `/bootstrap` when you want the work landscape (reviews pending handoffs and priorities; not a context loader)
- **End**: `/wrapup` (logs summary to Postgres, handles handoffs, checks git)

This is a **public repo** — no internal infrastructure details, workflow IDs, or credentials here. Klaus capabilities are provided via the globally available `bootstrap` and `wrapup` skills.

---

**Last Updated**: 2026-10-11