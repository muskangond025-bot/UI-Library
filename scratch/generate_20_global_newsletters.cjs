const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../src/components/sections/global/16-newsletter');

const templates = [
  // 1: Floating Glassmorphic Newsletter Island
  (i) => `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function GlobalNewsletter${i}() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-slate-900/60 rounded-3xl border border-cyan-500/30 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" /> EDITORIAL DISPATCH #${i}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Stay Ahead of Spatial Design Trends</h2>
          <p className="text-slate-400 text-sm max-w-lg mt-4 leading-relaxed">
            Get curated weekly essays on volumetric UI, generative shaders, and next-gen frontend engineering delivered to your inbox.
          </p>

          {subscribed ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-8 flex items-center gap-3 bg-cyan-500/20 text-cyan-300 px-6 py-4 rounded-2xl border border-cyan-500/40">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              <span className="text-sm font-bold font-mono">You are subscribed! Check your inbox for confirmation.</span>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="w-full max-w-md mt-8 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                <input type="email" required placeholder="Enter work email address..." className="w-full bg-slate-950/80 border border-slate-700 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
              <button type="submit" className="px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20">
                SUBSCRIBE <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-[11px] font-mono text-slate-500 mt-4">Join 28,000+ tech leaders. Zero spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}`,

  // 2: Minimalist Serif Cultural Gazette Subscription
  (i) => `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export function GlobalNewsletter${i}() {
  const [done, setDone] = useState(false);

  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">
          THE CHRONICLE DISPATCH • ISSUE #${i}
        </span>
        <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-6 tracking-tight">Cultural Intelligence & Essays</h2>
        <div className="w-12 h-0.5 bg-amber-900 mx-auto mt-4 mb-6"></div>
        <p className="font-sans text-stone-600 text-sm max-w-lg mx-auto leading-relaxed mb-8">
          Weekly long-form essays on haute couture tailoring, Swiss horology, brutalist architecture, and sustainable luxury.
        </p>

        {done ? (
          <div className="font-sans text-xs text-amber-900 font-bold bg-amber-200/40 p-4 rounded-xl max-w-md mx-auto border border-amber-300">
            ✓ Welcome to The Chronicle Reader Circle.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="max-w-md mx-auto flex gap-2 font-sans">
            <input type="email" required placeholder="reader@domain.com" className="flex-1 bg-white border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-amber-900" />
            <button type="submit" className="px-6 py-3 rounded-lg bg-stone-950 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2">
              JOIN <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}`,

  // 3: Neo-Brutalist Cyberpunk Newsletter Box
  (i) => `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

export function GlobalNewsletter${i}() {
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-4xl mx-auto border-4 border-black bg-white p-8 sm:p-12 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
            <Zap className="w-6 h-6 fill-lime-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER MAIL PROTOCOL #${i}</h2>
        </div>
        <p className="text-xs font-black uppercase text-black/80 mb-8 max-w-md">
          DIRECT NEURAL DISPATCHES: ZERO ALGORITHM SPAM. HARDWARE HACKS & SYNTH SOUND ESSAYS WEEKLY.
        </p>

        {sent ? (
          <div className="bg-lime-400 border-4 border-black p-4 text-xs font-black uppercase text-black">
            [SYS_OK]: NEURAL ADDRESS REGISTERED IN DATABASE.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col sm:flex-row gap-4">
            <input type="email" required placeholder="USER@CYBERMATRIX.NET" className="flex-1 bg-yellow-100 border-4 border-black px-4 py-3.5 text-xs font-black text-black placeholder:text-black/50 focus:outline-none focus:bg-white" />
            <button type="submit" className="bg-black text-lime-400 font-black text-xs px-8 py-3.5 border-4 border-black hover:bg-lime-400 hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2">
              TRANSMIT MAIL <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}`,

  // 4: High-Tech Bento Column Newsletter Matrix
  (i) => `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export function GlobalNewsletter${i}() {
  const [active, setActive] = useState(false);

  return (
    <section className="w-full py-24 px-6 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between min-h-[340px]">
          <div>
            <div className="w-3 h-8 bg-rose-500 rounded-full mb-6"></div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Bento Newsletter Matrix #${i}</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mt-4">Get early access to open-source UI benchmarks, component design systems, and real-time graphics case studies.</p>
          </div>
          <span className="text-xs font-mono text-rose-400 font-bold">FREQUENCY: EVERY TUESDAY 09:00 EST</span>
        </div>

        <div className="lg:col-span-6 bg-neutral-900 rounded-3xl p-8 border border-white/10 min-h-[340px] flex flex-col justify-center">
          {active ? (
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm font-bold bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/30">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <span>Subscription confirmed. Welcome to the Bento Tech Network!</span>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setActive(true); }} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-2">WORK EMAIL</label>
                <input type="email" required placeholder="developer@company.com" className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors" />
              </div>
              <button type="submit" className="w-full py-4 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20">
                JOIN DISPATCH MATRIX <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}`,

  // 5: Clean Horizontal Newsletter Banner Stream
  (i) => `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

export function GlobalNewsletter${i}() {
  const [sub, setSub] = useState(false);

  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">FIELD NOTES DISPATCH #${i}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Subscribe to Product Design Insights</h2>
          <p className="text-slate-600 text-sm mt-2">Curated UI/UX benchmarks, conversion research, and frontend architecture notes.</p>
        </div>

        {sub ? (
          <div className="flex items-center gap-2 text-indigo-600 font-bold font-mono text-sm bg-indigo-50 px-6 py-4 rounded-2xl border border-indigo-200">
            <Check className="w-5 h-5 text-indigo-600" /> Subscribed successfully!
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSub(true); }} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Enter email..." className="w-full sm:w-72 bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-600" />
            <button type="submit" className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shrink-0">
              JOIN <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}`
];

for (let i = 1; i <= 20; i++) {
  const folder = path.join(dirPath, `global-newsletter-${i}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const tmplIdx = (i - 1) % templates.length;
  const content = templates[tmplIdx](i);
  const filePath = path.join(folder, `GlobalNewsletter${i}.tsx`);
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Successfully generated all 20 GlobalNewsletter components!');
