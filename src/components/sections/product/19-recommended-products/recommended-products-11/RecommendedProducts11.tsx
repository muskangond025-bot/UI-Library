import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export default function RecommendedProducts11({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full py-10 px-8 bg-slate-950 text-white rounded-3xl font-serif my-4 border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
        <div>
          <span className="text-xs font-mono text-amber-400 tracking-widest uppercase mb-2 flex items-center gap-1.5 font-sans">
            <Sparkles size={14} /> EDITORIAL SELECTION
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Complete Your Order</h2>
        </div>
        <p className="text-stone-400 text-xs font-sans max-w-xs">
          Hand-picked luxury accessories tailored to your active cart items.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center font-sans">
        <div className="md:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400" className="w-28 h-28 rounded-xl object-cover" />
          <div className="flex-1">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">RECOMMENDED ADD-ON</span>
            <h4 className="font-serif text-xl font-normal text-white">Silk Pocket Square — Italian Twill</h4>
            <span className="text-amber-400 font-mono font-bold text-lg block mt-1">₹499</span>
          </div>
          <button 
            onClick={() => setAdded(!added)} 
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              added ? 'bg-emerald-500 text-white' : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
            }`}
          >
            {added ? <Check size={14} /> : <ArrowRight size={14} />}
            <span>{added ? "Added" : "Add To Order"}</span>
          </button>
        </div>

        <div className="md:col-span-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 text-xs text-stone-400">
          <span className="font-mono text-amber-400 uppercase font-bold block mb-2">NOTE</span>
          Pairs seamlessly with your Navy Tailored Blazer already in cart. Free return guarantee included.
        </div>
      </div>
    </div>
  );
}