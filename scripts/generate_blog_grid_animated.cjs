const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/05-blog-grid');

const animatedComponents = {
  1: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export function BlogGrid1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> GLASS BENTO GRID #01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">{settings.sectionTitle || 'EDITORIAL GRID'}</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">{settings.sectionSubtitle}</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }} className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/40 rounded-3xl p-5 backdrop-blur-xl shadow-2xl flex flex-col justify-between group">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                <motion.img src={art.image} alt={art.title} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-[10px] font-mono font-bold text-amber-400 border border-white/10">
                  {art.category}
                </span>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>{art.date}</span> • <span>{art.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">{art.title}</h3>
                <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">{art.author?.name}</span>
                <motion.button whileHover={{ x: 5 }} className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">Read <ArrowRight className="w-3.5 h-3.5" /></motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}`,

  2: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-block px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold uppercase">
          NEUMORPHIC SOFT CARD GRID #02
        </motion.span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 250 }} className="p-6 rounded-2xl bg-slate-900 shadow-[8px_8px_16px_#0b0f19,-8px_-8px_16px_#1b253b] border border-slate-800/60 space-y-4">
              <div className="overflow-hidden rounded-xl">
                <motion.img src={art.image} alt={art.title} className="w-full aspect-[16/10] object-cover shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]" whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }} />
              </div>
              <span className="text-xs font-mono text-sky-400 font-bold">{art.category} • {art.date}</span>
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  3: `import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function BlogGrid3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-cyan-400 font-mono relative overflow-hidden">
      <motion.div className="absolute inset-x-0 h-0.5 bg-cyan-400/50 blur-sm pointer-events-none" animate={{ y: ['0%', '100%', '0%'] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        <div className="flex items-center gap-2 text-xs text-cyan-400"><Terminal className="w-4 h-4 animate-pulse" /> [HOLO_CYBER_MATRIX_GRID // 03]</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(6,182,212,0.4)' }} className="border border-cyan-500/40 p-5 rounded-xl bg-slate-950 space-y-3">
              <div className="aspect-[16/9] border border-cyan-500/20 overflow-hidden rounded">
                <motion.img src={art.image} alt={art.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
              </div>
              <span className="text-[10px] text-cyan-500">{art.date} // {art.readTime}</span>
              <h3 className="text-lg font-bold text-white uppercase">{art.title}</h3>
              <p className="text-xs text-cyan-200/60 font-sans line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  4: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
          DEPTH GRID #04
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} className="relative group" whileHover={{ rotateX: 3, rotateY: 3 }} transition={{ type: 'spring' }}>
              <motion.div className="absolute inset-0 bg-emerald-500/20 rounded-2xl border border-emerald-500/30" animate={{ x: [4, 8, 4], y: [4, 8, 4] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3 shadow-2xl">
                <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-xl object-cover" />
                <span className="text-xs font-mono text-emerald-400">{art.category}</span>
                <h3 className="text-xl font-bold text-white">{art.title}</h3>
                <p className="text-zinc-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  5: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase">
          CLAYMORPHIC 3D GRID #05
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }} className="bg-indigo-900/60 border border-indigo-400/30 rounded-[2rem] p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_15px_30px_rgba(0,0,0,0.4)] space-y-4">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-[1.5rem] object-cover border-2 border-indigo-400/20" />
              <h3 className="text-xl font-black text-white">{art.title}</h3>
              <p className="text-indigo-200/80 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  6: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED MASONRY GRID #06
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6 }} className="bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 rounded-3xl p-5 backdrop-blur-xl space-y-4 transition-colors">
              <div className="overflow-hidden rounded-2xl">
                <motion.img src={art.image} alt={art.title} className="w-full aspect-[16/10] object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
              </div>
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  7: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono uppercase">
          CHROME METALLIC SHEEN GRID #07
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="p-[1px] bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 rounded-2xl overflow-hidden relative group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="bg-slate-950 rounded-[15px] p-6 space-y-3 relative z-10">
                <span className="text-xs font-mono text-slate-400">{art.category} • {art.date}</span>
                <h3 className="text-xl font-bold text-white">{art.title}</h3>
                <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  8: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <motion.div className="absolute top-1/2 left-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[110px] opacity-30 pointer-events-none" animate={{ x: ['-50%', '-45%', '-55%', '-50%'], y: ['-50%', '-55%', '-45%', '-50%'], scale: [1, 1.1, 0.95, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
          AURORA MESH TRIPLE GRID #08
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ y: -6, backdropFilter: 'blur(30px)' }} className="bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-6 space-y-4 shadow-2xl">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-2xl object-cover" />
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-purple-100/70 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  9: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">SPLIT HERO + GRID #09</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -5 }} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-xl object-cover" />
              <span className="text-xs font-mono text-blue-400">{art.category}</span>
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  10: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.span animate={{ boxShadow: ['0 0 10px rgba(139,92,246,0.2)', '0 0 25px rgba(139,92,246,0.6)', '0 0 10px rgba(139,92,246,0.2)'] }} transition={{ duration: 3, repeat: Infinity }} className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase">
          DARK VELVET GLOW GRID #10
        </motion.span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ y: -5, boxShadow: '0 0 35px rgba(139,92,246,0.25)' }} className="bg-zinc-900 border border-violet-500/30 rounded-3xl p-6 space-y-3 shadow-[0_0_25px_rgba(139,92,246,0.1)]">
              <span className="text-xs font-mono text-violet-400">{art.date}</span>
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-zinc-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  11: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded">
          SKEUOMORPHIC PAPER GRID #11
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ rotate: idx % 2 === 0 ? 1 : -1, y: -4 }} transition={{ type: 'spring', stiffness: 300 }} className="bg-stone-950 border border-stone-800 p-6 rounded-2xl shadow-[6px_6px_0px_#1c1917] space-y-4">
              <h3 className="text-xl font-serif font-bold text-stone-100">{art.title}</h3>
              <p className="text-stone-400 text-xs font-sans line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  12: `import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function BlogGrid12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs text-emerald-400"><Terminal className="w-4 h-4 animate-pulse" /> [SCI_FI_HUD_GRID // 12]</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.03, borderColor: '#10b981' }} className="border border-emerald-500/40 p-5 rounded-lg bg-emerald-950/20 space-y-3 relative overflow-hidden">
              <motion.div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-400" />
              <span className="text-[10px] text-emerald-400">ID: #{art.id}</span>
              <h3 className="text-lg font-bold text-white uppercase">{art.title}</h3>
              <p className="text-xs text-emerald-300/70 font-sans line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  13: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full">
          BENTO LAYERED MASONRY #13
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-slate-900/90 border border-slate-800 hover:border-teal-400/40 rounded-3xl p-6 space-y-4 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  14: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-full">
          LIQUID GLASS CAPSULE GRID #14
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }} whileHover={{ scale: 1.03 }} className="bg-slate-900/60 border border-blue-500/30 rounded-3xl p-6 backdrop-blur-xl space-y-3">
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-slate-300 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  15: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid15({ data, section }: { data?: any; section?: any }) {
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
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl relative overflow-hidden">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} />
              <div className="bg-slate-950 rounded-[22px] p-6 space-y-3 relative z-10">
                <h3 className="text-lg font-bold text-white">{art.title}</h3>
                <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  16: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">ARCHITECTURAL HAIRLINE GRID #16</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-l-2 border-orange-500 pl-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ x: 6 }} className="space-y-2">
              <span className="text-xs font-mono text-slate-400">{art.date}</span>
              <h3 className="text-xl font-light text-white">{art.title}</h3>
              <p className="text-slate-500 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  17: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-yellow-400 text-slate-950 font-bold text-xs uppercase rounded">MAGAZINE COVER GRID #17</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 group">
              <motion.img src={art.image} alt={art.title} className="w-full h-full object-cover" whileHover={{ scale: 1.15 }} transition={{ duration: 0.6 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end space-y-2">
                <span className="text-[10px] font-mono text-yellow-400">{art.category}</span>
                <h3 className="text-lg font-bold text-white leading-snug">{art.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  18: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION GRID #18
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.03, filter: 'hue-rotate(90deg)' }} transition={{ duration: 0.4 }} className="bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-6 space-y-3 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-cyan-100/70 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  19: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-900 text-amber-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg">
          EMBOSSED VINTAGE RETRO #19
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileTap={{ scale: 0.97 }} whileHover={{ y: -4 }} className="bg-zinc-900 border border-amber-800/40 rounded-3xl p-6 space-y-3 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8)]">
              <h3 className="text-xl font-serif font-bold text-amber-50">{art.title}</h3>
              <p className="text-amber-200/70 text-xs font-sans line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  20: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA STREAM FULL-BLEED GRID #20
        </motion.span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6, borderColor: '#d946ef' }} className="p-8 bg-slate-950 border border-fuchsia-500/30 rounded-3xl space-y-3">
              <h3 className="text-xl font-black text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`
};

// Write TSX files with animation
Object.keys(animatedComponents).forEach(id => {
  const numStr = id.toString().padStart(2, '0');
  const dirName = `blog-grid-${numStr}`;
  const compName = `BlogGrid${id}`;
  const filePath = path.join(baseDir, dirName, `${compName}.tsx`);
  
  fs.writeFileSync(filePath, animatedComponents[id]);
});

console.log('Successfully updated all 20 Blog Grid components with Framer Motion animations!');
