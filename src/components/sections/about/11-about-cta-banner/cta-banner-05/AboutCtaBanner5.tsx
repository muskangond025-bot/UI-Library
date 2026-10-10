import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';

export function AboutCtaBanner5() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-emerald-50 to-teal-50 text-slate-900 text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_25px_50px_rgba(16,185,129,0.2)]">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase"><Award className="w-3.5 h-3.5" /> 3D CLAYMORPHISM #05 • ANIMATION: SOFT SQUISHY REACTION & 3D TILT</span>
        <h2 className="text-3xl sm:text-5xl font-black">Fluffy 3D Claymorphic Call-to-Action</h2>
        <motion.button whileHover={{ y: -6, scale: 1.03 }} whileTap={{ scale: 0.96 }} className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black text-sm uppercase shadow-lg">Start 14-Day Free Trial</motion.button>
      </div>
    </section>
  );
}
