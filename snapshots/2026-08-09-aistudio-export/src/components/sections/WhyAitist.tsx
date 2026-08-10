import { motion } from "motion/react";
import { Check, Zap, Shield, Users, Globe, Cpu } from "lucide-react";

const features = [
  {
    title: "Autonomous Execution",
    description: "Our agents don't just suggest, they execute. From sending emails to updating CRMs.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and SOC2 compliance. Your data stays private and secure.",
    icon: Shield,
  },
  {
    title: "Human-in-the-loop",
    description: "Set thresholds for human approval. You stay in control of critical decisions.",
    icon: Users,
  },
  {
    title: "Omnichannel Presence",
    description: "Deploy employees on Slack, Discord, Email, or via custom API integrations.",
    icon: Globe,
  },
  {
    title: "Continuous Learning",
    description: "Agents improve with every task, adapting to your specific business workflows.",
    icon: Cpu,
  },
  {
    title: "Verified Results",
    description: "Every task is logged and verified with a clear audit trail for accountability.",
    icon: Check,
  },
];

export default function WhyAitist() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Why teams choose <span className="text-emerald-500">Aitist</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            We're building the infrastructure for the future of work. AI that doesn't just talk, but delivers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
