import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Volume2 } from 'lucide-react';

export default function ProductBundles11({ data }: { data?: any }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [boosted, setBoosted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none"
    >
      {/* Spotlight Glow */}
      <div 
        className="absolute w-72 h-72 bg-indigo-500/15 blur-[80px] rounded-full pointer-events-none transition-transform duration-75"
        style={{ transform: `translate(${mousePos.x - 144}px, ${mousePos.y - 144}px)` }}
      />

      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          11. CURSOR SPOTLIGHT REACTIVE BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Quantum Surround Audio Bundle</h2>
      </div>

      <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 max-w-md w-full z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-indigo-400 font-bold">Spatial Audio Kit</span>
          <button 
            onClick={() => setBoosted(!boosted)}
            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
              boosted ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
            }`}
          >
            <Volume2 size={14} /> {boosted ? 'Bass Boosted' : 'Flat EQ'}
          </button>
        </div>

        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80" alt="Headset" className="w-full h-52 object-cover rounded-2xl mb-4" />

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-extrabold text-lg">Quantum 7.1 Headset + Stand</h3>
            <span className="text-2xl font-black text-indigo-400">$228</span>
          </div>

          <button className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>
      </div>

      <div className="text-xs text-slate-500 z-10">Hover mouse across canvas to activate spotlight effect.</div>

    </div>
  );
}
