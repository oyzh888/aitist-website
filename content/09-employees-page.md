# Page: /employees — Full AI Employee Directory

## Page Headline
```
Hire your AI team.
```

## Page Subheadline
```
Every employee is trained for a specific job.
Browse by category, or search by skill.
```

---

## Employee Listings

### 💼 Finance

#### Portfolio Manager (AlphaVault)
- **Slug:** portfolio-manager
- **Status:** ✅ Ready
- **One-liner:** Automatically manages and rebalances your investment portfolio using momentum strategies.
- **What it does:**
  - Selects top-momentum stocks weekly from a defined universe
  - Executes rebalancing on schedule (every Friday)
  - Pushes portfolio report to Telegram
  - Monitors live P&L and sends alerts
- **Works on:** Telegram · Web
- **Best for:** Quant funds, family offices, individual traders

#### Market Signal Tracker
- **Slug:** market-signal-tracker
- **Status:** ✅ Ready
- **One-liner:** Monitors 500+ market signals daily and delivers a morning briefing.
- **What it does:**
  - Tracks earnings events, macro news, KOL positions
  - Consolidates signals into a daily digest
  - Sends to Telegram at 6AM
  - Real-time alerts on anomalies
- **Works on:** Telegram · Discord
- **Best for:** Traders, analysts, small funds

#### Hedge Fund Analyst
- **Slug:** hedge-fund-analyst
- **Status:** ✅ Ready
- **One-liner:** Runs quantitative analysis, backtests strategies, and generates research reports.
- **What it does:**
  - Runs Python-based quant analysis in a sandbox environment
  - Backtests strategies against historical data
  - Produces structured research reports
  - Integrates with finance data APIs
- **Works on:** Telegram · Web
- **Best for:** Quant researchers, hedge fund analysts

#### CFO Assistant
- **Slug:** cfo-assistant
- **Status:** 🔜 Coming Soon
- **One-liner:** Automates financial reporting, budget tracking, and expense review.

---

### 📣 Marketing

#### KOL & Influencer Scout
- **Slug:** kol-scout
- **Status:** ✅ Ready
- **One-liner:** Researches and profiles KOLs across 小红书, TikTok, and YouTube for your campaigns.
- **What it does:**
  - Profiles 50+ KOLs per campaign brief
  - Tracks competitor influencer activity
  - Delivers weekly shortlist to Telegram
  - Extracts follower counts, engagement rates, topic fit
- **Works on:** Telegram · Web
- **Best for:** Brand marketers, PR teams, e-commerce

#### Social Media Manager
- **Slug:** social-media-manager
- **Status:** ✅ Ready
- **One-liner:** Creates and schedules content across 小红书, Twitter, and TikTok — zero editors needed.
- **What it does:**
  - Scrapes trending topics and competitor content
  - Drafts posts matching your brand voice
  - Schedules content across platforms
  - Handles 10,000+ pieces of content/month
- **Works on:** Web · Telegram
- **Best for:** E-commerce brands, MCN agencies, content teams

#### Marketing Video Creator (Seedance)
- **Slug:** video-creator
- **Status:** ✅ Ready
- **One-liner:** Generates short-form marketing videos from product inputs — script to screen.
- **What it does:**
  - Takes product image + selling points + target platform
  - Produces 15s/30s video scripts
  - Generates Seedance prompts for video creation
  - Outputs captions, hashtags, CTAs
- **Works on:** Web · Telegram
- **Best for:** E-commerce brands, TikTok/XHS marketers

#### Growth Data Analyst
- **Slug:** growth-analyst
- **Status:** ✅ Ready
- **One-liner:** Monitors your growth metrics and competitor performance, delivers weekly insights.
- **What it does:**
  - Tracks platform analytics (XHS, Twitter, TikTok)
  - Competitive benchmarking
  - Weekly growth report with recommendations
  - Alerts on unusual spikes or drops
- **Works on:** Web · Telegram
- **Best for:** Marketing managers, growth teams

#### Outreach Bot
- **Slug:** outreach-bot
- **Status:** 🔜 Coming Soon
- **One-liner:** Automates lead follow-up via email and messaging.

---

### 🛠️ Engineering

#### Full-Stack Developer
- **Slug:** fullstack-dev
- **Status:** ✅ Ready
- **One-liner:** Builds and ships features, fixes bugs, and writes code 24/7.
- **What it does:**
  - Implements frontend and backend features from specs
  - Reviews and merges PRs
  - Debugs and resolves issues
  - Works in your existing GitHub repo
- **Works on:** Telegram · Discord · Web
- **Best for:** Startups, small engineering teams

#### Infra Manager
- **Slug:** infra-manager
- **Status:** ✅ Ready
- **One-liner:** Sets up and manages your cloud infrastructure — Docker, CI/CD, monitoring.
- **What it does:**
  - Provisions cloud infrastructure (AWS, GCP, Cloudflare)
  - Manages Docker containers and deployments
  - Sets up CI/CD pipelines
  - Monitors uptime and sends alerts
- **Works on:** Telegram · Discord
- **Best for:** Startups without dedicated DevOps

#### GPU Training Agent
- **Slug:** gpu-training-agent
- **Status:** ✅ Ready
- **One-liner:** Manages GPU instances and runs model training jobs on schedule.
- **What it does:**
  - Provisions and manages GPU instances
  - Runs training and backtest jobs
  - Reports results and resource usage
  - Shuts down idle instances to save cost
- **Works on:** Telegram
- **Best for:** ML teams, quant researchers

#### Code Reviewer
- **Slug:** code-reviewer
- **Status:** 🔜 Coming Soon
- **One-liner:** Reviews PRs, checks for bugs and security issues, approves or flags.

---

## Employee Card Format (for implementation)

```typescript
interface Employee {
  slug: string;
  name: string;
  category: 'finance' | 'marketing' | 'engineering';
  status: 'ready' | 'coming-soon';
  oneLiner: string;
  description: string[];
  channels: string[];
  bestFor: string;
  caseStudySlug?: string;
}
```

## Design Notes
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- Category filter tabs at top: All / Finance / Marketing / Engineering
- Ready cards: full opacity, green ✅ badge
- Coming Soon cards: 60% opacity, gray 🔜 badge
- Each card: hover → subtle elevation + border brightens
- Click → /employees/[slug] detail page (Phase 2)
