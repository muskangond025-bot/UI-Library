const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../src/components/sections/global/19-footer');

const templates = [
  // 1: Floating Glassmorphic Cyber Footprint Footer
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> AWWWARDS FOOTER SYSTEM #${i}
            </div>
            <h3 className="text-2xl font-black text-white">Spatial Interface Studio</h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">Pioneering volumetric UI components, WebGL shaders, and high-performance frontend designs for forward-thinking brands.</p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">PRODUCT</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Components</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Design Systems</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">WebGL Shaders</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Framer Presets</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">RESOURCES</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">UI Benchmarks</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Github Repo</li>
            </ul>
          </div>

          <div className="md:col-span-4 bg-slate-900/60 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
            <h4 className="text-sm font-bold text-white mb-2">Subscribe to Weekly Benchmarks</h4>
            <p className="text-xs text-slate-400 mb-4">Zero spam. Curated UI insights every Tuesday.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="dev@company.com" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white flex-1 focus:outline-none focus:border-cyan-500" />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Spatial Interface Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-cyan-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cyan-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-cyan-400 cursor-pointer">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}`,

  // 2: Minimalist Serif Cultural Gazette Footnote
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-t border-stone-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">THE CHRONICLE GAZETTE • FOOTNOTE #${i}</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4 tracking-tight">Curated Cultural Architecture</h2>
          </div>
          <button className="px-8 py-4 rounded-xl bg-stone-950 hover:bg-amber-900 text-white font-sans text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
            INQUIRE ATELIER <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-stone-200 font-sans text-xs">
          <div>
            <h5 className="font-serif font-bold text-stone-950 uppercase tracking-wider mb-4">PUBLICATIONS</h5>
            <p className="text-stone-600 mb-2 hover:text-amber-900 cursor-pointer">Haute Couture Essays</p>
            <p className="text-stone-600 mb-2 hover:text-amber-900 cursor-pointer">Swiss Horology Archives</p>
            <p className="text-stone-600 hover:text-amber-900 cursor-pointer">Brutalist Space Planning</p>
          </div>
          <div>
            <h5 className="font-serif font-bold text-stone-950 uppercase tracking-wider mb-4">ATELIERS</h5>
            <p className="text-stone-600 mb-2 hover:text-amber-900 cursor-pointer">Milan Studio</p>
            <p className="text-stone-600 mb-2 hover:text-amber-900 cursor-pointer">Geneva Workshop</p>
            <p className="text-stone-600 hover:text-amber-900 cursor-pointer">Paris Showroom</p>
          </div>
          <div>
            <h5 className="font-serif font-bold text-stone-950 uppercase tracking-wider mb-4">PATRONAGE</h5>
            <p className="text-stone-600 mb-2 hover:text-amber-900 cursor-pointer">Print Membership</p>
            <p className="text-stone-600 mb-2 hover:text-amber-900 cursor-pointer">Private Salon Access</p>
            <p className="text-stone-600 hover:text-amber-900 cursor-pointer">Heritage Grants</p>
          </div>
          <div>
            <h5 className="font-serif font-bold text-stone-950 uppercase tracking-wider mb-4">DISPATCH</h5>
            <p className="text-stone-600 leading-relaxed mb-3">Weekly bespoke essays sent via first-class mail.</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-sans text-stone-500">
          <p>© 2026 The Chronicle Gazette. Printed in Milan & Geneva.</p>
          <p className="font-mono text-[11px]">ALL RIGHTS RESERVED • VOL. XXVI</p>
        </div>
      </div>
    </footer>
  );
}`,

  // 3: Neo-Brutalist Cyberpunk Footer Terminal
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Terminal, ArrowUpRight } from 'lucide-react';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start border-4 border-black bg-white p-8 sm:p-12 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
                <Zap className="w-6 h-6 fill-lime-400" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER TERMINAL FOOTER #${i}</h2>
            </div>
            <p className="text-xs font-black uppercase text-black/80 max-w-lg">
              SYSTEM STATUS: ONLINE • OPTICAL PACKET ROUTING RUNNING AT SUB-MILLISECOND LATENCY.
            </p>
          </div>

          <button className="mt-6 lg:mt-0 px-8 py-4 bg-black text-lime-400 font-black text-xs uppercase border-4 border-black hover:bg-lime-400 hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
            TERMINAL DISPATCH <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-black text-black pt-4 border-t-2 border-black">
          <p>CYBERPUNK MATRIX SYSTEMS © 2026</p>
          <div className="flex gap-6 underline">
            <span>DISCORD</span>
            <span>GITHUB</span>
            <span>TELEMETRY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}`,

  // 4: High-Tech Bento Grid Master Footer
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-24 px-6 bg-neutral-950 text-white font-sans border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <div className="md:col-span-2 bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="w-3 h-8 bg-rose-500 rounded-full mb-4"></div>
              <h3 className="text-2xl font-black text-white">High-Tech Bento Footer #${i}</h3>
              <p className="text-neutral-400 text-sm mt-2 max-w-md">Building open-source WebGL component libraries for modern frontend developers.</p>
            </div>
            <span className="text-xs font-mono text-rose-400 font-bold">STATUS: ALL SYSTEMS OPERATIONAL</span>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
            <h4 className="text-xs font-mono text-neutral-400 font-bold">NAVIGATION</h4>
            <div className="space-y-2 text-sm font-bold">
              <p className="hover:text-rose-400 cursor-pointer">Documentation</p>
              <p className="hover:text-rose-400 cursor-pointer">Component Catalog</p>
              <p className="hover:text-rose-400 cursor-pointer">Benchmarks</p>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
            <h4 className="text-xs font-mono text-neutral-400 font-bold">COMMUNITY</h4>
            <div className="space-y-2 text-sm font-bold">
              <p className="hover:text-rose-400 cursor-pointer">GitHub Organization</p>
              <p className="hover:text-rose-400 cursor-pointer">Discord Channel</p>
              <p className="hover:text-rose-400 cursor-pointer">Twitter / X</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500 font-mono">
          <p>© 2026 Bento Systems Inc.</p>
          <p>BUILT WITH REACT & TAILWIND</p>
        </div>
      </div>
    </footer>
  );
}`,

  // 5: Clean Horizontal Clean Footer Strip
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-12 border-b border-slate-200 gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">FOOTER STRIP #${i}</span>
            <h3 className="text-2xl font-extrabold text-slate-950 mt-2">Product & Engineering Suite</h3>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-700">
            <span className="hover:text-indigo-600 cursor-pointer">Products</span>
            <span className="hover:text-indigo-600 cursor-pointer">Solutions</span>
            <span className="hover:text-indigo-600 cursor-pointer">Enterprise</span>
            <span className="hover:text-indigo-600 cursor-pointer">Pricing</span>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-medium gap-4">
          <p>© 2026 Product Engineering Suite. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-indigo-600 cursor-pointer">Privacy</span>
            <span className="hover:text-indigo-600 cursor-pointer">Terms</span>
            <span className="hover:text-indigo-600 cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}`
];

for (let i = 1; i <= 20; i++) {
  const folder = path.join(dirPath, `global-footer-${i}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const tmplIdx = (i - 1) % templates.length;
  const content = templates[tmplIdx](i);
  const filePath = path.join(folder, `GlobalFooter${i}.tsx`);
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Successfully generated all 20 GlobalFooter components!');
