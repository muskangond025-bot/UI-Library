import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';

export function OffersHero19({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full min-h-[540px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=80"
        alt="Full Bleed Portal"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/60" />

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative z-10 max-w-2xl mx-6 p-8 sm:p-12 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/20 text-center space-y-6 shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
          <Maximize2 className="w-3.5 h-3.5" />
          <span>FULL BLEED PORTAL</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
          OVERLAY DEALS <br/><span className="text-amber-300">50% REDUCTION</span>
        </h1>

        <p className="text-slate-200 text-sm max-w-md mx-auto leading-relaxed">
          Full bleed backdrop with glassmorphic center card. Experience total visual clarity while exploring deal highlights.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button className="px-8 py-4 bg-white text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-all flex items-center gap-2">
            <span>EXPLORE FULL BLEED</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default OffersHero19;
