const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../src/components/sections/global/14-blog-grid');

const templates = [
  // 1: Hero Featured Split Masonry
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'The Next Decadal Architecture in Spatial Interface Design', category: 'FUTURE TECH', date: 'OCT 10, 2026', read: '7 MIN READ', author: 'Dr. Evelyn Reed', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', excerpt: 'Exploring spatial canvases, volumetric shaders, and glassmorphic micro-layouts reshaping modern digital experiences.' },
    { title: 'Organic Minimalist Tailoring & Sustainable Textiles', category: 'FASHION', date: 'OCT 08, 2026', read: '4 MIN READ', author: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', excerpt: 'How natural dye techniques and zero-waste patterns are revolutionizing luxury apparel.' },
    { title: 'Sculptural Furniture & Monolithic Interior Concepts', category: 'DESIGN', date: 'OCT 05, 2026', read: '5 MIN READ', author: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', excerpt: 'Raw concrete meets warm brushed brass in modern architectural living environments.' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> EDITORIAL DISPATCH #${i}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Spatial Journal & Tech Insights</h2>
          </div>
          <button className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20">
            Explore All Journal Entries <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            whileHover={{ y: -6 }}
            className="lg:col-span-7 bg-slate-900/60 rounded-3xl border border-white/10 p-8 flex flex-col justify-between backdrop-blur-xl group cursor-pointer hover:border-cyan-500/50 transition-all min-h-[500px]"
          >
            <div className="w-full h-64 rounded-2xl overflow-hidden relative mb-6">
              <img src={posts[0].img} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-4 left-4 bg-cyan-500 text-slate-950 font-mono font-bold text-xs px-3 py-1 rounded-full">
                {posts[0].category}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-3">
                <Clock className="w-3.5 h-3.5" /> {posts[0].read} • {posts[0].date}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-tight">
                {posts[0].title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <img src={posts[0].avatar} alt={posts[0].author} className="w-9 h-9 rounded-full object-cover border border-cyan-400/50" />
                <span className="text-sm font-semibold text-slate-300">{posts[0].author}</span>
              </div>
              <span className="text-cyan-400 text-xs font-bold font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                READ ARTICLE <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {posts.slice(1).map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 6 }}
                className="bg-slate-900/60 rounded-3xl border border-white/10 p-6 flex gap-5 backdrop-blur-xl group cursor-pointer hover:border-cyan-500/50 transition-all"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">{p.category}</span>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mt-2 leading-snug">{p.title}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <span>{p.read}</span> • <span>{p.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,

  // 2: Minimalist Serif Editorial Gazette
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const essays = [
    { number: '01', title: 'The Architectural Elegance of Heavy Wool Coat Drapes', tag: 'HAUTE COUTURE', author: 'Antoine Laurent', date: 'OCTOBER 2026', read: '6 MIN', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { number: '02', title: 'Swiss Horology & The Precision of Hand-Turned Tourbillons', tag: 'CRAFTSMANSHIP', author: 'Victoria Sterling', date: 'SEPTEMBER 2026', read: '8 MIN', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { number: '03', title: 'Monochrome Brutalism in Contemporary Footwear Constructs', tag: 'INDUSTRIAL DESIGN', author: 'Camilla Rossi', date: 'AUGUST 2026', read: '5 MIN', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">
            THE CHRONICLE JOURNAL • VOL. ${i}
          </span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-6 tracking-tight">Curated Cultural Essays</h2>
          <div className="w-16 h-0.5 bg-amber-900 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {essays.map((e, idx) => (
            <motion.article
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-8 border border-stone-200 shadow-xl flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex justify-between items-center mb-6 font-mono text-xs text-stone-500 border-b border-stone-200 pb-3">
                  <span>ESSAY {e.number}</span>
                  <span className="text-amber-900 font-bold">{e.tag}</span>
                </div>
                <div className="w-full h-56 rounded-lg overflow-hidden mb-6">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-2xl text-stone-950 group-hover:text-amber-900 transition-colors leading-snug mb-4">
                  {e.title}
                </h3>
              </div>

              <div className="pt-6 border-t border-stone-100 flex justify-between items-center font-sans text-xs text-stone-600">
                <div>
                  <p className="font-semibold text-stone-900">{e.author}</p>
                  <p className="text-[10px] font-mono text-stone-500">{e.date} • {e.read}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-stone-100 group-hover:bg-amber-900 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // 3: Neo-Brutalist Cyberpunk Grid
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { id: 'POST_01', title: 'HARDWARE MATRIX: BUILDING CYBER RIGS IN 2026', tag: 'HARDWARE', read: '4 MIN', bg: 'bg-lime-400', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop' },
    { id: 'POST_02', title: 'NEURAL AUDIO SYNTHESIS & ALGORITHMIC BEATS', tag: 'AUDIO TECH', read: '6 MIN', bg: 'bg-cyan-400', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { id: 'POST_03', title: 'STREET DRIP: HIGH-TECH MONOCHROME APPAREL', tag: 'STYLE', read: '3 MIN', bg: 'bg-fuchsia-400', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { id: 'POST_04', title: 'NEON RUNNER: KINETIC FOOTWEAR STRUCTURES', tag: 'KICKS', read: '5 MIN', bg: 'bg-yellow-400', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b-4 border-black pb-6 bg-white p-6 rounded-xl border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
              <Zap className="w-6 h-6 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-black">CYBER PUNK FEED #${i}</h2>
          </div>
          <span className="hidden sm:block text-xs font-black bg-black text-lime-400 px-4 py-2 rounded uppercase">LIVE STREAM: ACTIVE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -6, y: -6 }}
              className={"border-4 border-black " + p.bg + " p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between min-h-[420px]"}
            >
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

                <span className="text-[11px] font-black uppercase text-black/80 flex items-center gap-1 mb-2">
                  <Clock className="w-3 h-3" /> {p.read} READ
                </span>
                <h3 className="text-lg font-black uppercase text-black leading-tight">{p.title}</h3>
              </div>

              <div className="pt-4 border-t-2 border-black/30 mt-4 flex justify-between items-center text-[10px] font-black">
                <span>{p.id}</span>
                <span className="underline">ACCESS DISPATCH →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // 4: Bento Box High-Tech Portal
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Heart } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  return (
    <section className="w-full py-24 px-6 bg-neutral-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-8 bg-rose-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Bento Article Matrix #${i}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-rose-950/80 to-neutral-900 rounded-3xl p-8 border border-rose-500/20 flex flex-col justify-between min-h-[400px] cursor-pointer group"
          >
            <div>
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-mono font-bold">TOP STORY</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-rose-400 transition-colors mt-6 mb-4 leading-snug">
                Quantum Neural Rendering & Next-Gen Realtime VFX
              </h3>
              <p className="text-neutral-400 text-sm line-clamp-3 leading-relaxed">
                How GPU raymarching and neural radiance fields are replacing traditional polygon graphics pipelines in AAA game production.
              </p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs text-neutral-400">
              <span>By Dr. Alexis Morgan • 8 min read</span>
              <ArrowUpRight className="w-5 h-5 text-rose-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-800/60 rounded-3xl p-6 border border-white/10 flex flex-col justify-between min-h-[400px] cursor-pointer group"
          >
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" alt="Footwear" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold">HARDWARE</span>
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mt-2">Parametric Sole Engineering</h4>
            </div>
            <div className="flex items-center gap-4 text-neutral-400 text-xs pt-4 border-t border-white/10">
              <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-rose-400" /> 1.4k</span>
              <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> 84</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-800/60 rounded-3xl p-6 border border-white/10 flex flex-col justify-between min-h-[400px] cursor-pointer group"
          >
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" alt="Watch" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold">LUXURY</span>
              <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mt-2">Titanium Skeletonized Watches</h4>
            </div>
            <div className="flex items-center gap-4 text-neutral-400 text-xs pt-4 border-t border-white/10">
              <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-rose-400" /> 980</span>
              <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> 32</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`,

  // 5: Clean Horizontal Card Stream
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bookmark } from 'lucide-react';

export function GlobalBlogGrid${i}() {
  const posts = [
    { title: 'Designing High-Conversion E-Commerce Checkout Flows', category: 'UX & CRO', date: 'Oct 09, 2026', read: '5 min read', author: 'Sarah Jenkins', img: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?q=80&w=800&auto=format&fit=crop' },
    { title: 'The Rise of Micro-Animations in Modern SaaS Dashboards', category: 'UI DESIGN', date: 'Oct 07, 2026', read: '4 min read', author: 'David Kovač', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Building Scalable Component Libraries with Tailwind & React', category: 'FRONTEND', date: 'Oct 04, 2026', read: '8 min read', author: 'Li Wei', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">INSIGHTS STREAM #${i}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Product & Design Field Notes</h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 8 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer group hover:border-indigo-500 transition-all"
            >
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
                <button className="p-2.5 rounded-full bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-colors">
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

console.log('Overwritten all 20 GlobalBlogGrid components in nested subdirectories!');
