import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Code, BarChart, MessageSquare, TrendingUp } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 65 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 80 },
  { name: 'Sat', value: 55 },
  { name: 'Sun', value: 90 },
];

const teasers = [
  {
    name: "Alex",
    role: "SDR / Lead Gen",
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    chartColor: "#3b82f6",
    stats: {
      efficiency: "98%",
      tasks: "1,240+",
      savings: "$4.2k/mo"
    }
  },
  {
    name: "Jordan",
    role: "Data Analyst",
    icon: BarChart,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    chartColor: "#a855f7",
    stats: {
      efficiency: "99%",
      tasks: "850+",
      savings: "$6.8k/mo"
    }
  },
  {
    name: "Devin",
    role: "Technical Support",
    icon: Code,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    chartColor: "#10b981",
    stats: {
      efficiency: "97%",
      tasks: "3,100+",
      savings: "$5.5k/mo"
    }
  },
];

export default function EmployeesTeaser() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tighter">
              Meet your new <span className="italic serif text-emerald-500">colleagues</span>
            </h2>
            <p className="text-zinc-400 text-xl font-light">
              Specialized AI employees, each trained for a specific job. Ready to join your team in minutes.
            </p>
          </div>
          <Link
            to="/employees"
            className="flex items-center gap-2 text-emerald-500 font-bold hover:text-emerald-400 transition-colors group px-6 py-3 bg-emerald-500/5 rounded-full border border-emerald-500/20"
          >
            View all employees
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {teasers.map((emp, index) => (
            <motion.div
              key={emp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-1 rounded-[32px] bg-gradient-to-b from-zinc-800 to-transparent hover:from-emerald-500/30 transition-all duration-500"
            >
              <div className="bg-zinc-900 rounded-[30px] p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl", emp.bg)}>
                    <emp.icon className={cn("w-8 h-8", emp.color)} />
                  </div>
                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-white mb-1">{emp.name}</h3>
                    <p className="text-zinc-500 text-sm font-medium">{emp.role}</p>
                  </div>
                </div>

                <div className="flex-grow space-y-8">
                  {/* Performance Chart */}
                  <div className="h-32 w-full -mx-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id={`color-${emp.name}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={emp.chartColor} stopOpacity={0.3}/>
                            <stop offset="95%" stopColor={emp.chartColor} stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke={emp.chartColor} 
                          fillOpacity={1} 
                          fill={`url(#color-${emp.name})`} 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Efficiency</p>
                      <p className="text-lg font-bold text-white">{emp.stats.efficiency}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Tasks</p>
                      <p className="text-lg font-bold text-white">{emp.stats.tasks}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Savings</p>
                      <p className="text-lg font-bold text-emerald-500">{emp.stats.savings}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span>PERFORMANCE: OPTIMAL</span>
                  </div>
                  <a 
                    href="mailto:0@aitist.ai"
                    className="px-4 py-2 bg-zinc-800 text-white text-xs font-bold rounded-lg hover:bg-emerald-500 hover:text-black transition-all"
                  >
                    Hire {emp.name}
                  </a>
                </div>
              </div>
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
