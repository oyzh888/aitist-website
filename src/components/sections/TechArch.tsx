const techBlocks = [
  {
    icon: '🧠',
    title: 'Persistent Memory',
    body: 'Agents remember context across days, weeks, and months. Your Finance agent knows your portfolio history. Your Marketing agent knows your brand voice. Memory that actually persists.',
  },
  {
    icon: '⚡',
    title: 'Multi-Agent Orchestration',
    body: 'A Master agent coordinates specialist worker agents — delegating tasks, verifying outputs, retrying on failure. Like a real team, not a single overloaded model.',
  },
  {
    icon: '🔁',
    title: 'Proactive Scheduling',
    body: 'Agents don\'t wait to be asked. They run on schedule, react to live signals, and push results on time. Heartbeat monitoring ensures nothing goes silent.',
  },
  {
    icon: '🔒',
    title: 'Reliable Concurrency',
    body: 'Built-in task locking, rate limiting, and automatic failure recovery. Agents handle parallel workloads without collisions — enterprise-grade reliability at SMB price.',
  },
]

const securityBlocks = [
  {
    icon: '🏠',
    title: 'Private Deployment',
    body: 'Run Aitist on your own infra — NAS, private cloud, or on-premise. Your data never leaves your servers.',
  },
  {
    icon: '🔐',
    title: 'End-to-End Encryption',
    body: 'All data in transit and at rest is encrypted. Agents communicate through secure, authenticated channels.',
  },
  {
    icon: '👥',
    title: 'Role-Based Access Control',
    body: 'Granular permissions for your team. Control which humans can access which agents and their outputs.',
  },
  {
    icon: '📋',
    title: 'Full Audit Logs',
    body: 'Every agent action is logged with timestamps. Full traceability for compliance and debugging.',
  },
  {
    icon: '📊',
    title: 'Agent Monitoring Dashboard',
    body: 'Real-time visibility into agent activity, task success rates, and error patterns.',
  },
  {
    icon: '🌍',
    title: 'Data Residency',
    body: 'Deploy in your preferred region. Data stays where you need it for compliance.',
  },
]

export default function TechArch() {
  return (
    <section className="bg-[#111113] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Part A — Technology */}
        <div className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built different.
            </h2>
            <p className="text-[#a1a1aa] text-lg max-w-2xl leading-relaxed">
              While other AI tools are glorified chatbots, Aitist agents are powered by{' '}
              <span className="text-white font-medium">OpenClaw</span> — a purpose-built
              multi-agent infrastructure for getting work done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {techBlocks.map((block) => (
              <div
                key={block.title}
                className="group bg-[#1a1a1d] border border-[#2a2a2e] rounded-xl p-7 hover:border-[#3a3a3e] transition-all duration-200"
              >
                <div className="text-3xl mb-4">{block.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{block.title}</h3>
                <p className="text-[#a1a1aa] text-[15px] leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2a2e] mb-20" />

        {/* Part B — Security */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise-grade security.
            </h2>
            <p className="text-[#a1a1aa] text-lg max-w-xl">
              For Finance, Healthcare, Legal, and any team that handles sensitive data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {securityBlocks.map((block) => (
              <div
                key={block.title}
                className="group bg-[#1a1a1d] border border-[#2a2a2e] rounded-xl p-6 hover:border-[#3a3a3e] transition-all duration-200"
              >
                <div className="text-2xl mb-3">{block.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{block.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#2a2a2e] text-[#a1a1aa] text-sm font-medium hover:border-[#3a3a3e] hover:text-white transition-colors duration-200"
            >
              For regulated industries → Contact Us for Private Deployment
            </a>
          </div>

          <p className="mt-10 text-[#a1a1aa] text-xs">
            Powered by <span className="text-white">OpenClaw</span> · Built by Aitist, Inc.
          </p>
        </div>
      </div>
    </section>
  )
}
