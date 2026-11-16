import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section className="py-24 relative bg-zinc-950/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Client Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Founders & Creative Directors
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            See how high-growth brands use our AI video pipeline to reduce production overhead by 80% while multiplying engagement.
          </p>
        </div>

        {/* 3-Column Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-indigo-500/30 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.author}
                  className="w-10 h-10 rounded-full object-cover border border-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {test.author}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {test.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
