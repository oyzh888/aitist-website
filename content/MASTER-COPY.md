# Aitist.ai — Master Copy Vault

> **Single source of truth for every word on the site.** Design is disposable; this file is not.
> Extracted 2026-08-09 from two sources and merged.

| Tag | Source | Character |
|-----|--------|-----------|
| **v1** | `content/01-…09-*.md` + `src/data/*.ts` in this repo (2026-07-14) | Specific, real numbers, real agents, China+US channels. Stronger. |
| **v2** | Google AI Studio export, `snapshots/2026-08-09-aistudio-export/` | Generic AI-startup rewrite. Better *structure* (About/Careers/Legal/Workflow pages), weaker *substance*. |

**Rule of thumb when rebuilding:** take **v2's information architecture**, take **v1's words and numbers**.
Conflicts are tabled in [`COPY-DIFF-v1-v2.md`](./COPY-DIFF-v1-v2.md).

⚠️ **Do not ship the copy marked 🚩 without legal/factual review** — see [Claims to verify](#claims-that-need-verification-before-shipping).

---

## 0. Brand constants

| Field | Value | Notes |
|-------|-------|-------|
| Company | **Aitist, Inc.** | |
| Wordmark | `Aitist` + `.ai` (accent-colored suffix) | v2 renders `Aitist<span accent>.ai</span>` |
| Domain | aitist.ai | |
| One-line descriptor | *The infrastructure for the future of work. Deploying specialized, autonomous AI employees that get work done.* | v2 `metadata.json` — use as `<meta description>` |
| Short tagline | *AI employees that get work done. 24/7.* | v1 |
| Footer tagline | *The infrastructure for the future of work. Deploying AI employees that get work done.* | v2 |
| Contact email | **0@aitist.ai** | v2 wires **every single CTA** to `mailto:0@aitist.ai` |
| HQ | **Sunnyvale, CA, US** (v2) / Oakland, CA (v1) | ⚠️ conflict — confirm |
| Social | Twitter/X `@aitist_ai` · LinkedIn `aitist-inc` · GitHub `oyzh888` | v1 only; v2 renders icons with no links |
| Copyright | `© 2026 Aitist, Inc. All rights reserved.` | |
| Footer kicker | `Built with ❤️ for the future of work.` | v2 |
| Powered-by line | `Powered by OpenClaw  ·  Built by Aitist, Inc.` | v1 — **the technical moat; v2 deleted it** |
| Positioning enemy | "another AI chatbot" / "glorified chatbots" / "AI that only answers questions" | The whole brand hangs on this contrast |

### Voice rules (inferred from v1 — the good stuff)
1. **Short declaratives, period-terminated.** "Jobs Done." "Built different." "Real output." Not "Empowering teams to…"
2. **Verb-first, action over advice.** "They execute" not "they assist".
3. **Concrete numbers over adjectives.** "$400K live portfolio" beats "enterprise-grade".
4. **Contrast structure.** "Most AI answers questions. Aitist gets things done."
5. **Never say "seamless", "revolutionize", "unlock", "empower", "cutting-edge".**

---

## 1. Navigation

**v2 navbar** (transparent → blurred black on scroll):

| Label | Target |
|-------|--------|
| AI Employees | `/employees` |
| How it Works | `/#workflow` |
| Pricing | `/#pricing` |
| About | `/about` |
| **Get Started** (button) | `mailto:0@aitist.ai` |

Mobile: hamburger → same list stacked + full-width `Get Started`.

---

## 2. Hero

### Headline
```
Jobs Done.
```
*(v2 sets "Done." in accent + italic serif. The italic-serif flourish is a big part of what reads as dated — see design notes.)*

### Eyebrow badge
```
THE FUTURE OF AUTONOMOUS WORK
```
*(v2, uppercase + wide tracking, with a pulsing green dot)*

### Subheadline
```
Not another AI chatbot. Aitist deploys 24/7 AI employees that complete real work
— for your business, on the channels you already use.
```
*(identical in v1 and v2 — this is the load-bearing sentence of the whole site)*

### CTAs
| Slot | v1 | v2 |
|------|----|----|
| Primary | `Get Early Access` → `/waitlist` | `Get Early Access` → `mailto:0@aitist.ai` |
| Secondary | `Talk to Sales` → `/contact` | `Watch Demo` → scrolls to `#workflow` 🚩 *(there is no demo video — the button scrolls to a stock photo)* |

### Channel badges (v1 only — v2 dropped these)
```
Works with:   [Telegram]   [Discord]   [飞书 Feishu]   [Web]
```

---

## 3. Stats bar

**v2 (live claims, 4 up):**

| Value | Label |
|-------|-------|
| `1,000+` | Messages / Day |
| `10+` | Enterprise Clients 🚩 |
| `< 2s` | Avg. Response Time |
| `99.9%` | System Uptime 🚩 |

**v1 (3 up), section label `Trusted by teams who need results`:**

| Value | Label |
|-------|-------|
| `24/7` | Always running |
| `500+` | Signals tracked daily |
| `10,000+` | Tasks completed monthly |

> v1's numbers are defensible (they describe agent throughput). v2's "10+ Enterprise Clients" and "99.9% System Uptime" are claims about the business — verify or cut.

---

## 4. Why Aitist / value props

### Headline
- **v1:** `Most AI answers questions.` / `Aitist gets things done.` ← **much better**
- **v2:** `Why teams choose Aitist`

### Subheadline
- **v2:** *We're building the infrastructure for the future of work. AI that doesn't just talk, but delivers.*

### v1 — three cards (concrete, channel-aware)

| # | Icon | Title | Body |
|---|------|-------|------|
| 1 | 🔁 | **Always On** | Agents run 24/7 — no prompting, no babysitting. They work while you sleep, and push results when they're ready. |
| 2 | ✅ | **Real Output** | Reports, content, trades, code, leads — completed and delivered. Not suggestions. Not drafts. Done. |
| 3 | 💬 | **Your Channels** | Works inside Telegram, Discord, 飞书, and Web. No new dashboard to learn. AI where your team already is. |

### v2 — six cards (generic, but two are new and worth keeping)

| # | Title | Body | Keep? |
|---|-------|------|-------|
| 1 | Autonomous Execution | Our agents don't just suggest, they execute. From sending emails to updating CRMs. | dup of v1 "Real Output" |
| 2 | Enterprise Security | Bank-grade encryption and SOC2 compliance. Your data stays private and secure. | 🚩 **SOC2 claim — cut unless certified** |
| 3 | **Human-in-the-loop** | Set thresholds for human approval. You stay in control of critical decisions. | ✅ **new & good — keep** |
| 4 | Omnichannel Presence | Deploy employees on Slack, Discord, Email, or via custom API integrations. | channel list conflicts with v1 |
| 5 | Continuous Learning | Agents improve with every task, adapting to your specific business workflows. | 🚩 vague — does it actually learn? |
| 6 | **Verified Results** | Every task is logged and verified with a clear audit trail for accountability. | ✅ **new & good — keep** |

---

## 5. How it works (v2 only — new section, good addition)

### Headline
```
How it works
```
### Subheadline
```
Deploying an AI workforce is simpler than you think. From selection to execution in minutes.
```

| Step | Title | Description |
|------|-------|-------------|
| 01 | **Select Agent** | Choose from our directory of specialized AI employees or request a custom one. |
| 02 | **Configure Workflows** | Connect your tools and define the specific tasks and approval thresholds. |
| 03 | **Deploy & Execute** | Your AI employee starts working 24/7 across your chosen channels. |
| 04 | **Verify & Scale** | Review completed work and scale your AI workforce as your business grows. |

### Architecture card (sits under the steps)
```
SYSTEM ARCHITECTURE
Autonomous Execution Engine
Our proprietary engine handles task decomposition, tool selection,
and execution with 99.9% reliability.
```
🚩 v2 illustrates this with `picsum.photos/seed/workflow?blur=2` — a **random blurred stock placeholder**. This is the single most "土" element on the site.

---

## 6. Built different — tech architecture (v1 only, **v2 deleted this entire section**)

> This is the strongest technical content Aitist has. Losing it is why v2 reads generic.

### Headline
```
Built different.
```
### Subheadline
```
While other AI tools are glorified chatbots, Aitist agents are powered by OpenClaw
— a purpose-built multi-agent infrastructure for getting work done.
```

| # | Icon | Title | Body |
|---|------|-------|------|
| 1 | 🧠 | **Persistent Memory** | Agents remember context across days, weeks, and months. Your Finance agent knows your portfolio history. Your Marketing agent knows your brand voice. Memory that actually persists. |
| 2 | ⚡ | **Multi-Agent Orchestration** | A Master agent coordinates specialist worker agents — delegating tasks, verifying outputs, retrying on failure. Like a real team, not a single overloaded model. |
| 3 | 🔁 | **Proactive Scheduling** | Agents don't wait to be asked. They run on schedule, react to live signals, and push results on time. Heartbeat monitoring ensures nothing goes silent. |
| 4 | 🔒 | **Reliable Concurrency** | Built-in task locking, rate limiting, and automatic failure recovery. Agents handle parallel workloads without collisions — enterprise-grade reliability at SMB price. |

---

## 7. Security (v1 only)

### Headline
```
Enterprise-grade security.
```
### Subheadline
```
For Finance, Healthcare, Legal, and any team that handles sensitive data.
```

| Icon | Title | Description |
|------|-------|-------------|
| 🏠 | **Private Deployment** | Run Aitist on your own infra — NAS, private cloud, or on-premise. Your data never leaves your servers. |
| 🔐 | **End-to-End Encryption** | All data in transit and at rest is encrypted. Agents communicate through secure, authenticated channels. |
| 👥 | **Role-Based Access Control** | Granular permissions for your team. Control which humans can access which agents and their outputs. |
| 📋 | **Full Audit Logs** | Every agent action is logged with timestamps. Full traceability for compliance and debugging. |
| 📊 | **Agent Monitoring Dashboard** | Real-time visibility into agent activity, task success rates, and error patterns. |
| 🌍 | **Data Residency** | Deploy in your preferred region. Data stays where you need it for compliance. |

### CTA
```
For regulated industries → [Contact Us for Private Deployment]
```

---

## 8. Employees teaser (homepage)

### Headline
- **v2:** `Meet your new colleagues` *("colleagues" in accent italic serif)*
- **v1:** `Meet your AI team.`

### Subheadline
- **v2:** *Specialized AI employees, each trained for a specific job. Ready to join your team in minutes.*
- **v1:** *Specialized AI employees, ready to hire. Each one is trained for a specific job — not a general chatbot.*

### Link out
`View all employees →` / `See All Employees →` → `/employees`

### v2 teaser cards — 🚩 **fabricated personas, recommend deleting**

| Name | Role | Efficiency | Tasks | Savings |
|------|------|-----------|-------|---------|
| Alex | SDR / Lead Gen | 98% | 1,240+ | $4.2k/mo |
| Jordan | Data Analyst | 99% | 850+ | $6.8k/mo |
| Devin | Technical Support | 97% | 3,100+ | $5.5k/mo |

Card chrome: `EFFICIENCY` / `TASKS` / `SAVINGS` labels, `PERFORMANCE: OPTIMAL` status line, `Hire {name}` button.
Each card carries a sparkline fed by **hardcoded fake data** (`Mon 40, Tue 30, Wed 65, Thu 45, Fri 80, Sat 55, Sun 90`).

> "Devin" is the name of a well-known competitor product. "Alex/Jordan/Casey/Morgan" are placeholder-generator names. v1's functional names (Portfolio Manager, KOL Scout, GPU Training Agent) are both more honest and more differentiated.

---

## 9. AI Employee Directory (`/employees`)

### Page headline
- **v2:** `AI Employee Directory`
- **v1:** `Hire your AI team.`

### Page subheadline
- **v2:** *Specialized AI employees, each trained for a specific job. Browse by category or search to find the right agent for your team.*
- **v1:** *Every employee is trained for a specific job. Browse by category, or search by skill.*

### UI copy
- Search placeholder: `Search by name or role...`
- v2 filters: `All` · `Sales` · `Marketing` · `Support` · `Operations` · `Legal`
- v1 filters: `All` · `Finance` · `Marketing` · `Engineering`
- Card fields: name, category badge, role, one-liner, `Best for:`, `Hire {name}` button
- Status badges (v1): `✅ Ready` / `🔜 Coming Soon` (Coming Soon at 60% opacity)

### Custom-agent block (v2)
```
Need a custom AI employee?
Enterprise plans include custom agent training for your specific workflows and data.
[Contact Sales]
```

---

### 9a. Roster — v1 (real agents, keep this one)

#### 💼 Finance

**Portfolio Manager (AlphaVault)** · `portfolio-manager` · ✅ Ready · 📈
> Automatically manages and rebalances your investment portfolio using momentum strategies.
- Selects top-momentum stocks weekly from a defined universe
- Executes rebalancing on schedule (every Friday)
- Pushes portfolio report to Telegram
- Monitors live P&L and sends alerts

Works on: Telegram · Web — Best for: Quant funds, family offices, individual traders

**Market Signal Tracker** · `market-signal-tracker` · ✅ Ready · 📡
> Monitors 500+ market signals daily and delivers a morning briefing.
- Tracks earnings events, macro news, KOL positions
- Consolidates signals into a daily digest
- Sends to Telegram at 6AM
- Real-time alerts on anomalies

Works on: Telegram · Discord — Best for: Traders, analysts, small funds

**Hedge Fund Analyst** · `hedge-fund-analyst` · ✅ Ready · 🔍
> Runs quantitative analysis, backtests strategies, and generates research reports.
- Runs Python-based quant analysis in a sandbox environment
- Backtests strategies against historical data
- Produces structured research reports
- Integrates with finance data APIs

Works on: Telegram · Web — Best for: Quant researchers, hedge fund analysts

**CFO Assistant** · `cfo-assistant` · 🔜 Coming Soon · 💰
> Automates financial reporting, budget tracking, and expense review.

Best for: Finance teams, CFOs

#### 📣 Marketing

**KOL & Influencer Scout** · `kol-scout` · ✅ Ready · 🔍
> Researches and profiles KOLs across 小红书, TikTok, and YouTube for your campaigns.
- Profiles 50+ KOLs per campaign brief
- Tracks competitor influencer activity
- Delivers weekly shortlist to Telegram
- Extracts follower counts, engagement rates, topic fit

Works on: Telegram · Web — Best for: Brand marketers, PR teams, e-commerce

**Social Media Manager** · `social-media-manager` · ✅ Ready · 📱
> Creates and schedules content across 小红书, Twitter, and TikTok — zero editors needed.
- Scrapes trending topics and competitor content
- Drafts posts matching your brand voice
- Schedules content across platforms
- Handles 10,000+ pieces of content/month

Works on: Web · Telegram — Best for: E-commerce brands, MCN agencies, content teams

**Marketing Video Creator (Seedance)** · `video-creator` · ✅ Ready · 🎬
> Generates short-form marketing videos from product inputs — script to screen.
- Takes product image + selling points + target platform
- Produces 15s/30s video scripts
- Generates Seedance prompts for video creation
- Outputs captions, hashtags, CTAs

Works on: Web · Telegram — Best for: E-commerce brands, TikTok/XHS marketers

**Growth Data Analyst** · `growth-analyst` · ✅ Ready · 📊
> Monitors your growth metrics and competitor performance, delivers weekly insights.
- Tracks platform analytics (XHS, Twitter, TikTok)
- Competitive benchmarking
- Weekly growth report with recommendations
- Alerts on unusual spikes or drops

Works on: Web · Telegram — Best for: Marketing managers, growth teams

**Outreach Bot** · `outreach-bot` · 🔜 Coming Soon · 📧
> Automates lead follow-up via email and messaging.

Best for: Sales teams, real estate, insurance

#### 🛠️ Engineering

**Full-Stack Developer** · `fullstack-dev` · ✅ Ready · 💻
> Builds and ships features, fixes bugs, and writes code 24/7.
- Implements frontend and backend features from specs
- Reviews and merges PRs
- Debugs and resolves issues
- Works in your existing GitHub repo

Works on: Telegram · Discord · Web — Best for: Startups, small engineering teams

**Infra Manager** · `infra-manager` · ✅ Ready · 🖥️
> Sets up and manages your cloud infrastructure — Docker, CI/CD, monitoring.
- Provisions cloud infrastructure (AWS, GCP, Cloudflare)
- Manages Docker containers and deployments
- Sets up CI/CD pipelines
- Monitors uptime and sends alerts

Works on: Telegram · Discord — Best for: Startups without dedicated DevOps

**GPU Training Agent** · `gpu-training-agent` · ✅ Ready · ⚡
> Manages GPU instances and runs model training jobs on schedule.
- Provisions and manages GPU instances
- Runs training and backtest jobs
- Reports results and resource usage
- Shuts down idle instances to save cost

Works on: Telegram — Best for: ML teams, quant researchers

**Code Reviewer** · `code-reviewer` · 🔜 Coming Soon · 👁️
> Reviews PRs, checks for bugs and security issues, approves or flags.

Best for: Engineering teams

---

### 9b. Roster — v2 (generic personas, archived for reference)

| Name | Role | Category | One-liner | Best for |
|------|------|----------|-----------|----------|
| Alex | Sales Development Rep | Sales | Automates outbound prospecting and lead qualification. | B2B SaaS, Agency lead gen |
| Jordan | Data Analyst | Operations | Turns raw data into actionable insights and reports. | E-commerce, Marketing teams |
| Devin | Technical Support | Support | Resolves complex technical tickets 24/7. | Software companies, IT departments |
| Casey | Content Strategist | Marketing | Generates SEO-optimized content and social copy. | Content agencies, Brand teams |
| Sam | Compliance Officer | Legal | Monitors data privacy and regulatory compliance. | Fintech, Healthcare startups |
| Morgan | Workflow Automator | Operations | Connects your tools and automates repetitive tasks. | Operations managers, Founders |

---

## 10. Case studies

### Headline
- **v1:** `Real agents. Real results.` / sub: *These aren't demos. These are running in production.*
- **v2:** `Real results, real impact` / sub: *See how forward-thinking companies are scaling their operations with Aitist AI employees.*

### v1 — five cases with real metrics and quotes ✅ **keep these**

**Case 1 — Hedge Fund Portfolio Manager** (`hedge-fund`, Finance)
- Client: Quant fund, 3-person team · Agent: Portfolio Manager (AlphaVault)
- **Metric: `$400K live portfolio, fully automated`**
- Weekly rebalancing across 95 stocks — zero manual execution · Momentum strategy with dynamic weighting · 8+ hrs/week of manual tracking eliminated · Runs every Friday, pushes report to Telegram
- > *"It rebalanced my portfolio while I was asleep. That's what AI was supposed to be."*

**Case 2 — KOL & Influencer Scout** (`kol-research`, Marketing)
- Client: Brand marketing team · Agent: KOL & Influencer Scout
- **Metric: `Research time: 3 days → 2 hours`**
- 50+ KOLs profiled per campaign · Competitor content tracked across 小红书, TikTok, YouTube · Weekly shortlist auto-delivered to Telegram · Agent browses web, extracts follower data, engagement rates, topic fit
- > *"We used to spend 3 days researching. Now it's 2 hours and the report is better."*

**Case 3 — Social Media Account Manager** (`social-content`, Marketing)
- Client: E-commerce brand, 10+ accounts · Agent: Social Media Manager (XHS · Twitter · TikTok)
- **Metric: `10,000+ pieces of content/month`**
- Daily content scheduled across multiple platforms · Built-in web browsing for trend scraping · Account voice stays consistent · Zero human editors for routine content
- > *"10,000 posts a month. My team didn't write a single one."*

**Case 4 — Startup Engineering Team** (`startup-engineering`, Engineering)
- Client: Early-stage startup, 2 engineers · Agent: Infra Manager + Full-Stack Developer
- **Metric: `Full infra setup: 3 days (vs 3 weeks manual)`**
- Complete cloud infra incl. CI/CD, Docker, monitoring · Zero dedicated DevOps hire · Ongoing PR review, deploy automation, uptime monitoring · Engineers focus on product
- > *"We have 2 engineers and infrastructure like a 20-person company."*

**Case 5 — Market Signal Tracker** (`market-signals`, Finance)
- Client: Individual trader / family office · Agent: Market Signal Tracker
- **Metric: `500+ signals tracked daily, zero manual monitoring`**
- Earnings events, macro news, KOL positions consolidated · Daily briefing to Telegram at 6AM · Works alongside AlphaVault for a full portfolio intelligence loop · Real-time anomaly alerts
- > *"I wake up to a full market brief every morning. Haven't missed a signal in weeks."*

### v2 — two cases 🚩 **no metrics, stock photos, unnamed clients**

| Title | Result badge | Description |
|-------|-------------|-------------|
| Fintech Quant Lab | `24/7 Alpha Generation` | Implemented autonomous quantitative trading agents that monitor global markets, execute complex arbitrage strategies, and optimize portfolio risk in real-time with zero human intervention. |
| E-commerce MCN | `300% Traffic Growth` 🚩 | Automated influencer discovery and outreach. Our agents generate high-engagement social posts and manage multi-channel content distribution to drive massive organic traffic and sales. |

> These are v1's Case 1 and Case 3 with the real numbers stripped and replaced by unsupported ones. Revert.

---

## 11. Pricing

### Headline
- **v1:** `Simple pricing. One AI employee at a time.` / sub: *Start with one. Scale to a fleet.*
- **v2:** `Simple, transparent pricing` / sub: *Choose the plan that fits your team's needs. All plans include our core AI infrastructure.*

### ⚠️ The two versions disagree on price and packaging — this needs a decision

| | v1 | v2 |
|---|----|----|
| **Tier 1** | **Starter — $299/mo** · *For individuals and small teams* | **Starter — $299/mo** · *Perfect for small teams automating basic tasks.* |
| includes | 1 AI employee · 1 channel (Telegram, Discord, 飞书, or Web) · Unlimited tasks · Email support | 1 AI Employee · Standard Workflows · Slack & Email Integration · 8/5 Support |
| CTA | `Get Started` → `/waitlist?plan=starter` | `Start Free Trial` |
| **Tier 2** | **Team — $799/mo** *(most popular)* · *For growing teams* | **Professional — $999/mo** *(most popular)* · *Scale your operations with multi-agent workflows.* |
| includes | Up to 5 AI employees · All channels (Telegram + Discord + 飞书 + Web) · Unlimited tasks · Priority support · Agent monitoring dashboard | 3 AI Employees · Custom Workflow Builder · Full API Access · Priority 24/7 Support · Advanced Analytics |
| CTA | `Get Started` → `/waitlist?plan=team` | `Get Started` |
| **Tier 3** | **Enterprise — Custom** · *For larger teams and regulated industries* | **Enterprise — Custom** · *Tailored solutions for large-scale automation.* |
| includes | Unlimited AI employees · Private deployment option · Custom agent training · SLA guarantee · Dedicated account manager · Compliance & audit logs | Unlimited Employees · Custom Agent Training · Dedicated Success Manager · On-premise Deployment · Custom Security Controls |
| CTA | `Contact Us` → `/contact` | `Contact Sales` |

Badge on middle tier: `MOST POPULAR`. Price suffix: `/mo`, omitted when price is `Custom`.

### Pricing FAQ (v1 only — v2 dropped it; recommend restoring)
**Q: Can I change which employee I use?**
A: Yes. You can swap agents anytime within your plan.

**Q: What channels are supported?**
A: Telegram, Discord, 飞书 (Feishu), and Web interface.

**Q: Do you offer a free trial?**
A: Yes. Join the waitlist for early access with a 14-day free trial.

**Q: Can I self-host?**
A: Enterprise plan includes private deployment options. Contact us.

---

## 12. About page (v2 only — new, and genuinely good)

### Headline
```
About Aitist
```

### Body
> At Aitist, we believe the future of work isn't about humans using AI tools—it's about humans leading AI workforces. Founded in Sunnyvale, CA, we are on a mission to build the infrastructure that allows businesses to deploy specialized, autonomous AI employees that actually get work done.

> Unlike traditional chatbots that only provide information, Aitist employees are designed for action. They integrate directly with your existing software stack, follow complex workflows, and operate 24/7 with a level of precision and consistency that was previously impossible.

**Our Vision** — To empower every organization with a scalable, intelligent workforce that removes the burden of repetitive tasks.

**Our Values** — Integrity in data, excellence in execution, and a relentless focus on delivering real ROI for our customers.

> We are a team of AI researchers, engineers, and product designers who are passionate about the intersection of autonomous agents and business operations. Join us as we redefine what it means to "go to work."

> 💎 **"humans leading AI workforces" — this is the best line on the entire site.** It's a stronger positioning statement than the hero. Consider promoting it.

---

## 13. Careers page (v2 only)

### Headline
```
Careers
```
### Subheadline
```
Join us in building the workforce of the future.
```

**AI Engineer** — Sunnyvale, CA / Remote · Full-time
> Help us build and fine-tune the autonomous execution engine that powers our AI employees. You'll work with LLMs, agentic frameworks, and complex tool-use scenarios.

**Product Manager** — Sunnyvale, CA / Remote · Full-time
> Define the future of AI-human collaboration. You'll lead the development of our workflow builder and employee directory, ensuring our agents solve real business problems.

CTA per job: `Apply Now` → `mailto:0@aitist.ai`

### Open-application block
```
Don't see a perfect fit?
We're always looking for talented individuals. Send us your resume anyway!
0@aitist.ai
```

---

## 14. Legal page (v2 only — placeholder text, `/legal?tab=privacy|terms|cookies`)

**Privacy Policy**
> At Aitist, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our services. We only collect data that is necessary to provide and improve our AI employee services. Your data is encrypted at rest and in transit, and we never sell your information to third parties.

**Terms of Service**
> By using Aitist, you agree to comply with our terms of service. Our platform is designed for professional use, and users are responsible for the actions initiated by their AI employees. We provide the infrastructure, but the configuration and oversight remain with the human lead.

**Cookie Policy**
> We use cookies to enhance your experience on our website. These small files help us remember your preferences and analyze how our site is used. You can manage your cookie settings through your browser at any time.

**Shared disclaimer on all three tabs:**
> This is a simplified placeholder for legal documentation. For the full legal text, please contact our legal department at 0@aitist.ai.

🚩 Shipping a page that describes itself as a placeholder is worse than having no page. Either commission real docs or remove the footer links.

---

## 15. Footer

### v2 structure
- **Brand column:** wordmark · *The infrastructure for the future of work. Deploying AI employees that get work done.* · `Sunnyvale, CA, US`
- **Product:** AI Employees · Pricing
- **Company:** About Us · Careers · Contact
- **Legal:** Privacy Policy · Terms of Service · Cookie Policy
- **Bottom bar:** `© 2026 Aitist, Inc. All rights reserved.` | `Built with ❤️ for the future of work.`
- Social icons rendered (GitHub, Twitter, LinkedIn) but **unlinked** 🚩

### v1 structure (richer)
- **Above-footer CTA bar:** `Ready to hire your first AI employee?` → `[Join the Waitlist]`
- **Brand:** *AI employees that get work done.* · `0@aitist.ai` · Oakland, CA
- **Products:** Finance Suite `/finance` · Marketing Suite `/marketing` · Engineering Suite `/engineering` · All Employees `/employees`
- **Company:** About · Pricing · Contact · Blog *(coming soon)*
- **Social / Legal:** Twitter/X `@aitist_ai` · LinkedIn `aitist-inc` · GitHub `oyzh888` · Terms · Privacy

---

## Claims that need verification before shipping

| 🚩 | Claim | Source | Risk |
|----|-------|--------|------|
| 1 | **SOC2 compliance** | v2 WhyAitist | Stating SOC2 without a completed audit is a material misrepresentation. **Cut or change to "SOC2 Type II in progress".** |
| 2 | **Bank-grade encryption** | v2 WhyAitist | Meaningless but low risk. Replace with the specific: "AES-256 at rest, TLS 1.3 in transit". |
| 3 | **99.9% System Uptime** / **99.9% reliability** | v2 Stats + Workflow | An SLA-shaped number. Only claim with monitoring data to back it. |
| 4 | **10+ Enterprise Clients** | v2 Stats | Verify count and that "enterprise" is accurate. |
| 5 | **300% Traffic Growth** | v2 CaseStudies | No client, no timeframe, no baseline. Unusable as-is. |
| 6 | Per-agent **$4.2k/$6.8k/$5.5k/mo savings** + 97–99% efficiency | v2 EmployeesTeaser | Entirely fabricated by the generator. Delete. |
| 7 | **$400K live portfolio** and named client types | v1 case studies | Real, but confirm the client is OK being described publicly — **this repo is public.** |
| 8 | **Watch Demo** button | v2 Hero | No demo exists; it scrolls to a stock photo. Either record a demo or relabel. |
| 9 | **Continuous Learning** — "agents improve with every task" | v2 WhyAitist | Only claim if there's an actual feedback/finetune loop. |

## Bugs in the v2 export (not copy, but caught during extraction)

1. `index.html` `<title>` is **`My Google AI Studio App`** — ships as the browser tab title and in search results.
2. `README.md` is the unmodified Google AI Studio boilerplate, complete with a Google banner image.
3. `Workflow.tsx` uses `picsum.photos` (random stock) for the architecture diagram; `CaseStudies.tsx` uses Unsplash hotlinks — both are third-party runtime dependencies that can 404 or change.
4. `cn()` is redefined locally at the bottom of `Pricing.tsx`, `EmployeesTeaser.tsx`, `Employees.tsx` instead of imported from `src/lib/utils` — and `EmployeesTeaser.tsx` calls `cn` before its declaration.
5. `Hero.tsx` imports `cn` from `@/src/lib/utils` and never uses it; `Employees.tsx` imports `Filter`, `Bot` unused.
6. No `<meta>` description, no OG tags, no favicon — `metadata.json` has the description but nothing consumes it.
