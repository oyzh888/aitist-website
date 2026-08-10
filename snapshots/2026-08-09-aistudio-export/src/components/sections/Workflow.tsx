import { motion } from "motion/react";
import { Search, Settings, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Select Agent",
    description: "Choose from our directory of specialized AI employees or request a custom one.",
    icon: Search,
  },
  {
    title: "Configure Workflows",
    description: "Connect your tools and define the specific tasks and approval thresholds.",
    icon: Settings,
  },
  {
    title: "Deploy & Execute",
    description: "Your AI employee starts working 24/7 across your chosen channels.",
    icon: Rocket,
  },
  {
    title: "Verify & Scale",
    description: "Review completed work and scale your AI workforce as your business grows.",
    icon: CheckCircle2,
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">How it works</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Deploying an AI workforce is simpler than you think. From selection to execution in minutes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent hidden lg:block -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 relative z-10 group-hover:border-emerald-500/50 transition-colors shadow-2xl">
                  <step.icon className="w-8 h-8 text-emerald-500" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-black text-xs font-bold flex items-center justify-center">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Illustrative Diagram Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-transparent max-w-5xl mx-auto"
        >
          <div className="bg-zinc-950 rounded-[22px] overflow-hidden aspect-video relative">
            <img 
              src="https://picsum.photos/seed/workflow/1200/800?blur=2" 
              alt="Workflow Visualization" 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl max-w-md">
                <p className="text-emerald-400 font-mono text-xs mb-4 tracking-widest uppercase">System Architecture</p>
                <h4 className="text-2xl font-bold text-white mb-4">Autonomous Execution Engine</h4>
                <p className="text-zinc-400 text-sm">
                  Our proprietary engine handles task decomposition, tool selection, and execution with 99.9% reliability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
