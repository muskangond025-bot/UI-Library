import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';

export default function CartFrequentlyBoughtTogether13({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full py-6 px-6 bg-emerald-50 border border-emerald-200 rounded-3xl font-sans my-4 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">1-CLICK ADD-ON</span>
        <h5 className="text-xs font-bold text-slate-900">Silk Pocket Square (₹499)</h5>
      </div>
      <button onClick={() => setAdded(!added)} className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 ${added ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white'}`}>
        {added ? <Check size={14} /> : <Plus size={14} />}
        <span>{added ? "Added ✓" : "+ Add"}</span>
      </button>
    </div>
  );
}