import React, { useState } from 'react';
import { Plus, Check, Zap } from 'lucide-react';

export default function RecommendedProducts13({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-6 px-6 bg-emerald-500 text-white rounded-3xl font-sans my-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Zap className="w-6 h-6 text-emerald-200 fill-emerald-200" />
        <div>
          <span className="text-[10px] font-mono uppercase font-bold text-emerald-100">1-CLICK CART ADD</span>
          <h4 className="text-base font-bold">Silk Pocket Square (₹499)</h4>
        </div>
      </div>

      <button 
        onClick={() => setAdded(!added)}
        className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105 ${
          added ? 'bg-slate-900 text-white' : 'bg-white text-emerald-950'
        }`}
      >
        {added ? <Check size={16} /> : <Plus size={16} />}
        <span>{added ? "Added To Cart" : "+ ADD IN 1 CLICK"}</span>
      </button>
    </div>
  );
}