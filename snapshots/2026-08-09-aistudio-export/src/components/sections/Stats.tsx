import { motion } from "motion/react";

const stats = [
  { label: "Messages / Day", value: "1,000+" },
  { label: "Enterprise Clients", value: "10+" },
  { label: "Avg. Response Time", value: "< 2s" },
  { label: "System Uptime", value: "99.9%" },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-zinc-900 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-5xl font-bold text-white mb-2 font-mono tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
