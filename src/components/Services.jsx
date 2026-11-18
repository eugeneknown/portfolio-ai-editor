import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Users, Film, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Users: Users,
  Film: Film
};

export function Services({ onSelectService }) {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 relative bg-zinc-950/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Commercial Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Direct ROI & Rapid Scale
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Choose a dedicated project package or integrate ongoing monthly retainers for high-velocity creative testing.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between relative group border border-white/10 hover:border-indigo-500/40"
              >
                {/* Highlight Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700">
                    {service.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-white/5 space-y-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Key Inclusions:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tool Badges */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {service.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] text-zinc-400 uppercase tracking-wider">Starts at</span>
                    <span className="text-lg font-bold text-white font-mono">{service.startingPrice}</span>
                  </div>

                  <a
                    href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(`Inquiry: ${service.title}`)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-500 transition-all"
                  >
                    Inquire Project
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retainer Banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 via-purple-950/20 to-zinc-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              Looking for a Dedicated Monthly AI Video Partner?
            </h4>
            <p className="text-sm text-zinc-300 max-w-2xl">
              Get 8 to 20 commercial videos per month on retainer with guaranteed 48-hour turnarounds, dedicated Slack channel, and unlimited A/B hook revisions.
            </p>
          </div>
          <a
            href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent("Dedicated Monthly Retainer Inquiry")}`}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 shrink-0"
          >
            Inquire for Retainer via Email
          </a>
        </div>

      </div>
    </section>
  );
}
