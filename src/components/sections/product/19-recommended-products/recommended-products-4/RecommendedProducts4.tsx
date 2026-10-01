import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts4({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full py-4 px-6 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl flex items-center justify-between gap-4 font-sans my-3">
      <div className="flex items-center gap-3">
        <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200&auto=format&fit=crop&q=80" className="w-10 h-10 rounded-lg object-cover border border-emerald-200" alt="Silk Square" />
        <div>
          <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">SUGGESTED ADD-ON</span>
          <h5 className="text-xs font-bold text-slate-900">Silk Pocket Square — Navy Print</h5>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono font-bold text-emerald-800">₹499</span>
        <button 
          onClick={() => setAdded(!added)} 
          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
            added ? 'bg-emerald-600 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {added ? <Check size={14} /> : <Plus size={14} />}
          <span>{added ? "Added" : "Quick Add"}</span>
        </button>
      </div>
    </div>
  );
}