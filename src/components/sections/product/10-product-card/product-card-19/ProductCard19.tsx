import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductCard19({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Animated Blob */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="w-full max-w-sm bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-5 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur-xl relative">
        
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full flex items-center gap-1.5">
            <Sparkles size={12} /> Organic Eco Tech
          </span>
        </div>

        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80" 
            alt="Bamboo Tripod" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-extrabold text-xl text-white mb-1">Flexi-Leg Eco Mini Tripod</h3>
        <p className="text-xs text-slate-400 mb-4">Recycled Aluminum Core • 360° Ballhead</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="text-2xl font-black text-emerald-400">$49</span>
          <button className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}
