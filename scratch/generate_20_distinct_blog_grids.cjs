const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../src/components/sections/global/14-blog-grid');

const templates = [
  // Design 1: Editorial Hero & Asymmetric Magazine Split
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Clock, Eye, Bookmark } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">DESIGN DISPATCH #${i}</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">Editorial Hero & Magazine Split</h2>
          </div>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm font-bold font-mono flex items-center gap-2">
            VIEW ALL DISPATCHES <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div whileHover={{ y: -6 }} className="lg:col-span-7 bg-slate-900/80 rounded-3xl border border-cyan-500/30 p-8 backdrop-blur-xl group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="w-full h-80 rounded-2xl overflow-hidden relative mb-6">
                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-cyan-500 text-slate-950 text-xs font-bold font-mono px-3 py-1 rounded-full">SPATIAL UI</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-cyan-400 mb-3">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8 MIN READ</span>
                <span>• OCT 10, 2026</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">Designing Volumetric Spatial Interfaces for Next-Gen VR</h3>
              <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-6">Deep dive into depth shaders, volumetric glassmorphism, and spatial interaction physics replacing 2D layout constraints.</p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Author" className="w-10 h-10 rounded-full object-cover border border-cyan-400/50" />
                <div>
                  <p className="text-sm font-bold text-slate-200">Dr. Evelyn Reed</p>
                  <p className="text-[11px] font-mono text-slate-400">Principal UX Scientist</p>
                </div>
              </div>
              <span className="text-cyan-400 text-xs font-bold font-mono flex items-center gap-1">READ STORY →</span>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {[
              { title: 'Sustainable Apparel & Zero-Waste Weaving', tag: 'FASHION', date: 'OCT 08', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
              { title: 'Monolithic Concrete Architecture & Interiors', tag: 'INTERIOR', date: 'OCT 05', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
              { title: 'Skeletonized Titanium Horology Craftsmanship', tag: 'LUXURY', date: 'OCT 02', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
            ].map((p, idx) => (
              <motion.div key={idx} whileHover={{ x: 6 }} className="bg-slate-900/60 rounded-2xl border border-white/10 p-5 flex gap-4 cursor-pointer group hover:border-cyan-500/50 transition-all">
                <img src={p.img} alt={p.title} className="w-28 h-24 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform" />
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">{p.tag}</span>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mt-1 leading-snug">{p.title}</h4>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{p.date} • 4 MIN READ</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,

  // Design 2: Minimalist Serif Cultural Journal Gazette
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const essays = [
    { num: '01', title: 'Sculptural Tailoring & Heavy Wool Drapes', tag: 'HAUTE COUTURE', author: 'Antoine Laurent', read: '6 MIN', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { num: '02', title: 'Swiss Horology & Mechanical Precision', tag: 'CRAFTSMANSHIP', author: 'Victoria Sterling', read: '8 MIN', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { num: '03', title: 'Monochrome Brutalism in Modern Sneakers', tag: 'INDUSTRIAL', author: 'Camilla Rossi', read: '5 MIN', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">THE CHRONICLE GAZETTE • ISSUE #${i}</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4 tracking-tight">Cultural Essays & Field Notes</h2>
          <div className="w-12 h-0.5 bg-amber-900 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {essays.map((e, idx) => (
            <motion.article key={idx} whileHover={{ y: -8 }} className="bg-white rounded-xl p-6 border border-stone-200 shadow-xl flex flex-col justify-between cursor-pointer group">
              <div>
                <div className="flex justify-between items-center mb-4 font-mono text-xs text-stone-500 border-b border-stone-200 pb-2">
                  <span>ESSAY {e.num}</span>
                  <span className="text-amber-900 font-bold">{e.tag}</span>
                </div>
                <div className="w-full h-60 rounded-lg overflow-hidden mb-5">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-2xl text-stone-950 group-hover:text-amber-900 transition-colors leading-snug mb-3">{e.title}</h3>
              </div>
              <div className="pt-4 border-t border-stone-100 flex justify-between items-center font-sans text-xs text-stone-600">
                <span className="font-medium text-stone-900">By {e.author}</span>
                <span className="font-mono text-stone-500">{e.read} READ</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 3: Neo-Brutalist Cyberpunk Post Matrix
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'HARDWARE RIGS: BUILDING LIQUID COOLED CYBER COMPUTERS', tag: 'HARDWARE', bg: 'bg-lime-400', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop' },
    { title: 'NEURAL AUDIO SYNTHESIS & REALTIME SYNTH RACKS', tag: 'AUDIO', bg: 'bg-cyan-400', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'STREET WEAR MATRIX: MONOCHROME TECHWEAR DRIP', tag: 'STYLE', bg: 'bg-fuchsia-400', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'NEON RUNNER KINETIC FOOTWEAR ARCHITECTURE', tag: 'KICKS', bg: 'bg-yellow-400', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-4 border-black bg-white p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
              <Zap className="w-6 h-6 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER BLOG STREAM #${i}</h2>
          </div>
          <span className="hidden sm:block text-xs font-black bg-black text-lime-400 px-4 py-2 rounded">SYSTEM: ONLINE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ x: -6, y: -6 }} className={"border-4 border-black " + p.bg + " p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between min-h-[420px]"}>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-black text-white text-xs font-black px-3 py-1 rounded">{p.tag}</span>
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-full h-40 border-3 border-black rounded-xl overflow-hidden bg-white mb-4">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-black uppercase text-black leading-tight">{p.title}</h3>
              </div>
              <div className="pt-4 border-t-2 border-black/30 mt-4 text-[11px] font-black underline">DISPATCH POST →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 4: High-Tech Bento Article Layout
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Flame } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  return (
    <section className="w-full py-24 px-6 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-8 bg-rose-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">High-Tech Bento Matrix #${i}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-rose-950/80 to-neutral-900 rounded-3xl p-8 border border-rose-500/30 flex flex-col justify-between min-h-[420px] cursor-pointer group">
            <div>
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-mono font-bold">TOP FEATURE</span>
              <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-rose-400 transition-colors mt-6 mb-4 leading-snug">Quantum Neural Shading & Realtime Graphics Pipelines</h3>
              <p className="text-neutral-400 text-sm line-clamp-3 leading-relaxed">How GPU neural radiance fields are replacing polygon rasterization in modern VFX production.</p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs text-neutral-400">
              <span>Dr. Alexis Morgan • 8 min read</span>
              <ArrowUpRight className="w-5 h-5 text-rose-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900 rounded-3xl p-6 border border-white/10 flex flex-col justify-between min-h-[420px] cursor-pointer group">
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" alt="Sole" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold">HARDWARE</span>
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mt-2">Parametric Sole Engineering</h4>
            </div>
            <span className="text-xs text-neutral-400 pt-4 border-t border-white/10">Read Article →</span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900 rounded-3xl p-6 border border-white/10 flex flex-col justify-between min-h-[420px] cursor-pointer group">
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" alt="Watch" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold">LUXURY</span>
              <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mt-2">Titanium Skeleton Watches</h4>
            </div>
            <span className="text-xs text-neutral-400 pt-4 border-t border-white/10">Read Article →</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`,

  // Design 5: Horizontal Article Row Stream
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bookmark } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'Designing High-Conversion E-Commerce Checkout Flows', category: 'UX & CRO', date: 'Oct 09, 2026', read: '5 min read', author: 'Sarah Jenkins', img: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?q=80&w=800&auto=format&fit=crop' },
    { title: 'The Rise of Micro-Animations in SaaS Dashboards', category: 'UI DESIGN', date: 'Oct 07, 2026', read: '4 min read', author: 'David Kovač', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Building Scalable Component Libraries with React', category: 'FRONTEND', date: 'Oct 04, 2026', read: '8 min read', author: 'Li Wei', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">INSIGHTS STREAM #${i}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Product & Design Horizontal Feed</h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ x: 8 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer group hover:border-indigo-500 transition-all">
              <div className="w-full md:w-48 h-36 rounded-xl overflow-hidden shrink-0">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-2">
                  <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded">{p.category}</span>
                  <span>• {p.date}</span>
                  <span>• {p.read}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors mb-2">{p.title}</h3>
                <p className="text-xs text-slate-600 font-medium">Published by {p.author}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:text-indigo-600">
                  <Bookmark className="w-4 h-4" />
                </button>
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 6: Glassmorphic Floating Magazine Grid
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'Generative AI Workflows for Modern Brand Identity Systems', category: 'ARTIFICIAL INTELLIGENCE', date: 'OCT 10', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Spatial Audio Engineering & Atmospheric Binaural Sound', category: 'SOUND DESIGN', date: 'OCT 08', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Architectural Parametric Facades in Desert Environments', category: 'ARCHITECTURE', date: 'OCT 06', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono border border-indigo-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> GLASSMORPHIC PORTAL #${i}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Floating Ambient Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -10, rotate: 0.5 }} className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col justify-between min-h-[460px] cursor-pointer group hover:border-indigo-400/50">
              <div>
                <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-indigo-300 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-indigo-400/30">
                    {p.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-3">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-300">
                <span>{p.date}, 2026</span>
                <span className="text-indigo-400 font-bold flex items-center gap-1">READ <ArrowUpRight className="w-3.5 h-3.5" /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 7: Minimalist Typographic List with Overlay Preview
  (i) => `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const [hoverIdx, setHoverIdx] = useState(0);
  const posts = [
    { title: 'The Philosophy of High-Density Minimalist Urban Living', cat: 'URBANISM', date: '2026', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
    { title: 'Designing High-Efficiency Electric Powertrains for Hypercars', cat: 'AUTOMOTIVE', date: '2026', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { title: 'Generative Typography & Variable Font Physics in Modern Web', cat: 'TYPOGRAPHY', date: '2026', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
    { title: 'Tactile Interfaces & Haptic Feedback Mechanics in Hardware', cat: 'HARDWARE', date: '2026', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-zinc-950 text-zinc-100 font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">INDEX #${i} • CURATED WRITINGS</span>
          <h2 className="text-4xl font-extrabold text-white mb-6">Typographic Focus Feed</h2>
          
          <div className="flex flex-col border-t border-zinc-800">
            {posts.map((p, idx) => (
              <div key={idx} onMouseEnter={() => setHoverIdx(idx)} className="py-6 border-b border-zinc-800 flex justify-between items-center cursor-pointer group">
                <div>
                  <span className="text-xs font-mono text-zinc-500 mr-4">{p.cat}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors inline-block">{p.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 h-[400px] rounded-3xl overflow-hidden border border-zinc-800 relative hidden lg:block">
          <motion.img key={hoverIdx} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} src={posts[hoverIdx].img} alt="Preview" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}`,

  // Design 8: Sidebar Spotlight & Tech Article Cards
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  return (
    <section className="w-full py-20 px-6 bg-emerald-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 bg-emerald-900/40 rounded-3xl p-8 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">SPOTLIGHT HUB #${i}</span>
              <h2 className="text-3xl font-black text-white mt-4 mb-4">Green Energy & Bio-Tech Innovations</h2>
              <p className="text-emerald-200/80 text-sm leading-relaxed mb-6">Investigating synthetic biology, vertical urban farming, and carbon-negative building materials.</p>
            </div>
            <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm transition-all flex items-center justify-center gap-2">
              SUBSCRIBE TO DISPATCH <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Algae Bio-Reactors for Urban Air Purification', tag: 'BIO-TECH', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
              { title: 'Solar Thermal Storage in Solid Salt Battery Banks', tag: 'ENERGY', img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop' },
              { title: 'Mycelium Composites Replacing Expanded Polystyrene', tag: 'MATERIALS', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
              { title: 'Recycled Ocean Polymer Structural Mesh Systems', tag: 'RECYCLING', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
            ].map((p, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="bg-emerald-900/20 rounded-2xl border border-emerald-500/20 p-5 flex flex-col justify-between cursor-pointer group hover:border-emerald-400/50">
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded">{p.tag}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mt-2">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,

  // Design 9: Neumorphic Soft Minimalist Reader
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'The Psychology of Visual Hierarchy in Mobile Checkout UI', tag: 'UX RESEARCH', read: '5 min', img: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?q=80&w=800&auto=format&fit=crop' },
    { title: 'Micro-Interactions That Elevate SaaS Product Adoption', tag: 'PRODUCT DESIGN', read: '4 min', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Design System Governance in Multi-Brand Enterprises', tag: 'SYSTEMS', read: '7 min', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-100 text-slate-800 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider bg-slate-200 px-3 py-1 rounded-full">SOFT NEUMORPHIC FEED #${i}</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">Elevated Reader Stream</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-slate-100 rounded-3xl p-6 shadow-[10px_10px_20px_#d1d5db,-10px_-10px_20px_#ffffff] flex flex-col justify-between min-h-[440px] cursor-pointer group">
              <div>
                <div className="w-full h-52 rounded-2xl overflow-hidden mb-5 shadow-inner">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span className="font-bold text-indigo-600">{p.tag}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.read}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs font-bold text-slate-700">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-indigo-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 10: Cyberpunk Neon Wireframe Matrix
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Terminal, ShieldAlert } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'ZERO-DAY PROTOCOL: QUANTUM ENCRYPTION SHIELDS', tag: 'SECURITY', id: 'LOG_01', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop' },
    { title: 'NEURAL SUB-NETWORKS IN AUTONOMOUS DRONE SWARMS', tag: 'AI CORE', id: 'LOG_02', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
    { title: 'OPTICAL FIBER VOLUMETRIC DATA TRANSMISSION', tag: 'NETWORKS', id: 'LOG_03', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-black text-cyan-400 font-mono border-y border-cyan-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center gap-3">
            <Terminal className="w-7 h-7 text-cyan-400" />
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-widest uppercase">CYBER MATRIX #${i}</h2>
          </div>
          <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded">STATUS: RUNNING</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-slate-950 border border-cyan-500/40 rounded-xl p-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col justify-between cursor-pointer group hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div>
                <div className="flex justify-between items-center text-xs text-cyan-400 mb-4">
                  <span className="font-bold">{p.id}</span>
                  <span className="bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">{p.tag}</span>
                </div>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-cyan-500/20 mb-4 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-cyan-500/20 text-xs font-bold text-cyan-400 flex justify-between items-center">
                <span>DECRYPT LOG</span>
                <span>[→]</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 11: Asymmetric Floating Story Cards
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  return (
    <section className="w-full py-24 px-6 bg-violet-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-violet-300 bg-violet-900/60 px-4 py-1.5 rounded-full border border-violet-500/30">ASYMMETRIC STORIES #${i}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">Floating Story Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div whileHover={{ y: -12 }} className="bg-violet-900/40 rounded-3xl p-6 border border-violet-500/30 backdrop-blur-xl flex flex-col justify-between h-[420px] cursor-pointer group">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Story 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">Volumetric Audio Acoustics</h3>
            <span className="text-xs text-violet-300 font-mono">5 MIN READ</span>
          </motion.div>

          <motion.div whileHover={{ y: -12 }} className="bg-violet-900/60 rounded-3xl p-8 border border-violet-400/50 backdrop-blur-xl flex flex-col justify-between h-[500px] cursor-pointer group shadow-2xl shadow-violet-900/50">
            <div>
              <span className="text-xs font-mono font-bold text-violet-300 bg-violet-500/20 px-3 py-1 rounded-full">FEATURED STORY</span>
              <div className="w-full h-60 rounded-2xl overflow-hidden my-6">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Story 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-2xl font-black text-white group-hover:text-violet-300 transition-colors">Neural Canvas Systems</h3>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-violet-300">
              <span>EXPLORE DISPATCH</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -12 }} className="bg-violet-900/40 rounded-3xl p-6 border border-violet-500/30 backdrop-blur-xl flex flex-col justify-between h-[420px] cursor-pointer group">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" alt="Story 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">Tactile Fabric Weaving</h3>
            <span className="text-xs text-violet-300 font-mono">4 MIN READ</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`,

  // Design 12: Gradient Border Glow Grid
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'Generative AI Tools for Next-Gen 3D Asset Creation', tag: 'AI TECH', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'High-Density Battery Chemistry & Solid State Storage', tag: 'CLEANTECH', img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop' },
    { title: 'Parametric Concrete Facades for Urban Micro-Climates', tag: 'ARCHITECTURE', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">GLOW MATRIX #${i}</span>
          <h2 className="text-4xl font-extrabold text-white mt-3">Gradient Glow Article Hub</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} className="p-[1px] rounded-3xl bg-gradient-to-b from-amber-500 via-rose-500 to-purple-600 cursor-pointer group">
              <div className="bg-slate-900 rounded-[23px] p-6 h-full flex flex-col justify-between min-h-[440px]">
                <div>
                  <div className="w-full h-52 rounded-2xl overflow-hidden mb-5">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">{p.tag}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mt-2">{p.title}</h3>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>READ DISPATCH</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 13: Clean Dual-Tone Publication
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'The Architectural Principles of Clean Component Isolation', tag: 'ENGINEERING', read: '6 min', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
    { title: 'Optimizing Micro-Frontend Hydration for Enterprise Web Apps', tag: 'PERFORMANCE', read: '9 min', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Designing Accessible High-Contrast Data Visualization Widgets', tag: 'ACCESSIBILITY', read: '4 min', img: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-sky-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-sky-800 pb-6">
          <div>
            <span className="text-xs font-mono text-sky-400 font-bold bg-sky-900/60 px-3 py-1 rounded-full">DUAL-TONE HUB #${i}</span>
            <h2 className="text-4xl font-extrabold text-white mt-3">Engineering & Web Systems</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-sky-900/40 rounded-2xl p-6 border border-sky-700/40 flex flex-col justify-between min-h-[440px] cursor-pointer group hover:border-sky-400 transition-all">
              <div>
                <div className="w-full h-52 rounded-xl overflow-hidden mb-5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-xs font-mono text-sky-400 font-bold">{p.tag} • {p.read}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mt-2">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-sky-800 flex justify-between items-center text-xs font-bold text-sky-300">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 14: Modern Bento Compact Article Grid
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  return (
    <section className="w-full py-20 px-6 bg-zinc-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-orange-400 font-bold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">BENTO GRID #${i}</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Modern Bento Article Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-2 bg-zinc-800/80 rounded-3xl p-8 border border-zinc-700 flex flex-col justify-between min-h-[360px] cursor-pointer group">
            <div>
              <span className="text-xs font-mono text-orange-400 font-bold">FEATURED ESSAY</span>
              <h3 className="text-3xl font-extrabold text-white group-hover:text-orange-400 transition-colors mt-4 mb-3">Designing Frictionless Commerce Experiences</h3>
              <p className="text-zinc-400 text-sm line-clamp-2">How checkout optimization, instant address auto-fill, and biometric authentication drive conversion rates.</p>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-zinc-400 pt-6 border-t border-zinc-700">
              <span>BY SARAH JENKINS • 6 MIN</span>
              <ArrowUpRight className="w-5 h-5 text-orange-400" />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="bg-zinc-800/80 rounded-3xl p-6 border border-zinc-700 flex flex-col justify-between min-h-[360px] cursor-pointer group">
            <div className="w-full h-40 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">Micro-Animations in Dashboards</h4>
            <span className="text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-700">READ NOW →</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`,

  // Design 15: Horizontal Slide-Over Feed
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'Generative Shader Art in WebGL & Three.js', tag: 'CREATIVE CODE', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Monochrome Footwear & Brutalist Kicks Design', tag: 'FOOTWEAR', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { title: 'Precision Mechanical Swiss Watch Movements', tag: 'HOROLOGY', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-teal-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-xs font-mono text-teal-400 font-bold bg-teal-900/60 px-3 py-1 rounded-full border border-teal-500/30">SLIDE-OVER FEED #${i}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">Creative Engineering Stream</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ x: 6 }} className="bg-teal-900/30 rounded-2xl p-6 border border-teal-500/30 flex flex-col justify-between min-h-[420px] cursor-pointer group hover:border-teal-400 transition-all">
              <div>
                <div className="w-full h-52 rounded-xl overflow-hidden mb-5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-xs font-mono text-teal-400 font-bold">{p.tag}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mt-2">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-teal-800 flex justify-between items-center text-xs font-bold text-teal-300">
                <span>VIEW POST</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 16: Compact List & Featured Spotlight
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">SPOTLIGHT FEED #${i}</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Compact Article Feed</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div whileHover={{ y: -6 }} className="lg:col-span-6 bg-slate-800/80 rounded-3xl p-8 border border-slate-700 flex flex-col justify-between min-h-[440px] cursor-pointer group">
            <div className="w-full h-60 rounded-2xl overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Feature" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold">SPOTLIGHT</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mt-2 mb-2">Designing Volumetric Audio Racks</h3>
              <p className="text-slate-400 text-sm line-clamp-2">How binaural spatial DSP algorithms are transforming virtual synthesizer software.</p>
            </div>
          </motion.div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            {[
              { title: 'Parametric Concrete Architectural Micro-Structures', tag: 'ARCHITECTURE' },
              { title: 'Generative Brand Guidelines & Variable Typography', tag: 'BRANDING' },
              { title: 'High-Density Solid State Battery Chemistry', tag: 'CLEANTECH' },
              { title: 'Tactile Fabric Weaving & Sustainable Textiles', tag: 'FASHION' },
            ].map((p, idx) => (
              <motion.div key={idx} whileHover={{ x: 6 }} className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700 flex items-center justify-between cursor-pointer group hover:border-blue-500">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold">{p.tag}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mt-1">{p.title}</h4>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,

  // Design 17: Tabbed Industry Insights Grid
  (i) => `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const [activeTab, setActiveTab] = useState('DESIGN');
  const items = {
    DESIGN: [
      { title: 'Spatial UI Physics in WebGL', date: 'OCT 10', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
      { title: 'Generative Typography Paradigms', date: 'OCT 08', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
    ],
    TECH: [
      { title: 'Quantum Neural Rendering VFX', date: 'OCT 09', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
      { title: 'Zero-Day Security Shields', date: 'OCT 07', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop' },
    ]
  };

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <span className="text-xs font-mono text-purple-400 font-bold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">TABBED GRID #${i}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Industry Insights Hub</h2>
          </div>
          <div className="flex gap-2 bg-slate-900 p-1.5 rounded-full border border-slate-800">
            {['DESIGN', 'TECH'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={"px-5 py-2 rounded-full text-xs font-mono font-bold transition-all " + (activeTab === tab ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white')}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(items[activeTab] || items.DESIGN).map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between min-h-[400px] cursor-pointer group hover:border-purple-500">
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-5">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">{p.title}</h3>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 pt-4 border-t border-slate-800">
                <span>{p.date}, 2026</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 18: Dynamic Parallax Cover Stream
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'The Future of Autonomous Urban Mobility Systems', tag: 'MOBILITY', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { title: 'Monolithic Interior Space Planning in High-Rise Architecture', tag: 'INTERIORS', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Hand-Assembled Mechanical Watch Movements & Escapements', tag: 'CRAFT', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-zinc-950 text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">PARALLAX FEED #${i}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">Cover Image Lift Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -10 }} className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-between min-h-[460px] cursor-pointer group hover:border-emerald-500 transition-all">
              <div>
                <div className="w-full h-60 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-emerald-400 font-mono text-[10px] font-bold px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs font-bold text-zinc-400">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 19: Card Overlay High-Contrast Feed
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'Designing High-Density Minimalist Workspaces', tag: 'SPACES', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
    { title: 'Generative Shader Art & Neural Canvas Rendering', tag: 'DIGITAL ART', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Organic Minimalist Apparel & Zero-Waste Weaving', tag: 'SUSTAINABILITY', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16 border-b border-white/20 pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">OVERLAY FEED #${i}</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">High-Contrast Overlay Cards</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} className="h-[460px] rounded-3xl overflow-hidden relative cursor-pointer group border border-white/10">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-between">
                <span className="self-start text-xs font-mono font-bold text-rose-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-rose-500/30">
                  {p.tag}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-rose-400 transition-colors mb-4">{p.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Design 20: 3D Perspective Staggered Grid
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'The Next Decadal Shift in Spatial Web Interface Standards', tag: 'FUTURE WEB', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Quantum Neural Rendering Engine Implementations', tag: 'GRAPHICS', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Parametric Footwear Sole Engineering & Biomimicry', tag: 'DESIGN', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/30">3D PERSPECTIVE MATRIX #${i}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">Staggered Perspective Feed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between min-h-[460px] cursor-pointer group hover:border-yellow-400 transition-all">
              <div>
                <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-yellow-400 font-mono text-[10px] font-bold px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors leading-snug">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-bold text-slate-400">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4 text-yellow-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
];

for (let i = 1; i <= 20; i++) {
  const folder = path.join(dirPath, `global-blog-grid-${i}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const tmplIdx = (i - 1) % templates.length;
  const content = templates[tmplIdx](i);
  const filePath = path.join(folder, `GlobalBlogGrid${i}.tsx`);
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Successfully updated all 20 GlobalBlogGrid components with 20 completely distinct visual designs and layouts!');
