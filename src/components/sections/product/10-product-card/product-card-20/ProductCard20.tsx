import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';

export default function ProductCard20({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative">
        
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-xs rounded-full flex items-center gap-1.5">
            <Sparkles size={12} /> Workstation Suite
          </span>
          <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
            <Star size={13} className="fill-amber-400" /> 4.9 (420)
          </span>
        </div>

        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80" 
            alt="Walnut Desk" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-extrabold text-xl text-white mb-1">Ergonomic Walnut Standing Desk</h3>
        <p className="text-xs text-slate-400 mb-4">Dual-Motor Electric Lift • Solid American Walnut</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="text-2xl font-black text-amber-400">$649</span>
            <span className="text-xs text-slate-500 line-through ml-2">$799</span>
          </div>

          <button className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Order Suite
          </button>
        </div>

      </div>

    </div>
  );
}
