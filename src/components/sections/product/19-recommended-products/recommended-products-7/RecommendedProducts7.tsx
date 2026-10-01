import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts7({ data }: { data?: any }) {
  const [added, setAdded] = useState<number[]>([]);
  const items = [
    { id: 1, name: "Silk Pocket Square", price: "₹499" },
    { id: 2, name: "Silver Metal Tie Bar", price: "₹349" },
    { id: 3, name: "Leather Protection Cream", price: "₹299" }
  ];

  return (
    <div className="w-full py-6 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4">
      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">07 / VERTICAL ADD-ON LIST</h4>
      <div className="divide-y divide-slate-100">
        {items.map(item => (
          <div key={item.id} className="py-2.5 flex items-center justify-between text-xs font-medium">
            <span className="font-bold text-slate-900">{item.name}</span>
            <div className="flex items-center gap-4">
              <span className="font-mono text-slate-500">{item.price}</span>
              <button 
                onClick={() => setAdded(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
                className="text-emerald-600 font-bold flex items-center gap-1 hover:underline"
              >
                {added.includes(item.id) ? "✓ Added" : "+ Add"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}