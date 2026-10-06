import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Sparkles } from 'lucide-react';

export function OffersFeatured16() {
  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-14 font-sans rounded-3xl border border-slate-800 relative overflow-hidden">
      {/* Holographic Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <span className="px-4 py-1.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
          <Globe className="w-4 h-4 text-cyan-400" /> HOLOGRAPHIC PRODUCT ORBIT
        </span>
        <h2 className="text-4xl font-extrabold text-white">Floating Holographic Showpiece</h2>

        <div className="h-72 flex items-center justify-center relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="w-64 h-64 rounded-full border border-cyan-500/30 border-dashed absolute"
          />
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-900 to-indigo-950 border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center text-center p-4">
            <Sparkles className="w-8 h-8 text-cyan-300 mb-2 animate-pulse" />
            <span className="text-xl font-extrabold text-white">Quantum Pods</span>
            <span className="text-xs text-cyan-400 font-mono mt-1">$179 (was $359)</span>
          </div>
        </div>

        <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase rounded-2xl transition-colors inline-flex items-center gap-2">
          CLAIM HOLOGRAM OFFER <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
export default OffersFeatured16;
