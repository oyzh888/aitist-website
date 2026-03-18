// Employee data — matches content/09-employees-page.md
// Used by /employees page and homepage teaser

export type EmployeeCategory = 'finance' | 'marketing' | 'engineering';
export type EmployeeStatus = 'ready' | 'coming-soon';

export interface Employee {
  slug: string;
  name: string;
  category: EmployeeCategory;
  categoryLabel: string;
  status: EmployeeStatus;
  icon: string;
  oneLiner: string;
  description: string[];
  channels: string[];
  bestFor: string;
  caseStudySlug?: string;
}

export const employees: Employee[] = [
  // ── FINANCE ──────────────────────────────────────────────
  {
    slug: 'portfolio-manager',
    name: 'Portfolio Manager',
    category: 'finance',
    categoryLabel: '💼 Finance',
    status: 'ready',
    icon: '📈',
    oneLiner: 'Automatically manages and rebalances your investment portfolio using momentum strategies.',
    description: [
      'Selects top-momentum stocks weekly from a defined universe',
      'Executes rebalancing on schedule (every Friday)',
      'Pushes portfolio report to Telegram',
      'Monitors live P&L and sends alerts',
    ],
    channels: ['Telegram', 'Web'],
    bestFor: 'Quant funds, family offices, individual traders',
    caseStudySlug: 'hedge-fund',
  },
  {
    slug: 'market-signal-tracker',
    name: 'Market Signal Tracker',
    category: 'finance',
    categoryLabel: '💼 Finance',
    status: 'ready',
    icon: '📡',
    oneLiner: 'Monitors 500+ market signals daily and delivers a morning briefing.',
    description: [
      'Tracks earnings events, macro news, KOL positions',
      'Consolidates signals into a daily digest',
      'Sends to Telegram at 6AM',
      'Real-time alerts on anomalies',
    ],
    channels: ['Telegram', 'Discord'],
    bestFor: 'Traders, analysts, small funds',
    caseStudySlug: 'market-signals',
  },
  {
    slug: 'hedge-fund-analyst',
    name: 'Hedge Fund Analyst',
    category: 'finance',
    categoryLabel: '💼 Finance',
    status: 'ready',
    icon: '🔍',
    oneLiner: 'Runs quantitative analysis, backtests strategies, and generates research reports.',
    description: [
      'Runs Python-based quant analysis in a sandbox environment',
      'Backtests strategies against historical data',
      'Produces structured research reports',
      'Integrates with finance data APIs',
    ],
    channels: ['Telegram', 'Web'],
    bestFor: 'Quant researchers, hedge fund analysts',
  },
  {
    slug: 'cfo-assistant',
    name: 'CFO Assistant',
    category: 'finance',
    categoryLabel: '💼 Finance',
    status: 'coming-soon',
    icon: '💰',
    oneLiner: 'Automates financial reporting, budget tracking, and expense review.',
    description: [],
    channels: [],
    bestFor: 'Finance teams, CFOs',
  },

  // ── MARKETING ────────────────────────────────────────────
  {
    slug: 'kol-scout',
    name: 'KOL & Influencer Scout',
    category: 'marketing',
    categoryLabel: '📣 Marketing',
    status: 'ready',
    icon: '🔍',
    oneLiner: 'Researches and profiles KOLs across 小红书, TikTok, and YouTube for your campaigns.',
    description: [
      'Profiles 50+ KOLs per campaign brief',
      'Tracks competitor influencer activity',
      'Delivers weekly shortlist to Telegram',
      'Extracts follower counts, engagement rates, topic fit',
    ],
    channels: ['Telegram', 'Web'],
    bestFor: 'Brand marketers, PR teams, e-commerce',
    caseStudySlug: 'kol-research',
  },
  {
    slug: 'social-media-manager',
    name: 'Social Media Manager',
    category: 'marketing',
    categoryLabel: '📣 Marketing',
    status: 'ready',
    icon: '📱',
    oneLiner: 'Creates and schedules content across 小红书, Twitter, and TikTok — zero editors needed.',
    description: [
      'Scrapes trending topics and competitor content',
      'Drafts posts matching your brand voice',
      'Schedules content across platforms',
      'Handles 10,000+ pieces of content/month',
    ],
    channels: ['Web', 'Telegram'],
    bestFor: 'E-commerce brands, MCN agencies, content teams',
    caseStudySlug: 'social-content',
  },
  {
    slug: 'video-creator',
    name: 'Marketing Video Creator',
    category: 'marketing',
    categoryLabel: '📣 Marketing',
    status: 'ready',
    icon: '🎬',
    oneLiner: 'Generates short-form marketing videos from product inputs — script to screen.',
    description: [
      'Takes product image + selling points + target platform',
      'Produces 15s/30s video scripts',
      'Generates Seedance prompts for video creation',
      'Outputs captions, hashtags, CTAs',
    ],
    channels: ['Web', 'Telegram'],
    bestFor: 'E-commerce brands, TikTok/XHS marketers',
  },
  {
    slug: 'growth-analyst',
    name: 'Growth Data Analyst',
    category: 'marketing',
    categoryLabel: '📣 Marketing',
    status: 'ready',
    icon: '📊',
    oneLiner: 'Monitors your growth metrics and competitor performance, delivers weekly insights.',
    description: [
      'Tracks platform analytics (XHS, Twitter, TikTok)',
      'Competitive benchmarking',
      'Weekly growth report with recommendations',
      'Alerts on unusual spikes or drops',
    ],
    channels: ['Web', 'Telegram'],
    bestFor: 'Marketing managers, growth teams',
  },
  {
    slug: 'outreach-bot',
    name: 'Outreach Bot',
    category: 'marketing',
    categoryLabel: '📣 Marketing',
    status: 'coming-soon',
    icon: '📧',
    oneLiner: 'Automates lead follow-up via email and messaging.',
    description: [],
    channels: [],
    bestFor: 'Sales teams, real estate, insurance',
  },

  // ── ENGINEERING ──────────────────────────────────────────
  {
    slug: 'fullstack-dev',
    name: 'Full-Stack Developer',
    category: 'engineering',
    categoryLabel: '🛠️ Engineering',
    status: 'ready',
    icon: '💻',
    oneLiner: 'Builds and ships features, fixes bugs, and writes code 24/7.',
    description: [
      'Implements frontend and backend features from specs',
      'Reviews and merges PRs',
      'Debugs and resolves issues',
      'Works in your existing GitHub repo',
    ],
    channels: ['Telegram', 'Discord', 'Web'],
    bestFor: 'Startups, small engineering teams',
    caseStudySlug: 'startup-engineering',
  },
  {
    slug: 'infra-manager',
    name: 'Infra Manager',
    category: 'engineering',
    categoryLabel: '🛠️ Engineering',
    status: 'ready',
    icon: '🖥️',
    oneLiner: 'Sets up and manages your cloud infrastructure — Docker, CI/CD, monitoring.',
    description: [
      'Provisions cloud infrastructure (AWS, GCP, Cloudflare)',
      'Manages Docker containers and deployments',
      'Sets up CI/CD pipelines',
      'Monitors uptime and sends alerts',
    ],
    channels: ['Telegram', 'Discord'],
    bestFor: 'Startups without dedicated DevOps',
  },
  {
    slug: 'gpu-training-agent',
    name: 'GPU Training Agent',
    category: 'engineering',
    categoryLabel: '🛠️ Engineering',
    status: 'ready',
    icon: '⚡',
    oneLiner: 'Manages GPU instances and runs model training jobs on schedule.',
    description: [
      'Provisions and manages GPU instances',
      'Runs training and backtest jobs',
      'Reports results and resource usage',
      'Shuts down idle instances to save cost',
    ],
    channels: ['Telegram'],
    bestFor: 'ML teams, quant researchers',
  },
  {
    slug: 'code-reviewer',
    name: 'Code Reviewer',
    category: 'engineering',
    categoryLabel: '🛠️ Engineering',
    status: 'coming-soon',
    icon: '👁️',
    oneLiner: 'Reviews PRs, checks for bugs and security issues, approves or flags.',
    description: [],
    channels: [],
    bestFor: 'Engineering teams',
  },
];

// Helper: get employees by category
export const getByCategory = (cat: EmployeeCategory) =>
  employees.filter((e) => e.category === cat);

// Helper: get ready employees only
export const getReady = () => employees.filter((e) => e.status === 'ready');
