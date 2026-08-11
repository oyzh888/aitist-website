import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for small teams automating basic tasks.",
    features: ["1 AI Employee", "Standard Workflows", "Slack & Email Integration", "8/5 Support"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$999",
    description: "Scale your operations with multi-agent workflows.",
    features: ["3 AI Employees", "Custom Workflow Builder", "Full API Access", "Priority 24/7 Support", "Advanced Analytics"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale automation.",
    features: ["Unlimited Employees", "Custom Agent Training", "Dedicated Success Manager", "On-premise Deployment", "Custom Security Controls"],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-zinc-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Simple, transparent pricing</h2>
        <p className="text-zinc-400 text-lg mb-20 max-w-2xl mx-auto">
          Choose the plan that fits your team's needs. All plans include our core AI infrastructure.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-3xl border flex flex-col text-left",
                tier.popular ? "bg-zinc-900 border-emerald-500/50 shadow-2xl shadow-emerald-500/10" : "bg-zinc-900/50 border-zinc-800"
              )}
            >
              {tier.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-zinc-500">/mo</span>}
                </div>
                <p className="text-zinc-400 text-sm">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="mailto:0@aitist.ai"
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all text-center block",
                  tier.popular ? "bg-emerald-500 text-black hover:bg-emerald-400" : "bg-zinc-800 text-white hover:bg-zinc-700"
                )}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
