const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'global', '09-image-text');

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
  // 1: Glassmorphic Split Showcase
  {
    num: 1,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function GlobalImageText1() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC SHOWCASE
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Crafted with Precision & Liquid Glass Aesthetics
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Experience engineered luxury with dynamic frosted backdrops, subtle glow accents, and responsive layout scaling.
          </p>
          <div className="space-y-3 pt-2">
            {['Ultra-responsive fluid glass container', 'Hardware accelerated blur & glow', 'Curated aesthetic precision'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all flex items-center gap-2">
              Explore Innovation <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 p-3 backdrop-blur-xl">
            <img src="${images.tech}" alt="Glassmorphic Feature" className="w-full h-[450px] object-cover rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}`
  },

  // 2: Minimalist High-Fashion Magazine Editorial
  {
    num: 2,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalImageText2() {
  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative order-2 lg:order-1">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[480px]">
            <img src="${images.fashion}" alt="Editorial Fashion" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 z-0 w-full h-full border-2 border-stone-900 rounded-2xl pointer-events-none hidden sm:block" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Volume 26 / Editorial</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 leading-tight">
            Timeless Silhouette & Modern Form
          </h2>
          <p className="font-sans text-stone-600 text-base leading-relaxed">
            An exploration of raw textures, sculptural tailoring, and sustainable luxury craftsmanship designed for contemporary lifestyle.
          </p>
          <div className="pt-4 font-sans">
            <a href="#" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors">
              View Lookbook <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`
  },

  // 3: Neo-Brutalist Cyberpunk Split
  {
    num: 3,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

export function GlobalImageText3() {
  return (
    <section className="w-full py-20 px-6 bg-lime-400 text-black font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div whileHover={{ x: -4, y: -4 }} className="border-4 border-black bg-white p-8 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div className="inline-flex items-center gap-2 bg-black text-lime-400 text-xs font-black px-3 py-1 uppercase rounded">
            <Zap className="w-4 h-4 fill-lime-400" /> RAW TECH 2026
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase leading-none text-black">
            HIGH VOLTAGE HARDWARE
          </h2>
          <p className="font-medium text-black/80">
            Unapologetic design, heavy borders, high-contrast typography, and uncompromising performance parameters.
          </p>
          <button className="w-full py-4 bg-black text-lime-400 font-black uppercase text-sm rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center justify-center gap-2">
            CLAIM YOUR DROP <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
        <div className="border-4 border-black rounded-2xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] h-[440px] bg-black">
          <img src="${images.gaming}" alt="Neo Brutalist" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 4: 3D Tactile Claymorphic Feature Deck
  {
    num: 4,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export function GlobalImageText4() {
  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase">
            <Sparkles className="w-4 h-4" /> Tactile Clay Aesthetics
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Soft Volume & Playful Tactile Design
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Designed with pill-shaped volume cards, friendly pastel accents, and ultra-smooth tactile depth shadows.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition-all flex items-center gap-2">
              Explore Soft World <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-3xl bg-purple-100 border-2 border-purple-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <div className="h-[400px] rounded-2xl overflow-hidden border-2 border-white shadow-md">
            <img src="${images.beauty}" alt="Claymorphic" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}`
  },

  // 5: Holographic Neon Cyber Horizon
  {
    num: 5,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export function GlobalImageText5() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-pink-500 font-mono font-bold">Holographic Cyber Suite</span>
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Next-Gen Holographic Telemetry Interface
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Iridescent neon sheen borders, reactive crosshairs, and dark obsidian glass visual depth.
          </p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
            Launch Telemetry <Eye className="w-4 h-4" />
          </button>
        </motion.div>
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
          <div className="bg-zinc-950 rounded-2xl p-2 h-[400px] overflow-hidden">
            <img src="${images.shoes}" alt="Holographic Cyber" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 6: Horizontal Split Slider Canvas
  {
    num: 6,
    code: `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalImageText6() {
  const [tab, setTab] = useState(0);
  const data = [
    { title: 'Architectural Heritage', desc: 'Precision crafted structural design with raw concrete aesthetics.', img: '${images.home}' },
    { title: 'Computational Gear', desc: 'High-speed processors embedded inside minimalist aluminum cases.', img: '${images.tech}' },
    { title: 'Luxury Timepieces', desc: 'Hand-assembled mechanical movement with sapphire crystal glass.', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase text-indigo-400">Interactive Canvas</span>
          <h2 className="text-4xl font-extrabold text-white">Dynamic Step Feature Showcase</h2>
          <div className="space-y-3">
            {data.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setTab(idx)}
                className={\`p-4 rounded-xl cursor-pointer border transition-all \${tab === idx ? 'bg-indigo-950 border-indigo-500 text-white' : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:bg-slate-800'}\`}
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                {tab === idx && <p className="text-sm text-slate-300 mt-2">{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[440px] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
          <img src={data[tab].img} alt={data[tab].title} className="w-full h-full object-cover transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 7: Skeuomorphic Velvet Luxury Heritage
  {
    num: 7,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function GlobalImageText7() {
  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-4 h-4" /> Royal Reserve Heritage
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">The Art of Fine Craftsmanship</h2>
          <p className="font-sans text-zinc-400 text-base leading-relaxed">
            Hand-embossed accents, gold foil detailing, and velvet luxury finish created for those who value heritage.
          </p>
          <button className="px-6 py-3 rounded-xl border-2 border-amber-600 bg-amber-950/50 text-amber-300 font-serif hover:bg-amber-900 transition-colors">
            Discover Legacy
          </button>
        </div>
        <div className="border-2 border-amber-800/40 rounded-2xl overflow-hidden shadow-2xl h-[420px] p-2 bg-zinc-900">
          <img src="${images.jewelry}" alt="Luxury Velvet" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 8: Dual-Tone Diagonal Slice Feature
  {
    num: 8,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalImageText8() {
  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-rose-400">Dual-Tone Split</span>
          <h2 className="text-4xl font-extrabold uppercase">High Contrast Visual Impact</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Split-color canvas layout engineered to draw immediate focal attention to product highlights.
          </p>
          <button className="px-6 py-3 rounded-xl bg-rose-500 text-white font-bold flex items-center gap-2 hover:bg-rose-600 transition-colors">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl relative border border-slate-700">
          <img src="${images.sports}" alt="Dual Tone" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 9: Sub-Zero Ice Frost Refractive Showcase
  {
    num: 9,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalImageText9() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Glass
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Refractive Perfection</h2>
          <p className="text-sky-200/80 text-base leading-relaxed">
            Frost glass highlights, icy gradient glows, and crystal light refractions.
          </p>
          <button className="px-6 py-3 rounded-2xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors flex items-center gap-2">
            View Frost Line <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-sky-950/40 border border-sky-500/30 backdrop-blur-xl p-3 rounded-3xl h-[420px]">
          <img src="${images.tech}" alt="Ice Frost" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 10: Retro Vintage Polaroid Storyteller
  {
    num: 10,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalImageText10() {
  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-mono font-bold uppercase">
            <Tag className="w-4 h-4" /> Vintage Archive 1994
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight">Analog Memories & Vintage Aesthetics</h2>
          <p className="font-sans text-stone-700 text-base leading-relaxed">
            Classic Polaroid frames, handwritten tape tags, and warm film grain tone scales.
          </p>
        </div>
        <motion.div whileHover={{ rotate: 0 }} className="bg-white p-5 pb-8 shadow-2xl border border-stone-300 rounded-sm -rotate-2 cursor-pointer">
          <div className="h-80 bg-stone-100 overflow-hidden mb-4 border border-stone-200">
            <img src="${images.fashion}" alt="Retro Polaroid" className="w-full h-full object-cover" />
          </div>
          <div className="font-sans flex justify-between items-center text-sm font-bold text-stone-800">
            <span>Summer Archive #04</span>
            <span className="text-amber-800 font-mono">EST. 1994</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`
  },

  // 11: Isometric 3D Spatial Deck
  {
    num: 11,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalImageText11() {
  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
            <Layers className="w-4 h-4" /> Spatial 3D Deck
          </div>
          <h2 className="text-4xl font-extrabold text-white">Depth of Field Spatial Layout</h2>
          <p className="text-indigo-200/80 text-base leading-relaxed">
            Designed with isometric card elevation, depth perspectives, and responsive tilt.
          </p>
        </div>
        <motion.div whileHover={{ y: -12, rotateX: 6 }} className="bg-indigo-900/50 border border-indigo-700/50 p-4 rounded-3xl shadow-2xl h-[420px]">
          <img src="${images.home}" alt="Spatial 3D" className="w-full h-full object-cover rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}`
  },

  // 12: Minimalist Blueprint Line-Art Architecture
  {
    num: 12,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalImageText12() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Grid className="w-4 h-4" /> [SYS_SPEC_09]
          </div>
          <h2 className="text-3xl font-bold uppercase text-white tracking-wider">ARCHITECTURAL SPECIFICATION</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Hairline vector outlines, precision coordinate telemetry, and technical spec labels.
          </p>
        </div>
        <div className="border border-slate-700 p-4 rounded bg-slate-900 h-[400px]">
          <img src="${images.tech}" alt="Blueprint Line Art" className="w-full h-full object-cover rounded opacity-80" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 13: Circular Orbital Frame Feature
  {
    num: 13,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalImageText13() {
  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase">
            <Compass className="w-4 h-4" /> Radial Orbital Lens
          </div>
          <h2 className="text-4xl font-extrabold text-white">Central Orbital Spotlight</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Featuring radial circular frames surrounded by floating attribute nodes.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-indigo-500/30 p-2 bg-slate-800 shadow-2xl">
            <img src="${images.beauty}" alt="Radial Orbital" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 14: Cinematic Motion Video Storyboard
  {
    num: 14,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalImageText14() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono text-amber-400 uppercase">CINEMATIC FRAMEWORK</span>
          <h2 className="text-4xl font-black uppercase tracking-wide">Motion Video Storyboard</h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Wide aspect letterbox presentation with overlay video controls and playhead indicators.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-[400px] border border-zinc-800">
          <img src="${images.gaming}" alt="Cinematic Motion" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Play className="w-6 h-6 fill-white ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
  },

  // 15: Diamond Facet Prism Grid
  {
    num: 15,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalImageText15() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-cyan-300">Diamond Facet Refraction</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Geometric diamond cut mask with rainbow light reflection highlights.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-2xl h-[400px]">
          <img src="${images.jewelry}" alt="Diamond Facet" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 16: Cyber Matrix Terminal Grid
  {
    num: 16,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalImageText16() {
  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs text-emerald-600">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> [SYS_ONLINE]
          </div>
          <h2 className="text-3xl font-bold uppercase text-emerald-300">CYBER TELEMETRY TERMINAL</h2>
          <p className="text-emerald-500 text-sm leading-relaxed">
            Matrix green scanlines, real-time code telemetry, and encrypted data display.
          </p>
        </div>
        <div className="border border-emerald-800 p-4 rounded bg-emerald-950/30 h-[400px]">
          <img src="${images.tech}" alt="Cyber Terminal" className="w-full h-full object-cover rounded opacity-70" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 17: Organic Curved Sunset Fluid Grid
  {
    num: 17,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalImageText17() {
  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-orange-300">Organic Sunset Pebble Waves</h2>
          <p className="text-stone-300 text-base leading-relaxed">
            Asymmetric organic pebble curves, warm amber gradient blurs, and soft fluid waves.
          </p>
        </div>
        <div className="rounded-[40px] p-4 bg-gradient-to-br from-orange-500 to-rose-500 shadow-2xl h-[420px]">
          <img src="${images.home}" alt="Sunset Waves" className="w-full h-full object-cover rounded-[30px]" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 18: Elevated Layered Card Stack Showcase
  {
    num: 18,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

export function GlobalImageText18() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs">
            <Layers className="w-4 h-4" /> ELEVATED CARD STACK
          </div>
          <h2 className="text-4xl font-extrabold text-white">Elevated Card Stack Deck</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Multi-layered cards offset with elevation drop shadows and floating indicator badges.
          </p>
          <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-bold flex items-center gap-2 hover:bg-indigo-500 transition-colors">
            View Stack <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-2xl h-[420px]">
          <img src="${images.fashion}" alt="Elevated Stack" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 19: Modern Neumorphic Tactile Inset Showcase
  {
    num: 19,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalImageText19() {
  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-slate-900">Neumorphic Soft Inset Feature</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Tactile dual-shadow extruded surfaces with soft inset depth effects.
          </p>
        </div>
        <div className="bg-slate-200 p-6 rounded-3xl shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] h-[400px]">
          <img src="${images.shoes}" alt="Neumorphic" className="w-full h-full object-cover rounded-2xl shadow-inner" />
        </div>
      </div>
    </section>
  );
}`
  },

  // 20: Flagship Omnichannel Bento Feature Suite
  {
    num: 20,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalImageText20() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" /> FLAGSHIP FEATURE SUITE
          </div>
          <h2 className="text-4xl font-black text-white">Omnichannel Master Feature Suite</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Complete ecosystem integration with bento mix cards, ratings metrics, and live action triggers.
          </p>
          <button className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center gap-2 hover:bg-cyan-400 transition-colors">
            Get Full Suite <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-2xl h-[440px]">
          <img src="${images.tech}" alt="Flagship Omnichannel" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}`
  }
];

templates.forEach(t => {
  const dirName = `global-image-text-${t.num}`;
  const targetDir = path.join(baseDir, dirName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const fileName = `GlobalImageText${t.num}.tsx`;
  fs.writeFileSync(path.join(targetDir, fileName), t.code, 'utf8');
  console.log(`Generated ${fileName}`);
});

console.log('All 20 Global Image Text components written successfully!');
