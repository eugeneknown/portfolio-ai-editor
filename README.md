# AI Video Editor & Post-Producer Portfolio

A modern, high-converting interactive web portfolio tailored for an **AI Video & Multimedia Editor** specializing in **HeyGen** (Avatars & Localization), **Higgsfield** (Cinematic Generative Motion), and **Commercial NLE Post-Production** (DaVinci Resolve / Premiere Pro).

---

## 🚀 Features

- **Cinematic Studio Dark Aesthetic**: Deep obsidian canvas with slate glassmorphism, glowing badges, and smooth animations.
- **Interactive Project Theater**: Full 4K video playback with a dedicated **AI Pipeline & Workflow Inspector** breaking down:
  - Generative Prompts (Higgsfield / HeyGen)
  - Audio & Foley Synthesis (ElevenLabs)
  - Post-Production Finishing (DaVinci Resolve / Premiere Pro)
  - Verified Client Metrics (ROAS, Time Saved, Retention Rate)
- **"Raw AI vs. Final Master" Analysis**: Clear side-by-side justification showing why clients hire an editor rather than relying on raw automated outputs.
- **3-Tier Commercial Offerings**:
  1. *Direct-Response AI Ads & UGC*
  2. *HeyGen Avatars & Global Localization*
  3. *Cinematic Brand Films & Spec Commercials*
- **Interactive Scope & Price Estimator**: Clients can dynamically select video service, volume, turnaround speed, and add-ons to generate an instant project brief.
- **ATS Resume & Spec Sheet Modal**: Dual creative format with instant plaintext copy and one-click print/PDF download.
- **100% Configurable via a Single File**: Update all text, client reviews, video URLs, and social links in [`src/data/portfolioData.js`](src/data/portfolioData.js).

---

## 🛠️ Tech Stack

- **React 19**
- **Vite 6**
- **Tailwind CSS v4**
- **Lucide Icons**

---

## 📦 Getting Started

### 1. Install Dependencies (Already completed)
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Generates an ultra-optimized static bundle in `/dist` ready for instant deployment on Vercel, Netlify, or GitHub Pages.

---

## ✏️ How to Customize Your Portfolio

All your content lives in one file: [`src/data/portfolioData.js`](src/data/portfolioData.js).

1. **Your Name & Bio**: Change `personal.name`, `personal.bio`, and `personal.email`.
2. **Booking Link**: Replace `personal.calendarUrl` with your actual Cal.com or Calendly URL.
3. **Your Videos**:
   - For direct videos: Provide MP4 links (local or remote CDN) in `videoUrl`.
   - For YouTube / Vimeo: Insert your embed link or video ID.
4. **Tool Stack**: Add or update tools in the `tools` array.
