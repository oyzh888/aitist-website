# Why the current design reads generic

Before proposing directions, here's the specific diagnosis. "土" is not vague — it's a
list of identifiable decisions. Every item below is a concrete thing in the v2 export.

## The five tells

### 1. Stock photography as a stand-in for the product
`Workflow.tsx:74` — the "System Architecture" showcase is `picsum.photos/seed/workflow?blur=2`.
A **randomly generated blurred image** labelled *Autonomous Execution Engine*.
`CaseStudies.tsx:8,14` — two hotlinked Unsplash photos, desaturated on hover.

> A company that sells software should show software. Every premium technical site in
> 2026 (Vercel, Linear, Cursor, Anthropic) shows **UI, data, or nothing** — never a
> desaturated photo of a person at a laptop. Stock photography is the fastest possible
> signal that there's nothing real to show.

### 2. Emerald-500 on zinc-950
`bg-[#09090b]` + `emerald-500` + `zinc-800` borders is the **shadcn/ui default dark theme**,
unmodified. It is the single most-used palette on the internet in 2024–2026. It doesn't
look bad — it looks like a template, because it is one.

Compounding it: emerald is *also* used for success/positive states (`PERFORMANCE: OPTIMAL`,
checkmarks, uptime). When the brand color and the "everything's fine" color are the same
color, neither carries meaning.

### 3. The italic serif accent word
`Jobs `**`Done.`** and `Meet your new `**`colleagues`** — accent-colored, italic, serif,
inside a bold sans headline (`Hero.tsx:57`, `EmployeesTeaser.tsx:65`).

This device peaked around 2023 and is now the strongest visual marker of an
AI-generated landing page. It signals "designed by prompt."

### 4. Everything fades up 20px
Nine separate `initial={{ opacity: 0, y: 20 }} + delay: index * 0.1` blocks. Every
section, every card, identical easing, identical distance.

> Uniform entrance animation is decoration, not communication. It says "this is a
> marketing page" on every scroll. Premium motion moves **data**, not layout.

### 5. Fabricated precision
`98%` efficiency, `$4.2k/mo` savings, `1,240+` tasks, and a sparkline fed by
`[40, 30, 65, 45, 80, 55, 90]` hardcoded in the component (`EmployeesTeaser.tsx:6-14`).

Fake dashboards are worse than no dashboards. A buyer who has ever looked at a real
agent metric will spot it in two seconds, and then distrusts the rest of the page —
including the parts that are true.

## The structural problem underneath

The v2 rewrite made the site **look** like more of a company and **read** like less of one.
It added About/Careers/Legal/nav (good) while deleting the two sections that actually
proved technical depth — the OpenClaw architecture section and the security grid — and
replacing five case studies carrying real metrics with two carrying invented ones.

**The design isn't the main problem. The design is generic because the content was
genericized first.** Any redesign that starts from v2's copy will land in the same place,
prettier.

→ Fix order: restore v1's substance (see `content/COPY-DIFF-v1-v2.md` §B) → then redesign.

## What "高级" actually means for this category

Not more effects. Three things:

1. **Restraint** — one accent, one typeface pairing, one motion idea, executed exactly.
   Expensive design is defined by what's absent.
2. **Specificity** — real numbers, real product surfaces, real agent names. Nothing that
   could be swapped into a competitor's site without editing.
3. **Craft in one place** — a single bespoke element (a live trace, a real dashboard,
   a custom shader) done extremely well, surrounded by quiet. Not eight decorated sections.

Aitist has an unfair advantage here that nobody used: **the product produces artifacts and
telemetry continuously.** Real agent traces, real schedules, real delivered reports. That
is the design material. It's already in `oyzh888/aitist-data-vault` and the agent fleet.
