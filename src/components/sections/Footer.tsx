const footerLinks = [
  {
    heading: 'Product',
    links: [
      { label: 'Finance Suite', href: '/finance' },
      { label: 'Marketing Suite', href: '/marketing' },
      { label: 'Engineering Suite', href: '/engineering' },
      { label: 'All Employees', href: '/employees' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog (coming soon)', href: '/blog' },
    ],
  },
  {
    heading: 'Social & Legal',
    links: [
      { label: 'Twitter/X @aitist_ai', href: '#' },
      { label: 'LinkedIn aitist-inc', href: '#' },
      { label: 'GitHub oyzh888', href: '#' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <>
      {/* Waitlist CTA Bar */}
      <div className="bg-[#111113] border-y border-[#2a2a2e] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to hire your first AI employee?
          </h2>
          <a
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff88] text-[#09090b] font-bold text-base hover:bg-[#00e87a] transition-colors duration-200 shadow-[0_0_30px_rgba(0,255,136,0.2)]"
          >
            Join the Waitlist
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#09090b] border-t border-[#2a2a2e] pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand column */}
            <div>
              <div className="text-white font-black text-2xl tracking-tight mb-2">
                aitist<span className="text-[#00ff88]">.</span>ai
              </div>
              <p className="text-[#a1a1aa] text-sm mb-4 leading-relaxed">
                AI employees that get work done.
              </p>
              <a href="mailto:0@aitist.ai" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">
                0@aitist.ai
              </a>
              <p className="text-[#a1a1aa] text-sm mt-1">Oakland, CA</p>
            </div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#a1a1aa] text-sm hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-[#2a2a2e] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[#a1a1aa] text-xs">© 2026 Aitist, Inc. All rights reserved.</p>
            <p className="text-[#a1a1aa] text-xs">
              Powered by <span className="text-white">OpenClaw</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
