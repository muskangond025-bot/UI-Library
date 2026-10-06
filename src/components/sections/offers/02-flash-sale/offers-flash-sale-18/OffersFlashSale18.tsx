import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function OffersFlashSale18() {
  return (
    <div className="w-full bg-slate-950 p-8 sm:p-14 font-sans rounded-3xl border border-slate-800 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <span className="px-4 py-1.5 bg-white/10 text-purple-300 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-purple-400" /> GLASSMORPHISM SPOTLIGHT (VARIANT 1 OF 2)
        </span>
        <h2 className="text-4xl font-extrabold text-white">Frosted Glass Spotlight</h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-2xl p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left"
        >
          <div className="space-y-4 max-w-md">
            <span className="px-3 py-1 bg-purple-500/30 text-purple-200 border border-purple-400/40 rounded-full text-xs font-extrabold uppercase">
              EXCLUSIVE DROP - 50% OFF
            </span>
            <h3 className="text-3xl font-extrabold text-white">Spatial VR Prism Pro</h3>
            <p className="text-slate-300 text-sm">Ultra-high resolution dual micro-OLED displays with hand-tracking gesture engine.</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-purple-300">$499</span>
              <span className="text-slate-400 line-through text-sm">$999</span>
            </div>
          </div>

          <button className="px-8 py-4 bg-white text-slate-950 font-extrabold rounded-2xl hover:bg-purple-100 transition-colors flex items-center gap-2 shrink-0">
            CLAIM SPOTLIGHT <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
export default OffersFlashSale18;
