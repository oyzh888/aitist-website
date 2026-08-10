import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-6 block">
              Aitist<span className="text-emerald-500">.ai</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              The infrastructure for the future of work. Deploying AI employees that get work done.
            </p>
            <div className="text-zinc-600 text-xs font-mono mb-8">
              <p>Sunnyvale, CA, US</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="/employees" className="hover:text-emerald-500 transition-colors">AI Employees</Link></li>
              <li><a href="/#pricing" className="hover:text-emerald-500 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-emerald-500 transition-colors">Careers</Link></li>
              <li><a href="mailto:0@aitist.ai" className="hover:text-emerald-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="/legal?tab=privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal?tab=terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal?tab=cookies" className="hover:text-emerald-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-900 text-xs text-zinc-600 font-mono">
          <p>© 2026 Aitist, Inc. All rights reserved.</p>
          <p>Built with ❤️ for the future of work.</p>
        </div>
      </div>
    </footer>
  );
}
