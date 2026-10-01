import React, { useState } from 'react';
import { Plus, Check, Link2 } from 'lucide-react';

export default function RecommendedProducts5({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1]);
  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4 border border-slate-800 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Link2 className="w-4 h-4 text-indigo-400" />
        <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">MATCHING OUTFIT SET</h4>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="p-3 bg-slate-800 border border-slate-700 rounded-2xl flex items-center gap-3 w-full md:w-1/3">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200&auto=format&fit=crop&q=80" className="w-12 h-12 rounded-xl object-cover" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono">PRIMARY CART ITEM</span>
            <h5 className="text-xs font-bold">Navy Tailored Blazer</h5>
          </div>
        </div>

        <span className="text-indigo-400 font-bold text-sm hidden md:block">+</span>

        <div className="p-3 bg-slate-800/60 border border-indigo-500/30 rounded-2xl flex items-center justify-between gap-3 w-full md:w-2/3">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&auto=format&fit=crop&q=80" className="w-12 h-12 rounded-xl object-cover" />
            <div>
              <span className="text-[10px] text-indigo-300 font-mono font-bold">RECOMMENDED PAIR</span>
              <h5 className="text-xs font-bold">Silver Metal Tie Bar</h5>
              <span className="text-xs font-mono text-indigo-400 font-bold">₹349</span>
            </div>
          </div>
          <button 
            onClick={() => setSelected(prev => prev.includes(2) ? prev.filter(x => x !== 2) : [...prev, 2])} 
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 ${
              selected.includes(2) ? 'bg-emerald-500 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'
            }`}
          >
            {selected.includes(2) ? <Check size={14} /> : <Plus size={14} />}
            <span>{selected.includes(2) ? "Paired" : "Add Pair"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}