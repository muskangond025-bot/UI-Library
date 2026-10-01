import React from 'react';
import { ShoppingBag, Sparkles, Star } from 'lucide-react';

export default function ProductCard10({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-purple-500/30 rounded-3xl p-5 shadow-[0_0_40px_rgba(168,85,247,0.15)] relative">
        
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-purple-950 border border-purple-500/30 text-purple-400 text-xs font-bold rounded-full flex items-center gap-1.5">
            <Sparkles size={12} /> Next-Gen AR Ready
          </span>
          <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
            <Star size={13} className="fill-amber-400" /> 5.0
          </span>
        </div>

        <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80" 
            alt="Wireless Mic" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-extrabold text-xl text-white mb-1">Wireless Creator Microphone</h3>
        <p className="text-xs text-slate-400 mb-4">Studio-grade noise suppression • 2.4GHz Ultra-Low Latency</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="text-2xl font-black text-white">$149</span>
          </div>

          <button className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Buy Now
          </button>
        </div>

      </div>

    </div>
  );
}
