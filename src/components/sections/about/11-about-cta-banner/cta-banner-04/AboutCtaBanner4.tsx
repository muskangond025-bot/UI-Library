import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

export function AboutCtaBanner4() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-900 border border-pink-500/30 shadow-2xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 text-xs font-mono font-bold uppercase"><Zap className="w-3.5 h-3.5" /> HOLO CHROMA FOIL #04 • ANIMATION: CHROMATIC RAINBOW BORDER ROTATION</span>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300">Iridescent Rainbow Foil Banner</h2>
        <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm uppercase shadow-[0_0_30px_rgba(236,72,153,0.4)]">Claim Holographic Pass</motion.button>
      </div>
    </section>
  );
}
