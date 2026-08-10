import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter, Bot, MessageSquare, Code, BarChart, ShieldCheck, Zap } from "lucide-react";
import Footer from "../components/sections/Footer";

const employees = [
  {
    id: "alex",
    name: "Alex",
    role: "Sales Development Rep",
    category: "Sales",
    oneLiner: "Automates outbound prospecting and lead qualification.",
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    bestFor: "B2B SaaS, Agency lead gen",
  },
  {
    id: "jordan",
    name: "Jordan",
    role: "Data Analyst",
    category: "Operations",
    oneLiner: "Turns raw data into actionable insights and reports.",
    icon: BarChart,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    bestFor: "E-commerce, Marketing teams",
  },
  {
    id: "devin",
    name: "Devin",
    role: "Technical Support",
    category: "Support",
    oneLiner: "Resolves complex technical tickets 24/7.",
    icon: Code,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    bestFor: "Software companies, IT departments",
  },
  {
    id: "casey",
    name: "Casey",
    role: "Content Strategist",
    category: "Marketing",
    oneLiner: "Generates SEO-optimized content and social copy.",
    icon: Bot,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    bestFor: "Content agencies, Brand teams",
  },
  {
    id: "sam",
    name: "Sam",
    role: "Compliance Officer",
    category: "Legal",
    oneLiner: "Monitors data privacy and regulatory compliance.",
    icon: ShieldCheck,
    color: "text-red-500",
    bg: "bg-red-500/10",
    bestFor: "Fintech, Healthcare startups",
  },
  {
    id: "morgan",
    name: "Morgan",
    role: "Workflow Automator",
    category: "Operations",
    oneLiner: "Connects your tools and automates repetitive tasks.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    bestFor: "Operations managers, Founders",
  },
];

const categories = ["All", "Sales", "Marketing", "Support", "Operations", "Legal"];

export default function Employees() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase()) || 
                         emp.role.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || emp.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#09090b] min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">AI Employee Directory</h1>
          <p className="text-zinc-400 text-lg">
            Specialized AI employees, each trained for a specific job. Browse by category or search to find the right agent for your team.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by name or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-4 rounded-xl text-sm font-semibold transition-all",
                  activeCategory === cat ? "bg-emerald-500 text-black" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {filtered.map((emp, index) => (
            <motion.div
              key={emp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", emp.bg)}>
                <emp.icon className={cn("w-7 h-7", emp.color)} />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white">{emp.name}</h3>
                <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-zinc-800 text-zinc-500 font-bold">
                  {emp.category}
                </span>
              </div>
              <p className="text-emerald-500 text-sm font-medium mb-4">{emp.role}</p>
              <p className="text-zinc-400 mb-6 leading-relaxed">{emp.oneLiner}</p>
              
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 mb-4">
                  <span className="text-zinc-400 font-bold">Best for:</span> {emp.bestFor}
                </p>
                <a 
                  href="mailto:0@aitist.ai"
                  className="w-full py-3 rounded-lg bg-zinc-800 text-white text-sm font-bold hover:bg-emerald-500 hover:text-black transition-all text-center block"
                >
                  Hire {emp.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Request */}
        <div className="p-12 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 text-center mb-32">
          <h3 className="text-2xl font-bold text-white mb-4">Need a custom AI employee?</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Enterprise plans include custom agent training for your specific workflows and data.
          </p>
          <a 
            href="mailto:0@aitist.ai"
            className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors inline-block"
          >
            Contact Sales
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
