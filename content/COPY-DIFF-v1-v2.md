# v1 vs v2 — Conflicts & Decisions Needed

Two versions of the site copy exist. This file is the decision list. One line per conflict.
Full text of both lives in [`MASTER-COPY.md`](./MASTER-COPY.md).

- **v1** = `content/01-…09-*.md` + `src/data/*.ts` (2026-07-14, this repo)
- **v2** = Google AI Studio export (2026-08-09, `snapshots/2026-08-09-aistudio-export/`)

---

## A. Hard conflicts — pick one

| # | Field | v1 | v2 | Recommendation |
|---|-------|----|----|----------------|
| A1 | **HQ city** | Oakland, CA | Sunnyvale, CA, US | **Sunnyvale** — v2 is newer and About/Careers both say it. Fix v1's footer. |
| A2 | **Tier-2 name + price** | Team, **$799/mo**, up to 5 employees | Professional, **$999/mo**, 3 employees | Needs your call. v2 is +25% price for fewer agents. |
| A3 | **Tier-1 CTA** | `Get Started` | `Start Free Trial` | `Start Free Trial` only if the 14-day trial in v1's FAQ is real. |
| A4 | **Hero secondary CTA** | `Talk to Sales` | `Watch Demo` | **`Talk to Sales`** until a demo video exists. |
| A5 | **Channels** | Telegram · Discord · 飞书 · Web | Slack · Discord · Email · custom API | Needs your call — this is a **market positioning** decision, not copy. See §C. |
| A6 | **Employee taxonomy** | Finance / Marketing / Engineering | Sales / Marketing / Support / Operations / Legal | **v1** — it maps to the agents that actually exist. |
| A7 | **Agent naming** | Functional (Portfolio Manager, GPU Training Agent) | Human personas (Alex, Jordan, **Devin**) | **v1.** "Devin" is a competitor's product name. |
| A8 | **Why-Aitist headline** | *Most AI answers questions. / Aitist gets things done.* | *Why teams choose Aitist* | **v1** — the contrast structure is the brand. |
| A9 | **Case-study framing** | 5 cases, named agent, hard metric, customer quote | 2 cases, stock photo, no quote | **v1.** |
| A10 | **CTA destinations** | `/waitlist`, `/contact`, `/waitlist?plan=x` | every CTA → `mailto:0@aitist.ai` | Build real routes. A mailto on every button reads pre-launch. |

## B. Only in one version — keep or drop

| # | Content | Only in | Recommendation |
|---|---------|---------|----------------|
| B1 | **"Built different." / OpenClaw tech section** (4 blocks: Persistent Memory, Multi-Agent Orchestration, Proactive Scheduling, Reliable Concurrency) | v1 | ⭐ **Restore. This is the moat.** v2 deleting it is the single biggest reason it reads generic. |
| B2 | **Enterprise security section** (6 blocks incl. Private Deployment, RBAC, Audit Logs, Data Residency) | v1 | ⭐ **Restore** — it's what makes Finance/Healthcare buyers possible. |
| B3 | **`Powered by OpenClaw · Built by Aitist, Inc.`** | v1 | Restore. |
| B4 | **Pricing FAQ** (4 Q&A) | v1 | Restore. |
| B5 | **Channel badges under hero** | v1 | Restore (pending A5). |
| B6 | **Above-footer CTA bar** — *Ready to hire your first AI employee?* | v1 | Restore. |
| B7 | **Suite pages** — Finance / Marketing / Engineering | v1 footer | Good IA idea, pages never built. Decide: build or drop the links. |
| B8 | **"How it works" 4-step section** | v2 | ✅ **Keep** — genuinely missing from v1. |
| B9 | **About page** (incl. *"humans leading AI workforces"*) | v2 | ✅ **Keep.** Best sentence on the site. |
| B10 | **Careers page** (2 roles) | v2 | ✅ Keep. |
| B11 | **Legal pages** | v2 | Keep the *routes*, replace the placeholder text with real docs. |
| B12 | **Human-in-the-loop** value prop | v2 | ✅ Keep — pairs well with B2 for regulated buyers. |
| B13 | **Verified Results / audit trail** value prop | v2 | ✅ Keep. |
| B14 | **Navbar** with real nav | v2 | ✅ Keep. |
| B15 | Fabricated per-agent stats (98% efficiency, $4.2k/mo savings) | v2 | ❌ **Delete.** |
| B16 | Stock photography (Unsplash, picsum) | v2 | ❌ **Delete.** Biggest "土" contributor after the italic serif. |

## C. The one strategic question hiding in the copy

**A5 is not a copy conflict — it's a market decision that has already been made twice, differently.**

- v1 sells to a **China-adjacent / cross-border operator**: Telegram, 飞书, 小红书, MCN agencies, XHS marketers, Seedance video. The case studies are a quant fund, a KOL scout, an MCN.
- v2 sells to a **US B2B SaaS buyer**: Slack, Email, CRM, SDRs, SOC2, "Enterprise Clients".

You cannot run both on one homepage without reading confused. Every downstream choice — agent roster, case studies, pricing, even the accent color — follows from this. **Decide this before the redesign, not during it.**

## D. Cheap fixes, do regardless of redesign

1. `index.html` title is `My Google AI Studio App` → `Aitist — AI employees that get work done`
2. Add `<meta description>` from `metadata.json`, plus OG/Twitter cards and a favicon (logos already in `public/logos/`)
3. Link the footer social icons, or remove them
4. Cut the SOC2 claim (see MASTER-COPY §Claims 🚩1)
5. Delete or relabel `Watch Demo`
6. Replace v2's Google AI Studio boilerplate README
