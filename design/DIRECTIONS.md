# Three directions — pick one before we write anything

Read [`DIAGNOSIS.md`](./DIAGNOSIS.md) first. Each direction below is a complete, committed
position: mood, references, palette, type, motion, hero, and what it costs. They are
deliberately **not** compatible — the whole point is to choose.

My recommendation is **A**, with B's typographic discipline. Reasoning at the bottom.

---

## Direction A — "Operator Console"
### The site *is* the product surface

**Thesis:** stop describing autonomous agents and show them running. The homepage is a
live console: real traces, real timestamps, real delivered artifacts. Premium via
authenticity — nobody can copy this without also having a working fleet.

**References:** Vercel dashboard · Linear changelog · Warp · Railway · Val Town · Modal · Baseten

**Palette** — one accent, semantic colors reserved for telemetry only
| Token | Value | Use |
|-------|-------|-----|
| `bg` | `#08090A` | page |
| `surface` | `#101113` | cards, console chrome |
| `line` | `#1E2024` | 1px rules — visible, structural, not decorative |
| `text` | `#F4F5F6` | primary |
| `muted` | `#8B9096` | secondary |
| `accent` | `#C6F24E` electric lime | CTA, active state, cursor. **Once per viewport.** |
| `signal.ok / warn / err` | `#3DDC84` / `#F5B942` / `#FF5C5C` | telemetry **only** — never brand |

Lime instead of emerald is deliberate: it exits the shadcn default, and it frees green for
"success" so the two stop colliding.

**Type**
- Structure & data: **Berkeley Mono** (or JetBrains Mono / Geist Mono) — labels, metrics, traces, timestamps, tabular figures
- Prose: **Inter Tight** or **Söhne** — headlines at `-0.03em` tracking, `0.95` line-height
- **No serif anywhere. No italics.** Emphasis comes from weight, size, and color.

**Motion** — layout never moves; data does
- Log lines stream in at a real cadence (~120ms/line, not instant)
- Counters tick with monospace tabular figures, no layout shift
- Agent DAG nodes pulse when active, dim when idle
- Scroll reveals: opacity only, 150ms, no translate. Kill all `y: 20`.
- One exception: hero trace types out on load, once.

**Hero:** split. Left — headline + sub + CTA, quiet. Right — a **real agent trace**, streaming:

```
14:02:07  agent.market-signal-tracker    ● running
14:02:07  → scan  earnings · macro · kol-positions
14:02:11  ✓ 512 signals ingested
14:02:14  → rank  by portfolio relevance
14:02:19  ✓ digest composed          2.4kb
14:02:19  → deliver  telegram://ops   ✓ sent
          ─────────────────────────────────
          done in 12s · no human in the loop
```

**Costs:** needs real trace data (even a curated recording). Highest content requirement,
lowest design risk. Ages well — it's a category convention for infra companies.

**Risk:** if it can't be fed real data, it becomes the same fake dashboard problem in nicer
clothes. Non-negotiable: the traces must be **real recordings**, clearly labelled as such.

---

## Direction B — "Instrument"
### Swiss-technical, light mode, exposed grid

**Thesis:** the entire AI category is dark-mode-with-a-glow. Going **light, editorial, and
severe** is the strongest available differentiator, and it reads as institutional rather
than as a startup. Looks like the manual for a scientific instrument.

**References:** Anthropic's own site · Stripe Press · Teenage Engineering · Braun / Dieter Rams · Rauno Freiberg · Cartesia · Nothing

**Palette**
| Token | Value | Use |
|-------|-------|-----|
| `bg` | `#F7F6F3` bone | page |
| `ink` | `#111110` | text, rules |
| `muted` | `#6B6A66` | secondary |
| `accent` | `#FF4A18` industrial orange | one element per screen |
| `rule` | `#111110` @ 12% | the visible 12-column grid |

**Type**
- Display: a grotesk with real character — **Söhne Breit**, **GT Alpina**, or **Neue Haas Grotesk Display** — set enormous (`clamp(56px, 9vw, 148px)`), tracking `-0.04em`
- Body: same family, regular, generous `1.55` line-height, `62ch` max measure
- Numbers: **tabular figures everywhere**, oversized. `$400K` set at 96px is the hero of the case-study section.
- Section labels: `01 / OVERVIEW` — mono, 11px, uppercase, wide tracking, sitting on a hairline rule

**Motion** — mechanical, minimal
- Slide-and-snap, `cubic-bezier(.2,0,0,1)`, 220ms. Nothing bounces, nothing fades up.
- Rules draw themselves on scroll (`scaleX` from 0)
- Numbers count with tabular figures
- Total motion budget: under 5 distinct behaviors for the whole site

**Hero:** no image, no console. Full-bleed type on bone, exposed grid rules, one line:

```
01 / AITIST                                    SUNNYVALE, CA

    Most AI
    answers questions.
    Aitist gets
    things done. ───────────────────────────────────────────

    24/7 autonomous AI employees.        [ Get Early Access ]
    On Telegram, Discord, 飞书, Web.     [ Talk to Sales ]
```

**Costs:** demands typographic precision — a 4px error is visible. Needs a licensed display
face (~$200–600) to avoid looking like Helvetica. Light mode means screenshots of your own
dark product UI need framing carefully.

**Risk:** the boldest of the three. If the type isn't perfect it reads as unfinished rather
than austere. Also: some buyers read "light + serious" as slow/enterprise, not as fast.

---

## Direction C — "Signal"
### Cinematic depth, bespoke WebGL

**Thesis:** premium via visible craft. Volumetric depth, a real shader, physically plausible
light. Fully dark, fully atmospheric.

**References:** Cursor · Runway · Framer's own site · Igloo · Rive · Vercel Ship

**Palette:** deep indigo → black vertical field (`#0A0B1A` → `#000`), iridescent accent that
shifts cyan→violet with scroll depth, glass surfaces at 6% white with 1px top-edge highlight.

**Type:** Geist or Inter Display, tight, with mono for data. Type sits *inside* the depth —
letterforms occluded by the field, light spilling across them.

**Motion:** the entire page is one continuous camera move. Scroll = depth traversal.

**Hero:** a WebGL agent swarm — a few hundred nodes drifting, discovering each other, forming
task edges, and resolving into the word **DONE** as the trace completes. Interactive: cursor
perturbs the field.

**Costs:** highest by far. Needs a shader author (~1–2 weeks for something that isn't
generic), a perf budget (mobile fallback to video, `prefers-reduced-motion` path), and
ongoing maintenance.

**Risk:** highest. Generic-glow-blob is the default failure mode, and it lands *exactly*
where you already are — just heavier. Only worth it if the shader is genuinely bespoke and
means something (nodes = agents, edges = delegation, resolution = task completion).

---

## Comparison

| | A — Operator Console | B — Instrument | C — Signal |
|---|---|---|---|
| Differentiation vs category | High | **Highest** | Low |
| Downside risk | **Lowest** | Medium | High |
| Build effort | Medium | Medium | High |
| Content required | **Real traces** | Real numbers | Little |
| Proves product exists | **Directly** | By assertion | Not at all |
| Ages well | Yes | **Yes** | ~18 months |
| Cost | Low | + font license | + shader dev |

## Recommendation

**A as the base, B's typographic discipline, C's depth confined to one moment.**

- **A** because Aitist's actual advantage is a *running fleet*, and the fastest route from
  "sounds like every AI startup" to "these people ship" is showing a real trace with real
  timestamps. It converts the strongest asset into the strongest design element.
- **B's rules** because A executed loosely becomes another dark dashboard site. Steal
  specifically: the 12-column exposed grid, `01 / SECTION` mono labels on hairlines,
  oversized tabular numbers, the 5-behavior motion budget, no serif/no italic.
- **C's depth once** — a single subtle volumetric field behind the hero trace and nowhere
  else. Contained, cheap, and it stops A from reading flat.

**If you want the bolder swing, take B straight.** Light-mode Swiss for an AI-employee
company would be genuinely unmistakable, and it's the only one of the three where someone
screenshots it and asks who designed it. It just has to be perfect.

Once you pick, `OPENING.md` has the first screen drafted in detail.
