// Case study data — matches content/05-case-studies.md

export interface CaseStudy {
  slug: string;
  clientType: string;
  agentName: string;
  agentSlug: string;
  category: 'finance' | 'marketing' | 'engineering';
  headline: string;           // The big metric
  details: string[];
  quote: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'hedge-fund',
    clientType: 'Quant fund, 3-person team',
    agentName: 'Portfolio Manager (AlphaVault)',
    agentSlug: 'portfolio-manager',
    category: 'finance',
    headline: '$400K live portfolio, fully automated',
    details: [
      'Weekly rebalancing across 95 stocks — zero manual execution',
      'Momentum strategy with dynamic weighting',
      '8+ hrs/week of manual tracking eliminated',
      'Runs on schedule every Friday, pushes report to Telegram',
    ],
    quote: 'It rebalanced my portfolio while I was asleep. That\'s what AI was supposed to be.',
  },
  {
    slug: 'kol-research',
    clientType: 'Brand marketing team',
    agentName: 'KOL & Influencer Scout',
    agentSlug: 'kol-scout',
    category: 'marketing',
    headline: 'Research time: 3 days → 2 hours',
    details: [
      '50+ KOLs profiled per campaign',
      'Competitor content tracked across 小红书, TikTok, YouTube',
      'Weekly influencer shortlist delivered to Telegram automatically',
      'Agent browses web, extracts follower data, engagement rates, topic fit',
    ],
    quote: 'We used to spend 3 days researching. Now it\'s 2 hours and the report is better.',
  },
  {
    slug: 'social-content',
    clientType: 'E-commerce brand, 10+ accounts',
    agentName: 'Social Media Manager',
    agentSlug: 'social-media-manager',
    category: 'marketing',
    headline: '10,000+ pieces of content/month',
    details: [
      'Daily content scheduled across multiple platforms',
      'Built-in web browsing for trend scraping and competitor tracking',
      'Account voice stays consistent across all posts',
      'Zero human editors needed for routine content',
    ],
    quote: '10,000 posts a month. My team didn\'t write a single one.',
  },
  {
    slug: 'startup-engineering',
    clientType: 'Early-stage startup, 2 engineers',
    agentName: 'Infra Manager + Full-Stack Developer',
    agentSlug: 'infra-manager',
    category: 'engineering',
    headline: 'Full infra setup: 3 days (vs 3 weeks manual)',
    details: [
      'Complete cloud infra setup including CI/CD, Docker, monitoring',
      'Zero dedicated DevOps hire needed',
      'Ongoing: PR review, deployment automation, uptime monitoring',
      'Engineers focus on product — agent handles operations 24/7',
    ],
    quote: 'We have 2 engineers and infrastructure like a 20-person company.',
  },
  {
    slug: 'market-signals',
    clientType: 'Individual trader / family office',
    agentName: 'Market Signal Tracker',
    agentSlug: 'market-signal-tracker',
    category: 'finance',
    headline: '500+ signals tracked daily, zero manual monitoring',
    details: [
      'Earnings events, macro news, KOL positions — all consolidated',
      'Daily briefing delivered to Telegram at 6AM',
      'Works alongside AlphaVault for full portfolio intelligence loop',
      'Alerts on anomalies in real-time',
    ],
    quote: 'I wake up to a full market brief every morning. Haven\'t missed a signal in weeks.',
  },
];
