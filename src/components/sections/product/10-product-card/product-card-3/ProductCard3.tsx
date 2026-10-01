import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, Star, ShoppingBag } from 'lucide-react';

export default function ProductCard3({ data }: { data?: any }) {
  const [rotation, setRotation] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512790182412-b19e6d61b39a?w=800&auto=format&fit=crop&q=80"
  ];

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-5 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[10px] font-extrabold uppercase rounded-lg">
            360° Interactive View
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Star size={12} className="fill-amber-400 text-amber-400" /> 4.9 Pro Grade
          </span>
        </div>

        {/* Interactive 360 Image Frame */}
        <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 mb-4 group">
          <img 
            src={images[rotation]} 
            alt="Camera Body 360" 
            className="w-full h-full object-cover transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-slate-900/80 p-2 rounded-xl border border-white/10 text-cyan-400">
            <RotateCw size={16} className="animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </div>

        {/* Rotate Slider Control */}
        <div className="mb-4 bg-slate-950 p-2.5 rounded-xl border border-white/5">
          <div className="flex justify-between text-[10px] text-slate-400 font-semibold mb-1">
            <span>FRONT</span>
            <span>SIDE VIEW</span>
            <span>REAR</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="2" 
            value={rotation} 
            onChange={(e) => setRotation(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        {/* Product Info */}
        <h3 className="font-extrabold text-lg text-white mb-1">Cinematic 8K Mirrorless Body</h3>
        <p className="text-xs text-slate-400 mb-4 line-clamp-1">Full-Frame CMOS Sensor • Dual Card Slots • 120fps</p>

        {/* Action */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="text-xs text-emerald-400 font-bold block">In Stock</span>
            <span className="text-2xl font-black text-white">$1,899</span>
          </div>

          <button className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center gap-1.5 transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={15} /> Reserve Now
          </button>
        </div>

      </div>

    </div>
  );
}
