import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function OffersDealsGrid19() {
  return (
    <div className="w-full bg-slate-950 p-8 sm:p-14 font-sans rounded-3xl border border-slate-800 relative overflow-hidden">
      {/* Dynamic gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <span className="px-4 py-1.5 bg-white/10 text-cyan-300 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400" /> GLASSMORPHISM PRISM (VARIANT 2 OF 2)
        </span>
        <h2 className="text-4xl font-extrabold text-white">Chromatism Prism Price Drop</h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-2xl p-8 sm:p-12 rounded-3xl border-2 border-transparent bg-clip-border shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden"
        >
          <div className="space-y-4 max-w-md">
            <span className="px-3 py-1 bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 rounded-full text-xs font-extrabold uppercase">
              PRISM SPECIAL - 45% SAVINGS
            </span>
            <h3 className="text-3xl font-extrabold text-white">Iridescent Acoustic Sphere</h3>
            <p className="text-slate-300 text-sm">Prismatic acrylic acoustic resonance chamber with studio-grade transducers.</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-cyan-300">$219</span>
              <span className="text-slate-400 line-through text-sm">$399</span>
            </div>
          </div>

          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-extrabold rounded-2xl hover:opacity-90 transition-opacity flex items-center gap-2 shrink-0">
            CLAIM PRISM SAVINGS <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
export default OffersDealsGrid19;
