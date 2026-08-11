import { motion } from "motion/react";
import Footer from "../components/sections/Footer";
import { ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "AI Engineer",
    location: "Sunnyvale, CA / Remote",
    type: "Full-time",
    description: "Help us build and fine-tune the autonomous execution engine that powers our AI employees. You'll work with LLMs, agentic frameworks, and complex tool-use scenarios.",
  },
  {
    title: "Product Manager",
    location: "Sunnyvale, CA / Remote",
    type: "Full-time",
    description: "Define the future of AI-human collaboration. You'll lead the development of our workflow builder and employee directory, ensuring our agents solve real business problems.",
  },
];

export default function Careers() {
  return (
    <div className="bg-[#09090b] min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 tracking-tighter">Careers</h1>
          <p className="text-zinc-400 text-xl mb-16">Join us in building the workforce of the future.</p>
          
          <div className="space-y-6 mb-32">
            {jobs.map((job) => (
              <div key={job.title} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-zinc-500 mb-4">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                  </div>
                  <a 
                    href="mailto:0@aitist.ai"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-emerald-500 transition-all group"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Don't see a perfect fit?</h3>
            <p className="text-zinc-400 mb-8">We're always looking for talented individuals. Send us your resume anyway!</p>
            <a href="mailto:0@aitist.ai" className="text-emerald-500 font-bold hover:underline">0@aitist.ai</a>
          </div>
        </motion.div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
