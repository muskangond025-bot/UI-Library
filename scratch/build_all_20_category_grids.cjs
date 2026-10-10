const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'global', '08-category-grid');

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
  // 1: Glassmorphic Bento Grid
  {
    num: 1,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export function GlobalCategoryGrid1() {
  const categories = [
    { id: 1, title: 'Luxury Apparel', items: '1,420 Products', img: '${images.fashion}', size: 'col-span-1 md:col-span-2 row-span-2', badge: 'Trending' },
    { id: 2, title: 'Cyber Tech', items: '890 Products', img: '${images.tech}', size: 'col-span-1 row-span-1', badge: 'New Tech' },
    { id: 3, title: 'Modern Living', items: '640 Products', img: '${images.home}', size: 'col-span-1 row-span-1', badge: 'Popular' },
    { id: 4, title: 'Velvet Beauty', items: '310 Products', img: '${images.beauty}', size: 'col-span-1 md:col-span-2 row-span-1', badge: 'Featured' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" /> Glass Bento Grid
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Explore Collections
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group">
            Browse All Categories <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={\`group relative rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between cursor-pointer hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 \${cat.size}\`}
            >
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 text-white backdrop-blur-md border border-white/10">
                  {cat.badge}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="relative z-10 mt-auto pt-8">
                <p className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-1">{cat.items}</p>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 2: Floating Parallax Editorial Deck
  {
    num: 2,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalCategoryGrid2() {
  const items = [
    { id: '01', title: 'Haute Couture', sub: 'Autumn / Winter Edition', img: '${images.fashion}', tag: '01 / ESSENTIALS' },
    { id: '02', title: 'Timepiece Masterworks', sub: 'Swiss Precision Craft', img: '${images.jewelry}', tag: '02 / LUXURY' },
    { id: '03', title: 'Urban Footwear', sub: 'Street Culture Icon', img: '${images.shoes}', tag: '03 / TRENDING' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-amber-50/50 text-slate-900 font-sans border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">Editorial Deck</span>
          <h2 className="text-4xl sm:text-6xl font-serif mt-4 text-slate-900 font-normal">
            Selected Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group cursor-pointer bg-white rounded-2xl p-6 shadow-xl shadow-amber-950/5 border border-amber-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden rounded-xl h-72 mb-6 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 text-slate-900 text-xs font-mono px-3 py-1 rounded-full font-bold">
                  {item.tag}
                </div>
              </div>
              <div>
                <span className="text-amber-800 text-xs font-mono font-semibold uppercase">{item.sub}</span>
                <h3 className="text-2xl font-serif text-slate-950 mt-1 mb-4 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-950">
                  Explore Catalogue <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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

  // 3: Neo-Brutalist Cyberpunk Grid
  {
    num: 3,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

export function GlobalCategoryGrid3() {
  const cards = [
    { title: 'GAMING GEAR', count: '450+ ITEMS', bg: 'bg-lime-400', img: '${images.gaming}', tag: 'HOT' },
    { title: 'AUDIO TECH', count: '280+ ITEMS', bg: 'bg-cyan-400', img: '${images.tech}', tag: 'NEW' },
    { title: 'SNEAKER DROP', count: '610+ ITEMS', bg: 'bg-fuchsia-400', img: '${images.shoes}', tag: 'LIMITED' },
    { title: 'STREETWEAR', count: '890+ ITEMS', bg: 'bg-yellow-400', img: '${images.fashion}', tag: 'SALE' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b-4 border-black pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
              <Zap className="w-5 h-5 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
              POPULAR CATEGORIES
            </h2>
          </div>
          <span className="hidden sm:inline-block bg-black text-white px-4 py-2 text-sm font-extrabold uppercase rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            SPRING 2026 DROP
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className={\`border-4 border-black \${card.bg} p-5 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer flex flex-col justify-between h-[340px]\`}
            >
              <div className="flex justify-between items-center">
                <span className="bg-black text-white text-xs font-black px-2.5 py-1 uppercase rounded">
                  {card.tag}
                </span>
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="w-full h-36 border-2 border-black rounded-lg overflow-hidden my-4 bg-white">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-black tracking-wider text-black/70">{card.count}</span>
                <h3 className="text-xl font-black uppercase tracking-tight text-black mt-0.5">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 4: 3D Tactile Claymorphic Pill Cards
  {
    num: 4,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export function GlobalCategoryGrid4() {
  const items = [
    { title: 'Beauty Glow', items: '240 Items', bg: 'bg-rose-100 border-rose-200', pill: 'bg-rose-500', img: '${images.beauty}' },
    { title: 'Home Comfort', items: '180 Items', bg: 'bg-teal-100 border-teal-200', pill: 'bg-teal-600', img: '${images.home}' },
    { title: 'Fine Jewels', items: '320 Items', bg: 'bg-purple-100 border-purple-200', pill: 'bg-purple-600', img: '${images.jewelry}' },
    { title: 'Active Sports', items: '410 Items', bg: 'bg-indigo-100 border-indigo-200', pill: 'bg-indigo-600', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Collection
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Explore Soft Categories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={\`p-6 rounded-3xl border-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all cursor-pointer \${item.bg} flex flex-col justify-between h-96\` }
            >
              <div className="flex justify-between items-center">
                <span className={\`text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm \${item.pill}\`}>
                  {item.items}
                </span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-inner">
                  <Heart className="w-4 h-4" />
                </div>
              </div>
              <div className="w-full h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 my-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                <p className="text-xs font-medium text-slate-500 mt-1">Tap to browse collection</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 5: Holographic Neon Mesh Grid
  {
    num: 5,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye } from 'lucide-react';

export function GlobalCategoryGrid5() {
  const items = [
    { title: 'Cyber Wear', count: '1.2K', img: '${images.fashion}', glow: 'from-pink-500 to-purple-500' },
    { title: 'Neural Tech', count: '850', img: '${images.tech}', glow: 'from-cyan-400 to-blue-600' },
    { title: 'VR Hardware', count: '430', img: '${images.gaming}', glow: 'from-emerald-400 to-teal-600' },
    { title: 'Neon Kicks', count: '980', img: '${images.shoes}', glow: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-pink-500 font-mono font-bold">Holographic Neon Mesh</span>
            <h2 className="text-4xl font-extrabold text-white mt-1">Future Categories</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden p-[2px] cursor-pointer"
            >
              <div className={\`absolute inset-0 bg-gradient-to-r \${item.glow} opacity-60 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500\` } />
              <div className="relative z-10 bg-zinc-950 rounded-2xl p-5 h-80 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="relative z-20 flex justify-between items-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-white">
                    {item.count} PRODUCTS
                  </span>
                  <Eye className="w-5 h-5 text-white/80 group-hover:text-pink-400 transition-colors" />
                </div>
                <div className="relative z-20">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
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

  // 6: Horizontal Expandable Accordion Grid
  {
    num: 6,
    code: `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalCategoryGrid6() {
  const [active, setActive] = useState(0);

  const categories = [
    { title: 'Editorial Apparel', count: '1,200+ Products', img: '${images.fashion}', desc: 'High fashion curations for modern aesthetics.' },
    { title: 'Tech Electronics', count: '850+ Products', img: '${images.tech}', desc: 'Next-gen devices and smart accessories.' },
    { title: 'Luxury Timepieces', count: '340+ Products', img: '${images.jewelry}', desc: 'Handcrafted Swiss movement masterpieces.' },
    { title: 'Athletic Footwear', count: '920+ Products', img: '${images.shoes}', desc: 'Performance footwear for active lifestyles.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Interactive Accordion</span>
          <h2 className="text-4xl font-extrabold text-white mt-1">Expand Category Deck</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-[500px]">
          {categories.map((cat, idx) => {
            const isSelected = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={\`relative rounded-3xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between transition-all duration-500 \${
                  isSelected ? 'lg:flex-[3] bg-indigo-950' : 'lg:flex-[1] bg-slate-800 hover:bg-slate-700'
                }\`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-mono px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white font-bold">
                    0{idx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                  {isSelected && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-slate-300 mt-2 max-w-md">
                      {cat.desc} — <span className="text-indigo-400 font-semibold">{cat.count}</span>
                    </motion.p>
                  )}
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

  // 7: Skeuomorphic Luxury Velvet Cards
  {
    num: 7,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronRight } from 'lucide-react';

export function GlobalCategoryGrid7() {
  const items = [
    { title: 'Royal Jewelry', desc: 'Hand-cut diamond accents', img: '${images.jewelry}', tag: 'EXCLUSIVE' },
    { title: 'Vintage Horology', desc: 'Craftsmanship heritage', img: '${images.tech}', tag: 'RARE' },
    { title: 'Velvet Couture', desc: 'Bespoke tailoring', img: '${images.fashion}', tag: 'LIMITED' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-4 h-4" /> Royal Reserve
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Prestige Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-6 shadow-2xl hover:border-amber-500 transition-colors cursor-pointer flex flex-col justify-between h-96"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-amber-400 tracking-widest">{item.tag}</span>
                <span className="text-xs text-amber-600 font-mono">0{idx + 1}</span>
              </div>
              <div className="w-full h-44 rounded-xl overflow-hidden border border-amber-700/30 my-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-amber-100">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-sans mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 8: Split-Screen Dual Tone Cards
  {
    num: 8,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalCategoryGrid8() {
  const items = [
    { title: 'STREET FASHION', color: 'bg-rose-500 text-white', img: '${images.fashion}' },
    { title: 'SMART DEVICES', color: 'bg-blue-600 text-white', img: '${images.tech}' },
    { title: 'HOME DECOR', color: 'bg-emerald-600 text-white', img: '${images.home}' },
    { title: 'FOOTWEAR DROP', color: 'bg-orange-500 text-white', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10 uppercase tracking-tight">Split-Tone Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col h-96 group"
            >
              <div className="h-1/2 w-full overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className={\`h-1/2 p-6 flex flex-col justify-between \${item.color}\`}>
                <span className="text-xs font-mono opacity-80">CATEGORY 0{idx + 1}</span>
                <h3 className="text-2xl font-black uppercase leading-tight">{item.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  View Items <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

  // 9: Sub-Zero Ice Frost Refractive Deck
  {
    num: 9,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalCategoryGrid9() {
  const items = [
    { title: 'Arctic Outdoor', count: '450 Items', img: '${images.sports}' },
    { title: 'Frosted Tech', count: '890 Items', img: '${images.tech}' },
    { title: 'Ice Jewelry', count: '230 Items', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Frost
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-400 transition-all cursor-pointer h-96 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-sky-400">{item.count}</span>
                <ArrowUpRight className="w-5 h-5 text-sky-400" />
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-sky-500/20 my-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 10: Subtle Retro Polaroid Gallery Grid
  {
    num: 10,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalCategoryGrid10() {
  const photos = [
    { title: 'Vintage Denim', date: 'EST. 1994', img: '${images.fashion}', rotate: '-rotate-2' },
    { title: 'Retro Audio', date: 'EST. 1988', img: '${images.tech}', rotate: 'rotate-3' },
    { title: 'Classic Kicks', date: 'EST. 1992', img: '${images.shoes}', rotate: '-rotate-3' },
    { title: 'Analog Home', date: 'EST. 1996', img: '${images.home}', rotate: 'rotate-2' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold tracking-tight">Retro Polaroid Archive</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={\`bg-white p-4 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all duration-300 \${item.rotate}\`}
            >
              <div className="w-full h-56 bg-stone-100 overflow-hidden mb-4 border border-stone-200">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center font-sans">
                <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                <span className="text-xs font-mono text-amber-700 font-bold">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 11: Isometric 3D Stacked Tile Grid
  {
    num: 11,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalCategoryGrid11() {
  const items = [
    { title: 'Spatial Gear', sub: '3D Hardware', img: '${images.tech}' },
    { title: 'Spatial Apparel', sub: 'Cyber Threads', img: '${images.fashion}' },
    { title: 'Spatial Living', sub: 'Futuristic Furniture', img: '${images.home}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Categories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, rotateX: 5 }}
              className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-6 shadow-2xl cursor-pointer h-96 flex flex-col justify-between"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-indigo-500/30">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400">{item.sub}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 12: Minimalist Line-Art Wireframe Grid
  {
    num: 12,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalCategoryGrid12() {
  const items = [
    { code: 'SEC_01', title: 'APPAREL ARCHITECTURE', count: '1,420 UNITS', img: '${images.fashion}' },
    { code: 'SEC_02', title: 'COMPUTATIONAL TECH', count: '890 UNITS', img: '${images.tech}' },
    { code: 'SEC_03', title: 'INTERIOR SPECIFICATIONS', count: '640 UNITS', img: '${images.home}' },
    { code: 'SEC_04', title: 'PRECISION TIMEPIECES', count: '310 UNITS', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">SYSTEM WIREFRAME INDEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-slate-700 p-5 rounded hover:border-white transition-colors cursor-pointer flex flex-col justify-between h-80"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>[{item.code}]</span>
                <span>{item.count}</span>
              </div>
              <div className="w-full h-36 border border-slate-800 rounded overflow-hidden my-3">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm font-bold tracking-wider text-white uppercase">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 13: Circular Radial Node Category Ring
  {
    num: 13,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalCategoryGrid13() {
  const nodes = [
    { label: 'Fashion', img: '${images.fashion}' },
    { label: 'Tech', img: '${images.tech}' },
    { label: 'Living', img: '${images.home}' },
    { label: 'Jewelry', img: '${images.jewelry}' },
    { label: 'Sports', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Radial Category Nodes
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Orbital Hub</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30 group-hover:border-indigo-400 transition-all p-1 bg-slate-800">
                <img src={node.img} alt={node.label} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-sm font-bold text-slate-200 group-hover:text-indigo-400">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 14: Cinematic Video/Motion Canvas Grid
  {
    num: 14,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalCategoryGrid14() {
  const items = [
    { title: 'Cinematic Fashion', count: '1.5k Items', img: '${images.fashion}' },
    { title: 'Motion Tech', count: '920 Items', img: '${images.tech}' },
    { title: 'Live Gaming', count: '640 Items', img: '${images.gaming}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase tracking-wider mb-10">Cinematic Motion Canvas</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden h-96 cursor-pointer group border border-zinc-800"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-amber-400 uppercase">{item.count}</span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
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

export function GlobalCategoryGrid15() {
  const items = [
    { title: 'Jewelry Facets', img: '${images.jewelry}' },
    { title: 'Prism Fashion', img: '${images.fashion}' },
    { title: 'Crystal Living', img: '${images.home}' },
    { title: 'Diamond Tech', img: '${images.tech}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition-all cursor-pointer h-80 flex flex-col justify-between"
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-white/10">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300">{item.title}</h3>
            </motion.div>
          ))}
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

export function GlobalCategoryGrid16() {
  const items = [
    { code: 'SYS_NET_01', name: 'HARDWARE_TERMINAL', status: 'ONLINE', img: '${images.tech}' },
    { code: 'SYS_NET_02', name: 'WEARABLE_MODS', status: 'READY', img: '${images.fashion}' },
    { code: 'SYS_NET_03', name: 'CYBER_FOOTWEAR', status: 'ACTIVE', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase tracking-wider">Matrix Terminal Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="border border-emerald-800 bg-emerald-950/20 p-5 rounded hover:border-emerald-400 cursor-pointer flex flex-col justify-between h-80"
            >
              <div className="flex justify-between text-xs text-emerald-600">
                <span>{item.code}</span>
                <span>[{item.status}]</span>
              </div>
              <div className="w-full h-36 border border-emerald-900 rounded overflow-hidden my-3">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold text-emerald-300">{item.name}</h3>
            </motion.div>
          ))}
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

export function GlobalCategoryGrid17() {
  const items = [
    { title: 'Sunset Apparel', count: '1.2k Items', img: '${images.fashion}', bg: 'from-orange-500 to-rose-500' },
    { title: 'Warm Living', count: '840 Items', img: '${images.home}', bg: 'from-amber-500 to-orange-600' },
    { title: 'Golden Jewels', count: '310 Items', img: '${images.jewelry}', bg: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-200">Organic Sunset Waves</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={\`rounded-[40px] p-6 bg-gradient-to-br \${item.bg} text-stone-950 cursor-pointer shadow-xl h-96 flex flex-col justify-between\` }
            >
              <div className="w-full h-48 rounded-[30px] overflow-hidden shadow-md">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900/70">{item.count}</span>
                <h3 className="text-2xl font-black text-stone-950 mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 18: Elevated Card Deck Swiper Grid
  {
    num: 18,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

export function GlobalCategoryGrid18() {
  const items = [
    { title: 'Deck Apparel', count: '1.8k Items', img: '${images.fashion}' },
    { title: 'Deck Tech', count: '940 Items', img: '${images.tech}' },
    { title: 'Deck Sports', count: '520 Items', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-3xl font-extrabold text-white">Elevated Card Deck</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-indigo-500 transition-all cursor-pointer h-96 flex flex-col justify-between"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-700">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs text-indigo-400 font-mono">{item.count}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
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

  // 19: Modern Neumorphism Soft Inset Grid
  {
    num: 19,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalCategoryGrid19() {
  const items = [
    { title: 'Neumorphic Tech', items: '420 Items', img: '${images.tech}' },
    { title: 'Neumorphic Home', items: '210 Items', img: '${images.home}' },
    { title: 'Neumorphic Kicks', items: '580 Items', img: '${images.shoes}' },
    { title: 'Neumorphic Style', items: '890 Items', img: '${images.fashion}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-10">Neumorphic Soft Inset Deck</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-200 p-6 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] cursor-pointer flex flex-col justify-between h-80"
            >
              <div className="w-full h-36 rounded-2xl overflow-hidden shadow-inner border border-slate-300">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500">{item.items}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 20: Flagship Omnichannel Bento Carousel Grid
  {
    num: 20,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ArrowUpRight } from 'lucide-react';

export function GlobalCategoryGrid20() {
  const items = [
    { title: 'Omnichannel Apparel', count: '2.4K Products', rating: '4.9 ★', img: '${images.fashion}', badge: 'FLAGSHIP' },
    { title: 'Next-Gen Cyber Tech', count: '1.8K Products', rating: '5.0 ★', img: '${images.tech}', badge: 'TOP RATED' },
    { title: 'Luxury Living Suite', count: '950 Products', rating: '4.8 ★', img: '${images.home}', badge: 'BEST SELLER' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Master Catalog
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Grid</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-cyan-500 transition-all cursor-pointer h-[420px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-800">{item.badge}</span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}</span>
              </div>
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-700 my-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-400 font-mono">{item.count}</span>
                  <h3 className="text-2xl font-black text-white mt-0.5">{item.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold">
                  <ArrowUpRight className="w-5 h-5" />
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

// Write out all 20 components
templates.forEach(t => {
  const dirName = `global-category-grid-${t.num}`;
  const targetDir = path.join(baseDir, dirName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const fileName = `GlobalCategoryGrid${t.num}.tsx`;
  fs.writeFileSync(path.join(targetDir, fileName), t.code, 'utf8');
  console.log(`Generated ${fileName}`);
});

console.log('All 20 Global Category Grid components written successfully!');
