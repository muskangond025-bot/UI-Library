const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'global', '13-video-section');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

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
  // 1: Glassmorphic Bento Video Suite
  {
    num: 1,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Film } from 'lucide-react';

export function GlobalVideoSection1() {
  const videos = [
    { title: 'Cyberpunk Product Launch', duration: '03:45', quality: '4K HDR', img: '${images.tech}', bg: 'col-span-1 md:col-span-2 row-span-2' },
    { title: 'Luxury Apparel Reel', duration: '02:15', quality: 'HD', img: '${images.fashion}', bg: 'col-span-1 row-span-1' },
    { title: 'Interior Living Reel', duration: '01:50', quality: 'HD', img: '${images.home}', bg: 'col-span-1 row-span-1' },
    { title: 'Kicks Motion Teaser', duration: '04:10', quality: '4K', img: '${images.shoes}', bg: 'col-span-1 md:col-span-2 row-span-1' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC VIDEO BENTO
            </div>
            <h2 className="text-4xl font-extrabold text-white">Cinematic Video Showcase</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              className={\`relative rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 \${v.bg}\`}
            >
              <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative z-10 flex justify-between items-center">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-cyan-400 text-xs font-mono font-bold rounded-full border border-white/10">{v.quality}</span>
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-xs font-mono text-cyan-400">{v.duration}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 2: High-Fashion Editorial Cinema Deck
  {
    num: 2,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection2() {
  const videos = [
    { title: 'Haute Couture Runway 2026', duration: '05:30', img: '${images.fashion}' },
    { title: 'Swiss Watchmaker Craft', duration: '03:40', img: '${images.jewelry}' },
    { title: 'Monochrome Footwear Film', duration: '04:15', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Cinema Archive</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Editorial Video Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-stone-200 flex flex-col justify-between h-[420px] cursor-pointer group"
            >
              <div className="h-64 rounded-xl overflow-hidden relative mb-4">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-900 shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-stone-900 ml-1" />
                  </div>
                </div>
              </div>
              <div className="font-sans">
                <span className="text-xs font-mono text-amber-800">{v.duration} FILM</span>
                <h3 className="font-serif text-2xl text-stone-950 mt-1 group-hover:text-amber-800 transition-colors">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 3: Neo-Brutalist Cyberpunk Video Player
  {
    num: 3,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Play } from 'lucide-react';

export function GlobalVideoSection3() {
  const videos = [
    { title: 'GAME STREAM STREAM', duration: '12:40', bg: 'bg-lime-400', img: '${images.gaming}' },
    { title: 'AUDIO MATRIX DEMO', duration: '08:15', bg: 'bg-cyan-400', img: '${images.tech}' },
    { title: 'STREET DROP REEL', duration: '05:50', bg: 'bg-fuchsia-400', img: '${images.fashion}' },
    { title: 'KICKS MOTION LAB', duration: '03:30', bg: 'bg-yellow-400', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12 border-b-4 border-black pb-6">
          <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
            <Zap className="w-5 h-5 fill-lime-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER VIDEO STREAM</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className={\`border-4 border-black \${v.bg} p-5 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between h-[360px]\`}
            >
              <div className="flex justify-between items-center">
                <span className="bg-black text-white text-xs font-black px-3 py-1 rounded">{v.duration}</span>
                <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
              <div className="w-full h-40 border-2 border-black rounded-lg overflow-hidden bg-white my-3 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase text-black">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 4: 3D Tactile Claymorphic Video Cards
  {
    num: 4,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Heart } from 'lucide-react';

export function GlobalVideoSection4() {
  const videos = [
    { title: 'Beauty Routine Video', duration: '03:10', bg: 'bg-rose-100 border-rose-200', pill: 'bg-rose-500', img: '${images.beauty}' },
    { title: 'Home Comfort Tour', duration: '06:45', bg: 'bg-teal-100 border-teal-200', pill: 'bg-teal-600', img: '${images.home}' },
    { title: 'Jewelry Making Film', duration: '04:20', bg: 'bg-purple-100 border-purple-200', pill: 'bg-purple-600', img: '${images.jewelry}' },
    { title: 'Sports Action Cut', duration: '02:50', bg: 'bg-indigo-100 border-indigo-200', pill: 'bg-indigo-600', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Videos
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Tactile Cinema Cards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className={\`p-6 rounded-3xl border-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col justify-between h-[380px] \${v.bg}\`}
            >
              <div className="flex justify-between items-center">
                <span className={\`text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm \${v.pill}\`}>{v.duration}</span>
                <Heart className="w-4 h-4 text-slate-500" />
              </div>
              <div className="w-full h-44 rounded-2xl overflow-hidden border-2 border-white shadow-md my-3 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow">
                    <Play className="w-4 h-4 fill-slate-900 ml-0.5" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 5: Holographic Neon Cyber Video Matrix
  {
    num: 5,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Play } from 'lucide-react';

export function GlobalVideoSection5() {
  const videos = [
    { title: 'NEON RUNNER FILM', duration: '04:20', img: '${images.shoes}', glow: 'from-pink-500 to-purple-500' },
    { title: 'VR MATRIX STREAM', duration: '08:15', img: '${images.tech}', glow: 'from-cyan-400 to-blue-600' },
    { title: 'GAME CINEMATIC', duration: '06:00', img: '${images.gaming}', glow: 'from-emerald-400 to-teal-600' },
    { title: 'CYBER WEAR REEL', duration: '03:45', img: '${images.fashion}', glow: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Holographic Video Matrix</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden p-[2px] cursor-pointer">
              <div className={\`absolute inset-0 bg-gradient-to-r \${v.glow} opacity-60 blur-sm\` } />
              <div className="relative z-10 bg-zinc-950 rounded-2xl p-5 h-[340px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-white font-bold">{v.duration}</span>
                  <Eye className="w-4 h-4 text-pink-400" />
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10 my-3 relative">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mt-0.5">{v.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
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
    { title: 'Luxury Apparel Fashion Film', duration: '04:15', img: '${images.fashion}', desc: 'Full high-definition runway showcase with 4K color grading.' },
    { title: 'Next-Gen Cyber Tech Demo', duration: '06:30', img: '${images.tech}', desc: 'Detailed feature overview of futuristic computational devices.' },
    { title: 'Swiss Watchmaking Heritage', duration: '03:50', img: '${images.jewelry}', desc: 'Craftsmanship documentary inside traditional horology workshops.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Expandable Video Accordion</h2>

        <div className="flex flex-col lg:flex-row gap-4 h-[440px]">
          {videos.map((v, idx) => {
            const isSel = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                className={\`relative rounded-3xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between transition-all duration-500 \${isSel ? 'lg:flex-[3] bg-indigo-950 border-2 border-indigo-500' : 'lg:flex-[1] bg-slate-800'}\`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-indigo-600 rounded-full text-white">{v.duration}</span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
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
  const videos = [
    { title: 'Gold Velvet Couture Film', duration: '05:00', img: '${images.jewelry}' },
    { title: 'Royal Horology Masterclass', duration: '08:30', img: '${images.tech}' },
    { title: 'Velvet Heritage Runway', duration: '04:20', img: '${images.fashion}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Royal Cinema
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Embossed Gold Video Archive</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-6 shadow-2xl hover:border-amber-500 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-amber-400 font-bold">{v.duration}</span>
                <span className="text-xs text-amber-600 font-mono">FILM 0{idx + 1}</span>
              </div>
              <div className="w-full h-44 rounded-xl overflow-hidden border border-amber-700/30 my-3 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-amber-500 bg-amber-950/80 flex items-center justify-center text-amber-300">
                    <Play className="w-5 h-5 fill-amber-300 ml-0.5" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-amber-100 mt-0.5">{v.title}</h3>
              </div>
            </motion.div>
          ))}
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
  const videos = [
    { title: 'STREET WEAR REEL', duration: '03:20', color: 'bg-rose-500 text-white', img: '${images.fashion}' },
    { title: 'SMART TECH DEMO', duration: '05:10', color: 'bg-blue-600 text-white', img: '${images.tech}' },
    { title: 'HOME DECOR TOUR', duration: '04:00', color: 'bg-emerald-600 text-white', img: '${images.home}' },
    { title: 'KICKS MOTION CUT', duration: '02:45', color: 'bg-orange-500 text-white', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10 uppercase">Split-Tone Video Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col h-[380px] group">
              <div className="h-1/2 w-full overflow-hidden relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center">
                    <Play className="w-4 h-4 fill-slate-900 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className={\`h-1/2 p-6 flex flex-col justify-between \${v.color}\`}>
                <span className="text-xs font-mono font-bold uppercase">{v.duration}</span>
                <h3 className="text-xl font-black uppercase leading-tight">{v.title}</h3>
              </div>
            </motion.div>
          ))}
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
  const videos = [
    { title: 'Arctic Gear Documentary', duration: '07:15', img: '${images.sports}' },
    { title: 'Frosted Tech Product Teaser', duration: '04:50', img: '${images.tech}' },
    { title: 'Ice Jewelry Craft Film', duration: '03:30', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Cinema
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Video Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-400 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-sky-400 font-bold">{v.duration}</span>
                <Play className="w-5 h-5 text-sky-400 fill-sky-400" />
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-sky-500/20 my-3 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mt-0.5">{v.title}</h3>
              </div>
            </motion.div>
          ))}
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
    { title: 'Vintage Denim Film Reel', duration: '03:40', img: '${images.fashion}', rotate: '-rotate-2' },
    { title: 'Retro Audio Reel', duration: '05:10', img: '${images.tech}', rotate: 'rotate-3' },
    { title: 'Classic Kicks Teaser', duration: '02:50', img: '${images.shoes}', rotate: '-rotate-3' },
    { title: 'Analog Home Reel', duration: '04:15', img: '${images.home}', rotate: 'rotate-2' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Film Archive</h2>
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
  const videos = [
    { title: 'Spatial Gear Showcase', duration: '04:30', img: '${images.tech}' },
    { title: 'Spatial Apparel Runway', duration: '03:15', img: '${images.fashion}' },
    { title: 'Spatial Living Tour', duration: '05:40', img: '${images.home}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Video Deck</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, rotateX: 5 }}
              className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-6 shadow-2xl cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-indigo-500/30 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400">{v.duration}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
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
  const videos = [
    { code: 'STREAM_01', duration: '04:10', title: 'APPAREL WIREFRAME FILM', img: '${images.fashion}' },
    { code: 'STREAM_02', duration: '06:20', title: 'COMPUTATIONAL TECH FILM', img: '${images.tech}' },
    { code: 'STREAM_03', duration: '03:45', title: 'INTERIOR SPEC FILM', img: '${images.home}' },
    { code: 'STREAM_04', duration: '05:00', title: 'TIMEPIECE SPEC FILM', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">BLUEPRINT STREAM INDEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-slate-700 p-5 rounded hover:border-white transition-colors cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>[{v.code}]</span>
                <span>{v.duration}</span>
              </div>
              <div className="w-full h-36 border border-slate-800 rounded overflow-hidden my-3 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wider">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 13: Circular Orbital Node Video Spotlight
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
          <Compass className="w-4 h-4" /> Orbital Video Nodes
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Radial Video Hub</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((v, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30 p-1 bg-slate-800 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white" />
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
  const videos = [
    { title: 'Widescreen Fashion Film', duration: '06:40', img: '${images.fashion}' },
    { title: 'Widescreen Tech Feature', duration: '08:20', img: '${images.tech}' },
    { title: 'Widescreen Gaming Reel', duration: '05:10', img: '${images.gaming}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-10">Widescreen 21:9 Cinema Canvas</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden h-[380px] cursor-pointer border border-zinc-800">
              <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-amber-400 font-bold">{v.duration}</span>
                <h3 className="text-2xl font-bold text-white">{v.title}</h3>
              </div>
            </motion.div>
          ))}
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
  const videos = [
    { code: 'FEED_01', duration: '04:10', title: 'HARDWARE_STREAM', img: '${images.tech}' },
    { code: 'FEED_02', duration: '06:30', title: 'WEARABLE_STREAM', img: '${images.fashion}' },
    { code: 'FEED_03', duration: '03:45', title: 'FOOTWEAR_STREAM', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase">Matrix Video Encrypted Feed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="border border-emerald-800 bg-emerald-950/20 p-6 rounded hover:border-emerald-400 cursor-pointer flex flex-col justify-between h-[320px]"
            >
              <div className="flex justify-between text-xs text-emerald-600">
                <span>[{v.code}]</span>
                <span>{v.duration}</span>
              </div>
              <div className="w-full h-36 border border-emerald-900 rounded overflow-hidden my-3 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-emerald-300">{v.title}</h3>
            </motion.div>
          ))}
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
  const videos = [
    { title: 'Sunset Fashion Reel', duration: '03:30', img: '${images.fashion}', bg: 'from-orange-500 to-rose-500' },
    { title: 'Warm Living Tour', duration: '05:10', img: '${images.home}', bg: 'from-amber-500 to-orange-600' },
    { title: 'Golden Jewels Showcase', duration: '04:00', img: '${images.jewelry}', bg: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-200">Organic Sunset Fluid Cinema</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={\`rounded-[40px] p-6 bg-gradient-to-br \${v.bg} text-stone-950 cursor-pointer shadow-xl h-[380px] flex flex-col justify-between\`}
            >
              <span className="text-xs font-bold uppercase tracking-wider bg-stone-950/20 px-3 py-1 rounded-full w-max text-stone-950">{v.duration}</span>
              <div className="w-full h-44 rounded-[30px] overflow-hidden my-3 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-stone-950">{v.title}</h3>
            </motion.div>
          ))}
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
  const videos = [
    { title: 'Deck Apparel Film', duration: '04:00', img: '${images.fashion}' },
    { title: 'Deck Tech Film', duration: '06:15', img: '${images.tech}' },
    { title: 'Deck Sports Film', duration: '03:45', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-3xl font-extrabold text-white">Elevated Card Deck Cinema</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-indigo-500 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-700 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
              <div>
                <span className="text-xs text-indigo-400 font-mono font-bold">{v.duration}</span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
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
  const videos = [
    { title: 'Neumorphic Tech Film', duration: '03:50', img: '${images.tech}' },
    { title: 'Neumorphic Home Film', duration: '05:20', img: '${images.home}' },
    { title: 'Neumorphic Kicks Film', duration: '02:40', img: '${images.shoes}' },
    { title: 'Neumorphic Style Film', duration: '04:15', img: '${images.fashion}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-10">Neumorphic Soft Inset Video Player</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-200 p-6 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="w-full h-36 rounded-2xl overflow-hidden shadow-inner border border-slate-300 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500">{v.duration}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 20: Flagship Omnichannel Bento Master Video Suite
  {
    num: 20,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';

export function GlobalVideoSection20() {
  const videos = [
    { title: 'Omnichannel Master Reel', duration: '08:45', quality: '4K HDR', img: '${images.fashion}', badge: 'FLAGSHIP' },
    { title: 'Cyber Tech Keynote Stream', duration: '12:30', quality: '4K', img: '${images.tech}', badge: 'POPULAR' },
    { title: 'Luxury Suite Cinematic Tour', duration: '06:10', quality: 'HD', img: '${images.home}', badge: 'FEATURED' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Video Suite
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Video Suite</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-cyan-500 cursor-pointer h-[400px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-800">{v.badge}</span>
                <span className="text-xs font-mono text-cyan-400">{v.quality}</span>
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-700 my-3 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-xl">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-cyan-400 font-mono font-bold">{v.duration}</span>
                  <h3 className="text-2xl font-black text-white mt-0.5">{v.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
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
  console.log(`Generated ${fileName}`);
});

console.log('All 20 Global Video Section components written successfully!');
