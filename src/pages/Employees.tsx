import { useState } from 'react'
import { Link } from 'react-router-dom'
import { employees, type EmployeeCategory } from '../data/employees'

type Tab = 'all' | EmployeeCategory

const tabs: { key: Tab; label: string }[] = [
  { key: 'all', label: 'All Employees' },
  { key: 'finance', label: '💼 Finance' },
  { key: 'marketing', label: '📣 Marketing' },
  { key: 'engineering', label: '🛠️ Engineering' },
]

export default function Employees() {
  const [activeTab, setActiveTab] = useState<Tab>('all')

  const filtered =
    activeTab === 'all' ? employees : employees.filter((e) => e.category === activeTab)

  const readyCount = filtered.filter((e) => e.status === 'ready').length

  return (
    <div className="bg-[#09090b] min-h-screen">
      {/* Nav */}
      <nav className="border-b border-[#2a2a2e] px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-white font-black text-xl tracking-tight">
            aitist<span className="text-[#00ff88]">.</span>ai
          </Link>
          <Link
            to="/"
            className="text-[#a1a1aa] text-sm hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            AI Employee Directory
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-2xl leading-relaxed">
            Specialized AI employees, each trained for a specific job. Browse by category
            or search to find the right agent for your team.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-8 border-b border-[#2a2a2e] pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 text-sm font-medium rounded-t-lg -mb-px transition-colors duration-150 border-b-2 ${
                activeTab === tab.key
                  ? 'border-[#00ff88] text-[#00ff88] bg-[#00ff88]/5'
                  : 'border-transparent text-[#a1a1aa] hover:text-white hover:border-[#3a3a3e]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-[#a1a1aa] text-sm mb-8">
          Showing <span className="text-white font-medium">{filtered.length}</span> employees
          {' '}·{' '}
          <span className="text-[#00ff88] font-medium">{readyCount} ready</span>
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((emp) => (
            <div
              key={emp.slug}
              className={`group bg-[#1a1a1d] border border-[#2a2a2e] rounded-xl p-6 hover:border-[#3a3a3e] transition-all duration-200 hover:-translate-y-0.5 flex flex-col ${
                emp.status === 'coming-soon' ? 'opacity-60' : ''
              }`}
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#111113] border border-[#2a2a2e] flex items-center justify-center text-xl shrink-0">
                    {emp.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{emp.name}</div>
                    <div className="text-[#a1a1aa] text-xs">{emp.categoryLabel}</div>
                  </div>
                </div>
                {emp.status === 'ready' ? (
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
                    ✅ Ready
                  </span>
                ) : (
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-[#a1a1aa]/10 text-[#a1a1aa] border border-[#a1a1aa]/20">
                    🔜 Soon
                  </span>
                )}
              </div>

              {/* One-liner */}
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">{emp.oneLiner}</p>

              {/* Description bullets */}
              {emp.description.length > 0 && (
                <ul className="space-y-1.5 mb-4 flex-1">
                  {emp.description.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                      <span className="text-[#00ff88] shrink-0 mt-0.5">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto space-y-3">
                {/* Channels */}
                {emp.channels.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {emp.channels.map((ch) => (
                      <span
                        key={ch}
                        className="text-xs px-2 py-0.5 rounded-full border border-[#2a2a2e] text-[#a1a1aa]"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                )}

                {/* Best for */}
                <p className="text-xs text-[#a1a1aa]">
                  <span className="text-white">Best for:</span> {emp.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-12 bg-[#1a1a1d] border border-[#2a2a2e] rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">Need a custom AI employee?</h3>
          <p className="text-[#a1a1aa] mb-6 max-w-md mx-auto">
            Enterprise plans include custom agent training for your specific workflows and data.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#00ff88] text-[#09090b] font-bold hover:bg-[#00e87a] transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Minimal footer */}
      <footer className="border-t border-[#2a2a2e] py-6 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#a1a1aa] text-xs">© 2026 Aitist, Inc. All rights reserved.</p>
          <Link to="/" className="text-[#a1a1aa] text-xs hover:text-white transition-colors">
            aitist.ai
          </Link>
        </div>
      </footer>
    </div>
  )
}
