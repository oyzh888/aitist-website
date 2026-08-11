# The opening — first screen, in detail

Drafted for **Direction A + B's discipline** (the recommendation in [`DIRECTIONS.md`](./DIRECTIONS.md)).
If you pick B straight or C, this gets rewritten — that's why we're checking in first.

The first screen carries the whole judgment. Everything below is at the level of detail
we'd need to actually build it.

---

## 1. Headline — five drafts

The current headline is **`Jobs Done.`** It is genuinely good: two words, a period, a pun on
"jobs" (employment / compute job). Keep it unless something below beats it.

| # | Draft | Read |
|---|-------|------|
| **1** | **Jobs Done.** | Current. Confident, short, dual-meaning. The italic serif on "Done." is the problem, not the words — set both words in the same face, color "Done." only. ✅ **Recommended: keep.** |
| 2 | **Most AI answers questions.**<br>**Aitist gets things done.** | v1's contrast structure. Stronger *argument*, weaker *hero* — it's an essay opening, better as section 2. Ideal for Direction B, where big type carries a sentence. |
| 3 | **Hire your first AI employee.** | Most direct, most commercial. Names the transaction. Weakest as a brand line, strongest for conversion. Good A/B candidate. |
| 4 | **You lead. They work.** | Compresses the best sentence on the site (*"humans leading AI workforces"*, About page). Short, ownable, flatters the buyer, has no competitor overlap. **The one contender that could beat #1.** |
| 5 | **Nobody's asking. It's already done.** | Captures proactive scheduling — the actual technical differentiator vs chatbots. Riskier, more memorable. |

**Call:** lead with **`Jobs Done.`**, and place **#4 `You lead. They work.`** as the closing
line above the footer CTA. They bookend well.

### Typographic fix for `Jobs Done.`
```
Jobs Done.
└── Inter Tight / Söhne, weight 600, single face for both words
    clamp(72px, 11vw, 168px) · tracking -0.045em · line-height 0.88
    "Jobs" → #F4F5F6      "Done." → #C6F24E (accent, same weight, same face)
    NO italic. NO serif. NO gradient text.
```
The period stays. It's doing work.

---

## 2. Subheadline

Keep verbatim — it's the load-bearing sentence and it's identical in v1 and v2:

> Not another AI chatbot. Aitist deploys 24/7 AI employees that complete real work
> — for your business, on the channels you already use.

Set at `clamp(17px, 1.35vw, 21px)`, `muted` (#8B9096), `1.5` line-height, max `54ch`,
with `24/7 AI employees` in `text` (#F4F5F6) at the same weight. One emphasis, not three.

---

## 3. Eyebrow — cut it, replace with something true

Current: `● THE FUTURE OF AUTONOMOUS WORK` with a pulsing dot.

Pill + pulsing dot + uppercase abstraction is standard-issue. And a pulsing "live" indicator
attached to a *slogan* is a wasted signal — the dot should indicate something actually live.

**Replacement — a real fleet status line, mono, 11px, on a hairline rule:**
```
● FLEET LIVE   ·   14 AGENTS RUNNING   ·   1,204 TASKS TODAY   ·   UPDATED 14:02 PT
```
Now the pulse means something. Pull from the fleet; if the number is small, that's fine —
specific and small beats vague and big. If it can't be wired to real data, delete the
eyebrow entirely rather than fake it.

---

## 4. CTAs

| Slot | Copy | Target | Style |
|------|------|--------|-------|
| Primary | **Get Early Access** | `/waitlist` (build the route — not mailto) | Solid accent, black text, 6px radius, no shadow, no scale-on-hover. Hover: accent lightens 8%. |
| Secondary | **Talk to Sales** | `/contact` | Ghost, 1px `line` border. **Not "Watch Demo"** — there is no demo. |

Kill `hover:scale-105` and `shadow-emerald-500/20`. Glowing scaling buttons are a tell.
Radius drops from `rounded-2xl` (16px) to 6px — large radii read consumer/friendly, small
radii read technical.

Under the CTAs, restore v1's channel row:
```
WORKS WITH    Telegram    Discord    飞书    Web
```
Mono 11px label, monochrome logos at 60% opacity → 100% on hover. This one row does more
credibility work than the entire stats bar.

---

## 5. The right half — the live trace

This is the bespoke element, the one place craft concentrates. **Everything else on the page
stays quiet so this lands.**

A console panel: `surface` background, 1px `line` border, 6px radius, mono throughout,
window chrome reduced to a single label row.

```
┌─────────────────────────────────────────────────────────────┐
│ market-signal-tracker                    ● running   12s    │
├─────────────────────────────────────────────────────────────┤
│ 14:02:07  scan       earnings · macro · kol-positions       │
│ 14:02:11  ✓ ingest   512 signals                            │
│ 14:02:14  rank       by portfolio relevance                 │
│ 14:02:19  ✓ compose  digest · 2.4 kb                        │
│ 14:02:19  ✓ deliver  telegram://ops                         │
├─────────────────────────────────────────────────────────────┤
│ ✓ delivered · 12s · 0 human interventions                   │
└─────────────────────────────────────────────────────────────┘
                                    ↑ recorded 2026-08-09 · real run
```

**Behavior**
- Types out once on load, ~120ms per line, ~1.4s total. Never loops (looping = screensaver = fake).
- Then holds. A `↻ replay` link in the corner, nothing automatic.
- Below the panel, a small caption: `Recorded run. Not a mockup.` ← **this sentence is worth more than the whole stats bar.**
- `prefers-reduced-motion`: render complete, no typing.
- Mobile: panel moves below the headline, 4 lines only, no typing.

**Non-negotiable:** this must be a **real recorded trace**, timestamps intact, from an actual
agent run. If we invent it we've rebuilt the fake-sparkline problem with better typography.
Source candidates: the market-signal-tracker's 6AM Telegram digest, or the AlphaVault Friday
rebalance — both already run on schedule.

**Depth (the one borrowing from Direction C):** a single soft indigo volumetric field behind
the panel, ~8% opacity, static, no animation. Behind the hero only, nowhere else on the page.

---

## 6. Layout & grid

```
12-col, 1440 max, 80px gutters, hairline rules visible at 8% opacity

┌ 01 / AITIST ────────────────────────────── ● FLEET LIVE · 14 AGENTS ┐
│                                                                     │
│  cols 1–6                        │  cols 7–12                       │
│  Jobs Done.                      │  ┌─── live trace panel ───┐      │
│  [subheadline, 54ch]             │  │                        │      │
│                                  │  └────────────────────────┘      │
│  [Get Early Access] [Talk to Sales]  Recorded run. Not a mockup.    │
│  WORKS WITH  Telegram Discord 飞书 Web                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
  ↓ no scroll indicator, no bouncing chevron
```

- Viewport height: `min-height: 92vh` — **not** 100vh. A sliver of the next section visible
  at the fold invites scroll better than any animated arrow.
- Navbar: transparent → `bg` at 88% + `backdrop-blur(12px)` + 1px bottom `line` on scroll.
  Keep v2's nav items; wordmark stays `Aitist` + accent `.ai`.

---

## 7. What gets deleted from the current opening

| Removed | Why |
|---------|-----|
| Two animated blurred gradient blobs (emerald + blue, 10s/12s loops) | The most generic possible AI-landing-page background |
| `grainy-gradients.vercel.app/noise.svg` hotlink | Third-party runtime dependency for a texture; inline it or drop it |
| Radial-masked 40px grid overlay | Every template has it |
| Italic serif on "Done." | Direction-A rule: no serif, no italic |
| `hover:scale-105` + emerald glow shadow on primary CTA | Reads consumer, not infra |
| `Watch Demo` button | No demo exists |
| Pill eyebrow with slogan | Replaced by real fleet status |
| `rounded-2xl` (16px) on buttons | → 6px |
| `y: 20` fade-up on hero elements | Opacity only, 150ms |

Net: the hero loses six decorative layers and gains one real thing.

---

## 8. Full page outline (post-hero)

Section order, merging v2's IA with v1's substance. `01 / …` labels are Direction B's device.

| # | Section | Content source | Notes |
|---|---------|---------------|-------|
| `01` | **Hero** | above | Live trace |
| `02` | **The argument** — *Most AI answers questions. Aitist gets things done.* | v1 §3 | Three cards: Always On · Real Output · Your Channels. Full-bleed type, no icons — replace the emoji with hairline-boxed numerals. |
| `03` | **Proof bar** | v1 stats | `24/7` · `500+ signals/day` · `10,000+ tasks/mo` — oversized tabular figures on a single hairline row. **Use v1's throughput numbers, not v2's business claims.** |
| `04` | **Built different** — OpenClaw architecture | v1 §6A ⭐ restored | Persistent Memory · Multi-Agent Orchestration · Proactive Scheduling · Reliable Concurrency. **The credibility center of the page.** Illustrate with a real agent DAG, not a stock photo. |
| `05` | **How it works** — 4 steps | v2 ✅ kept | Select → Configure → Deploy → Verify. Numerals `01–04` in mono on hairlines; drop the rounded icon tiles. |
| `06` | **Meet your AI team** | v1 roster | Real functional agents (Portfolio Manager, KOL Scout, GPU Training Agent…). `✅ Ready` / `🔜 Soon`. **Delete Alex/Jordan/Devin and every fabricated stat.** |
| `07` | **Real agents. Real results.** | v1 5 case studies | Hard metric as oversized tabular number + customer quote. `$400K` at 96px is the hero of this section. **Zero stock photography** — screenshot the actual Telegram delivery instead. |
| `08` | **Enterprise-grade security** | v1 §6B ⭐ restored | 6 blocks. Unlocks Finance/Healthcare/Legal buyers. Add v2's **Human-in-the-loop** and **Verified Results / audit trail** here. |
| `09` | **Pricing** | v1 or v2 — ⚠️ conflict A2 | Needs your call on $799/5-agents vs $999/3-agents. Restore v1's 4-question FAQ. |
| `10` | **Closing** | new | Full-bleed: **You lead. They work.** → `Ready to hire your first AI employee?` → `[Join the Waitlist]` |
| `11` | **Footer** | v2 structure + v1 links | Add `Powered by OpenClaw · Built by Aitist, Inc.` Link the social icons. |

Pages: `/employees` (v1 roster, category filters Finance/Marketing/Engineering) ·
`/about` (v2, keep verbatim) · `/careers` (v2) · `/legal` (real docs, not placeholders) ·
`/contact` + `/waitlist` (**build these — stop using mailto on every button**).

---

## 9. Two things blocking us

**a) The market question.** `content/COPY-DIFF-v1-v2.md` §C — v1 sells to a cross-border
operator (Telegram, 飞书, 小红书, MCN), v2 sells to a US B2B SaaS buyer (Slack, Email, CRM,
SOC2). This changes the agent roster, the case studies, the channel row in the hero, and
arguably the accent color. **It has to be decided before we build, not during.**

**b) Real trace data.** Direction A's hero needs one recorded agent run with intact
timestamps. If that's not available, A collapses into a nicer-looking fake and we should
take Direction B instead.
