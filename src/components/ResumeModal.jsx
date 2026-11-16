import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, Printer, Copy, CheckCircle, FileText, Check, Sparkles } from 'lucide-react';

export function ResumeModal({ onClose }) {
  const { personal, tools, projects } = portfolioData;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const resumePlainText = `
==============================================================
${personal.name.toUpperCase()}
${personal.role}
Email: ${personal.email} | Location: ${personal.location}
Portfolio: Commercial Showcase | Specialty: HeyGen & Higgsfield
==============================================================

PROFESSIONAL SUMMARY
Senior AI Video Editor and Post-Production Specialist with 5+ years of digital video editing experience and 2+ years leading generative AI commercial pipelines. Proven track record deploying cinematic motion via Higgsfield, high-fidelity avatar training & multilingual dubbing via HeyGen 4.0, and color/sound mastering in DaVinci Resolve and Adobe Premiere Pro. Generated over 18M+ verified client impressions and boosted direct-response ROAS up to 4.1x.

CORE TECHNICAL COMPETENCIES
- Generative Video Engines: Higgsfield AI (Kinetic Camera Control, Prompt Physics), HeyGen 4.0 (Studio Avatars, Dynamic Lip-Sync, Multilingual Translation), Runway Gen-3, Midjourney v6.
- Editorial & Finishing: DaVinci Resolve Studio (Color Science, ACES, Film LUT Emulation), Adobe Premiere Pro, After Effects (Rotoscoping, VFX Tracking).
- Audio & Speech Synthesis: ElevenLabs (Voice Cloning, Cadence Matching), Foley Sound Design, Spectral Audio Restoration.
- AI Enhancement & Quality: Topaz Video AI 5 (Temporal De-noising, 60fps Frame Interpolation, 4K Upscaling).

FEATURED PRODUCTION EXPERIENCE & CLIENT IMPACT
1. Lumina Sonic — Spec Commercial (Higgsfield Cinema)
   - Directed and composited full product commercial without physical shoot; saved client $35,000 in studio overhead.
   - Orchestrated complex 360-degree camera fly-throughs using Higgsfield motion engine and finished in DaVinci Resolve with 26-track foley sound.
   - Result: 4.1x ROAS on Meta ads and 1.2M organic views.

2. NovaPay Global — Multilingual CEO Keynote (HeyGen Localization)
   - Trained high-fidelity digital persona from 4K source footage and localized keynote into 8 European & APAC languages.
   - Calibrated frame-accurate lip sync and voice inflection with ElevenLabs dubbing.
   - Result: +82% engagement in APAC regions and delivered within 48-hour turn-around.

3. Verve Energy — Direct-Response TikTok & Meta Ad Suite
   - Engineered 5 high-converting hook variants pairing authentic UGC style with surreal Higgsfield liquid splash dynamics.
   - Scaled ad spend past $120,000 with a 44.2% 3-second hook retention rate.

SERVICES & AVAILABILITY
- Commercial AI Video Ads & UGC Hook Testing
- Enterprise HeyGen Avatar Cloning & Localization
- Cinematic Brand Spec Films
- Monthly Creative Retainers (48-hour turnarounds)
==============================================================
  `;

  const copyPlainText = () => {
    navigator.clipboard.writeText(resumePlainText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0f0f15] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-zinc-950/90">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-indigo-400" />
            <h3 className="text-base font-bold text-white">
              Professional Specs & ATS Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied ATS Text' : 'Copy Plaintext'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-[#09090c] text-zinc-200 font-sans space-y-8 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                  {personal.name}
                </h1>
                <p className="text-sm font-semibold text-indigo-400 mt-1 font-mono print:text-indigo-700">
                  {personal.role} • Specialist in HeyGen & Higgsfield
                </p>
              </div>

              <div className="text-xs text-zinc-400 space-y-1 font-mono sm:text-right print:text-zinc-600">
                <div>Email: {personal.email}</div>
                <div>Location: {personal.location}</div>
                <div>Status: Available for Q1/Q2 Contracts</div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold print:text-indigo-700">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed print:text-zinc-800">
              {personal.bio} Proven track record deploying cinematic motion via Higgsfield, high-fidelity avatar training & multilingual dubbing via HeyGen 4.0, and color/sound mastering in DaVinci Resolve and Adobe Premiere Pro. Generated over 18M+ verified client impressions and boosted direct-response ROAS up to 4.1x.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold print:text-indigo-700">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1.5 print:border-zinc-300">
                <span className="font-bold text-white print:text-black">Generative Video Engines:</span>
                <p className="text-zinc-400 print:text-zinc-700">
                  Higgsfield AI (Kinetic Camera Control, Prompt Physics), HeyGen 4.0 (Studio Avatars, Dynamic Lip-Sync, Multilingual Translation), Runway Gen-3, Midjourney v6.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1.5 print:border-zinc-300">
                <span className="font-bold text-white print:text-black">Post-Production & NLE:</span>
                <p className="text-zinc-400 print:text-zinc-700">
                  DaVinci Resolve Studio (Color Grading, LUT Emulation), Adobe Premiere Pro, After Effects (Rotoscoping, VFX Tracking), Topaz Video AI 5 (4K 60fps Interpolation).
                </p>
              </div>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold print:text-indigo-700">
              Verified Production Case Studies
            </h2>

            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="glass-panel p-5 rounded-xl border border-white/5 space-y-2 print:border-zinc-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-bold text-white text-sm print:text-black">{proj.title}</span>
                  <span className="font-mono text-indigo-400 print:text-indigo-700">{proj.client} • {proj.categoryLabel}</span>
                </div>
                <p className="text-xs text-zinc-300 print:text-zinc-800 leading-relaxed">
                  {proj.shortDesc}
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-mono text-zinc-400 print:text-zinc-600">
                  {proj.results.map((r, i) => (
                    <span key={i} className="text-emerald-400 font-semibold print:text-emerald-700">
                      • {r.metric}: {r.value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Services & Retainer Rates */}
          <div className="space-y-2 pt-2 border-t border-white/10 print:border-zinc-300 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-zinc-400">
              <span>Standard Video Turnaround: 48-72 Hours</span>
              <span>Available for Retainers & Single Commercials</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
