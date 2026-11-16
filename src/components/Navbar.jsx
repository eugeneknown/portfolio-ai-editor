import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calendar, FileText, ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export function Navbar({ onOpenResume, onOpenEstimator }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/25">
            <span className="font-mono text-base tracking-tighter">AI</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-100 text-lg tracking-tight hover:text-indigo-400 transition-colors">
                {personal.name}
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
                Available
              </span>
            </div>
            <p className="text-xs text-zinc-400 hidden sm:block">HeyGen & Higgsfield Video Specialist</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <button onClick={() => scrollTo('work')} className="hover:text-white transition-colors">
            Featured Work
          </button>
          <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">
            Services
          </button>
          <button onClick={() => scrollTo('workflow')} className="hover:text-white transition-colors">
            AI Pipeline
          </button>
          <button onClick={() => scrollTo('tools')} className="hover:text-white transition-colors">
            Tech Stack
          </button>
          <button onClick={() => scrollTo('estimator')} className="hover:text-white transition-colors flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            Scope Estimator
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-all hover:border-white/20"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            Resume & Specs
          </button>
          
          <a
            href={personal.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all transform active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Call
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 border-b border-zinc-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-zinc-300">
            <button onClick={() => scrollTo('work')} className="text-left py-2 hover:text-indigo-400">
              Featured Work
            </button>
            <button onClick={() => scrollTo('services')} className="text-left py-2 hover:text-indigo-400">
              Services
            </button>
            <button onClick={() => scrollTo('workflow')} className="text-left py-2 hover:text-indigo-400">
              AI Pipeline
            </button>
            <button onClick={() => scrollTo('tools')} className="text-left py-2 hover:text-indigo-400">
              Tech Stack
            </button>
            <button onClick={() => scrollTo('estimator')} className="text-left py-2 hover:text-indigo-400 text-indigo-400">
              Scope Estimator
            </button>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-zinc-200 border border-zinc-700"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              Resume & Specs
            </button>
            <a
              href={personal.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
            >
              <Calendar className="w-4 h-4" />
              Book Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
