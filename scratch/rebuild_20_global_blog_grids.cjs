const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'global', '14-blog-grid');

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

const avatars = {
  a1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  a2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  a3: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
};

const templates = [
  // 1: Glassmorphic Hero & Grid Blog Layout
  {
    num: 1,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Clock, Bookmark } from 'lucide-react';

export function GlobalBlogGrid1() {
  const posts = [
    { title: 'Designing Spatial UI Paradigms for 2026', tag: 'DESIGN TECH', date: 'Oct 10', read: '5 min', author: 'Sophia Chen', avatar: '${avatars.a1}', img: '${images.tech}' },
    { title: 'Sustainable Apparel & Minimalist Living', tag: 'FASHION', date: 'Oct 08', read: '4 min', author: 'Marcus Vance', avatar: '${avatars.a2}', img: '${images.fashion}' },
    { title: 'Modern Interior Architectural Trends', tag: 'INTERIOR', date: 'Oct 05', read: '6 min', author: 'Elena Rostova', avatar: '${avatars.a3}', img: '${images.home}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC MAGAZINE PORTAL
            </div>
            <h2 className="text-4xl font-extrabold text-white">Featured Insights & Stories</h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:underline">
            View All Articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl p-5 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50 hover:shadow-2xl transition-all h-[440px]"
            >
              <div className="w-full h-52 rounded-2xl overflow-hidden relative mb-4">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                  {p.tag}
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-white">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Clock className="w-3.5 h-3.5" /> <span>{p.read} read</span> • <span>{p.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">{p.title}</h3>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-4">
                <img src={p.avatar} alt={p.author} className="w-8 h-8 rounded-full object-cover border border-cyan-500/50" />
                <span className="text-xs text-slate-300 font-medium">{p.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 2: High-Fashion Editorial Luxury Magazine Grid
  {
    num: 2,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalBlogGrid2() {
  const posts = [
    { title: 'Sculptural Tailoring & The Evolution of Haute Couture', tag: 'ESSAY 01', author: 'Antoine Laurent', img: '${images.fashion}', excerpt: 'An exploration into heavy wool drapes, structural tailoring, and sustainable luxury.' },
    { title: 'The Fine Art of Hand-Assembled Mechanical Watches', tag: 'ESSAY 02', author: 'Victoria Sterling', img: '${images.jewelry}', excerpt: 'Inside the quiet ateliers of Swiss horology masters crafting timeless precision.' },
    { title: 'Monochrome Footwear & Contemporary Street Architecture', tag: 'ESSAY 03', author: 'Camilla Rossi', img: '${images.shoes}', excerpt: 'How brutalist architecture influences modern athletic shoe design.' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Editorial Gazette</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Curated Essays & Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p, idx) => (
            <motion.article
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-stone-200 flex flex-col justify-between h-[480px] cursor-pointer group"
            >
              <div>
                <div className="h-56 rounded-xl overflow-hidden mb-5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="text-xs font-mono text-amber-800 font-bold uppercase">{p.tag}</span>
                <h3 className="font-serif text-2xl text-stone-950 mt-1 mb-2 group-hover:text-amber-800 transition-colors leading-snug">{p.title}</h3>
                <p className="font-sans text-xs text-stone-600 line-clamp-2 leading-relaxed">{p.excerpt}</p>
              </div>

              <div className="font-sans pt-4 border-t border-stone-100 flex justify-between items-center text-xs">
                <span className="font-mono text-stone-500">By {p.author}</span>
                <span className="font-bold text-stone-900 group-hover:text-amber-800 flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 3: Neo-Brutalist Cyberpunk Blog Portal
  {
    num: 3,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight, Clock } from 'lucide-react';

export function GlobalBlogGrid3() {
  const posts = [
    { title: 'HARDWARE HACKS: BUILDING CYBER RIGS IN 2026', tag: 'HARDWARE', read: '4 MIN', bg: 'bg-lime-400', img: '${images.gaming}' },
    { title: 'AUDIO MATRIX: NEURAL SOUND SYNTHESIS ESSAY', tag: 'AUDIO', read: '6 MIN', bg: 'bg-cyan-400', img: '${images.tech}' },
    { title: 'STREET DROP: FUTURE WEAR & MONOCHROME DRIP', tag: 'STYLE', read: '3 MIN', bg: 'bg-fuchsia-400', img: '${images.fashion}' },
    { title: 'NEON RUNNER: FOOTWEAR DESIGN PARADIGMS', tag: 'KICKS', read: '5 MIN', bg: 'bg-yellow-400', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b-4 border-black pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
              <Zap className="w-5 h-5 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER BLOG STREAM</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className={\`border-4 border-black \${p.bg} p-5 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between h-[380px]\`}
            >
              <div className="flex justify-between items-center">
                <span className="bg-black text-white text-xs font-black px-3 py-1 rounded">{p.tag}</span>
                <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="w-full h-36 border-2 border-black rounded-lg overflow-hidden bg-white my-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <span className="text-xs font-black uppercase text-black/70 flex items-center gap-1 mb-1">
                  <Clock className="w-3 h-3" /> {p.read} READ
                </span>
                <h3 className="text-lg font-black uppercase text-black leading-tight line-clamp-2">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 4: 3D Tactile Claymorphic Blog Deck
  {
    num: 4,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Clock } from 'lucide-react';

export function GlobalBlogGrid4() {
  const posts = [
    { title: 'Beauty Glow Rituals & Skincare Science', tag: 'BEAUTY', read: '3 MIN', bg: 'bg-rose-100 border-rose-200', pill: 'bg-rose-500', img: '${images.beauty}' },
    { title: 'Modern Living Architecture & Plant Care', tag: 'HOME', read: '5 MIN', bg: 'bg-teal-100 border-teal-200', pill: 'bg-teal-600', img: '${images.home}' },
    { title: 'Jewelry Care & Gemstone Polish Tips', tag: 'LUXURY', read: '4 MIN', bg: 'bg-purple-100 border-purple-200', pill: 'bg-purple-600', img: '${images.jewelry}' },
    { title: 'Active Outdoor Training & Fitness Mindset', tag: 'SPORTS', read: '6 MIN', bg: 'bg-indigo-100 border-indigo-200', pill: 'bg-indigo-600', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Articles
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Tactile Journal Deck</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className={\`p-6 rounded-3xl border-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col justify-between h-[380px] \${p.bg}\`}
            >
              <div className="flex justify-between items-center">
                <span className={\`text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm \${p.pill}\`}>{p.tag}</span>
                <Heart className="w-4 h-4 text-slate-500" />
              </div>

              <div className="w-full h-40 rounded-2xl overflow-hidden border-2 border-white shadow-md my-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1 mb-1">
                  <Clock className="w-3 h-3" /> {p.read} READ
                </span>
                <h3 className="text-lg font-black text-slate-900 leading-snug line-clamp-2">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 5: Holographic Neon Cyber Blog Matrix
  {
    num: 5,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Clock } from 'lucide-react';

export function GlobalBlogGrid5() {
  const posts = [
    { title: 'NEON RUNNER: SNEAKER REVOLUTION', tag: 'KICKS', read: '4 MIN', views: '14.2K', img: '${images.shoes}', glow: 'from-pink-500 to-purple-500' },
    { title: 'CYBER WEAR TAILORING ARCHITECTURE', tag: 'STYLE', read: '6 MIN', views: '28.9K', img: '${images.fashion}', glow: 'from-cyan-400 to-blue-600' },
    { title: 'VR HARDWARE COMPUTATIONAL DEMO', tag: 'TECH', read: '8 MIN', views: '45.1K', img: '${images.gaming}', glow: 'from-emerald-400 to-teal-600' },
    { title: 'NEURAL AUDIO ACOUSTICS ESSAY', tag: 'SOUND', read: '5 MIN', views: '19.4K', img: '${images.tech}', glow: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Holographic Telemetry Journal</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden p-[2px] cursor-pointer">
              <div className={\`absolute inset-0 bg-gradient-to-r \${p.glow} opacity-60 blur-sm\` } />
              <div className="relative z-10 bg-zinc-950 rounded-2xl p-5 h-[360px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-white font-bold">{p.tag}</span>
                  <span className="text-xs font-mono text-pink-400 flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {p.views}</span>
                </div>

                <div className="w-full h-36 rounded-xl overflow-hidden border border-white/10 my-3">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>

                <div>
                  <span className="text-xs font-mono text-pink-400 flex items-center gap-1 mb-1">
                    <Clock className="w-3 h-3" /> {p.read} READ
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug line-clamp-2">{p.title}</h3>
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

  // 6: Horizontal Expandable Accordion Blog Grid
  {
    num: 6,
    code: `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, User } from 'lucide-react';

export function GlobalBlogGrid6() {
  const [active, setActive] = useState(0);
  const posts = [
    { title: 'Luxury Apparel Fashion Essay', tag: 'STYLE', read: '5 MIN READ', author: 'Sophia Chen', img: '${images.fashion}', desc: 'An in-depth exploration into sustainable luxury tailoring and modern silhouette aesthetics.' },
    { title: 'Next-Gen Cyber Tech Architecture', tag: 'TECH', read: '7 MIN READ', author: 'Marcus Vance', img: '${images.tech}', desc: 'Detailed breakdown of computational hardware paradigms and spatial UI interfaces.' },
    { title: 'Swiss Horology Masterclass Story', tag: 'LUXURY', read: '4 MIN READ', author: 'Elena Rostova', img: '${images.jewelry}', desc: 'Craftsmanship documentary inside traditional Swiss watchmaker ateliers.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Expandable Article Stream</h2>

        <div className="flex flex-col lg:flex-row gap-4 h-[440px]">
          {posts.map((p, idx) => {
            const isSel = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                className={\`relative rounded-3xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between transition-all duration-500 \${isSel ? 'lg:flex-[3] bg-indigo-950 border-2 border-indigo-500' : 'lg:flex-[1] bg-slate-800'}\`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-indigo-600 rounded-full text-white">{p.tag}</span>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                    <Clock className="w-3.5 h-3.5" /> <span>{p.read}</span> • <User className="w-3.5 h-3.5 ml-1" /> <span>{p.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  {isSel && <p className="text-sm text-slate-300 mt-2">{p.desc}</p>}
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

  // 7: Skeuomorphic Velvet Gold Privilege Journal
  {
    num: 7,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

export function GlobalBlogGrid7() {
  const posts = [
    { title: 'The Gold Velvet Privilege Collection', tag: 'ESSAY 01', author: 'Lord Harrington', img: '${images.jewelry}' },
    { title: 'Royal Horology Legacy Chronicles', tag: 'ESSAY 02', author: 'Baron Von Steiner', img: '${images.tech}' },
    { title: 'Velvet Apparel Runway Heritage', tag: 'ESSAY 03', author: 'Lady Genevieve', img: '${images.fashion}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Royal Journal
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Embossed Gold Essays</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-6 shadow-2xl hover:border-amber-500 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-amber-400 font-bold">{p.tag}</span>
                <BookOpen className="w-4 h-4 text-amber-500" />
              </div>
              <div className="w-full h-40 rounded-xl overflow-hidden border border-amber-700/30 my-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-500">BY {p.author.toUpperCase()}</span>
                <h3 className="text-2xl font-serif text-amber-100 mt-0.5">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 8: Split-Tone Diagonal Article Cards
  {
    num: 8,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

export function GlobalBlogGrid8() {
  const posts = [
    { title: 'STREET WEAR ESSAY', tag: 'CULTURE', read: '4 MIN', color: 'bg-rose-500 text-white', img: '${images.fashion}' },
    { title: 'SMART TECH ESSAY', tag: 'HARDWARE', read: '6 MIN', color: 'bg-blue-600 text-white', img: '${images.tech}' },
    { title: 'HOME DECOR ESSAY', tag: 'INTERIOR', read: '5 MIN', color: 'bg-emerald-600 text-white', img: '${images.home}' },
    { title: 'KICKS DROP ESSAY', tag: 'FOOTWEAR', read: '3 MIN', color: 'bg-orange-500 text-white', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10 uppercase">Split-Tone Article Deck</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col h-[380px] group">
              <div className="h-1/2 w-full overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className={\`h-1/2 p-6 flex flex-col justify-between \${p.color}\`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>{p.tag}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.read}</span>
                </div>
                <h3 className="text-xl font-black uppercase leading-tight">{p.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  Read Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

  // 9: Sub-Zero Ice Frost Refractive Blog Deck
  {
    num: 9,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Clock } from 'lucide-react';

export function GlobalBlogGrid9() {
  const posts = [
    { title: 'Arctic Outdoor Gear Essay', tag: 'OUTDOOR', read: '5 MIN', img: '${images.sports}' },
    { title: 'Frosted Tech Architecture', tag: 'TECH', read: '7 MIN', img: '${images.tech}' },
    { title: 'Ice Jewelry Craft Story', tag: 'LUXURY', read: '4 MIN', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Journal
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Article Deck</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-400 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-sky-400 font-bold">{p.tag}</span>
                <ArrowUpRight className="w-5 h-5 text-sky-400" />
              </div>
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-sky-500/20 my-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-sky-300 flex items-center gap-1"><Clock className="w-3 h-3" /> {p.read}</span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 10: Retro Polaroid Film Reel Journal Grid
  {
    num: 10,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalBlogGrid10() {
  const posts = [
    { title: 'Vintage Denim Essay', tag: 'RETRO', date: 'EST. 1994', img: '${images.fashion}', rotate: '-rotate-2' },
    { title: 'Retro Audio Journal', tag: 'SOUND', date: 'EST. 1988', img: '${images.tech}', rotate: 'rotate-3' },
    { title: 'Classic Kicks Story', tag: 'KICKS', date: 'EST. 1992', img: '${images.shoes}', rotate: '-rotate-3' },
    { title: 'Analog Home Archive', tag: 'DECOR', date: 'EST. 1996', img: '${images.home}', rotate: 'rotate-2' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Journal Archive</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={\`bg-white p-4 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all \${p.rotate}\`}
            >
              <div className="w-full h-48 bg-stone-100 overflow-hidden mb-3 border border-stone-200">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="font-sans flex justify-between items-center text-xs font-bold">
                <span className="text-amber-800">{p.tag}</span>
                <span className="font-mono text-stone-500">{p.date}</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-sans mt-1">{p.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 11: Isometric 3D Spatial Article Deck
  {
    num: 11,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalBlogGrid11() {
  const posts = [
    { title: 'Spatial Gear Architecture', tag: '3D TECH', read: '5 MIN', img: '${images.tech}' },
    { title: 'Spatial Apparel Runway', tag: '3D STYLE', read: '4 MIN', img: '${images.fashion}' },
    { title: 'Spatial Living Design', tag: '3D HOME', read: '6 MIN', img: '${images.home}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Article Deck</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, rotateX: 5 }}
              className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-6 shadow-2xl cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-indigo-500/30">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-indigo-400">
                  <span>{p.tag}</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 12: Minimalist Blueprint Line-Art Article Spec
  {
    num: 12,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalBlogGrid12() {
  const posts = [
    { code: 'ARTICLE_01', read: '4 MIN', title: 'APPAREL ARCHITECTURE SPEC', img: '${images.fashion}' },
    { code: 'ARTICLE_02', read: '6 MIN', title: 'COMPUTATIONAL TECH SPEC', img: '${images.tech}' },
    { code: 'ARTICLE_03', read: '5 MIN', title: 'INTERIOR SPECIFICATION', img: '${images.home}' },
    { code: 'ARTICLE_04', read: '3 MIN', title: 'TIMEPIECE SPECIFICATION', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">BLUEPRINT ARTICLE INDEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-slate-700 p-5 rounded hover:border-white transition-colors cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>[{p.code}]</span>
                <span>{p.read}</span>
              </div>
              <div className="w-full h-36 border border-slate-800 rounded overflow-hidden my-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-70 hover:opacity-100" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wider">{p.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 13: Circular Radial Node Article Ring
  {
    num: 13,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalBlogGrid13() {
  const posts = [
    { title: 'Fashion Story', read: '5 min', img: '${images.fashion}' },
    { title: 'Tech Story', read: '7 min', img: '${images.tech}' },
    { title: 'Living Story', read: '4 min', img: '${images.home}' },
    { title: 'Jewelry Story', read: '6 min', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Radial Story Nodes
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Orbital Article Ring</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30 p-1 bg-slate-800">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs font-mono text-indigo-400">{p.read}</span>
              <span className="text-sm font-bold text-slate-200">{p.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 14: Cinematic Motion Video Article Canvas
  {
    num: 14,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalBlogGrid14() {
  const posts = [
    { title: 'Cinematic Fashion Essay', read: '5 min watch', img: '${images.fashion}' },
    { title: 'Motion Tech Breakdown', read: '8 min watch', img: '${images.tech}' },
    { title: 'Live Gaming Culture', read: '6 min watch', img: '${images.gaming}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-10">Cinematic Motion Video Journal</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden h-[380px] cursor-pointer border border-zinc-800">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-amber-400 font-bold">{p.read}</span>
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 15: Diamond Facet Prism Blog Grid
  {
    num: 15,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalBlogGrid15() {
  const posts = [
    { title: 'Jewelry Prism Essay', read: '4 min', img: '${images.jewelry}' },
    { title: 'Prism Fashion Essay', read: '5 min', img: '${images.fashion}' },
    { title: 'Crystal Living Essay', read: '6 min', img: '${images.home}' },
    { title: 'Diamond Tech Essay', read: '7 min', img: '${images.tech}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Article Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-cyan-400 font-bold">{p.read} PRISM</span>
              <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 my-2">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">{p.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 16: Cyber Matrix Terminal Blog Logs
  {
    num: 16,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalBlogGrid16() {
  const posts = [
    { code: 'LOG_ARTICLE_01', read: '5 MIN', title: 'HARDWARE_ESSAY_LOG', img: '${images.tech}' },
    { code: 'LOG_ARTICLE_02', read: '4 MIN', title: 'WEARABLE_ESSAY_LOG', img: '${images.fashion}' },
    { code: 'LOG_ARTICLE_03', read: '6 MIN', title: 'FOOTWEAR_ESSAY_LOG', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase">Matrix Terminal Blog Stream</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="border border-emerald-800 bg-emerald-950/20 p-6 rounded hover:border-emerald-400 cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="flex justify-between text-xs text-emerald-600">
                <span>[{p.code}]</span>
                <span>{p.read}</span>
              </div>
              <div className="w-full h-36 border border-emerald-900 rounded overflow-hidden my-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-60 hover:opacity-100" />
              </div>
              <h3 className="text-lg font-bold text-emerald-300">{p.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 17: Organic Curved Sunset Fluid Journal
  {
    num: 17,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalBlogGrid17() {
  const posts = [
    { title: 'Sunset Apparel Essay', read: '4 MIN', img: '${images.fashion}', bg: 'from-orange-500 to-rose-500' },
    { title: 'Warm Living Journal', read: '6 MIN', img: '${images.home}', bg: 'from-amber-500 to-orange-600' },
    { title: 'Golden Jewels Story', read: '5 MIN', img: '${images.jewelry}', bg: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-200">Organic Sunset Fluid Journal</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={\`rounded-[40px] p-6 bg-gradient-to-br \${p.bg} text-stone-950 cursor-pointer shadow-xl h-[380px] flex flex-col justify-between\`}
            >
              <span className="text-xs font-bold uppercase tracking-wider bg-stone-950/20 px-3 py-1 rounded-full w-max text-stone-950">{p.read}</span>
              <div className="w-full h-44 rounded-[30px] overflow-hidden my-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-black text-stone-950">{p.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 18: Elevated Card Deck Fan-Out Blog Grid
  {
    num: 18,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

export function GlobalBlogGrid18() {
  const posts = [
    { title: 'Deck Apparel Essay', read: '5 MIN', img: '${images.fashion}' },
    { title: 'Deck Tech Essay', read: '7 MIN', img: '${images.tech}' },
    { title: 'Deck Sports Essay', read: '4 MIN', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-3xl font-extrabold text-white">Elevated Card Deck Journal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-indigo-500 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-700">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs text-indigo-400 font-mono font-bold">{p.read}</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">{p.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
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
  },

  // 19: Modern Neumorphic Soft Inset Article Grid
  {
    num: 19,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalBlogGrid19() {
  const posts = [
    { title: 'Neumorphic Tech Essay', read: '5 MIN READ', img: '${images.tech}' },
    { title: 'Neumorphic Home Essay', read: '6 MIN READ', img: '${images.home}' },
    { title: 'Neumorphic Kicks Essay', read: '4 MIN READ', img: '${images.shoes}' },
    { title: 'Neumorphic Style Essay', read: '5 MIN READ', img: '${images.fashion}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-10">Neumorphic Soft Inset Article Grid</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-200 p-6 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="w-full h-36 rounded-2xl overflow-hidden shadow-inner border border-slate-300">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500">{p.read}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 20: Flagship Omnichannel Bento Master Blog Suite
  {
    num: 20,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Clock, Eye } from 'lucide-react';

export function GlobalBlogGrid20() {
  const posts = [
    { title: 'Omnichannel Digital Commerce Strategy 2026', read: '8 min read', views: '32.4K', img: '${images.fashion}', badge: 'FLAGSHIP' },
    { title: 'Cyber Security & Privacy in Next-Gen Web UI', read: '6 min read', views: '28.1K', img: '${images.tech}', badge: 'TRENDING' },
    { title: 'Biophilic Interior Architecture & Living Spaces', read: '5 min read', views: '19.5K', img: '${images.home}', badge: 'FEATURED' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Blog Suite
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Journal</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-cyan-500 cursor-pointer h-[420px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-800">{p.badge}</span>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {p.views}</span>
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-700 my-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mb-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {p.read}</span>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-black text-white">{p.title}</h3>
                  <div className="w-9 h-9 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold shrink-0 ml-2">
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
}`
  }
];

templates.forEach(t => {
  const dirName = `global-blog-grid-${t.num}`;
  const targetDir = path.join(baseDir, dirName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const fileName = `GlobalBlogGrid${t.num}.tsx`;
  fs.writeFileSync(path.join(targetDir, fileName), t.code, 'utf8');
  console.log(`Rebuilt ${fileName}`);
});

console.log('All 20 Global Blog Grid components rebuilt with authentic Blog UI layouts!');
