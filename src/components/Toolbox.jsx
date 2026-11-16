import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Wrench, CheckCircle, ShieldCheck } from 'lucide-react';

export function Toolbox() {
  const { tools } = portfolioData;

  return (
    <section id="tools" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Certified Toolchain
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The AI Video Production Engine
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A battle-tested stack combining cutting-edge generative AI models with industry-standard Hollywood NLE finishing software.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {tool.badge}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {tool.proficiency}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {tool.category}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
                <CheckCircle className="w-3 h-3 text-indigo-400" />
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
