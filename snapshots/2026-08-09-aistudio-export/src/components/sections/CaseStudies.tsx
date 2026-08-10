import { motion } from "motion/react";

const cases = [
  {
    title: "Fintech Quant Lab",
    result: "24/7 Alpha Generation",
    description: "Implemented autonomous quantitative trading agents that monitor global markets, execute complex arbitrage strategies, and optimize portfolio risk in real-time with zero human intervention.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "E-commerce MCN",
    result: "300% Traffic Growth",
    description: "Automated influencer discovery and outreach. Our agents generate high-engagement social posts and manage multi-channel content distribution to drive massive organic traffic and sales.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Real results, real impact</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            See how forward-thinking companies are scaling their operations with Aitist AI employees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = "mailto:0@aitist.ai"}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-zinc-800">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-block px-4 py-1 rounded-full bg-emerald-500 text-black text-xs font-bold mb-4">
                    {c.result}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{c.title}</h3>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
