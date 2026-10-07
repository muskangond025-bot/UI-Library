const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/04-blog-categories');

const customComponents = {
  1: `import React from 'react';
import { Sparkles, ArrowUpRight, Brain, Layout, Leaf, Rocket } from 'lucide-react';

export function BlogCategories1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" /> BENTO GLASS CATEGORIES #01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">{settings.sectionTitle || 'FEATURED BLOG CATEGORIES'}</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">{settings.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-4 hover:border-amber-400/50 transition-all group">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-white/10 text-amber-400 font-mono text-xs font-bold">{cat.articleCount} Articles</span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  2: `import React from 'react';

export function BlogCategories2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold uppercase">
          NEUMORPHIC TACTILE CARDS #02
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 shadow-[8px_8px_16px_#0b0f19,-8px_-8px_16px_#1b253b] border border-slate-800/60 space-y-3">
              <span className="text-xs font-mono text-sky-400 font-bold">{cat.articleCount} Articles</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  3: `import React from 'react';
import { Terminal } from 'lucide-react';

export function BlogCategories3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-cyan-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs text-cyan-400"><Terminal className="w-4 h-4" /> [HOLO_CYBER_MATRIX_CATEGORIES // 03]</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="border border-cyan-500/40 p-5 rounded-xl bg-slate-950 space-y-3 hover:border-cyan-300">
              <span className="text-[10px] text-cyan-500">TAG: #{cat.slug}</span>
              <h3 className="text-xl font-bold text-white uppercase">{cat.name}</h3>
              <p className="text-xs text-cyan-200/60 font-sans">{cat.description}</p>
              <div className="text-xs font-bold text-cyan-400">[COUNT: {cat.articleCount}]</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  4: `import React from 'react';

export function BlogCategories4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
          DEPTH CARDS #04
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl translate-x-2 translate-y-2 border border-emerald-500/20" />
              <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <span className="text-xs font-mono text-emerald-400">{cat.articleCount} Posts</span>
                <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                <p className="text-zinc-400 text-xs">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  5: `import React from 'react';

export function BlogCategories5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase">
          CLAYMORPHIC BUBBLE GRID #05
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-indigo-900/60 border border-indigo-400/30 rounded-[2rem] p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_15px_30px_rgba(0,0,0,0.4)] space-y-3">
              <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-xs text-indigo-200 font-bold">{cat.articleCount} Articles</span>
              <h3 className="text-xl font-black text-white">{cat.name}</h3>
              <p className="text-indigo-200/80 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  6: `import React from 'react';

export function BlogCategories6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED HORIZONTAL SLIDER #06
        </span>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="min-w-[280px] bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-3 shrink-0">
              <span className="text-xs text-rose-400 font-mono font-bold">{cat.articleCount} Articles</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  7: `import React from 'react';

export function BlogCategories7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono uppercase">
          CHROME METALLIC TILES #07
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-[1px] bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 rounded-2xl">
              <div className="bg-slate-950 rounded-[15px] p-6 space-y-3">
                <span className="text-xs font-mono text-slate-400">{cat.articleCount} Posts</span>
                <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                <p className="text-slate-400 text-xs">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  8: `import React from 'react';

export function BlogCategories8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[110px] opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
          AURORA FLOATING PILLS #08
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-6 space-y-3 shadow-2xl">
              <span className="text-xs font-mono text-purple-300">{cat.articleCount} Articles</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-purple-100/70 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  9: `import React from 'react';

export function BlogCategories9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">SPLIT FEATURE #09</span>
          <h2 className="text-3xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-400 text-sm">{settings.sectionSubtitle}</p>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-blue-400">{cat.articleCount} Articles</span>
              <h3 className="text-lg font-bold text-white">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  10: `import React from 'react';

export function BlogCategories10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase">
          DARK VELVET RADAR #10
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-zinc-900 border border-violet-500/30 rounded-3xl p-6 space-y-3 shadow-[0_0_25px_rgba(139,92,246,0.1)]">
              <span className="text-xs font-mono text-violet-400">{cat.articleCount} Topics</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-zinc-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  11: `import React from 'react';

export function BlogCategories11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded">
          JOURNAL STAMP GRID #11
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-stone-950 border border-stone-800 p-6 rounded-2xl shadow-[6px_6px_0px_#1c1917] space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">{cat.articleCount} Entries</span>
              <h3 className="text-xl font-serif font-bold text-stone-100">{cat.name}</h3>
              <p className="text-stone-400 text-xs font-sans">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  12: `import React from 'react';
import { Terminal } from 'lucide-react';

export function BlogCategories12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs text-emerald-400"><Terminal className="w-4 h-4" /> [TOPIC_TELEMETRY // 12]</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="border border-emerald-500/40 p-5 rounded-lg bg-emerald-950/20 space-y-3">
              <span className="text-[10px] text-emerald-400">TELEMETRY_ID: #{cat.id}</span>
              <h3 className="text-lg font-bold text-white uppercase">{cat.name}</h3>
              <p className="text-xs text-emerald-300/70 font-sans">{cat.description}</p>
              <div className="text-xs font-bold text-emerald-400">[POSTS: {cat.articleCount}]</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  13: `import React from 'react';

export function BlogCategories13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full">
          BENTO LAYERED MASONRY #13
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-3 backdrop-blur-xl">
              <span className="text-xs font-mono text-teal-400">{cat.articleCount} Posts</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  14: `import React from 'react';

export function BlogCategories14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-full">
          LIQUID CAPSULE FILTER #14
        </span>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-slate-900/60 border border-blue-500/30 rounded-full px-6 py-3 backdrop-blur-xl flex items-center gap-4">
              <h3 className="text-base font-bold text-white">{cat.name}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold">{cat.articleCount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  15: `import React from 'react';

export function BlogCategories15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full">
          NEON EDGE GLOW CARDS #15
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl">
              <div className="bg-slate-950 rounded-[22px] p-6 space-y-3">
                <span className="text-xs font-mono text-pink-400">{cat.articleCount} Posts</span>
                <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                <p className="text-slate-400 text-xs">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  16: `import React from 'react';

export function BlogCategories16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">ARCHITECTURAL HAIRLINE GRID #16</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-l-2 border-orange-500 pl-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="space-y-2">
              <span className="text-xs font-mono text-slate-400">{cat.articleCount} Articles</span>
              <h3 className="text-xl font-light text-white">{cat.name}</h3>
              <p className="text-slate-500 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  17: `import React from 'react';

export function BlogCategories17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-yellow-400 text-slate-950 font-bold text-xs uppercase rounded">MAGAZINE TOPIC LIST #17</span>
        <div className="space-y-4">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-6 bg-slate-900 rounded-2xl flex justify-between items-center border border-slate-800">
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <span className="text-xs text-yellow-400 font-mono font-bold">{cat.articleCount} Publications</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  18: `import React from 'react';

export function BlogCategories18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION CARDS #18
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-6 space-y-3">
              <span className="text-xs font-mono text-cyan-300">{cat.articleCount} Posts</span>
              <h3 className="text-lg font-bold text-white">{cat.name}</h3>
              <p className="text-cyan-100/70 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  19: `import React from 'react';

export function BlogCategories19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-900 text-amber-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg">
          RETRO EMBOSSED TILES #19
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-zinc-900 border border-amber-800/40 rounded-3xl p-6 space-y-3 shadow-inner">
              <span className="text-xs font-mono text-amber-400">{cat.articleCount} Stories</span>
              <h3 className="text-xl font-serif font-bold text-amber-50">{cat.name}</h3>
              <p className="text-amber-200/70 text-xs font-sans">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  20: `import React from 'react';

export function BlogCategories20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA STREAM FULL-BLEED GRID #20
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-8 bg-slate-950 border border-fuchsia-500/30 rounded-3xl space-y-3">
              <span className="text-xs font-mono text-fuchsia-400">{cat.articleCount} Publications</span>
              <h3 className="text-2xl font-black text-white">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
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
  const dirName = `blog-categories-${numStr}`;
  const compName = `BlogCategories${id}`;
  const filePath = path.join(baseDir, dirName, `${compName}.tsx`);
  
  fs.writeFileSync(filePath, customComponents[id]);
});

console.log('Successfully generated all 20 TSX components for Blog Categories!');
