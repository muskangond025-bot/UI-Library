const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../src/components/sections/global/18-cta-banner');

const templates = [
  // 1: Floating Glassmorphic CTA Banner Island
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export function GlobalCtaBanner${i}() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 rounded-3xl p-10 sm:p-16 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-6">
              <Sparkles className="w-4 h-4" /> GLOBAL CTA BANNER #${i}
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">Ready to Transform Your Digital Infrastructure?</h2>
            <p className="text-slate-400 text-base mt-4 leading-relaxed">Experience sub-millisecond response times, glassmorphic UI systems, and 24/7 priority enterprise support.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/25">
              GET STARTED NOW <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 transition-all flex items-center justify-center">
              BOOK DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`,

  // 2: Minimalist Serif Cultural Gazette CTA Banner
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalCtaBanner${i}() {
  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">THE CHRONICLE INVITATION • ISSUE #${i}</span>
        <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-6 tracking-tight">Become a Patron of Cultural Excellence</h2>
        <div className="w-16 h-0.5 bg-amber-900 mx-auto mt-6 mb-6"></div>
        <p className="font-sans text-stone-600 text-base max-w-xl mx-auto leading-relaxed mb-10">
          Subscribe to our bespoke print gazette & receive private invitations to exclusive European ateliers and horology showcases.
        </p>
        <button className="px-10 py-4 rounded-xl bg-stone-950 hover:bg-amber-900 text-white font-sans text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-3">
          BECOME A MEMBER <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}`,

  // 3: Neo-Brutalist Cyberpunk CTA Banner Box
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

export function GlobalCtaBanner${i}() {
  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-7xl mx-auto border-4 border-black bg-white p-8 sm:p-14 rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
              <Zap className="w-6 h-6 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">DEPLOY CYBER RIG #${i}</h2>
          </div>
          <p className="text-xs font-black uppercase text-black/80 max-w-xl">
            INSTANT OPTICAL TELEMETRY ROUTING. ZERO SYSTEM LATENCY GUARANTEED WITH 99.999% SLA.
          </p>
        </div>

        <button className="w-full lg:w-auto px-10 py-5 bg-black text-lime-400 font-black text-sm uppercase border-4 border-black hover:bg-lime-400 hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 shrink-0">
          EXECUTE DEPLOYMENT <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}`,

  // 4: High-Tech Bento Matrix CTA Banner
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalCtaBanner${i}() {
  return (
    <section className="w-full py-24 px-6 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-rose-950/80 via-neutral-900 to-neutral-900 rounded-3xl p-10 sm:p-16 border border-rose-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-8 bg-rose-500 rounded-full"></div>
            <span className="text-xs font-mono font-bold text-rose-400">BENTO CTA MATRIX #${i}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Scale Your High-Performance Graphics App</h2>
          <p className="text-neutral-400 text-sm max-w-xl mt-3 leading-relaxed">Integrate WebGL shaders, volumetric canvas components, and multi-threaded rendering in under 10 minutes.</p>
        </div>

        <button className="px-8 py-4 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-rose-500/20">
          START BUILDING NOW <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}`,

  // 5: Clean Horizontal CTA Banner Strip
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalCtaBanner${i}() {
  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">CTA BANNER #${i}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Start Building Enterprise UI Today</h2>
          <p className="text-slate-600 text-sm mt-2">Get full access to 500+ pre-built React components, Tailwind styles, and Framer Motion presets.</p>
        </div>

        <button className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-3 shrink-0 shadow-lg shadow-indigo-600/20">
          EXPLORE UI LIBRARY <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}`
];

for (let i = 1; i <= 20; i++) {
  const folder = path.join(dirPath, `global-cta-banner-${i}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const tmplIdx = (i - 1) % templates.length;
  const content = templates[tmplIdx](i);
  const filePath = path.join(folder, `GlobalCtaBanner${i}.tsx`);
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Successfully generated all 20 GlobalCtaBanner components!');
