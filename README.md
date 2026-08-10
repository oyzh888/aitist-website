# aitist.ai — Official Website

> AI employees that get work done. 24/7.

## Overview

This repo contains the full source and content for [aitist.ai](https://aitist.ai).

**Tech Stack** (Lovable-compatible):
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- shadcn/ui (Radix UI components)
- Lovable template: `vite_react_shadcn_ts`

## Start here

| I want to… | Go to |
|-----------|-------|
| **Read/edit the copy** | [`content/MASTER-COPY.md`](./content/MASTER-COPY.md) — every word on the site, one file |
| **See what needs deciding** | [`content/COPY-DIFF-v1-v2.md`](./content/COPY-DIFF-v1-v2.md) — v1 vs v2 conflicts |
| **Understand the redesign** | [`design/DIRECTIONS.md`](./design/DIRECTIONS.md) — three options, pick one |

## Repo Structure

```
aitist-website/
├── content/                       # All website copy in Markdown (review here first)
│   ├── MASTER-COPY.md             # ⭐ SOURCE OF TRUTH — every string, v1+v2 merged
│   ├── COPY-DIFF-v1-v2.md         # ⭐ conflicts + decisions needed
│   ├── 01-hero.md … 09-employees-page.md   # v1 per-section originals (2026-07-14)
├── design/                        # Redesign working docs (pre-build)
│   ├── DIAGNOSIS.md               # why the current design reads generic
│   ├── DIRECTIONS.md              # 3 committed directions + recommendation
│   └── OPENING.md                 # first screen in detail + full page outline
├── snapshots/
│   └── 2026-08-09-aistudio-export/   # v2 Google AI Studio export (design rejected, copy mined)
├── src/
│   ├── components/       # React components (one per section)
│   ├── data/             # Structured data (employees, cases)
│   └── pages/            # Page routes
├── docs/
│   └── DEV.md            # Development guide & Lovable setup notes
└── README.md
```

## Copy versions

Two generations of copy exist. **v1** (`content/01-…09-*.md`, `src/data/*.ts`) has the real
agents, real metrics, and the OpenClaw architecture story. **v2** (the AI Studio export in
`snapshots/`) has better information architecture — nav, About, Careers, Legal, How-it-works —
but genericized the substance.

**Rebuild rule: v2's structure, v1's words.** Both are reconciled in `content/MASTER-COPY.md`.

## Development

### Option A — Lovable (recommended for first launch)
1. Go to [lovable.dev](https://lovable.dev)
2. Connect this GitHub repo
3. Select template: `vite_react_shadcn_ts`
4. Lovable will generate UI from the content/ Markdown files

### Option B — Local dev
```bash
npm install
npm run dev
```

## Content Review Workflow

All copy is in `/content/*.md`. Review and edit Markdown first.
Once copy is approved, code implementation follows.

---

*Built by Aitist, Inc. | Oakland, CA*
