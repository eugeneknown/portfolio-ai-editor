import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Play, Sparkles, Clock, ArrowUpRight, Check, Eye } from 'lucide-react';

export function ProjectShowcase({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const { projects } = portfolioData;

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'higgsfield', label: 'Higgsfield Cinema', count: projects.filter(p => p.category === 'higgsfield').length },
    { id: 'heygen', label: 'HeyGen Avatars', count: projects.filter(p => p.category === 'heygen').length },
    { id: 'commercial', label: 'Direct-Response Ads', count: projects.filter(p => p.category === 'commercial').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Commercial Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Commercial Case Studies
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Click any project to play the 4K video master and inspect the complete prompt-to-timeline post-production workflow.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-zinc-900/80 border border-white/5 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeFilter === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === cat.id ? 'bg-indigo-500/40 text-white' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProject(project)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between border border-white/10 hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Duration & Category Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md font-mono text-[11px] font-semibold text-white border border-white/10">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-zinc-300 border border-white/10">
                    <Clock className="w-3 h-3 text-indigo-400" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Center Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-xl shadow-indigo-600/50 backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Highlight Outcome Strip */}
                {project.results && project.results[0] && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                    <span className="text-zinc-400 text-[11px] font-mono">{project.results[0].metric}:</span>
                    <span className="text-emerald-400 font-bold font-mono text-xs">{project.results[0].value}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                    {project.client}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tool Pills */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-500">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </div>

                {/* Inspect Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Workflow & Watch
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
