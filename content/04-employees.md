# Section 04 — AI Employee Directory (Teaser on Homepage)

## Section Headline
```
Meet your AI team.
```

## Section Subheadline
```
Specialized AI employees, ready to hire.
Each one is trained for a specific job — not a general chatbot.
```

## Employee Categories & Listings

### 💼 Finance
| Employee | Status |
|----------|--------|
| Hedge Fund Analyst | ✅ Ready |
| Market Signal Tracker | ✅ Ready |
| Portfolio Manager (AlphaVault) | ✅ Ready |
| CFO Assistant | 🔜 Coming Soon |

### 📣 Marketing
| Employee | Status |
|----------|--------|
| KOL & Influencer Scout | ✅ Ready |
| Social Media Manager (XHS · Twitter · TikTok) | ✅ Ready |
| Marketing Video Creator (Seedance) | ✅ Ready |
| Growth Data Analyst | ✅ Ready |
| Outreach Bot | 🔜 Coming Soon |

### 🛠️ Engineering
| Employee | Status |
|----------|--------|
| Full-Stack Developer | ✅ Ready |
| Infra Manager | ✅ Ready |
| GPU Training Agent | ✅ Ready |
| Code Reviewer | 🔜 Coming Soon |

## CTA
```
[See All Employees →]  →  /employees
```

## Homepage Teaser Notes
- On homepage: show top 3 per category, truncated
- Full directory lives at /employees
- Each employee card links to /employees/[slug]

## Employee Card Format (Homepage)
```
┌──────────────────────────┐
│  [Icon]  Employee Name   │
│  Category badge          │
│  One-line description    │
│  ✅ Ready  /  🔜 Soon   │
└──────────────────────────┘
```

## Design Notes
- Three-column layout (Finance / Marketing / Engineering)
- Each column has a category header with icon
- Ready items: full opacity; Coming Soon: 60% opacity + "Coming Soon" badge
- Hover on each card: subtle lift shadow
- "See All Employees" CTA at bottom center
