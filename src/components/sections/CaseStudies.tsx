import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/cases'

const categoryColors: Record<string, string> = {
  finance: 'text-[#00ff88] border-[#00ff88]/20 bg-[#00ff88]/10',
  marketing: 'text-[#00d4ff] border-[#00d4ff]/20 bg-[#00d4ff]/10',
  engineering: 'text-[#a78bfa] border-[#a78bfa]/20 bg-[#a78bfa]/10',
}

export default function CaseStudies() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real work, real results.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl">
            See what happens when businesses deploy AI employees that actually ship.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible snap-x snap-mandatory md:snap-none">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="group flex-shrink-0 w-80 md:w-auto snap-start bg-[#1a1a1d] border border-[#2a2a2e] rounded-xl p-6 hover:border-[#3a3a3e] transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Top: client type + category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#a1a1aa] text-xs">{cs.clientType}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[cs.category]}`}>
                  {cs.category}
                </span>
              </div>

              {/* Headline metric */}
              <div className="font-mono text-xl font-bold text-white mb-2 leading-snug">
                {cs.headline}
              </div>

              {/* Agent name */}
              <div className="text-[#00ff88] text-sm font-medium mb-4">{cs.agentName}</div>

              {/* Details */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {cs.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#a1a1aa] text-xs leading-relaxed">
                    <span className="text-[#00ff88] mt-0.5 shrink-0">·</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <blockquote className="border-l-2 border-[#00ff88]/30 pl-3 text-[#a1a1aa] text-sm italic mb-4 leading-relaxed">
                "{cs.quote}"
              </blockquote>

              {/* Link */}
              <Link
                to="/employees"
                className="inline-flex items-center gap-1.5 text-[#00ff88] text-sm font-medium hover:gap-2.5 transition-all duration-200"
              >
                View Agent <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
