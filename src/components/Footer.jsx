import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';

export function Footer({ onOpenResume }) {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-zinc-950 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Big Conversion Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-indigo-500/25 bg-gradient-to-br from-indigo-950/40 via-zinc-900/60 to-black text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Taking on Q1/Q2 Retainers & Projects
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Ready to Build Scroll-Stopping AI Video That Actually Converts?
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Let's discuss your creative goals, analyze your target hooks, and build an on-demand generative video pipeline tailored to your brand.
          </p>

          <div className="flex items-center justify-center pt-2">
            <a
              href={`mailto:${personal.email}?subject=${encodeURIComponent("Commercial AI Video Project Inquiry")}`}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-xl shadow-white/10 flex items-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-indigo-600" />
              Email Direct Inquiry ({personal.email})
            </a>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/5 text-xs text-zinc-400">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs font-mono">
                AI
              </div>
              <span className="font-bold text-white text-sm">
                {personal.name}
              </span>
            </div>
            <p className="max-w-sm text-zinc-400 leading-relaxed">
              Specialist AI Video & Multimedia Editor. Mastering Higgsfield kinetic choreography, HeyGen enterprise avatar scaling, and DaVinci Resolve post-production.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-white text-xs uppercase tracking-wider block mb-2">
              Navigation
            </span>
            <ul className="space-y-1.5">
              <li><button onClick={() => scrollTo('work')} className="hover:text-white transition-colors">Commercial Work</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Services & Pricing</button></li>
              <li><button onClick={() => scrollTo('workflow')} className="hover:text-white transition-colors">Production Pipeline</button></li>
              <li><button onClick={onOpenResume} className="hover:text-indigo-400 transition-colors">ATS Resume & Specs</button></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-white text-xs uppercase tracking-wider block mb-2">
              Direct Contact
            </span>
            <ul className="space-y-1.5">
              <li>
                <a href={`mailto:${personal.email}`} className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  {personal.email}
                </a>
              </li>
              <li className="text-zinc-500 text-[11px] font-mono pt-1">
                Typical response time: &lt; 4 hours
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-mono pt-4 border-t border-white/5">
          <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          <span>Crafted with React, Tailwind & Vite • High-Performance AI Video Portfolio</span>
        </div>

      </div>
    </footer>
  );
}
