import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export default function ProductCard7({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative">
        
        <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80" 
            alt="Vintage Camera" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-rose-500 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md shadow-md">
            SAVE 20% OFF
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-1 text-xs text-amber-400 font-bold mb-1">
            <Star size={13} className="fill-amber-400" /> 4.9 (1,280 reviews)
          </div>
          <h3 className="font-extrabold text-xl text-white">Classic Instant Camera</h3>
          <p className="text-xs text-slate-400 mt-1">Retro analog film lens with built-in flash & self-timer.</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="text-2xl font-black text-white">$159</span>
            <span className="text-xs text-slate-500 line-through ml-2">$199</span>
          </div>

          <button className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}
