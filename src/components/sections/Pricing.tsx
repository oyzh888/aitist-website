import { useState } from 'react'

const tiers = [
  {
    name: 'Starter',
    price: '$299',
    period: '/ month',
    tagline: 'For individuals and small teams',
    featured: false,
    features: [
      '1 AI employee',
      '1 channel (Telegram, Discord, 飞书, or Web)',
      'Unlimited tasks',
      'Email support',
    ],
    cta: 'Get Started',
    ctaHref: '/waitlist?plan=starter',
  },
  {
    name: 'Team',
    price: '$799',
    period: '/ month',
    tagline: 'For growing teams',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Up to 5 AI employees',
      'All channels (Telegram + Discord + 飞书 + Web)',
      'Unlimited tasks',
      'Priority support',
      'Agent monitoring dashboard',
    ],
    cta: 'Get Started',
    ctaHref: '/waitlist?plan=team',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For larger teams and regulated industries',
    featured: false,
    outline: true,
    features: [
      'Unlimited AI employees',
      'Private deployment option',
      'Custom agent training',
      'SLA guarantee',
      'Dedicated account manager',
      'Compliance & audit logs',
    ],
    cta: 'Contact Us',
    ctaHref: '/contact',
  },
]

const faqs = [
  {
    q: 'Can I change which employee I use?',
    a: 'Yes. You can swap agents anytime within your plan.',
  },
  {
    q: 'What channels are supported?',
    a: 'Telegram, Discord, 飞书 (Feishu), and Web interface.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes. Join the waitlist for early access with a 14-day free trial.',
  },
  {
    q: 'Can I self-host?',
    a: 'Enterprise plan includes private deployment options. Contact us.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto mt-16 space-y-2">
      <h3 className="text-center text-white font-semibold text-lg mb-6">Frequently asked questions</h3>
      {faqs.map((faq, i) => (
        <div key={i} className="bg-[#1a1a1d] border border-[#2a2a2e] rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#222225] transition-colors"
          >
            <span className="text-white font-medium text-sm">{faq.q}</span>
            <span className={`text-[#a1a1aa] transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-[#a1a1aa] text-sm leading-relaxed border-t border-[#2a2a2e] pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Pricing() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple pricing.{' '}
            <span className="text-[#00ff88]">One AI employee</span> at a time.
          </h2>
          <p className="text-[#a1a1aa] text-lg">Start with one. Scale to a fleet.</p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl p-7 transition-all duration-200 ${
                tier.featured
                  ? 'bg-[#1a1a1d] border-2 border-[#00ff88] shadow-[0_0_40px_rgba(0,255,136,0.12)]'
                  : tier.outline
                  ? 'bg-transparent border border-[#2a2a2e] hover:border-[#3a3a3e]'
                  : 'bg-[#1a1a1d] border border-[#2a2a2e] hover:border-[#3a3a3e]'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-[#00ff88] text-[#09090b] text-xs font-bold">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="text-[#a1a1aa] text-sm font-medium mb-1">{tier.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-mono text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && (
                    <span className="text-[#a1a1aa] text-sm">{tier.period}</span>
                  )}
                </div>
                <p className="text-[#a1a1aa] text-sm">{tier.tagline}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="text-[#00ff88] mt-0.5 font-bold shrink-0">✓</span>
                    <span className="text-[#a1a1aa]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`w-full inline-flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  tier.featured
                    ? 'bg-[#00ff88] text-[#09090b] hover:bg-[#00e87a] shadow-[0_0_20px_rgba(0,255,136,0.2)]'
                    : 'border border-[#2a2a2e] text-white hover:border-[#3a3a3e] hover:bg-[#1a1a1d]'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <FAQ />
      </div>
    </section>
  )
}
