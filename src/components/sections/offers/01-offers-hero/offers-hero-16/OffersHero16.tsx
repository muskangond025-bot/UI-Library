import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Magnet } from 'lucide-react';

export function OffersHero16({ data, section }: { data?: any; section?: any }) {
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btnBox = e.currentTarget.querySelector('button')?.getBoundingClientRect();
    if (!btnBox) return;

    const btnCenterX = btnBox.left + btnBox.width / 2;
    const btnCenterY = btnBox.top + btnBox.height / 2;
    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (dist < 140) {
      setBtnPos({ x: (e.clientX - btnCenterX) * 0.35, y: (e.clientY - btnCenterY) * 0.35 });
    } else {
      setBtnPos({ x: 0, y: 0 });
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl text-center select-none"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
          <Magnet className="w-3.5 h-3.5" />
          <span>MAGNETIC CTA INTERACTION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
          ATTRACT YOUR <span className="text-blue-400">50% DISCOUNT</span>
        </h1>

        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Hover your mouse near the CTA button below to experience magnetic attraction effect.
        </p>

        <div className="pt-6 flex justify-center">
          <motion.button
            animate={{ x: btnPos.x, y: btnPos.y }}
            transition={{ type: 'spring', stiffness: 250, damping: 15 }}
            className="px-10 py-5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/30 flex items-center gap-3 cursor-pointer"
          >
            <span>MAGNETIC CHECKOUT</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero16;
