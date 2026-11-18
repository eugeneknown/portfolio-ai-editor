import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Play, Sliders, CheckCircle2, Award, Clock, ArrowRight, Layers, FileCode, Sparkles, Mail } from 'lucide-react';

export function VideoModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'workflow' | 'comparison'

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-[#0e0e13] border border-white/10 rounded-2xl shadow-2xl shadow-indigo-950/60 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {project.categoryLabel}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-2.5 bg-zinc-900/50 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'video'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              Watch 4K Video Master
            </button>

            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'workflow'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              Pipeline & Prompt Workflow
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'comparison'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Raw AI vs. Finished Edit
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
            <span>Format: {project.format}</span>
            <span>•</span>
            <span>Runtime: {project.duration}</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: VIDEO PLAYER */}
          {activeTab === 'video' && (
            <div className="space-y-6">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                <video
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Project Meta Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="md:col-span-2 space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    Project Overview
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.fullDesc}
                  </p>
                  
                  {/* Tool tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-indigo-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Results Metrics Card */}
                <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase text-emerald-400 tracking-wider">
                    <Award className="w-4 h-4" />
                    Verified Client Impact
                  </div>
                  <div className="space-y-2">
                    {project.results.map((res, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                        <span className="text-zinc-400">{res.metric}</span>
                        <span className="font-mono font-bold text-white text-xs">{res.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PIPELINE & PROMPT WORKFLOW */}
          {activeTab === 'workflow' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-300 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <p>
                  <strong>How this was built:</strong> Behind every scene is a multi-stage production pipeline that takes raw generative seeds through audio synthesis, pacing refinement, and color mastering.
                </p>
              </div>

              {/* Step-by-Step Pipeline Cards */}
              <div className="space-y-4">
                {project.workflow.map((phase, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-5 rounded-xl border border-white/10 space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                        {phase.phase}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700 w-fit">
                        Engine: {phase.tool}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                      {phase.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: RAW AI VS. FINISHED EDIT */}
          {activeTab === 'comparison' && (
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-xl border border-white/10 space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  The Critical Difference: Raw Generative Output vs. Commercial Master
                </h4>
                
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.rawVsFinal}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                      Typical Raw AI Generation Flaws
                    </span>
                    <ul className="text-xs text-zinc-400 space-y-1.5 list-disc list-inside">
                      <li>Temporal flickering and warping during high camera motion</li>
                      <li>Silent audio, weak robotic text-to-speech without emotional cadence</li>
                      <li>Lack of editorial rhythm, hook retention, and pacing</li>
                      <li>Inconsistent brand colors and floating artifact geometries</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      My Commercial Editorial Finish
                    </span>
                    <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                      <li>Topaz AI temporal stabilization & 60fps frame interpolation</li>
                      <li>Layered multi-track sound effects, sub-bass, and natural voice timing</li>
                      <li>DaVinci Resolve film LUT emulation & unified color balance</li>
                      <li>Speed ramps, dynamic kinetic text, and commercial call-to-actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 bg-zinc-950/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 text-center sm:text-left">
            Need a similar video campaign produced for your brand?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(`Project Inquiry: ${project.title}`)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              Inquire About Similar Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
