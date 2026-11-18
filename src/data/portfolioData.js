export const portfolioData = {
  personal: {
    name: "Eugene Gardose",
    role: "AI Video Editor & Post-Producer",
    tagline: "Bridging Generative AI & High-End Commercial Filmmaking",
    bio: "I don't just generate AI video—I direct, composite, and finish it to broadcast and commercial standards. Specializing in cinematic Higgsfield camera choreography, photorealistic HeyGen avatar localization, and frame-accurate DaVinci/Premiere post-production.",
    availability: "Available for Q1 / Q2 Projects",
    experienceYears: "5+ Years Video Editing / 2+ Years Gen-AI",
    location: "Global Remote (EST / PST / CET friendly)",
    email: "eugenegardose@gmail.com",
    socials: {},
    stats: [
      { label: "Videos Delivered", value: "140+" },
      { label: "Avg Turnaround", value: "48-72h" },
      { label: "Client Views Generated", value: "18M+" },
      { label: "Average ROAS Boost", value: "+3.2x" }
    ]
  },

  stats: [
    { label: "Videos Delivered", value: "140+" },
    { label: "Avg Turnaround", value: "48-72h" },
    { label: "Client Views Generated", value: "18M+" },
    { label: "Average ROAS Boost", value: "+3.2x" }
  ],

  services: [
    {
      id: "ai-ads",
      title: "Direct-Response AI Ads & UGC",
      icon: "Sparkles",
      highlight: "Highest ROI",
      description: "Scroll-stopping commercial creatives engineered for Meta, TikTok, and YouTube Shorts. Rapid iteration of hooks, angles, and cinematic product shots.",
      deliverables: [
        "Multiple 3-second hook variations",
        "Dynamic pacing & subtitle kinetic typography",
        "Higgsfield motion for impossible camera angles",
        "Sound design & commercial license audio"
      ],
      tools: ["Higgsfield", "Premiere Pro", "CapCut Pro", "Midjourney"],
      startingPrice: "$450 / creative"
    },
    {
      id: "heygen-avatars",
      title: "HeyGen Avatars & Global Localization",
      icon: "Users",
      highlight: "Enterprise Favorite",
      description: "Scale your executive presence and onboarding without studio re-shoots. Flawless lip-sync, custom digital clones, and native multilingual translation.",
      deliverables: [
        "Custom instant or studio avatar generation",
        "Multilingual translation (12+ languages, synced voice)",
        "B-roll cutaways & motion graphics overlays",
        "Brand tone & cadence fine-tuning"
      ],
      tools: ["HeyGen", "ElevenLabs", "After Effects", "Descript"],
      startingPrice: "$650 / video"
    },
    {
      id: "higgsfield-cinematic",
      title: "Cinematic Brand Films & Spec Commercials",
      icon: "Film",
      highlight: "Premium Craft",
      description: "Hollywood-grade visual narratives without million-dollar production budgets. Controlled camera choreography, surreal environments, and seamless VFX compositing.",
      deliverables: [
        "Complex prompt direction & consistency control",
        "Fluid camera motions (dolly, orbit, drone sweeps)",
        "DaVinci Resolve color grading & atmospheric depth",
        "Foley sound design & cinematic mastering"
      ],
      tools: ["Higgsfield", "Runway Gen-3", "DaVinci Resolve", "Topaz Video AI"],
      startingPrice: "$1,200 / project"
    }
  ],

  projects: [
    {
      id: "lumina-audio",
      title: "Lumina Sonic — Spec Commercial",
      client: "Lumina Audio Tech",
      category: "higgsfield",
      categoryLabel: "Higgsfield Cinema",
      featured: true,
      duration: "0:45",
      format: "16:9 4K Cinema",
      thumbnail: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
      // Sample high quality demo stream (Direct MP4)
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      shortDesc: "A high-concept cyberpunk commercial featuring explosive soundwaves and dynamic Higgsfield camera sweeps.",
      fullDesc: "Created a full luxury audio tech launch video without a physical product shoot. We engineered consistent geometric headphone assets, directed dynamic camera velocity in Higgsfield, and finished the edit in DaVinci Resolve with customized particle compositing.",
      tools: ["Higgsfield", "DaVinci Resolve", "Topaz Video AI", "ElevenLabs"],
      workflow: [
        {
          phase: "01. Prompt & Generation",
          tool: "Higgsfield + Midjourney v6",
          details: "Generated 38 seed shots focusing on macro textures, metallic finishes, and high-velocity camera movements (orbiting dolly and downward dive)."
        },
        {
          phase: "02. Upscaling & Temporal Fixes",
          tool: "Topaz Video AI 5",
          details: "Eliminated AI temporal jitter, sharpened micro-reflections, and converted 24fps base generations to pristine 60fps."
        },
        {
          phase: "03. Audio & SFX Engineering",
          tool: "ElevenLabs + Pro Tools Foley",
          details: "Layered 26 bespoke sound effects including sub-bass drops, mechanical clicks, and spatial atmospheric risers."
        },
        {
          phase: "04. Finishing & Color Grade",
          tool: "DaVinci Resolve Studio",
          details: "Applied a tailored Kodak 2383 film LUT emulation, matched skin tones, and integrated brand typography."
        }
      ],
      results: [
        { metric: "Production Time", value: "3 Days" },
        { metric: "Est. Studio Budget Saved", value: "$35,000" },
        { metric: "Client ROAS", value: "4.1x on Meta Ads" }
      ],
      rawVsFinal: "Raw Higgsfield clips lacked audio weight and had slight warping at 1080p. The final commercial unified 14 disparate generations with fluid speed ramps, deep bass sound design, and razor-sharp 4K fidelity."
    },
    {
      id: "fintech-global",
      title: "NovaPay Global — Multilingual CEO Avatar",
      client: "NovaPay Technologies",
      category: "heygen",
      categoryLabel: "HeyGen Localization",
      featured: true,
      duration: "1:15",
      format: "16:9 HD Broadcast",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      shortDesc: "Cloned NovaPay's CEO and localized their Q4 international keynote into 8 languages with accurate natural lip-sync.",
      fullDesc: "NovaPay needed to deliver localized keynotes across EU and APAC markets within 48 hours. By combining HeyGen 4.0 studio digital twins with ElevenLabs custom voice models and Premiere Pro pacing, we generated seamless native presentations that felt authentic to local audiences.",
      tools: ["HeyGen", "ElevenLabs Voice Cloning", "Premiere Pro", "After Effects"],
      workflow: [
        {
          phase: "01. Avatar Calibration",
          tool: "HeyGen Studio Twin",
          details: "Trained high-fidelity digital persona from 4K source footage, calibrating micro-gestures and natural blinking."
        },
        {
          phase: "02. Voice Modeling & Translation",
          tool: "ElevenLabs + HeyGen AI Dubbing",
          details: "Localized master script into German, Japanese, Spanish, and French, preserving vocal inflection and natural pauses."
        },
        {
          phase: "03. Editorial Pacing & Cutaways",
          tool: "Adobe Premiere Pro",
          details: "Intercut the talking avatar with dynamic UI screen recordings, animated stats, and corporate brand assets."
        },
        {
          phase: "04. Quality Assurance",
          tool: "Human-in-the-Loop Review",
          details: "Frame-by-frame phonetic check to ensure lip sync matched foreign consonant articulation."
        }
      ],
      results: [
        { metric: "Languages Delivered", value: "8 Languages" },
        { metric: "Delivery Time", value: "48 Hours" },
        { metric: "Engagement Increase", value: "+82% in APAC" }
      ],
      rawVsFinal: "Standard AI avatars often appear rigid without secondary motion. By timing hand gestures, dynamic lower-thirds, and subtle camera zooms in Premiere, the final presentation felt like a dedicated live broadcast."
    },
    {
      id: "strata-beverage",
      title: "Verve Energy — TikTok Ad Creative Suite",
      client: "Verve Botanical Energy",
      category: "commercial",
      categoryLabel: "Direct-Response Ads",
      featured: true,
      duration: "0:30",
      format: "9:16 Vertical Video",
      thumbnail: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      shortDesc: "5 hook variations combining UGC influencer style with surreal Higgsfield liquid splash dynamics.",
      fullDesc: "Designed to combat TikTok ad fatigue. We fused authentic user-generated content hooks with impossible generative video visuals of floating ice, fruit explosions, and liquid physics that grabbed attention in the first 1.5 seconds.",
      tools: ["Higgsfield", "CapCut Pro", "Premiere Pro", "Midjourney"],
      workflow: [
        {
          phase: "01. Hook Strategy & Scripting",
          tool: "Direct-Response Copywriting",
          details: "Scripted 5 psychographic angles: energy crash, clean ingredients, workout focus, and study fuel."
        },
        {
          phase: "02. Impossible Liquid Dynamics",
          tool: "Higgsfield Motion Engine",
          details: "Generated hyper-realistic liquid vortices, slow-motion lime splash crowns, and dynamic can reveals."
        },
        {
          phase: "03. Fast-Cut Vertical Assembly",
          tool: "Premiere Pro + CapCut",
          details: "Constructed rhythmic, 120BPM fast-cut edits with trending sound cues, auto-captions, and high-contrast callouts."
        },
        {
          phase: "04. Conversion Optimization",
          tool: "A/B Testing Splits",
          details: "Delivered 5 distinct first-3-second variants to optimize TikTok and Meta ad spend."
        }
      ],
      results: [
        { metric: "Meta Ad ROAS", value: "3.8x Return" },
        { metric: "Hook Rate (3s Hold)", value: "44.2%" },
        { metric: "Creative Spend Scaled", value: "$120,000+" }
      ],
      rawVsFinal: "Raw generative clips had floating artifacts and unnatural can logos. We rotoscoped the real high-res beverage can over the AI liquid simulations and added kinetic typography."
    },
    {
      id: "aether-fashion",
      title: "Obsidian Void — AI Fashion Runway",
      client: "Aether Haute Couture",
      category: "higgsfield",
      categoryLabel: "Higgsfield Cinema",
      featured: false,
      duration: "0:50",
      format: "16:9 4K",
      thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
      shortDesc: "Futuristic zero-gravity fabric physics and avant-garde lighting for a virtual fashion label.",
      fullDesc: "Exploring surreal textiles in zero-gravity. Higgsfield's precise camera speed control allowed us to execute seamless 360-degree tracking shots around digital models in flowing metallic silks.",
      tools: ["Higgsfield", "Runway Gen-3", "DaVinci Resolve", "Topaz Video AI"],
      workflow: [
        {
          phase: "01. Concept & Prompt Engineering",
          tool: "Higgsfield Camera Prompts",
          details: "Engineered complex camera prompts with continuous orbiting yaw and dynamic lighting transitions."
        },
        {
          phase: "02. Color Chemistry",
          tool: "DaVinci Resolve",
          details: "Tuned deep shadows, specular highlights on fabric, and unified the ethereal color palette."
        }
      ],
      results: [
        { metric: "Social Impressions", value: "2.4M Organic" },
        { metric: "Editorial Coverage", value: "Featured on Highsnobiety" }
      ],
      rawVsFinal: "Seamlessly stitched 9 disjointed 4-second AI shots into a continuous, flowing 50-second runway experience with ambient electronic soundtrack."
    },
    {
      id: "saas-onboarding",
      title: "CloudScale Academy — Multilingual Interactive Tour",
      client: "CloudScale Systems",
      category: "heygen",
      categoryLabel: "HeyGen Localization",
      featured: false,
      duration: "2:00",
      format: "16:9 HD",
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      shortDesc: "10-module customer onboarding video course powered by customized HeyGen instructors in 4 languages.",
      fullDesc: "Reduced customer support tickets by 42% through interactive onboarding modules guided by a realistic HeyGen instructor with real-time UI spotlights.",
      tools: ["HeyGen", "ElevenLabs", "Camtasia / Premiere", "Figma"],
      workflow: [
        {
          phase: "01. Script & Tone Alignment",
          tool: "Pedagogical Copywriting",
          details: "Structured concise 90-second instructional chunks with friendly conversational tone."
        },
        {
          phase: "02. HeyGen Multi-Presenter Generation",
          tool: "HeyGen 4.0",
          details: "Generated warm, engaging presenter video synced with localized screen tours."
        }
      ],
      results: [
        { metric: "Support Tickets Cut", value: "-42%" },
        { metric: "Course Completion Rate", value: "78%" }
      ],
      rawVsFinal: "Turned dry software screenshots into an engaging, human-feeling academy experience at a fraction of traditional shoot costs."
    }
  ],

  tools: [
    { name: "Higgsfield AI", category: "Generative Video & Camera Motion", badge: "Primary Engine", proficiency: "Mastery" },
    { name: "HeyGen 4.0", category: "AI Avatars & Multilingual Dubbing", badge: "Primary Engine", proficiency: "Mastery" },
    { name: "DaVinci Resolve Studio", category: "Color Grading & Master Finishing", badge: "NLE Suite", proficiency: "Expert" },
    { name: "Adobe Premiere Pro", category: "Editorial Assembly & Pacing", badge: "NLE Suite", proficiency: "Expert" },
    { name: "ElevenLabs", category: "Voice Cloning & Audio Generation", badge: "Audio Engine", proficiency: "Expert" },
    { name: "Topaz Video AI 5", category: "Upscaling, De-noising & 60fps Interpolation", badge: "VFX & Quality", proficiency: "Advanced" },
    { name: "Runway Gen-3", category: "Text-to-Video & Image-to-Video", badge: "Generative", proficiency: "Advanced" },
    { name: "Adobe After Effects", category: "Motion Graphics & Rotoscoping", badge: "Compositing", proficiency: "Expert" }
  ],

  workflowProcess: [
    {
      step: "01",
      title: "Strategic Brief & Storyboard",
      description: "We define your campaign objective, audience psychology, tone, and delivery formats (16:9, 9:16, 1:1). We create visual shot-lists before generating a single frame."
    },
    {
      step: "02",
      title: "Generative Direction (Higgsfield & HeyGen)",
      description: "Precision prompt choreography. We direct camera motion, lighting continuity, and avatar expressions across dozens of curated generations to achieve the exact vision."
    },
    {
      step: "03",
      title: "Human Editorial & Sound Craft",
      description: "Where 90% of AI creators fail. We cut in Premiere/DaVinci, calibrate pacing, layer foley sound effects, color grade for cinema depth, and sync high-impact typography."
    },
    {
      step: "04",
      title: "4K Master Delivery & Iteration",
      description: "Topaz AI upscaled to crisp 4K, packaged in all required platform ratios with rapid revision turnaround and ready-to-launch ad metadata."
    }
  ],

  testimonials: [
    {
      quote: "Eugene transformed our product launch. We were skeptical of AI video, but the combination of Higgsfield camera work and commercial sound design looked like a $50k studio commercial.",
      author: "Marcus Reed",
      title: "VP of Growth, Lumina Sound",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Our global enterprise needed our CEO's vision localized into 8 languages immediately. The HeyGen setup Eugene delivered had zero 'uncanny valley' and saved our team weeks of filming.",
      author: "Elena Rostova",
      title: "Head of Marketing, NovaPay Global",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The direct-response ad suite crushed our previous CPA by 34%. Having someone who understands both AI prompting and actual video editing pacing is a superpower.",
      author: "David Chen",
      title: "Founder, Verve Consumer Brands",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ]
};
