import React, { useState } from 'react';
import { Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function CartRecommendedProducts7({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-6 px-6 bg-emerald-50/60 border border-emerald-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-emerald-200/60 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
            CART ADD-ON 07 — Vertical Checkout List Rows
          </h4>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
          Cart Completion Context
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm gap-4">
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200" className="w-12 h-12 rounded-xl object-cover border border-slate-200" />
          <div>
            <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase block">RECOMMENDED CART ADD-ON</span>
            <h5 className="text-sm font-bold text-slate-900">Silk Pocket Square — Navy Print</h5>
            <span className="text-xs font-mono font-bold text-slate-600">₹499</span>
          </div>
        </div>

        <button 
          onClick={() => setAdded(!added)}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
            added ? 'bg-emerald-600 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {added ? <Check size={14} /> : <Plus size={14} />}
          <span>{added ? "Added To Cart" : "+ Quick Add"}</span>
        </button>
      </div>
    </div>
  );
}
