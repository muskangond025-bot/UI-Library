import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts14({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-4 px-6 bg-slate-100 border-y-2 border-slate-300 font-sans my-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="text-xs font-mono font-bold uppercase text-slate-700">CART FLOW DIVIDER:</span>
        <span className="text-xs font-bold text-slate-900">Add Silk Pocket Square for ₹499</span>
      </div>

      <button 
        onClick={() => setAdded(!added)}
        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
          added ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white'
        }`}
      >
        {added ? <Check size={14} /> : <Plus size={14} />}
        <span>{added ? "Added" : "+ Add"}</span>
      </button>
    </div>
  );
}