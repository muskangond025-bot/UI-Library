import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export function AboutCtaBanner1() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8 p-10 sm:p-14 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/15 shadow-2xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" /> FROSTED GLASSMORPHISM #01 • ANIMATION: FLOATING AMBIENT ORBS & GLOW
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
