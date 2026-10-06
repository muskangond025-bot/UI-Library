import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OffersHero15({ data, section }: { data?: any; section?: any }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.03;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.03;
    setOffset({ x, y });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-8 bg-neutral-950 text-white rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div 
          style={{ x: offset.x * -1, y: offset.y * -1 }}
          className="lg:col-span-7 space-y-6 z-10"
        >
          <span className="text-xs text-amber-400 font-mono uppercase tracking-widest font-bold">ASYMMETRIC PARALLAX</span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            SAVINGS IN <br/><span className="text-amber-400">HIGH MOTION // 50%</span>
          </h1>
          <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
            Multi-layered editorial composition with offset parallax movement. Unlock flat 50% off sitewide.
          </p>
          <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2">
            <span>EXPLORE PARALLAX OFFER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div 
          style={{ x: offset.x * 1.5, y: offset.y * 1.5 }}
          className="lg:col-span-5 relative"
        >
          <div className="w-full h-80 rounded-3xl bg-neutral-900 border border-neutral-700 p-8 flex flex-col justify-between shadow-2xl">
            <div className="text-xs text-neutral-400 font-mono">PARALLAX LAYER 02</div>
            <div className="text-4xl font-black text-white">CODE: ASYM50</div>
            <div className="text-xs text-amber-400 font-bold uppercase">APPLIED AT CHECKOUT</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OffersHero15;
