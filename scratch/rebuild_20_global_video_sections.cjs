const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'global', '13-video-section');

const images = {
  fashion: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
  tech: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
  home: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  beauty: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  sports: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  jewelry: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
  gaming: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop"
};

const templates = [
  // 1: Glassmorphic Hero Video Split Player
  {
    num: 1,
    code: `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, Sparkles, Film, Clock } from 'lucide-react';

export function GlobalVideoSection1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playlist = [
    { title: 'Cyberpunk Next-Gen Launch', duration: '03:45', views: '124K Views', img: '${images.tech}' },
    { title: 'Luxury Apparel Fashion Film', duration: '02:15', views: '98K Views', img: '${images.fashion}' },
    { title: 'Modern Living Space Tour', duration: '04:10', views: '56K Views', img: '${images.home}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC VIDEO HERO PLAYER
            </div>
            <h2 className="text-4xl font-extrabold text-white">Interactive Cinema Hub</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Hero Video Player */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl group h-[460px]">
            <img src="${images.tech}" alt="Hero Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/20" />
            
            {/* Center Play Trigger */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform">
                {isPlaying ? <Pause className="w-8 h-8 fill-slate-950" /> : <Play className="w-8 h-8 fill-slate-950 ml-1" />}
              </div>
            </button>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent space-y-3">
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
                <div className="bg-cyan-400 h-full w-2/5" />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">01:45 / 03:45</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">4K HDR</span>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                  <Maximize className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Side Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Film className="w-4 h-4 text-cyan-400" /> Up Next Playlist
            </h3>
            {playlist.map((item, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 flex gap-4 items-center cursor-pointer transition-colors group">
                <div className="w-24 h-16 rounded-xl overflow-hidden relative shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">{item.title}</h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                    <Clock className="w-3 h-3" /> <span>{item.duration}</span>
                    <span>• {item.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 2: High-Fashion Editorial Cinema Showcase
  {
    num: 2,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Sliders } from 'lucide-react';

export function GlobalVideoSection2() {
  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Editorial Cinema</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Haute Couture 2026 Lookbook Film</h2>
          </div>
          <p className="font-sans text-stone-600 text-sm max-w-md">
            Directed by Antoine Laurent. An immersive 21:9 cinematic exploration of raw textures and sculptural tailoring.
          </p>
        </div>

        {/* 21:9 Widescreen Video Player */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] border border-stone-300 group">
          <img src="${images.fashion}" alt="Editorial Video" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 text-stone-900 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-stone-900 ml-1" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 font-sans flex justify-between items-center text-white bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20">
            <span className="text-xs font-mono tracking-widest uppercase">CHAPTER 02 / RUNWAY DIRECTORS CUT</span>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span>04:20 / 12:00</span>
              <Volume2 className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 3: Neo-Brutalist Cyberpunk Video Grid & Player
  {
    num: 3,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, Radio } from 'lucide-react';

export function GlobalVideoSection3() {
  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b-4 border-black pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
              <Zap className="w-5 h-5 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">LIVE STREAM MONITOR</h2>
          </div>
          <div className="flex items-center gap-2 bg-black text-lime-400 px-3 py-1 font-black text-xs uppercase rounded">
            <Radio className="w-4 h-4 animate-pulse text-red-500 fill-red-500" /> LIVE 14.2K VIEWERS
          </div>
        </div>

        <div className="border-4 border-black bg-black rounded-2xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative h-[480px]">
          <img src="${images.gaming}" alt="Cyberpunk Video Stream" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-lime-400 text-black border-4 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:translate-x-1 hover:translate-y-1 transition-transform">
              <Play className="w-10 h-10 fill-black ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-lime-400 border-2 border-black p-3 font-black text-xs uppercase flex justify-between items-center rounded">
            <span>SYS_STREAM // TOKYO_STAGE_01</span>
            <span>00:45:12 / LIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 4: 3D Tactile Claymorphic Video Gallery
  {
    num: 4,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Volume2 } from 'lucide-react';

export function GlobalVideoSection4() {
  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Cinema
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Tactile Video Console</h2>
        </div>

        <div className="p-8 rounded-3xl bg-purple-100 border-2 border-purple-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-w-4xl mx-auto">
          <div className="h-[420px] rounded-2xl overflow-hidden border-2 border-white shadow-md relative bg-slate-900">
            <img src="${images.beauty}" alt="Soft Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-purple-600 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl flex justify-between items-center text-xs font-bold text-slate-800">
              <span>Beauty Routine Tutorial Video</span>
              <Volume2 className="w-4 h-4 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 5: Holographic Neon Cyber Video HUD
  {
    num: 5,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Disc } from 'lucide-react';

export function GlobalVideoSection5() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-pink-500 font-mono font-bold">Holographic HUD Stream</span>
            <h2 className="text-4xl font-extrabold text-white mt-1">Futuristic Telemetry Video Monitor</h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Disc className="w-4 h-4 animate-spin text-cyan-400" /> REC 4K 60FPS
          </div>
        </div>

        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_40px_rgba(236,72,153,0.3)]">
          <div className="bg-zinc-950 rounded-2xl p-4 h-[480px] relative overflow-hidden">
            <img src="${images.shoes}" alt="Holographic Video" className="w-full h-full object-cover rounded-xl opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.8)] cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/20 flex justify-between items-center text-xs font-mono text-cyan-300">
              <span>TELEMETRY TIME: 00:04:21 / 12:00:00</span>
              <span className="text-pink-400">STATUS: ENCRYPTED VIDEO FEED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 6: Horizontal Expandable Accordion Video Deck
  {
    num: 6,
    code: `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection6() {
  const [active, setActive] = useState(0);
  const videos = [
    { title: 'Fashion Runway Reel', duration: '04:15', img: '${images.fashion}', desc: 'Full high-definition runway showcase with 4K color grading.' },
    { title: 'Tech Hardware Demo', duration: '06:30', img: '${images.tech}', desc: 'Detailed feature overview of futuristic computational devices.' },
    { title: 'Swiss Watch Craft', duration: '03:50', img: '${images.jewelry}', desc: 'Craftsmanship documentary inside traditional horology workshops.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Expandable Video Accordion Stage</h2>

        <div className="flex flex-col lg:flex-row gap-4 h-[460px]">
          {videos.map((v, idx) => {
            const isSel = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                className={\`relative rounded-3xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between transition-all duration-500 \${isSel ? 'lg:flex-[3] bg-indigo-950 border-2 border-indigo-500' : 'lg:flex-[1] bg-slate-800'}\`}
              >
                <img src={v.img} alt={v.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-indigo-600 rounded-full text-white">{v.duration}</span>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white">{v.title}</h3>
                  {isSel && <p className="text-sm text-slate-300 mt-2">{v.desc}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`
  },

  // 7: Skeuomorphic Velvet Gold Cinema
  {
    num: 7,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Play } from 'lucide-react';

export function GlobalVideoSection7() {
  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Royal Theater
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Embossed Gold Theater Showcase</h2>
        </div>

        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-3xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="h-[440px] rounded-2xl overflow-hidden border border-amber-700/40 relative">
            <img src="${images.jewelry}" alt="Royal Cinema" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-amber-500 bg-amber-950/90 flex items-center justify-center text-amber-300 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-amber-300 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur-md p-4 rounded-xl border border-amber-700/40 flex justify-between items-center text-xs font-mono text-amber-400">
              <span>ROYAL HERITAGE DOCUMENTARY</span>
              <span>08:45 / 15:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 8: Split-Tone Diagonal Video Feature
  {
    num: 8,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection8() {
  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-rose-400">Split-Tone Cinema</span>
          <h2 className="text-4xl font-extrabold uppercase">High Contrast Video Stage</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Dynamic split-canvas frame designed to focus viewers directly on video action triggers.
          </p>
        </div>
        <div className="h-[420px] rounded-3xl overflow-hidden shadow-2xl relative border border-slate-700">
          <img src="${images.sports}" alt="Split Tone Video" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 9: Sub-Zero Ice Frost Refractive Video Showcase
  {
    num: 9,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';

export function GlobalVideoSection9() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Cinema
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Video Player Showcase</h2>
        </div>

        <div className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl p-4 rounded-3xl shadow-[0_0_30px_rgba(56,189,248,0.1)] max-w-4xl mx-auto h-[440px] relative">
          <img src="${images.tech}" alt="Sub Zero Video" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
              <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 bg-sky-950/80 backdrop-blur-md p-3 rounded-xl border border-sky-500/30 flex justify-between items-center text-xs font-mono text-sky-300">
            <span>CHILLED DOCUMENTARY STREAM</span>
            <span>07:15 / 12:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 10: Retro Polaroid Film Reel Showcase
  {
    num: 10,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Play } from 'lucide-react';

export function GlobalVideoSection10() {
  const videos = [
    { title: 'Denim Film Reel', duration: '03:40', img: '${images.fashion}', rotate: '-rotate-2' },
    { title: 'Retro Audio Reel', duration: '05:10', img: '${images.tech}', rotate: 'rotate-3' },
    { title: 'Classic Kicks Teaser', duration: '02:50', img: '${images.shoes}', rotate: '-rotate-3' },
    { title: 'Analog Home Reel', duration: '04:15', img: '${images.home}', rotate: 'rotate-2' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Film Reel Grid</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={\`bg-white p-4 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all \${v.rotate}\`}
            >
              <div className="w-full h-48 bg-stone-100 overflow-hidden mb-3 border border-stone-200 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-stone-900 flex items-center justify-center shadow">
                    <Play className="w-4 h-4 fill-stone-900 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="font-sans flex justify-between items-center text-xs font-bold">
                <span>{v.title}</span>
                <span className="font-mono text-amber-800">{v.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 11: Isometric 3D Spatial Video Deck
  {
    num: 11,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Play } from 'lucide-react';

export function GlobalVideoSection11() {
  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Video Player</h2>
        </div>

        <motion.div
          whileHover={{ y: -12, rotateX: 5 }}
          className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-6 shadow-2xl cursor-pointer max-w-4xl mx-auto h-[440px] relative"
        >
          <img src="${images.tech}" alt="Spatial 3D Video" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-xl">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`
  },

  // 12: Minimalist Blueprint Line-Art Video Spec
  {
    num: 12,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Play } from 'lucide-react';

export function GlobalVideoSection12() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">[SYS_VIDEO_MONITOR]</span>
        </div>
        <h2 className="text-3xl font-bold uppercase text-white tracking-wider">TECHNICAL VIDEO MONITOR SPEC</h2>

        <div className="border border-slate-700 p-6 rounded bg-slate-900 h-[420px] relative">
          <img src="${images.fashion}" alt="Blueprint Video" className="w-full h-full object-cover opacity-70 rounded" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-white bg-slate-950/80 rounded-full flex items-center justify-center text-white">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-slate-400 bg-slate-950/90 p-3 rounded border border-slate-800">
            <span>FPS: 60.00 // COLOR: DCI-P3</span>
            <span>04:10 / 12:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 13: Circular Radial Node Video Spotlight
  {
    num: 13,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Play } from 'lucide-react';

export function GlobalVideoSection13() {
  const videos = [
    { title: 'Fashion Stream', duration: '03:40', img: '${images.fashion}' },
    { title: 'Tech Stream', duration: '05:15', img: '${images.tech}' },
    { title: 'Living Stream', duration: '04:00', img: '${images.home}' },
    { title: 'Jewelry Stream', duration: '02:50', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Orbital Video Ring
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Radial Video Node Player</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((v, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-500/30 p-1 bg-slate-800 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
              <span className="text-xs font-mono text-indigo-400">{v.duration}</span>
              <span className="text-sm font-bold text-slate-200">{v.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 14: Cinematic Widescreen Motion Canvas
  {
    num: 14,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection14() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl font-black uppercase">21:9 Widescreen Cinema Canvas</h2>
        <div className="relative rounded-2xl overflow-hidden h-[480px] border border-zinc-800">
          <img src="${images.gaming}" alt="Cinema Canvas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs font-mono">
            <span>FULL HD 21:9 CINEMATIC DISPLAY</span>
            <span>05:10 / 14:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 15: Diamond Facet Prism Video Showcase
  {
    num: 15,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection15() {
  const videos = [
    { title: 'Jewelry Prism Reel', duration: '03:15', img: '${images.jewelry}' },
    { title: 'Prism Fashion Reel', duration: '04:20', img: '${images.fashion}' },
    { title: 'Crystal Living Reel', duration: '05:00', img: '${images.home}' },
    { title: 'Diamond Tech Reel', duration: '03:50', img: '${images.tech}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Video Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-cyan-400 font-bold">{v.duration} PRISM</span>
              <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 my-2 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-5 h-5 text-cyan-300 fill-cyan-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-cyan-300">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 16: Cyber Matrix Terminal Video Stream
  {
    num: 16,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection16() {
  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase">Matrix Encrypted Video Terminal</h2>
        </div>

        <div className="border border-emerald-800 bg-emerald-950/20 p-6 rounded hover:border-emerald-400 cursor-pointer h-[440px] relative">
          <img src="${images.tech}" alt="Matrix Video" className="w-full h-full object-cover rounded opacity-70" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-16 h-16 border border-emerald-400 bg-emerald-950/90 rounded flex items-center justify-center text-emerald-400">
              <Play className="w-6 h-6 fill-emerald-400" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-emerald-500 bg-black/80 p-3 rounded border border-emerald-900">
            <span>FEED_ID // 0x4910</span>
            <span>STATUS: LIVE STREAM OK</span>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 17: Organic Curved Sunset Fluid Video Canvas
  {
    num: 17,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection17() {
  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl font-extrabold text-orange-200">Organic Sunset Fluid Video Player</h2>

        <div className="rounded-[40px] p-6 bg-gradient-to-br from-orange-500 to-rose-500 cursor-pointer shadow-xl h-[440px] relative">
          <div className="w-full h-full rounded-[30px] overflow-hidden relative">
            <img src="${images.home}" alt="Sunset Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white text-stone-950 flex items-center justify-center shadow-2xl">
                <Play className="w-6 h-6 fill-stone-950 ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 18: Elevated Card Deck Fan-Out Video Player
  {
    num: 18,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Play } from 'lucide-react';

export function GlobalVideoSection18() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-3xl font-extrabold text-white">Elevated Card Deck Cinema Player</h2>
        </div>

        <motion.div
          whileHover={{ y: -10 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl cursor-pointer max-w-4xl mx-auto h-[440px] relative"
        >
          <img src="${images.sports}" alt="Elevated Video" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xl">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`
  },

  // 19: Modern Neumorphic Soft Inset Video Player
  {
    num: 19,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection19() {
  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-800">Neumorphic Soft Inset Video Console</h2>

        <div className="bg-slate-200 p-8 rounded-3xl shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] cursor-pointer max-w-4xl mx-auto h-[440px] relative">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner border border-slate-300 relative">
            <img src="${images.tech}" alt="Neumorphic Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center shadow-[6px_6px_12px_#00000040]">
                <Play className="w-6 h-6 fill-slate-800 ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 20: Flagship Omnichannel Bento Master Video Hub
  {
    num: 20,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Clock, Eye } from 'lucide-react';

export function GlobalVideoSection20() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Video Suite
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Video Hub</h2>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl max-w-5xl mx-auto h-[480px] relative">
          <img src="${images.gaming}" alt="Master Video Hub" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-slate-950 ml-1" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex justify-between items-center text-xs font-mono text-cyan-400">
            <div className="flex items-center gap-4">
              <span className="font-bold text-white">FLAGSHIP PRODUCT MASTER REEL</span>
              <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3.5 h-3.5" /> 08:45</span>
            </div>
            <span className="flex items-center gap-1 text-cyan-400 font-bold"><Eye className="w-3.5 h-3.5" /> 245K VIEWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}`
  }
];

templates.forEach(t => {
  const dirName = `global-video-section-${t.num}`;
  const targetDir = path.join(baseDir, dirName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const fileName = `GlobalVideoSection${t.num}.tsx`;
  fs.writeFileSync(path.join(targetDir, fileName), t.code, 'utf8');
  console.log(`Rebuilt ${fileName}`);
});

console.log('All 20 Global Video Section components rebuilt with real video player UI layouts!');
