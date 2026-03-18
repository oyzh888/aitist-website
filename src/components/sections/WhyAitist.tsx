const cards = [
  {
    icon: '🔁',
    title: 'Always On',
    body: 'Agents run 24/7 — no prompting, no babysitting. They work while you sleep, and push results when they\'re ready.',
  },
  {
    icon: '✅',
    title: 'Real Output',
    body: 'Reports, content, trades, code, leads — completed and delivered. Not suggestions. Not drafts. Done.',
  },
  {
    icon: '💬',
    title: 'Your Channels',
    body: 'Works inside Telegram, Discord, 飞书, and Web. No new dashboard to learn. AI where your team already is.',
  },
]

export default function WhyAitist() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Most AI answers questions.
            <br />
            <span className="text-[#00ff88]">Aitist gets things done.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-[#1a1a1d] border border-[#2a2a2e] rounded-xl p-8 hover:border-[#3a3a3e] transition-all duration-200 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
            >
              <div className="text-4xl mb-5">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed text-[15px]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
