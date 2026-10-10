const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/about/11-about-cta-banner');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

function writeComp(numStr, code) {
  const dirPath = path.join(baseDir, `cta-banner-${numStr}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, `AboutCtaBanner${parseInt(numStr, 10)}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 01: Frosted Glassmorphism CTA
writeComp('01', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export function AboutCtaBanner1() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8 p-10 sm:p-14 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/15 shadow-2xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" /> GLASSMORPHISM CTA #01
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-indigo-200">
          Ready to Build Next-Gen Digital Products?
        </h2>
        <p className="opacity-80 text-base sm:text-lg max-w-2xl mx-auto">
          Join 500+ enterprise brands leveraging high-performance glassmorphic UI component libraries.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Enter your work email" className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
`);

// 02: Dark Obsidian Glass CTA
writeComp('02', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Lock } from 'lucide-react';

export function AboutCtaBanner2() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8 p-10 sm:p-14 rounded-3xl bg-zinc-900/90 backdrop-blur-2xl border border-zinc-800 shadow-2xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
          <Lock className="w-3.5 h-3.5" /> OBSIDIAN GLASS CTA #02
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-400">
          Deploy Cryptographic Zero-Trust Architecture
        </h2>
        <p className="opacity-70 text-base sm:text-lg max-w-2xl mx-auto text-zinc-300">
          High-contrast obsidian glass with instant API deployment clearance.
        </p>
        <motion.button whileHover={{ y: -4 }} className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
          <span>Request Security Access</span>
          <ArrowUpRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
`);

// 03: Soft Neumorphism CTA
writeComp('03', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers } from 'lucide-react';

export function AboutCtaBanner3() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 text-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 p-10 sm:p-14 rounded-3xl bg-slate-100 shadow-[14px_14px_28px_#cbd5e1,-14px_-14px_28px_#ffffff]">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
          <Layers className="w-3.5 h-3.5" /> NEUMORPHISM CTA #03
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
          Tactile Soft UI Components
        </h2>
        <p className="opacity-70 text-base sm:text-lg max-w-2xl mx-auto text-slate-600">
          Extruded dual-shadow inset/outset depth effects with tactile click feedback.
        </p>
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-8 py-4 rounded-2xl bg-slate-100 text-slate-900 font-bold text-sm uppercase tracking-wider shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#cbd5e1,inset_-4px_-4px_8px_#ffffff]">
          Explore Component Library
        </motion.button>
      </div>
    </section>
  );
}
`);

// 04: Holo Chroma Foil CTA
writeComp('04', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

export function AboutCtaBanner4() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-900 border border-pink-500/30 shadow-2xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 text-xs font-mono font-bold uppercase"><Zap className="w-3.5 h-3.5" /> HOLO CHROMA #04</span>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300">Iridescent Rainbow Foil Banner</h2>
        <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm uppercase shadow-[0_0_30px_rgba(236,72,153,0.4)]">Claim Holographic Pass</motion.button>
      </div>
    </section>
  );
}
`);

// 05: Claymorphism 3D CTA
writeComp('05', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';

export function AboutCtaBanner5() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-emerald-50 to-teal-50 text-slate-900 text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_25px_50px_rgba(16,185,129,0.2)]">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase"><Award className="w-3.5 h-3.5" /> CLAYMORPHISM 3D #05</span>
        <h2 className="text-3xl sm:text-5xl font-black">Fluffy 3D Claymorphic Call-to-Action</h2>
        <motion.button whileHover={{ y: -6, scale: 1.03 }} whileTap={{ scale: 0.96 }} className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black text-sm uppercase shadow-lg">Start 14-Day Free Trial</motion.button>
      </div>
    </section>
  );
}
`);

// 06: Neo-Brutalism CTA
writeComp('06', `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AboutCtaBanner6() {
  return (
    <section className="w-full py-16 px-4 bg-yellow-400 text-black border-y-4 border-black text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 bg-white border-4 border-black shadow-[10px_10px_0px_#000000]">
        <span className="px-3 py-1 bg-black text-yellow-400 font-mono font-black text-xs uppercase border-2 border-black">NEO-BRUTALISM #06</span>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">STARK INDUSTRIAL CTA</h2>
        <motion.button whileHover={{ x: -4, y: -4 }} className="px-8 py-4 bg-yellow-400 border-4 border-black font-black text-base uppercase shadow-[6px_6px_0px_#000000] inline-flex items-center gap-2"><span>EXECUTE CODE NOW</span><ArrowRight className="w-5 h-5 stroke-[3]" /></motion.button>
      </div>
    </section>
  );
}
`);

// 07: Metallic Chromium CTA
writeComp('07', `import React from 'react';
import { Sparkles, Shield } from 'lucide-react';
export function AboutCtaBanner7() {
  return (
    <section className="w-full py-16 px-4 bg-zinc-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 border-2 border-slate-400/40 shadow-2xl">
        <span className="px-4 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold uppercase"><Shield className="w-3.5 h-3.5 inline mr-1" /> METALLIC CHROMIUM #07</span>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Brushed Platinum Metallic CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-bold text-sm uppercase shadow-xl">Upgrade to Platinum</button>
      </div>
    </section>
  );
}
`);

// 08: Cyberpunk HUD Glass CTA
writeComp('08', `import React from 'react';
import { Radio } from 'lucide-react';
export function AboutCtaBanner8() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white font-mono text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-2xl bg-slate-900 border border-lime-500/40 shadow-[0_0_30px_rgba(132,204,22,0.2)]">
        <span className="px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-400 text-xs font-bold uppercase"><Radio className="w-3.5 h-3.5 inline mr-1 animate-ping" /> CYBERPUNK HUD #08</span>
        <h2 className="text-3xl sm:text-5xl font-black text-lime-400">INITIALIZE CYBER PROTOCOL</h2>
        <button className="px-8 py-4 rounded-xl bg-lime-400 text-slate-950 font-bold text-sm uppercase">CONNECT NODE</button>
      </div>
    </section>
  );
}
`);

// 09: Velvet Matte Glass CTA
writeComp('09', `import React from 'react';
import { Heart } from 'lucide-react';
export function AboutCtaBanner9() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-slate-950 via-rose-950 to-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-rose-950/20 backdrop-blur-3xl border border-rose-500/20 shadow-2xl">
        <span className="px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-300 text-xs font-mono font-bold uppercase"><Heart className="w-3.5 h-3.5 inline mr-1" /> VELVET MATTE #09</span>
        <h2 className="text-3xl sm:text-5xl font-black text-rose-200">Velvet Satin Sheen CTA Banner</h2>
        <button className="px-8 py-4 rounded-2xl bg-rose-500 text-white font-bold text-sm uppercase shadow-lg">Join Exclusive Club</button>
      </div>
    </section>
  );
}
`);

// 10: Liquid Aurora Morphism CTA
writeComp('10', `import React from 'react';
import { Waves } from 'lucide-react';
export function AboutCtaBanner10() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-slate-950 via-teal-950 to-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-teal-500/30 shadow-2xl">
        <span className="px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono font-bold uppercase"><Waves className="w-3.5 h-3.5 inline mr-1 animate-pulse" /> LIQUID AURORA #10</span>
        <h2 className="text-3xl sm:text-5xl font-black text-teal-200">Liquid SVG Wave Aurora CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-teal-400 text-slate-950 font-bold text-sm uppercase shadow-lg">Flow into Next-Gen</button>
      </div>
    </section>
  );
}
`);

// 11 to 20: Prism, Parallax, Skeuomorphic, Hairline, Bento, Bio-Glass, Cosmic, Drawer, Synthwave, Diamond
writeComp('11', `import React from 'react';
import { Sun } from 'lucide-react';
export function AboutCtaBanner11() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-slate-900 border border-violet-500/30">
        <span className="text-xs font-mono text-violet-400 font-bold uppercase">PRISM LIGHT #11</span>
        <h2 className="text-3xl font-black">Prism Color Splitting CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-violet-500 text-white font-bold text-sm">Refract Light</button>
      </div>
    </section>
  );
}
`);

writeComp('12', `import React from 'react';
import { Layers } from 'lucide-react';
export function AboutCtaBanner12() {
  return (
    <section className="w-full py-16 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-white/5 border border-white/10 shadow-2xl">
        <span className="text-xs font-mono text-cyan-400 font-bold uppercase">PARALLAX STACKED #12</span>
        <h2 className="text-3xl font-black">Multi-Plane Parallax Layer CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-sm">Elevate Layer</button>
      </div>
    </section>
  );
}
`);

writeComp('13', `import React from 'react';
import { Shield } from 'lucide-react';
export function AboutCtaBanner13() {
  return (
    <section className="w-full py-16 px-4 bg-zinc-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-stone-900 border-2 border-amber-500/40">
        <span className="text-xs font-mono text-amber-400 font-bold uppercase">SKEUOMORPHIC BEVEL #13</span>
        <h2 className="text-3xl font-black text-amber-200">Beveled Glossy Seal CTA Banner</h2>
        <button className="px-8 py-4 rounded-2xl bg-amber-500 text-slate-950 font-bold text-sm">Seal Deal</button>
      </div>
    </section>
  );
}
`);

writeComp('14', `import React from 'react';
export function AboutCtaBanner14() {
  return (
    <section className="w-full py-16 px-4 bg-white text-slate-900 border-y border-slate-200 text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 border border-slate-300">
        <span className="text-xs font-mono text-slate-500 uppercase">HAIRLINE GRID #14</span>
        <h2 className="text-3xl font-black">Monochrome Hairline Minimal CTA</h2>
        <button className="px-8 py-4 border-2 border-slate-900 font-bold text-sm uppercase">Commit Action</button>
      </div>
    </section>
  );
}
`);

writeComp('15', `import React from 'react';
export function AboutCtaBanner15() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-slate-900 border border-orange-500/30">
        <span className="text-xs font-mono text-orange-400 font-bold uppercase">BENTO BOX GRID #15</span>
        <h2 className="text-3xl font-black">Bento Modular Conversion CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-orange-500 text-slate-950 font-bold text-sm">Activate Bento</button>
      </div>
    </section>
  );
}
`);

writeComp('16', `import React from 'react';
import { Leaf } from 'lucide-react';
export function AboutCtaBanner16() {
  return (
    <section className="w-full py-16 px-4 bg-emerald-950 text-emerald-100 text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-emerald-900/40 border border-emerald-500/30">
        <span className="text-xs font-mono text-emerald-300 font-bold uppercase">BIO-GLASS #16</span>
        <h2 className="text-3xl font-black text-white">Frosted Emerald Eco-Bio CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-emerald-400 text-slate-950 font-bold text-sm">Plant Seed</button>
      </div>
    </section>
  );
}
`);

writeComp('17', `import React from 'react';
import { Orbit } from 'lucide-react';
export function AboutCtaBanner17() {
  return (
    <section className="w-full py-16 px-4 bg-purple-950 text-purple-100 text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-purple-900/40 border border-purple-400/30">
        <span className="text-xs font-mono text-purple-300 font-bold uppercase">COSMIC STARFIELD #17</span>
        <h2 className="text-3xl font-black text-white">Cosmic Orbit Starfield CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-purple-400 text-slate-950 font-bold text-sm">Launch Orbit</button>
      </div>
    </section>
  );
}
`);

writeComp('18', `import React, { useState } from 'react';
export function AboutCtaBanner18() {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-slate-900 border border-amber-500/40">
        <span className="text-xs font-mono text-amber-400 font-bold uppercase">DRAWER MODAL #18</span>
        <h2 className="text-3xl font-black">Interactive Consultation Booking Drawer</h2>
        <button onClick={() => setOpen(!open)} className="px-8 py-4 rounded-2xl bg-amber-500 text-slate-950 font-bold text-sm">
          {open ? 'Close Drawer' : 'Open Consultation Drawer'}
        </button>
        {open && (
          <div className="p-6 bg-slate-800 rounded-2xl border border-amber-400 text-left space-y-2 max-w-md mx-auto">
            <h3 className="font-bold">Book 1-on-1 Consultation</h3>
            <p className="text-xs text-slate-300">Schedule immediate 30-min strategy session.</p>
          </div>
        )}
      </div>
    </section>
  );
}
`);

writeComp('19', `import React from 'react';
import { Radio } from 'lucide-react';
export function AboutCtaBanner19() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center font-mono">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-slate-900 border border-fuchsia-500/40">
        <span className="text-xs text-fuchsia-400 font-bold uppercase">SYNTHWAVE GRID #19</span>
        <h2 className="text-3xl font-black">SYNTHWAVE NEON GRID CTA</h2>
        <button className="px-8 py-4 rounded-xl bg-fuchsia-500 text-white font-bold text-sm">ENTER MATRIX</button>
      </div>
    </section>
  );
}
`);

writeComp('20', `import React from 'react';
import { Gem } from 'lucide-react';
export function AboutCtaBanner20() {
  return (
    <section className="w-full py-16 px-4 bg-black text-amber-100 text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-stone-900 border-2 border-amber-400/40 shadow-2xl">
        <span className="text-xs font-mono text-amber-300 font-bold uppercase">ULTRA DIAMOND #20</span>
        <h2 className="text-3xl font-black text-amber-200">Ultra Luxury Diamond Faceted CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-amber-400 text-slate-950 font-bold text-sm uppercase">Claim Diamond Pass</button>
      </div>
    </section>
  );
}
`);

console.log('Successfully generated all 20 AboutCtaBanner components.');
