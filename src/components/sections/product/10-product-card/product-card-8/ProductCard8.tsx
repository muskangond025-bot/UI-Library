import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard8({ data }: { data?: any }) {
  const [size, setSize] = useState('42');
  const sizes = ['40', '41', '42', '43', '44'];

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative">
        
        <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80" 
            alt="Red Sneakers" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mb-4">
          <span className="text-[10px] font-extrabold uppercase text-rose-500 tracking-wider">Limited Run</span>
          <h3 className="font-extrabold text-xl text-white leading-tight">Air Speed Runner Pro</h3>
          <p className="text-xs text-slate-400 mt-1">Lightweight mesh upper with carbon-fiber spring plate.</p>
        </div>

        {/* Size Picker */}
        <div className="flex items-center justify-between mb-4 pt-3 border-t border-white/10">
          <span className="text-xs text-slate-400 font-medium">EU Size:</span>
          <div className="flex gap-1">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                  size === s 
                    ? 'bg-rose-500 text-white shadow-md' 
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-black text-white">$210</span>
          </div>

          <button className="px-5 py-3 bg-rose-500 hover:bg-rose-400 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Grab Pair
          </button>
        </div>

      </div>

    </div>
  );
}
