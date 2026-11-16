import React, { useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Play, Volume2, VolumeX, Sparkles, ArrowDown, CheckCircle2, Video } from 'lucide-react';

export function Hero({ onOpenProject }) {
  const { personal, stats } = portfolioData;
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[350px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sub-badge pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 shadow-sm shadow-indigo-500/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Higgsfield Motion Master & HeyGen Enterprise Partner</span>
          </div>
        </div>

        {/* Primary Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Turning Raw AI Video Into <br className="hidden sm:inline" />
            <span className="text-gradient">High-Converting Commercials</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Prompting is only 20% of the battle. I engineer fluid camera choreography in 
            <strong className="text-zinc-200 font-semibold"> Higgsfield</strong>, train hyper-realistic 
            <strong className="text-zinc-200 font-semibold"> HeyGen</strong> avatars, and finish with broadcast-grade 
            <strong className="text-zinc-200 font-semibold"> DaVinci & Premiere</strong> post-production.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#work"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/10 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-indigo-600" />
              Watch Commercial Work
            </a>
            <a
              href="#estimator"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-zinc-900/90 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-500 backdrop-blur-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Estimate Project Scope
            </a>
          </div>
        </div>

        {/* Featured Video Showcase Reel */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl shadow-indigo-950/50">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-950 group">
              
              {/* HTML5 Direct Video Reel */}
              <video
                ref={videoRef}
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover object-center"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90 transition-opacity"></div>

              {/* Reel Info Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="font-mono uppercase tracking-wider font-semibold">2026 AI Production Showreel</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleMute}
                    className="p-2 rounded-lg bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white transition-colors"
                    aria-label="Toggle Mute"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white transition-colors"
                    aria-label="Toggle Play"
                  >
                    <Play className={`w-4 h-4 ${isPlaying ? 'opacity-40' : 'opacity-100'}`} />
                  </button>
                </div>
              </div>

              {/* Reel Overlay Center Play Trigger */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  onClick={() => onOpenProject(portfolioData.projects[0])}
                  className="pointer-events-auto px-5 py-2.5 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-md shadow-lg shadow-indigo-600/40 flex items-center gap-2 transform group-hover:scale-105 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Inspect Project Breakdown
                </button>
              </div>

              {/* Reel Bottom Tagline */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-300 bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold">Featured Spec:</span>
                  <span>Higgsfield Kinetic Motion + DaVinci Color Mastery</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-400 font-mono text-[11px]">
                  <span>4K 60FPS</span>
                  <span>SURROUND SFX</span>
                  <span>ZERO UNCANNY ARTIFACTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-panel p-5 rounded-xl text-center border border-white/5 hover:border-indigo-500/20 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-gradient">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
