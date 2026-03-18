export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,136,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(0,212,255,0.04),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a2a2e] bg-[#1a1a1d] text-[#a1a1aa] text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          Now in Early Access
        </div>

        {/* Headline */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 leading-none">
          <span className="text-[#00ff88]">Jobs Done.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
          Not another AI chatbot.{' '}
          <span className="text-white">Aitist deploys 24/7 AI employees</span>{' '}
          that complete real work — for your business, on the channels you already use.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="/waitlist"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#00ff88] text-[#09090b] font-bold text-base hover:bg-[#00e87a] transition-colors duration-200 shadow-[0_0_30px_rgba(0,255,136,0.25)]"
          >
            Get Early Access
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#2a2a2e] text-white font-medium text-base hover:border-[#3a3a3e] hover:bg-[#1a1a1d] transition-colors duration-200"
          >
            Talk to Sales
          </a>
        </div>

        {/* Channel Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-[#a1a1aa] text-sm">Works with:</span>
          {[
            { name: 'Telegram', icon: '✈️' },
            { name: 'Discord', icon: '🎮' },
            { name: '飞书 Feishu', icon: '🪁' },
            { name: 'Web', icon: '🌐' },
          ].map((ch) => (
            <span
              key={ch.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2a2a2e] bg-[#1a1a1d] text-[#a1a1aa] text-sm hover:border-[#3a3a3e] hover:text-white transition-colors duration-200"
            >
              <span>{ch.icon}</span>
              {ch.name}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a1a1aa]">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#2a2a2e]" />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
          <path d="M8 12L2 6h12L8 12z" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
    </section>
  )
}
