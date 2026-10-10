const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'global', '08-category-grid');

const sampleImages = {
  fashion: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
  tech: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
  home: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  beauty: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  sports: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  jewelry: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
  gaming: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop"
};

// Data definitions for 20 designs
const designs = [
  {
    num: 1,
    name: "GlobalCategoryGrid1",
    title: "GLASSMORPHIC BENTO CATEGORY GRID",
    anim: "HOVER 3D TILT & GLOW FOLLOW",
    desc: "Frosted dark glass bento tiles with subtle neon borders, liquid backdrop blur, and magnetic hover tilt.",
    componentCode: `
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, Zap } from 'lucide-react';

export function GlobalCategoryGrid1() {
  const categories = [
    { id: 1, title: 'Luxury Apparel', items: '1,420 Products', img: '${sampleImages.fashion}', size: 'col-span-1 md:col-span-2 row-span-2', badge: 'Trending' },
    { id: 2, title: 'Cyber Tech', items: '890 Products', img: '${sampleImages.tech}', size: 'col-span-1 row-span-1', badge: 'New Tech' },
    { id: 3, title: 'Modern Living', items: '640 Products', img: '${sampleImages.home}', size: 'col-span-1 row-span-1', badge: 'Popular' },
    { id: 4, title: 'Velvet Beauty', items: '310 Products', img: '${sampleImages.beauty}', size: 'col-span-1 md:col-span-2 row-span-1', badge: 'Featured' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white relative overflow-hidden font-sans">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" /> Curated Ecosystem
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
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
}
`
  },
  {
    num: 2,
    name: "GlobalCategoryGrid2",
    title: "FLOATING PARALLAX EDITORIAL DECK",
    anim: "MULTI-LAYER ELEVATION & IMAGE SLIDE",
    desc: "High-fashion minimalist deck featuring floating offset image cards, luxury serif typography, and staggered image reveal.",
    componentCode: `
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function GlobalCategoryGrid2() {
  const items = [
    { id: '01', title: 'Haute Couture', sub: 'Autumn / Winter Edition', img: '${sampleImages.fashion}', tag: '01 / ESSENTIALS' },
    { id: '02', title: 'Timepiece Masterworks', sub: 'Swiss Precision Craft', img: '${sampleImages.jewelry}', tag: '02 / LUXURY' },
    { id: '03', title: 'Urban Footwear', sub: 'Street Culture Icon', img: '${sampleImages.shoes}', tag: '03 / TRENDING' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-amber-50/50 text-slate-900 font-sans border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">Editorial Index</span>
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
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-mono px-3 py-1 rounded-full font-bold">
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
}
`
  },
  {
    num: 3,
    name: "GlobalCategoryGrid3",
    title: "NEO-BRUTALIST CYBERPUNK GRID",
    anim: "HARD OFFSET SHADOW & TEXT GLITCH",
    desc: "High-impact neo-brutalist grid with thick black borders, vibrant neon fill cards, and tactile button pop.",
    componentCode: `
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Star } from 'lucide-react';

export function GlobalCategoryGrid3() {
  const cards = [
    { title: 'GAMING GEAR', count: '450+ ITEMS', bg: 'bg-lime-400', img: '${sampleImages.gaming}', tag: 'HOT' },
    { title: 'AUDIO TECH', count: '280+ ITEMS', bg: 'bg-cyan-400', img: '${sampleImages.tech}', tag: 'NEW' },
    { title: 'SNEAKER DROP', count: '610+ ITEMS', bg: 'bg-fuchsia-400', img: '${sampleImages.shoes}', tag: 'LIMITED' },
    { title: 'STREETWEAR', count: '890+ ITEMS', bg: 'bg-yellow-400', img: '${sampleImages.fashion}', tag: 'SALE' },
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
}
`
  }
];

console.log('Generating files...');
