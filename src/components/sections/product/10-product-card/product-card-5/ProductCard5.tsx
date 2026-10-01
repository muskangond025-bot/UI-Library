import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap } from 'lucide-react';

export default function ProductCard5({ data }: { data?: any }) {
  const [band, setBand] = useState(0);
  const bands = ["Midnight Black", "Alpine Orange", "Ocean Cyan"];

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative">
        
        <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80" 
            alt="Tactile Smartwatch" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
            <Zap size={13} /> 100hr Battery
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-black text-xl text-white">Ultra Fitness Tracker V2</h3>
          <p className="text-xs text-slate-400 mt-1">Titanium casing with dual-frequency GPS & OLED display.</p>
        </div>

        {/* Strap Switcher */}
        <div className="mb-5 bg-slate-950 p-2.5 rounded-2xl border border-white/5">
          <span className="text-[10px] text-slate-400 font-bold block mb-1.5 uppercase">Strap Variant</span>
          <div className="grid grid-cols-3 gap-1.5">
            {bands.map((b, i) => (
              <button
                key={i}
                onClick={() => setBand(i)}
                className={`py-1.5 px-2 text-[10px] font-extrabold rounded-xl transition-all truncate ${
                  band === i
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {b.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="text-2xl font-black text-white">$399</span>
            <span className="text-xs text-slate-500 block line-through">$449</span>
          </div>

          <button className="px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Order Today
          </button>
        </div>

      </div>

    </div>
  );
}
