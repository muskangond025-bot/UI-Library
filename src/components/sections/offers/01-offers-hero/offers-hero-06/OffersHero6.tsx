import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export function OffersHero6({ data, section }: { data?: any; section?: any }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y * 0.04, y: x * 0.04 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full py-20 px-6 bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-3xl perspective-1000"
      >
        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            rotateX: rotate.x,
            rotateY: rotate.y
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 p-8 sm:p-14 rounded-3xl border border-indigo-500/40 shadow-[0_25px_50px_-12px_rgba(79,70,229,0.35)] space-y-6"
        >
          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>3D SPATIAL PROMO</span>
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              VERIFIED OFFER
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight uppercase leading-none">
              FLAT <span className="text-indigo-400">45% OFF</span>
            </h1>
            <p className="text-slate-300 text-base max-w-lg font-light">
              Interactive 3D spatial promotional card. Move cursor over card to experience real-time tilt reaction.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-indigo-500/30 flex items-center gap-2">
              <span>EXPLORE 3D DEALS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="px-4 py-3 bg-slate-900/90 rounded-xl border border-slate-700 text-xs font-mono text-indigo-300">
              CODE: <strong className="text-white">TILT45</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OffersHero6;
