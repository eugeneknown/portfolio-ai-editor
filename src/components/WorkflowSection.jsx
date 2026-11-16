import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, Cpu, Film, CheckCircle } from 'lucide-react';

const stepIcons = [Compass, Cpu, Film, CheckCircle];

export function WorkflowSection() {
  const { workflowProcess } = portfolioData;

  return (
    <section id="workflow" className="py-24 relative bg-zinc-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            The Production System
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Raw Prompt to Broadcast Delivery
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Why direct clients hire an editor rather than relying on automated AI generators.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowProcess.map((step, idx) => {
            const Icon = stepIcons[idx] || Cpu;

            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-zinc-700 group-hover:text-indigo-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Phase {step.step} Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
