import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers } from 'lucide-react';

export function AboutCtaBanner3() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 text-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 p-10 sm:p-14 rounded-3xl bg-slate-100 shadow-[14px_14px_28px_#cbd5e1,-14px_-14px_28px_#ffffff]">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
          <Layers className="w-3.5 h-3.5" /> SOFT NEUMORPHISM #03 • ANIMATION: DUAL-SHADOW DEPTH & TACTILE PRESS
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
