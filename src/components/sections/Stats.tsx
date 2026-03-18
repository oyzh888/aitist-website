const stats = [
  { value: '24/7', label: 'Always running' },
  { value: '500+', label: 'Signals tracked daily' },
  { value: '10,000+', label: 'Tasks completed monthly' },
]

export default function Stats() {
  return (
    <section className="bg-[#111113] border-y border-[#2a2a2e] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-[#a1a1aa] text-sm font-medium uppercase tracking-widest mb-12">
          Trusted by teams who need results
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative text-center">
              {/* Vertical divider */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#2a2a2e]" />
              )}
              <div className="font-mono text-5xl md:text-6xl font-bold text-[#00ff88] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[#a1a1aa] text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
