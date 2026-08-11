import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/sections/Footer";

export default function Legal() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "privacy";

  const content = {
    privacy: {
      title: "Privacy Policy",
      text: "At Aitist, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our services. We only collect data that is necessary to provide and improve our AI employee services. Your data is encrypted at rest and in transit, and we never sell your information to third parties."
    },
    terms: {
      title: "Terms of Service",
      text: "By using Aitist, you agree to comply with our terms of service. Our platform is designed for professional use, and users are responsible for the actions initiated by their AI employees. We provide the infrastructure, but the configuration and oversight remain with the human lead."
    },
    cookies: {
      title: "Cookie Policy",
      text: "We use cookies to enhance your experience on our website. These small files help us remember your preferences and analyze how our site is used. You can manage your cookie settings through your browser at any time."
    }
  };

  const active = content[tab as keyof typeof content] || content.privacy;

  return (
    <div className="bg-[#09090b] min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-12 tracking-tighter">{active.title}</h1>
          <div className="p-12 rounded-3xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-lg leading-relaxed">
            <p>{active.text}</p>
            <p className="mt-8">
              This is a simplified placeholder for legal documentation. For the full legal text, please contact our legal department at <a href="mailto:0@aitist.ai" className="text-emerald-500">0@aitist.ai</a>.
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
