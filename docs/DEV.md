# Development Guide

## Lovable Compatibility Notes

### Tech Stack (must match Lovable's default template)

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | React 18 | Component-based, Lovable's default |
| Language | TypeScript | Strict mode recommended |
| Build tool | Vite | Lovable uses vite_react_shadcn_ts template |
| Styling | Tailwind CSS | Utility-first, matches Lovable's generation |
| UI Components | shadcn/ui (Radix UI) | Lovable generates shadcn components by default |
| Routing | React Router v6 | Standard for Lovable SPA apps |
| State | React hooks (useState/useContext) | Keep simple for Lovable compatibility |

### Lovable Template Setup

When importing this repo into Lovable:
1. Select template: `vite_react_shadcn_ts`
2. Lovable reads existing component structure and extends it
3. All shadcn components must follow the standard import path: `@/components/ui/`
4. Use `cn()` utility from `@/lib/utils` for conditional classNames

### File Structure (Lovable-compatible)

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (auto-generated)
│   ├── sections/        # Page sections (Hero, Stats, Why, etc.)
│   └── layout/          # Header, Footer
├── data/
│   ├── employees.ts     # Employee data array
│   └── cases.ts         # Case study data array
├── pages/
│   ├── Index.tsx        # Homepage (/)
│   ├── Employees.tsx    # /employees
│   └── NotFound.tsx     # 404
├── lib/
│   └── utils.ts         # cn() utility (shadcn standard)
├── App.tsx              # Router setup
└── main.tsx             # Entry point
```

### Recommended shadcn/ui Components to Use

```bash
# Install these components (Lovable has these pre-installed)
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add separator
```

### Design System Variables (put in globals.css)

```css
:root {
  --bg-primary: #09090b;
  --bg-secondary: #111113;
  --bg-card: #1a1a1d;
  --border: #2a2a2e;
  --text-primary: #ffffff;
  --text-muted: #a1a1aa;
  --accent-green: #00ff88;
  --accent-orange: #FF6B35;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Color Theme Choice
- Option A: Green accent (#00ff88) — matches finbench.when2buy.ai brand
- Option B: Orange accent (#FF6B35) — matches master bot theme
- **Recommendation: Green** — more "tech/finance" feel, consistent with finbench

---

## Development Phases

### Phase 1 — Content MVP (current)
- [x] All copy written in /content/*.md
- [ ] Data files: employees.ts, cases.ts
- [ ] Homepage sections as React components
- [ ] Deploy on Lovable → aitist.ai

### Phase 2 — Employee Directory
- [ ] /employees full page
- [ ] Category filter tabs
- [ ] Individual employee detail pages /employees/[slug]

### Phase 3 — Sub-pages
- [ ] /finance
- [ ] /marketing
- [ ] /engineering
- [ ] /pricing (full page)
- [ ] /about

### Phase 4 — Conversion
- [ ] Waitlist form (Resend integration)
- [ ] Demo booking (Calendly)
- [ ] Analytics (PostHog)

---

## Content → Component Mapping

| Content File | React Component |
|-------------|-----------------|
| 01-hero.md | src/components/sections/Hero.tsx |
| 02-stats.md | src/components/sections/Stats.tsx |
| 03-why-aitist.md | src/components/sections/WhyAitist.tsx |
| 04-employees.md | src/components/sections/EmployeesTeaser.tsx |
| 05-case-studies.md | src/components/sections/CaseStudies.tsx |
| 06-tech-architecture.md | src/components/sections/TechArch.tsx |
| 07-pricing.md | src/components/sections/Pricing.tsx |
| 08-footer.md | src/components/layout/Footer.tsx |
| 09-employees-page.md | src/pages/Employees.tsx |

---

## Lovable Launch Checklist

- [ ] Repo connected to Lovable
- [ ] Template set to `vite_react_shadcn_ts`
- [ ] All shadcn components imported correctly
- [ ] Tailwind config has custom colors
- [ ] React Router set up for SPA routing
- [ ] Mobile responsive (all sections use responsive classes)
- [ ] OG image set (1200x630, dark bg, "Jobs Done." text)
- [ ] Meta tags: title, description, og:image
- [ ] Domain: aitist.ai → Cloudflare Pages or Lovable deploy
