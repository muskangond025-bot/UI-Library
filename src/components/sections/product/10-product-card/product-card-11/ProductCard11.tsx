import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Volume2 } from 'lucide-react';

export default function ProductCard11({ data }: { data?: any }) {
  const [boosted, setBoosted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div 
        onMouseMove={handleMouseMove}
        className="w-full max-w-sm bg-slate-900 border border-indigo-500/30 rounded-3xl p-5 shadow-[0_0_40px_rgba(99,102,241,0.15)] relative overflow-hidden"
      >
        {/* Cursor Glow */}
        <div 
          className="absolute w-48 h-48 bg-indigo-500/15 blur-[60px] rounded-full pointer-events-none transition-transform duration-75"
          style={{ transform: `translate(${mousePos.x - 96}px, ${mousePos.y - 96}px)` }}
        />

        <div className="flex items-center justify-between mb-3 z-10 relative">
          <span className="px-3 py-1 bg-indigo-950 border border-indigo-500/30 text-indigo-400 text-xs font-bold rounded-full flex items-center gap-1.5">
            <Sparkles size={12} /> Cursor Reactive
          </span>
          <button 
            onClick={() => setBoosted(!boosted)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold flex items-center gap-1 transition-all ${
              boosted ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'
            }`}
          >
            <Volume2 size={12} /> {boosted ? 'Bass Boosted' : 'Flat EQ'}
          </button>
        </div>

        <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-950 mb-4 group z-10">
          <img 
            src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80" 
            alt="Gaming Headset" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mb-4 z-10 relative">
          <h3 className="font-extrabold text-xl text-white">Quantum 7.1 Surround Headset</h3>
          <p className="text-xs text-slate-400 mt-1">Spatial Audio Driver • Detachable Broadcast Mic</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/10 z-10 relative">
          <div>
            <span className="text-2xl font-black text-white">$179</span>
          </div>

          <button className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}
