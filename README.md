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

## Repo Structure

```
aitist-website/
├── content/              # All website copy in Markdown (review here first)
│   ├── 01-hero.md
│   ├── 02-stats.md
│   ├── 03-why-aitist.md
│   ├── 04-employees.md
│   ├── 05-case-studies.md
│   ├── 06-tech-architecture.md
│   ├── 07-pricing.md
│   └── 08-footer.md
├── src/
│   ├── components/       # React components (one per section)
│   ├── data/             # Structured data (employees, cases)
│   └── pages/            # Page routes
├── docs/
│   └── DEV.md            # Development guide & Lovable setup notes
└── README.md
```

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
