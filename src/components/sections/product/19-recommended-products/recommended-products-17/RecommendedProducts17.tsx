import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts17({ data }: { data?: any }) {
  const [added, setAdded] = useState<number[]>([]);

  return (
    <div className="w-full py-6 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4 bg-indigo-950 text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase">17 / SPLIT PANEL</span>
          <div>
            <h4 className="text-xl font-bold">Complete Your Order</h4>
            <p className="text-xs text-indigo-200 mt-1">Recommended additions for your current cart.</p>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[{ id: 1, name: "Silk Pocket Square", price: "₹499" }, { id: 2, name: "Silver Tie Bar", price: "₹349" }].map(it => (
            <div key={it.id} className="bg-white p-3 rounded-2xl border flex items-center justify-between">
              <div>
                <h5 className="text-xs font-bold text-slate-900">{it.name}</h5>
                <span className="text-xs font-mono text-slate-500">{it.price}</span>
              </div>
              <button 
                onClick={() => setAdded(prev => prev.includes(it.id) ? prev.filter(x => x !== it.id) : [...prev, it.id])}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold ${added.includes(it.id) ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}
              >
                {added.includes(it.id) ? "Added" : "+ Add"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}