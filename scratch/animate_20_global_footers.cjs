const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../src/components/sections/global/19-footer');

const animTemplates = [
  // 1: Glassmorphic Pulse & Staggered Reveal
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

export function GlobalFooter${i}() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-t border-slate-800 relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <motion.div variants={itemVariants} className="md:col-span-4">
            <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-4 cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> AWWWARDS FOOTER SYSTEM #${i}
            </motion.div>
            <h3 className="text-3xl font-black text-white tracking-tight">Spatial Interface Studio</h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">Pioneering volumetric UI components, WebGL shaders, and high-performance frontend designs for forward-thinking brands.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">PRODUCT</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              {['Components', 'Design Systems', 'WebGL Shaders', 'Framer Presets'].map((item, idx) => (
                <motion.li key={idx} whileHover={{ x: 6, color: '#22d3ee' }} className="transition-colors cursor-pointer flex items-center gap-1">
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">RESOURCES</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              {['Documentation', 'UI Benchmarks', 'Case Studies', 'Github Repo'].map((item, idx) => (
                <motion.li key={idx} whileHover={{ x: 6, color: '#22d3ee' }} className="transition-colors cursor-pointer">
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 bg-slate-900/60 rounded-3xl p-6 border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2"><Send className="w-4 h-4 text-cyan-400" /> Subscribe to Weekly Benchmarks</h4>
            <p className="text-xs text-slate-400 mb-4">Zero spam. Curated UI insights every Tuesday.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="dev@company.com" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white flex-1 focus:outline-none focus:border-cyan-500" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20">JOIN</motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Spatial Interface Studio. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Security SLA'].map((link, idx) => (
              <motion.span key={idx} whileHover={{ color: '#22d3ee', y: -2 }} className="cursor-pointer transition-all">
                {link}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}`,

  // 2: Minimalist Serif Gazette Line-Draw & Text Slide-In
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-t border-stone-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">THE CHRONICLE GAZETTE • FOOTNOTE #${i}</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4 tracking-tight">Curated Cultural Architecture</h2>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-xl bg-stone-950 hover:bg-amber-900 text-white font-sans text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
            INQUIRE ATELIER <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-stone-300 font-sans text-xs">
          {[
            { title: 'PUBLICATIONS', links: ['Haute Couture Essays', 'Swiss Horology Archives', 'Brutalist Space Planning'] },
            { title: 'ATELIERS', links: ['Milan Studio', 'Geneva Workshop', 'Paris Showroom'] },
            { title: 'PATRONAGE', links: ['Print Membership', 'Private Salon Access', 'Heritage Grants'] },
            { title: 'DISPATCH', text: 'Weekly bespoke essays sent via first-class mail.' }
          ].map((col, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
              <h5 className="font-serif font-bold text-stone-950 uppercase tracking-wider mb-4">{col.title}</h5>
              {col.links && col.links.map((link, lIdx) => (
                <motion.p key={lIdx} whileHover={{ x: 4, color: '#78350f' }} className="text-stone-600 mb-2 cursor-pointer transition-all">
                  {link}
                </motion.p>
              ))}
              {col.text && <p className="text-stone-600 leading-relaxed">{col.text}</p>}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-sans text-stone-500">
          <p>© 2026 The Chronicle Gazette. Printed in Milan & Geneva.</p>
          <p className="font-mono text-[11px]">ALL RIGHTS RESERVED • VOL. XXVI</p>
        </motion.div>
      </div>
    </footer>
  );
}`,

  // 3: Neo-Brutalist Cyberpunk Glitch & Pop Button
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col lg:flex-row justify-between items-start border-4 border-black bg-white p-8 sm:p-12 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
                <Zap className="w-6 h-6 fill-lime-400" />
              </motion.div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER TERMINAL FOOTER #${i}</h2>
            </div>
            <p className="text-xs font-black uppercase text-black/80 max-w-lg">
              SYSTEM STATUS: ONLINE • OPTICAL PACKET ROUTING RUNNING AT SUB-MILLISECOND LATENCY.
            </p>
          </div>

          <motion.button whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }} whileTap={{ x: 0, y: 0 }} className="mt-6 lg:mt-0 px-8 py-4 bg-black text-lime-400 font-black text-xs uppercase border-4 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
            TERMINAL DISPATCH <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-black text-black pt-4 border-t-2 border-black">
          <p>CYBERPUNK MATRIX SYSTEMS © 2026</p>
          <div className="flex gap-6 underline">
            {['DISCORD', 'GITHUB', 'TELEMETRY'].map((item, idx) => (
              <motion.span key={idx} whileHover={{ scale: 1.1, color: '#ffffff' }} className="cursor-pointer">
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}`,

  // 4: High-Tech Bento Grid Lift Animation
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-24 px-6 bg-neutral-950 text-white font-sans border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ y: -6 }} className="md:col-span-2 bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between min-h-[260px] cursor-pointer group hover:border-rose-500/50 transition-all">
            <div>
              <div className="w-3 h-8 bg-rose-500 rounded-full mb-4 group-hover:scale-y-125 transition-transform"></div>
              <h3 className="text-2xl font-black text-white group-hover:text-rose-400 transition-colors">High-Tech Bento Footer #${i}</h3>
              <p className="text-neutral-400 text-sm mt-2 max-w-md">Building open-source WebGL component libraries for modern frontend developers.</p>
            </div>
            <span className="text-xs font-mono text-rose-400 font-bold">STATUS: ALL SYSTEMS OPERATIONAL</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={{ y: -6 }} className="bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between cursor-pointer group hover:border-rose-500/50 transition-all">
            <h4 className="text-xs font-mono text-neutral-400 font-bold">NAVIGATION</h4>
            <div className="space-y-2 text-sm font-bold">
              {['Documentation', 'Component Catalog', 'Benchmarks'].map((item, idx) => (
                <motion.p key={idx} whileHover={{ x: 4, color: '#f43f5e' }} className="transition-all">{item}</motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ y: -6 }} className="bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between cursor-pointer group hover:border-rose-500/50 transition-all">
            <h4 className="text-xs font-mono text-neutral-400 font-bold">COMMUNITY</h4>
            <div className="space-y-2 text-sm font-bold">
              {['GitHub Organization', 'Discord Channel', 'Twitter / X'].map((item, idx) => (
                <motion.p key={idx} whileHover={{ x: 4, color: '#f43f5e' }} className="transition-all">{item}</motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500 font-mono">
          <p>© 2026 Bento Systems Inc.</p>
          <p>BUILT WITH REACT & TAILWIND</p>
        </div>
      </div>
    </footer>
  );
}`,

  // 5: Clean Horizontal Slide-In Strip Animation
  (i) => `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalFooter${i}() {
  return (
    <footer className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row justify-between items-center pb-12 border-b border-slate-200 gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">FOOTER STRIP #${i}</span>
            <h3 className="text-2xl font-extrabold text-slate-950 mt-2">Product & Engineering Suite</h3>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-700">
            {['Products', 'Solutions', 'Enterprise', 'Pricing'].map((item, idx) => (
              <motion.span key={idx} whileHover={{ y: -2, color: '#4f46e5' }} className="cursor-pointer transition-all">
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-medium gap-4">
          <p>© 2026 Product Engineering Suite. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item, idx) => (
              <motion.span key={idx} whileHover={{ color: '#4f46e5' }} className="cursor-pointer transition-colors">
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
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

  const tmplIdx = (i - 1) % animTemplates.length;
  const content = animTemplates[tmplIdx](i);
  const filePath = path.join(folder, `GlobalFooter${i}.tsx`);
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Successfully updated all 20 GlobalFooter components with Framer Motion animations!');
