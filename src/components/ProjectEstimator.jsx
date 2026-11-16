import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calculator, Sparkles, Check, Clock, Calendar, Mail, Copy, CheckCircle2, ArrowRight } from 'lucide-react';

export function ProjectEstimator({ preselectedService }) {
  const { personal } = portfolioData;

  const [service, setService] = useState(preselectedService || 'higgsfield');
  const [volume, setVolume] = useState('single'); // 'single' | 'bundle3' | 'bundle5' | 'monthly'
  const [speed, setSpeed] = useState('standard'); // 'standard' | 'rush'
  const [includeLocalization, setIncludeLocalization] = useState(false);
  const [includeUpscaling, setIncludeUpscaling] = useState(true);
  const [copied, setCopied] = useState(false);

  // Dynamic Calculation
  const calculateEstimate = () => {
    let base = 500;
    let days = 5;

    if (service === 'commercial') {
      base = 450;
      days = 4;
    } else if (service === 'heygen') {
      base = 650;
      days = 3;
    } else if (service === 'higgsfield') {
      base = 1200;
      days = 6;
    } else if (service === 'monthly') {
      return {
        priceMin: 2200,
        priceMax: 3500,
        timeline: "Monthly Ongoing (48h/video)",
        label: "Dedicated Retainer"
      };
    }

    // Volume multiplier
    let mult = 1;
    if (volume === 'bundle3') {
      mult = 2.6; // discount
      days = Math.round(days * 1.8);
    } else if (volume === 'bundle5') {
      mult = 4.0; // bigger discount
      days = Math.round(days * 2.5);
    } else if (volume === 'monthly') {
      return {
        priceMin: 2200,
        priceMax: 3500,
        timeline: "Ongoing Retainer (48h/video)",
        label: "Dedicated Retainer"
      };
    }

    let min = Math.round(base * mult);
    let max = Math.round(min * 1.25);

    // Addons
    if (includeLocalization) {
      min += 200;
      max += 300;
    }
    if (includeUpscaling) {
      min += 150;
      max += 200;
    }

    if (speed === 'rush') {
      min = Math.round(min * 1.35);
      max = Math.round(max * 1.35);
      days = Math.max(2, Math.round(days * 0.5));
    }

    return {
      priceMin: min,
      priceMax: max,
      timeline: `${days} Business Days`,
      label: "Custom Project Estimate"
    };
  };

  const estimate = calculateEstimate();

  const getServiceLabel = () => {
    if (service === 'commercial') return "Direct-Response AI Ads & UGC";
    if (service === 'heygen') return "HeyGen Avatars & Global Localization";
    if (service === 'higgsfield') return "Higgsfield Cinematic Brand Film";
    return "Monthly Video Retainer";
  };

  const briefSummaryText = `Project Scope Brief:
- Service: ${getServiceLabel()}
- Volume: ${volume === 'single' ? 'Single Video' : volume === 'bundle3' ? '3-Video Creative Pack' : volume === 'bundle5' ? '5-Video Growth Pack' : 'Dedicated Monthly Retainer'}
- Turnaround: ${speed === 'rush' ? 'Rush (48-72h Priority)' : 'Standard Delivery'}
- Topaz 4K Upscale: ${includeUpscaling ? 'Yes' : 'No'}
- Multilingual Localization: ${includeLocalization ? 'Yes (HeyGen Lip-Sync)' : 'No'}
- Estimated Range: $${estimate.priceMin.toLocaleString()} - $${estimate.priceMax.toLocaleString()}
- Target Delivery: ${estimate.timeline}`;

  const copyBrief = () => {
    navigator.clipboard.writeText(briefSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const emailSubject = encodeURIComponent(`Video Production Inquiry: ${getServiceLabel()}`);
  const emailBody = encodeURIComponent(`Hi ${personal.name},\n\nI would like to inquire about the following AI video production project:\n\n${briefSummaryText}\n\nLooking forward to speaking with you!`);

  return (
    <section id="estimator" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Scope & Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Project Scope
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Select your required service, volume, and turnaround to receive an instant estimate and generate your project brief.
          </p>
        </div>

        {/* 2-Column Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-7">
            
            {/* Step 1: Service Type */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                1. Select Video Production Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'higgsfield', title: 'Higgsfield Cinema', desc: 'Narrative & Spec Commercials' },
                  { id: 'heygen', title: 'HeyGen Avatars', desc: 'Executive Clones & Localization' },
                  { id: 'commercial', title: 'Direct Ads & UGC', desc: 'High-Converting Hook Testing' },
                  { id: 'monthly', title: 'Monthly Retainer', desc: '8-15 Videos / Month dedicated' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      service === s.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/20'
                        : 'bg-zinc-900/60 border-white/5 text-zinc-400 hover:text-zinc-200 hover:border-white/10'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-white flex items-center justify-between">
                      <span>{s.title}</span>
                      {service === s.id && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Volume / Quantity */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                2. Project Volume
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'single', label: '1 Video', sub: 'Starter Launch' },
                  { id: 'bundle3', label: '3 Videos', sub: 'A/B Hook Pack' },
                  { id: 'bundle5', label: '5 Videos', sub: 'Growth Suite' },
                  { id: 'monthly', label: 'Ongoing', sub: 'Monthly Retainer' }
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVolume(v.id)}
                    className={`p-3 rounded-xl text-center border transition-all ${
                      volume === v.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-zinc-900/60 border-white/5 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-bold text-xs text-white">{v.label}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{v.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Turnaround Speed */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                3. Delivery Speed
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSpeed('standard')}
                  className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                    speed === 'standard'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-zinc-900/60 border-white/5 text-zinc-400'
                  }`}
                >
                  <div>
                    <div className="font-bold text-xs text-white">Standard Delivery</div>
                    <div className="text-[11px] text-zinc-400">Regular timeline (3-6 days)</div>
                  </div>
                  {speed === 'standard' && <Check className="w-4 h-4 text-indigo-400" />}
                </button>

                <button
                  onClick={() => setSpeed('rush')}
                  className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                    speed === 'rush'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-zinc-900/60 border-white/5 text-zinc-400'
                  }`}
                >
                  <div>
                    <div className="font-bold text-xs text-white flex items-center gap-1.5">
                      <span>48h Rush Delivery</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">+35%</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">Priority queue & sprint</div>
                  </div>
                  {speed === 'rush' && <Check className="w-4 h-4 text-indigo-400" />}
                </button>
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                4. Production Add-Ons
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/10 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeUpscaling}
                      onChange={(e) => setIncludeUpscaling(e.target.checked)}
                      className="rounded border-zinc-700 bg-zinc-800 text-indigo-600 focus:ring-0"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">Topaz AI 4K Master Upscale & 60fps Interpolation</div>
                      <div className="text-[11px] text-zinc-400">Removes temporal AI jitter, crystal clear fidelity</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-indigo-400">+$150</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/10 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeLocalization}
                      onChange={(e) => setIncludeLocalization(e.target.checked)}
                      className="rounded border-zinc-700 bg-zinc-800 text-indigo-600 focus:ring-0"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">Multilingual HeyGen Dubbing & Lip-Sync (Per Language)</div>
                      <div className="text-[11px] text-zinc-400">Expand to European or Asian markets with native cadence</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-indigo-400">+$200</span>
                </label>
              </div>
            </div>

          </div>

          {/* Live Estimate Summary Column */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 via-[#0e0e14] to-zinc-950 space-y-6">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  Live Scope Summary
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Instant Estimate
                </span>
              </div>

              {/* Price Display */}
              <div>
                <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
                  Estimated Investment Range:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-gradient">
                  ${estimate.priceMin.toLocaleString()} - ${estimate.priceMax.toLocaleString()}
                </div>
                <div className="text-xs text-zinc-400 mt-2 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Target Delivery: <strong className="text-white">{estimate.timeline}</strong></span>
                </div>
              </div>

              {/* Scope Inclusions Breakdown */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs text-zinc-300">
                <div className="font-semibold text-white text-xs mb-2">Selected Package Breakdown:</div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-400">Service:</span>
                  <span className="text-white font-medium">{getServiceLabel()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-400">Volume:</span>
                  <span className="text-white font-medium capitalize">{volume}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-400">Turnaround:</span>
                  <span className="text-white font-medium capitalize">{speed}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-400">Audio & Color Grading:</span>
                  <span className="text-emerald-400 font-medium">Included Standard</span>
                </div>
              </div>

            </div>

            {/* Direct Conversion Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={`mailto:${personal.email}?subject=${emailSubject}&body=${emailBody}`}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Send Inquiry With This Scope
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={copyBrief}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Brief Copied!' : 'Copy Brief Text'}</span>
                </button>

                <a
                  href={personal.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Book Call</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
