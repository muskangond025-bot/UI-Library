import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Lock } from 'lucide-react';

export function AboutCtaBanner2() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8 p-10 sm:p-14 rounded-3xl bg-zinc-900/90 backdrop-blur-2xl border border-zinc-800 shadow-2xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
          <Lock className="w-3.5 h-3.5" /> DARK OBSIDIAN GLASS #02 • ANIMATION: NEON LASER SWEEP & PULSE
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
