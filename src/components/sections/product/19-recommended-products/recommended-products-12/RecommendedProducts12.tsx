import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts12({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  return (
    <div className="w-full py-8 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-4">12 / ASYMMETRIC CART RECOMMENDATION</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left 2/3 Featured */}
        <div className="md:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300" className="w-16 h-16 rounded-xl object-cover" />
            <div>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded">ASYMMETRIC HERO</span>
              <h5 className="text-sm font-bold text-slate-900 mt-1">Silk Pocket Square</h5>
              <span className="text-xs font-mono font-bold text-emerald-600">₹499</span>
            </div>
          </div>
          <button 
            onClick={() => setAddedIds(prev => prev.includes(1) ? prev.filter(x => x !== 1) : [...prev, 1])}
            className={`px-4 py-2 rounded-xl text-xs font-bold ${addedIds.includes(1) ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}
          >
            {addedIds.includes(1) ? "✓ Added" : "+ Add"}
          </button>
        </div>

        {/* Right 1/3 Stacked */}
        <div className="md:col-span-4 flex flex-col gap-2">
          {["Tie Bar ₹349", "Leather Cream ₹299"].map((txt, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-2.5 rounded-xl flex items-center justify-between text-xs font-bold text-slate-800">
              <span>{txt}</span>
              <button className="text-emerald-600 hover:underline text-[11px]">+ Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}