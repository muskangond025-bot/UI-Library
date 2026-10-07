const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/02-blog-featured-article');

// 20 Completely unique TSX layout generators with distinctive visual structures and animations
const customComponents = {
  1: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, User, Bookmark, Share2 } from 'lucide-react';

export function BlogFeaturedArticle1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-8 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto relative rounded-3xl p-8 lg:p-14 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> GLASS EDITORIAL #01
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
              {settings.title || 'THE FUTURE OF SUSTAINABLE DIGITAL ARCHITECTURE'}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {settings.excerpt || 'Exploring how zero-carbon cloud infrastructure and glassmorphic UI principles are reshaping modern web experiences.'}
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-t border-white/10 pt-4">
              <span className="text-amber-400 font-bold">{settings.author?.name || 'Elena Rostova'}</span>
              <span>•</span>
              <span>{settings.date || 'OCT 07, 2026'}</span>
              <span>•</span>
              <span>{settings.readTime || '6 MIN READ'}</span>
            </div>
            <div className="pt-2">
              <button className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2">
                <span>Read Full Article</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] group">
              <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Editorial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-mono">
                Glassmorphism Blur: 24px
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  2: `import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Clock, ArrowRight } from 'lucide-react';

export function BlogFeaturedArticle2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-8 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto p-8 rounded-3xl bg-slate-900 shadow-[15px_15px_30px_#0b0f19,-15px_-15px_30px_#1b253b] border border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)]">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1800&q=80"} alt="Soft Neumorphism" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold tracking-widest uppercase">
              NEUMORPHIC SPOTLIGHT #02
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {settings.title || 'THE ART OF TACTILE NEUMORPHIC INTERFACES'}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              {settings.excerpt || 'Exploring soft dimensional depth, dual shadow dynamics, and tactile feedback in modern web product design.'}
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <button className="px-6 py-3 rounded-xl bg-slate-900 shadow-[6px_6px_12px_#0b0f19,-6px_-6px_12px_#1b253b] active:shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2">
                <span>Explore Story</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  3: `import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap } from 'lucide-react';

export function BlogFeaturedArticle3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-8 px-4 bg-black text-cyan-400 font-mono">
      <div className="max-w-7xl mx-auto rounded-2xl border border-cyan-500/40 p-8 bg-slate-950/90 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]">
        <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-500/20 border-b border-l border-cyan-500/40 text-[10px] tracking-widest">
          SYS.HOLO_HUD // V3.0
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs text-cyan-300">
              <Terminal className="w-4 h-4" /> <span>HOLOGRAPHIC CYBER SPOTLIGHT #03</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-wide uppercase leading-none drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              {settings.title || 'QUANTUM ENCRYPTION & NEURAL MESH PROTOCOLS'}
            </h1>
            <p className="text-cyan-200/70 text-sm sm:text-base leading-relaxed font-sans">
              {settings.excerpt || 'Analyzing the convergence of zero-knowledge cryptography and decentralized neural networks in 2026.'}
            </p>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-cyan-900/60">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-widest clip-corner">
                INITIALIZE_READ
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 relative aspect-square border border-cyan-500/30 rounded-xl overflow-hidden p-2">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"} alt="Cyber" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}`,

  4: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogFeaturedArticle4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl translate-x-3 translate-y-3 blur-sm border border-emerald-500/20" />
        <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded-md">
              DEPTH MORPHISM #04
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {settings.title || 'ARCHITECTURAL DEPTH & SPATIAL HIERARCHY'}
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              {settings.excerpt || 'Utilizing multi-layered spatial z-indexing to guide user attention through modern editorial content.'}
            </p>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg">
              Explore Depth Model
            </button>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"} alt="Depth" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}`,

  5: `import React from 'react';

export function BlogFeaturedArticle5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-6xl mx-auto bg-indigo-900/60 rounded-[2.5rem] p-8 sm:p-14 border border-indigo-400/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-400/20 shadow-inner">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} alt="Clay" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase tracking-widest shadow-sm">
              CLAYMORPHIC STORY #05
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              {settings.title || 'SOFT 3D CLAYMORPHISM & PLAYFUL INTERACTION'}
            </h2>
            <p className="text-indigo-200/80 text-base leading-relaxed">
              {settings.excerpt || 'Embracing organic soft volume, inner shadow illumination, and friendly tactile UI elements.'}
            </p>
            <button className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs tracking-wider shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.3)] transition-all">
              Read Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  6: `import React from 'react';

export function BlogFeaturedArticle6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between space-y-6">
          <span className="px-3 py-1 w-fit rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
            FROSTED BENTO MAIN #06
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {settings.title || 'MODERN BENTO GRID EDITORIAL ARCHITECTURE'}
          </h2>
          <p className="text-slate-400 leading-relaxed">
            {settings.excerpt || 'Segmenting complex featured stories into interactive multi-tile bento grid components.'}
          </p>
          <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>By Elena Rostova</span>
            <span>6 MIN READ</span>
          </div>
        </div>
        <div className="md:col-span-4 bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden min-h-[300px] relative">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"} alt="Bento" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
      </div>
    </div>
  );
}`,

  7: `import React from 'react';

export function BlogFeaturedArticle7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-black text-slate-200">
      <div className="max-w-7xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-slate-500 via-slate-200 to-slate-700 shadow-2xl">
        <div className="bg-slate-950 rounded-[23px] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono tracking-widest uppercase">
              CHROME METALLIC FOCUS #07
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400">
              {settings.title || 'HIGH-CONTRAST METALLIC LIQUID UI MORPHISM'}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              {settings.excerpt || 'Precision chrome highlights, high-contrast borders, and liquid metal aesthetics for futuristic editorial banners.'}
            </p>
            <button className="px-8 py-3.5 bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-xl hover:brightness-110 transition-all">
              View Feature
            </button>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-700">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} alt="Chrome" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}`,

  8: `import React from 'react';

export function BlogFeaturedArticle8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-8 sm:p-14 shadow-2xl">
        <div className="max-w-3xl space-y-6">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
            AURORA MESH MESH #08
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            {settings.title || 'DYNAMIC AURORA FLUID MESH BACKGROUNDS'}
          </h2>
          <p className="text-purple-100/80 text-lg leading-relaxed">
            {settings.excerpt || 'Blending vivid liquid gradient meshes with ultra-clear frosted glass overlays for an immersive visual experience.'}
          </p>
          <button className="px-7 py-3.5 bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg">
            Explore Mesh Design
          </button>
        </div>
      </div>
    </div>
  );
}`,

  9: `import React from 'react';

export function BlogFeaturedArticle9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-slate-950">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold w-fit">
            SPLIT CAROUSEL #09
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {settings.title || 'SPLIT CAROUSEL FEATURED FOCUS & TIMELINE'}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {settings.excerpt || 'Dual-pane editorial layout featuring timeline navigation indicators and smooth dynamic slide updates.'}
          </p>
          <div className="flex items-center gap-2 pt-4">
            <div className="w-12 h-1 bg-blue-500 rounded-full" />
            <div className="w-3 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Split" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}`,

  10: `import React from 'react';

export function BlogFeaturedArticle10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto relative p-8 sm:p-14 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
        <div className="space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold tracking-widest uppercase">
            DARK VELVET GLASS #10
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            {settings.title || 'DARK VELVET HIGH-CONTRAST EDITORIAL'}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            {settings.excerpt || 'Deep dark mode aesthetics enhanced with subtle violet glow aura badges and rich contrast typography.'}
          </p>
          <button className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg">
            Read Premium Article
          </button>
        </div>
      </div>
    </div>
  );
}`,

  11: `import React from 'react';

export function BlogFeaturedArticle11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-6xl mx-auto bg-stone-950 border border-stone-800 rounded-2xl p-8 sm:p-12 shadow-[10px_10px_0px_#1c1917] relative">
        <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded-md shadow-md">
          SKEUOMORPHIC NOTE #11
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            {settings.title || 'TACTILE SKEUOMORPHIC JOURNAL & NOTE DESIGN'}
          </h2>
          <p className="text-stone-400 text-base leading-relaxed font-sans">
            {settings.excerpt || 'Bringing organic paper fold textures, embossed margins, and classic editorial weight into modern layouts.'}
          </p>
          <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
            <span>Elena Rostova • OCT 2026</span>
            <button className="underline text-amber-400 font-bold">Open Journal Note →</button>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  12: `import React from 'react';

export function BlogFeaturedArticle12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-7xl mx-auto border-2 border-emerald-500/50 p-6 sm:p-10 rounded-xl relative bg-emerald-950/20">
        <div className="absolute -top-3 left-6 px-2 bg-black text-xs text-emerald-400">
          [HUD_ARTICLE_FRAME // ID: 12]
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-wider uppercase text-white">
              {settings.title || 'SCI-FI HUD INTERACTION FRAMEWORK'}
            </h2>
            <p className="text-emerald-300/70 text-sm sm:text-base font-sans leading-relaxed">
              {settings.excerpt || 'Futuristic technical indicators, telemetry badges, and corner bracket frames for tech blogs.'}
            </p>
            <button className="px-6 py-3 bg-emerald-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-emerald-400">
              EXECUTE_READ()
            </button>
          </div>
          <div className="lg:col-span-4 aspect-square border border-emerald-500/40 rounded-lg overflow-hidden p-1">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"} alt="HUD" className="w-full h-full object-cover opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}`,

  13: `import React from 'react';

export function BlogFeaturedArticle13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
          <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full">
            BENTO STACKED GLASS #13
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
            {settings.title || 'STACKED GLASS TILE ARCHITECTURE'}
          </h2>
          <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
            {settings.excerpt || 'Combining primary featured hero glass cards with layered secondary detail panels.'}
          </p>
        </div>
      </div>
    </div>
  );
}`,

  14: `import React from 'react';

export function BlogFeaturedArticle14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto bg-slate-900/60 border border-blue-500/30 rounded-[3rem] p-8 sm:p-14 backdrop-blur-2xl text-center space-y-6 shadow-2xl">
        <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase rounded-full">
          LIQUID GLASS CAPSULE #14
        </span>
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
          {settings.title || 'LIQUID GLASS FLOATING CAPSULE DESIGN'}
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {settings.excerpt || 'Curved capsule container design featuring floating glass highlight aesthetics and clean focus.'}
        </p>
        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg">
          Explore Capsule
        </button>
      </div>
    </div>
  );
}`,

  15: `import React from 'react';

export function BlogFeaturedArticle15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.3)]">
        <div className="bg-slate-950 rounded-[22px] p-8 sm:p-12 space-y-6">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full">
            NEON EDGE GLOW #15
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {settings.title || 'NEON RAINBOW EDGE GLOW ARTICLE FRAME'}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-3xl">
            {settings.excerpt || 'Vibrant multi-tinted neon border gradient framing dark glass content cards.'}
          </p>
          <button className="px-7 py-3.5 bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl">
            Read Neon Story
          </button>
        </div>
      </div>
    </div>
  );
}`,

  16: `import React from 'react';

export function BlogFeaturedArticle16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto border-l-2 border-orange-500 pl-6 sm:pl-10 space-y-6 py-4">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">
          ARCHITECTURAL WIREFRAME #16
        </span>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
          {settings.title || 'ARCHITECTURAL WIREFRAME & MINIMALIST GRID'}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          {settings.excerpt || 'Clean linear guidelines, structural alignment, and minimalist typographic focus.'}
        </p>
        <button className="px-6 py-3 border border-orange-500/60 text-orange-400 hover:bg-orange-500/10 font-mono text-xs uppercase tracking-wider rounded-lg">
          Inspect Structure
        </button>
      </div>
    </div>
  );
}`,

  17: `import React from 'react';

export function BlogFeaturedArticle17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-6 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden aspect-[16/9] min-h-[450px] flex items-end p-8 sm:p-12 border border-slate-800">
        <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Poster" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <span className="px-3 py-1 bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md">
            MAGAZINE COVER SPOTLIGHT #17
          </span>
          <h2 className="text-3xl sm:text-6xl font-black text-white leading-none">
            {settings.title || 'FULL-HEIGHT MAGAZINE COVER OVERLAY'}
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {settings.excerpt || 'Full viewport hero background image layered under floating gradient text overlays.'}
          </p>
        </div>
      </div>
    </div>
  );
}`,

  18: `import React from 'react';

export function BlogFeaturedArticle18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-8 sm:p-14 shadow-[0_0_50px_rgba(34,211,238,0.2)] space-y-6">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION #18
        </span>
        <h2 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300">
          {settings.title || 'PRISMATIC CHROMATIC REFRACTION GLASS'}
        </h2>
        <p className="text-cyan-100/80 text-lg leading-relaxed max-w-3xl">
          {settings.excerpt || 'Multi-tinted rainbow light refractions creating dynamic chromatic edge blurs on glass cards.'}
        </p>
        <button className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg">
          View Prismatic Feature
        </button>
      </div>
    </div>
  );
}`,

  19: `import React from 'react';

export function BlogFeaturedArticle19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-zinc-900 text-amber-100">
      <div className="max-w-6xl mx-auto bg-zinc-900 border border-amber-800/40 rounded-3xl p-8 sm:p-12 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] space-y-6">
        <span className="px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg shadow-inner">
          EMBOSSED RETRO #19
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-amber-50 leading-tight">
          {settings.title || 'EMBOSSED VINTAGE NEUMORPHIC RETRO'}
        </h2>
        <p className="text-amber-200/70 text-base leading-relaxed max-w-2xl font-sans">
          {settings.excerpt || 'Warm retro vintage tones, pressed debossed typography badges, and tactile organic feel.'}
        </p>
        <button className="px-7 py-3.5 bg-amber-700 hover:bg-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-md">
          Read Vintage Story
        </button>
      </div>
    </div>
  );
}`,

  20: `import React from 'react';

export function BlogFeaturedArticle20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-14 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 via-slate-950 to-black border border-fuchsia-500/30 rounded-[3rem] p-10 sm:p-16 shadow-[0_0_60px_rgba(217,70,239,0.15)] flex flex-col items-center text-center space-y-8">
        <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA FULL-BLEED OVERLAY #20
        </span>
        <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-fuchsia-300 max-w-4xl leading-tight">
          {settings.title || 'ULTRA IMMERSIVE FULL-BLEED HERO OVERLAY'}
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
          {settings.excerpt || 'Maximum visual weight flagship featured article layout with reading progress gauge.'}
        </p>
        <button className="px-10 py-5 bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl hover:scale-105">
          Read Flagship Article
        </button>
      </div>
    </div>
  );
}`
};

// Write each TSX file individually
Object.keys(customComponents).forEach(id => {
  const numStr = id.toString().padStart(2, '0');
  const dirName = `featured-article-${numStr}`;
  const compName = `BlogFeaturedArticle${id}`;
  const filePath = path.join(baseDir, dirName, `${compName}.tsx`);
  
  fs.writeFileSync(filePath, customComponents[id]);
});

console.log('Successfully generated 20 DISTINCT, UNIQUE visual layouts for Blog Featured Articles!');
