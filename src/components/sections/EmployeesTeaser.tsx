import { Link } from 'react-router-dom'
import { employees, getByCategory } from '../../data/employees'

const categories = [
  { key: 'finance' as const, label: '💼 Finance' },
  { key: 'marketing' as const, label: '📣 Marketing' },
  { key: 'engineering' as const, label: '🛠️ Engineering' },
]

export default function EmployeesTeaser() {
  return (
    <section className="py-28 px-4 bg-[#111113]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet your AI team.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto">
            Specialized AI employees, ready to hire.{' '}
            Each one is trained for a specific job — not a general chatbot.
          </p>
        </div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map(({ key, label }) => {
            const catEmployees = getByCategory(key).slice(0, 3)
            return (
              <div key={key}>
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-semibold text-white text-base">{label}</h3>
                </div>
                <div className="space-y-3">
                  {catEmployees.map((emp) => (
                    <Link
                      key={emp.slug}
                      to={`/employees`}
                      className={`group block bg-[#1a1a1d] border border-[#2a2a2e] rounded-xl p-4 hover:border-[#3a3a3e] transition-all duration-200 hover:-translate-y-0.5 ${
                        emp.status === 'coming-soon' ? 'opacity-60' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{emp.icon}</span>
                          <span className="font-semibold text-white text-sm">{emp.name}</span>
                        </div>
                        {emp.status === 'ready' ? (
                          <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
                            Ready
                          </span>
                        ) : (
                          <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-[#a1a1aa]/10 text-[#a1a1aa] border border-[#a1a1aa]/20">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="text-[#a1a1aa] text-xs leading-relaxed line-clamp-2">
                        {emp.oneLiner}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/employees"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#2a2a2e] text-white font-medium hover:border-[#00ff88] hover:text-[#00ff88] transition-colors duration-200"
          >
            See All {employees.length} Employees
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
