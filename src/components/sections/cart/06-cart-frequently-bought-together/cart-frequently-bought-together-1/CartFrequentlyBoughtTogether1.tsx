import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingBag, Check } from 'lucide-react';

export default function CartFrequentlyBoughtTogether1({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4 shadow-2xl border border-slate-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">01 / BUNDLE BUILDER</span>
          <h3 className="text-xl font-bold mt-1">Frequently Bought Together Bundle</h3>
        </div>
        <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">Save ₹200</span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
        <div className="flex-1 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300" className="w-16 h-16 rounded-xl object-cover border border-slate-600" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono">CART ITEM</span>
            <h5 className="text-xs font-bold">Navy Blazer</h5>
            <span className="text-xs font-mono text-emerald-400 font-bold">₹8,999</span>
          </div>
        </div>

        <Plus className="text-emerald-400 w-5 h-5 flex-shrink-0" />

        <div className="flex-1 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300" className="w-16 h-16 rounded-xl object-cover border border-slate-600" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono">ADD-ON 1</span>
            <h5 className="text-xs font-bold">Pocket Square</h5>
            <span className="text-xs font-mono text-emerald-400 font-bold">₹499</span>
          </div>
        </div>

        <Plus className="text-emerald-400 w-5 h-5 flex-shrink-0" />

        <div className="flex-1 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=300" className="w-16 h-16 rounded-xl object-cover border border-slate-600" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono">ADD-ON 2</span>
            <h5 className="text-xs font-bold">Leather Cream</h5>
            <span className="text-xs font-mono text-emerald-400 font-bold">₹299</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <div>
          <span className="text-xs text-slate-400 font-mono">Bundle Total (3 items):</span>
          <span className="text-2xl font-black text-white ml-2">₹9,597</span>
        </div>

        <button 
          onClick={() => setAdded(!added)}
          className={`px-6 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg ${
            added ? 'bg-emerald-500 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }`}
        >
          {added ? <Check size={16} /> : <ShoppingBag size={16} />}
          <span>{added ? "Bundle Added to Cart" : "Add Complete Bundle"}</span>
        </button>
      </div>
    </div>
  );
}