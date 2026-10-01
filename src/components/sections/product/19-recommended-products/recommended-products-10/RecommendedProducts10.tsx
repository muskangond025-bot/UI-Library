import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

export default function RecommendedProducts10({ data }: { data?: any }) {
  const [checked, setChecked] = useState<number[]>([1]);

  const items = [
    { id: 1, name: "Extended 1-Year Protection Plan", price: "₹199" },
    { id: 2, name: "Anti-Stain Waterproof Coating", price: "₹299" },
    { id: 3, name: "Gift Wrapping & Custom Note", price: "₹99" }
  ];

  return (
    <div className="w-full py-6 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4">
      <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-4">10 / UTILITY ADD-ONS</h4>
      <div className="space-y-2">
        {items.map(it => {
          const isCheck = checked.includes(it.id);
          return (
            <div 
              key={it.id} 
              onClick={() => setChecked(prev => prev.includes(it.id) ? prev.filter(x => x !== it.id) : [...prev, it.id])}
              className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {isCheck ? <CheckSquare className="text-emerald-400 w-5 h-5" /> : <Square className="text-slate-500 w-5 h-5" />}
                <span className="text-xs font-bold">{it.name}</span>
              </div>
              <span className="text-xs font-mono text-indigo-300 font-bold">+{it.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}