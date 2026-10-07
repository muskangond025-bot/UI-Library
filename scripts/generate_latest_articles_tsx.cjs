const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/03-blog-latest-articles');

const customComponents = {
  1: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, User } from 'lucide-react';

export function BlogLatestArticles1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" /> GLASS BENTO FEED #01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
              {settings.sectionTitle || 'LATEST INSIGHTS & DISCOVERIES'}
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">{settings.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-[10px] font-mono font-bold text-amber-400 border border-white/10">
                  {art.category}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>{art.date}</span> • <span>{art.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug hover:text-amber-300 transition-colors cursor-pointer">
                  {art.title}
                </h3>
                <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img src={art.author?.avatar} alt={art.author?.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-slate-300 font-medium">{art.author?.name}</span>
                </div>
                <button className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">Read <ArrowRight className="w-3.5 h-3.5" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  2: `import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export function BlogLatestArticles2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold tracking-widest uppercase">
            NEUMORPHIC VERTICAL LIST #02
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">{settings.sectionTitle || 'NEUMORPHIC ARTICLE STREAM'}</h2>
        </div>
        <div className="space-y-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 shadow-[10px_10px_20px_#0b0f19,-10px_-10px_20px_#1b253b] border border-slate-800/60 flex flex-col md:flex-row gap-6 items-center">
              <img src={art.image} alt={art.title} className="w-full md:w-48 aspect-[16/10] rounded-xl object-cover shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]" />
              <div className="flex-1 space-y-2">
                <span className="text-xs font-mono font-bold text-sky-400">{art.category} • {art.date}</span>
                <h3 className="text-xl font-bold text-white">{art.title}</h3>
                <p className="text-slate-400 text-xs">{art.excerpt}</p>
              </div>
              <button className="px-5 py-2.5 rounded-xl bg-slate-900 shadow-[4px_4px_8px_#0b0f19,-4px_-4px_8px_#1b253b] active:shadow-[inset_2px_2px_4px_#0b0f19] text-sky-400 font-bold text-xs shrink-0 flex items-center gap-1.5">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  3: `import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export function BlogLatestArticles3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-cyan-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="border-b border-cyan-500/40 pb-4 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-xs text-cyan-400"><Terminal className="w-4 h-4" /> CYBER_MATRIX_STREAM // 03</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mt-1">{settings.sectionTitle}</h2>
          </div>
          <span className="text-xs text-cyan-500/60">[SYNC_STATUS: LIVE]</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="border border-cyan-500/30 bg-slate-950 p-5 rounded-xl space-y-4 hover:border-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="aspect-[16/9] border border-cyan-500/20 rounded-lg overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
              </div>
              <div className="text-xs text-cyan-300/70">{art.date} // {art.readTime}</div>
              <h3 className="text-lg font-bold text-white leading-snug">{art.title}</h3>
              <p className="text-xs text-cyan-200/60 font-sans line-clamp-2">{art.excerpt}</p>
              <button className="w-full py-2 bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500 hover:text-black font-bold text-xs uppercase tracking-widest transition-all">
                EXECUTE_READ &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  4: `import React from 'react';

export function BlogLatestArticles4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
            DEPTH MULTI-CARD #04
          </span>
          <h2 className="text-3xl font-extrabold text-white">{settings.sectionTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl translate-x-2 translate-y-2 border border-emerald-500/20 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
              <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-xl">
                <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-xl object-cover" />
                <span className="text-xs font-mono text-emerald-400">{art.category}</span>
                <h3 className="text-lg font-bold text-white">{art.title}</h3>
                <p className="text-zinc-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  5: `import React from 'react';

export function BlogLatestArticles5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase tracking-widest">
          CLAYMORPHIC PILL GRID #05
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-indigo-900/60 border border-indigo-400/30 rounded-[2rem] p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_15px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl space-y-4">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-[1.5rem] object-cover border-2 border-indigo-400/20" />
              <h3 className="text-xl font-black text-white">{art.title}</h3>
              <p className="text-indigo-200/80 text-xs">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  6: `import React from 'react';

export function BlogLatestArticles6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED HORIZONTAL SCROLL #06
        </span>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="min-w-[320px] bg-slate-900/80 border border-slate-800 rounded-3xl p-5 backdrop-blur-xl space-y-4 shrink-0">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-2xl object-cover" />
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  7: `import React from 'react';

export function BlogLatestArticles7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-slate-200">
      <div className="max-w-6xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono tracking-widest uppercase">
          CHROME METALLIC LIST #07
        </span>
        <div className="space-y-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-[1px] bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 rounded-2xl">
              <div className="bg-slate-950 rounded-[15px] p-6 flex items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-slate-400">{art.category} • {art.date}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{art.title}</h3>
                </div>
                <button className="px-5 py-2.5 bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-bold text-xs uppercase rounded-xl shrink-0">
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  8: `import React from 'react';

export function BlogLatestArticles8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[110px] opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
          AURORA MESH TRIPLE #08
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-6 space-y-4 shadow-2xl">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-2xl object-cover" />
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-purple-100/70 text-xs">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  9: `import React from 'react';

export function BlogLatestArticles9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">SPLIT HERO RAIL #09</span>
          <h2 className="text-3xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-400 text-sm">{settings.sectionSubtitle}</p>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex gap-4 items-center">
              <img src={art.image} alt={art.title} className="w-24 h-20 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-blue-400">{art.category}</span>
                <h4 className="text-base font-bold text-white leading-snug">{art.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  10: `import React from 'react';

export function BlogLatestArticles10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold tracking-widest uppercase">
          DARK VELVET STREAM #10
        </span>
        <div className="border-l-2 border-violet-500/40 pl-6 space-y-8">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="relative space-y-2">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-zinc-950" />
              <span className="text-xs font-mono text-violet-400">{art.date}</span>
              <h3 className="text-2xl font-bold text-white">{art.title}</h3>
              <p className="text-zinc-400 text-sm max-w-2xl">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  11: `import React from 'react';

export function BlogLatestArticles11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded">
          JOURNAL NEWSPAPER GRID #11
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-stone-950 border border-stone-800 p-6 rounded-2xl shadow-[6px_6px_0px_#1c1917] space-y-4">
              <h3 className="text-xl font-serif font-bold text-stone-100">{art.title}</h3>
              <p className="text-stone-400 text-xs font-sans">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  12: `import React from 'react';
import { Terminal } from 'lucide-react';

export function BlogLatestArticles12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs text-emerald-400"><Terminal className="w-4 h-4" /> [SCI_FI_FEED_MATRIX // 12]</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="border border-emerald-500/40 p-5 rounded-lg bg-emerald-950/20 space-y-3">
              <span className="text-[10px] text-emerald-400">ID: #{art.id}</span>
              <h3 className="text-lg font-bold text-white uppercase">{art.title}</h3>
              <p className="text-xs text-emerald-300/70 font-sans">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  13: `import React from 'react';

export function BlogLatestArticles13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full">
          BENTO MASONRY #13
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  14: `import React from 'react';

export function BlogLatestArticles14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-full">
          LIQUID CAPSULE FEED #14
        </span>
        <div className="space-y-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-slate-900/60 border border-blue-500/30 rounded-full p-4 px-8 backdrop-blur-xl flex justify-between items-center gap-6">
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <span className="text-xs font-mono text-blue-400 shrink-0">{art.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  15: `import React from 'react';

export function BlogLatestArticles15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full">
          NEON EDGE GLOW GRID #15
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl">
              <div className="bg-slate-950 rounded-[22px] p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">{art.title}</h3>
                <p className="text-slate-400 text-xs">{art.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  16: `import React from 'react';

export function BlogLatestArticles16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">ARCHITECTURAL LINE FEED #16</span>
        <div className="border-l-2 border-orange-500 pl-6 space-y-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="space-y-1">
              <span className="text-xs font-mono text-slate-400">{art.date}</span>
              <h3 className="text-xl font-light text-white">{art.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  17: `import React from 'react';

export function BlogLatestArticles17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-yellow-400 text-slate-950 font-bold text-xs uppercase rounded">MAGAZINE COMPACT LIST #17</span>
        <div className="space-y-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-6 bg-slate-900 rounded-2xl flex justify-between items-center border border-slate-800">
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <span className="text-xs text-yellow-400 font-mono">{art.readTime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  18: `import React from 'react';

export function BlogLatestArticles18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION #18
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-cyan-100/70 text-xs">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  19: `import React from 'react';

export function BlogLatestArticles19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-900 text-amber-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg">
          RETRO EMBOSSED #19
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-zinc-900 border border-amber-800/40 rounded-3xl p-6 space-y-3 shadow-inner">
              <h3 className="text-xl font-serif font-bold text-amber-50">{art.title}</h3>
              <p className="text-amber-200/70 text-xs font-sans">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  20: `import React from 'react';

export function BlogLatestArticles20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA STREAM FULL-BLEED #20
        </span>
        <div className="space-y-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-8 bg-slate-950 border border-fuchsia-500/30 rounded-3xl flex justify-between items-center">
              <h3 className="text-2xl font-black text-white">{art.title}</h3>
              <button className="px-6 py-3 bg-fuchsia-500 text-black font-bold text-xs uppercase rounded-xl">Read</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
};

// Write TSX files
Object.keys(customComponents).forEach(id => {
  const numStr = id.toString().padStart(2, '0');
  const dirName = `latest-articles-${numStr}`;
  const compName = `BlogLatestArticles${id}`;
  const filePath = path.join(baseDir, dirName, `${compName}.tsx`);
  
  fs.writeFileSync(filePath, customComponents[id]);
});

console.log('Successfully generated all 20 TSX components for Blog Latest Articles!');
