import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';

export function OffersDealsGrid8() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 10);
    setRotateY((centerX - x) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white p-8 sm:p-14 font-sans rounded-3xl border border-indigo-900/40">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-indigo-400" /> 3D GYRO PERSPECTIVE SAVINGS CARD
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight">Interactive Deal Showcase</h2>
        </div>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX, rotateY }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-8 sm:p-10 rounded-3xl border border-indigo-400/30 backdrop-blur-md shadow-2xl relative overflow-hidden cursor-pointer"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8" style={{ transform: 'translateZ(40px)' }}>
            <div className="text-left space-y-4 max-w-md">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                FEATURED DEAL - 50% SAVINGS
              </span>
              <h3 className="text-3xl font-extrabold text-white">Quantum Holographic Spatial Pods</h3>
              <p className="text-slate-300 text-sm">Experience spatial sound dynamics with liquid metal structural housing.</p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-cyan-400">$179</span>
                <span className="text-slate-400 line-through text-sm">$359</span>
              </div>
            </div>

            <div className="w-48 h-48 bg-indigo-600/30 rounded-2xl border border-indigo-400/40 flex items-center justify-center shadow-inner">
              <Layers className="w-20 h-20 text-indigo-300 animate-pulse" />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-indigo-500/30 flex justify-end" style={{ transform: 'translateZ(30px)' }}>
            <button className="px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-extrabold rounded-2xl hover:opacity-90 transition-opacity flex items-center gap-2">
              CLAIM DISCOUNT <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default OffersDealsGrid8;
