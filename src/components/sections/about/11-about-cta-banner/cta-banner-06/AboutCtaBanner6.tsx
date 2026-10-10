import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AboutCtaBanner6() {
  return (
    <section className="w-full py-16 px-4 bg-yellow-400 text-black border-y-4 border-black text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 bg-white border-4 border-black shadow-[10px_10px_0px_#000000]">
        <span className="px-3 py-1 bg-black text-yellow-400 font-mono font-black text-xs uppercase border-2 border-black">NEO-BRUTALISM #06 • ANIMATION: HARD STARK OFFSET SHADOW POP</span>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">STARK INDUSTRIAL CTA</h2>
        <motion.button whileHover={{ x: -4, y: -4 }} className="px-8 py-4 bg-yellow-400 border-4 border-black font-black text-base uppercase shadow-[6px_6px_0px_#000000] inline-flex items-center gap-2"><span>EXECUTE CODE NOW</span><ArrowRight className="w-5 h-5 stroke-[3]" /></motion.button>
      </div>
    </section>
  );
}
