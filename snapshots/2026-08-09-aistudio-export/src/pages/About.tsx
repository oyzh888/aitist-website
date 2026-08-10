import { motion } from "motion/react";
import Footer from "../components/sections/Footer";

export default function About() {
  return (
    <div className="bg-[#09090b] min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-12 tracking-tighter">About Aitist</h1>
          
          <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
            <p>
              At Aitist, we believe the future of work isn't about humans using AI tools—it's about humans leading AI workforces. 
              Founded in Sunnyvale, CA, we are on a mission to build the infrastructure that allows businesses to deploy 
              specialized, autonomous AI employees that actually get work done.
            </p>
            
            <p>
              Unlike traditional chatbots that only provide information, Aitist employees are designed for action. 
              They integrate directly with your existing software stack, follow complex workflows, and operate 24/7 
              with a level of precision and consistency that was previously impossible.
            </p>

            <div className="grid md:grid-cols-2 gap-12 py-12">
              <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-sm">To empower every organization with a scalable, intelligent workforce that removes the burden of repetitive tasks.</p>
              </div>
              <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <p className="text-sm">Integrity in data, excellence in execution, and a relentless focus on delivering real ROI for our customers.</p>
              </div>
            </div>

            <p>
              We are a team of AI researchers, engineers, and product designers who are passionate about the intersection 
              of autonomous agents and business operations. Join us as we redefine what it means to "go to work."
            </p>
          </div>
        </motion.div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
