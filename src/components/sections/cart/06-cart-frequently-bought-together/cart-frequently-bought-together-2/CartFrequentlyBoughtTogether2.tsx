import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function CartFrequentlyBoughtTogether2({ data }: { data?: any }) {
  const [added, setAdded] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Silk Pocket Square", price: "₹499", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200" },
    { id: 2, name: "Silver Metal Tie Bar", price: "₹349", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200" },
    { id: 3, name: "Leather Care Cream", price: "₹299", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=200" }
  ];

  return (
    <div className="w-full py-6 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-4">02 / COMPACT ADD-ON ROWS</h4>
      <div className="divide-y divide-slate-100">
        {items.map(item => (
          <div key={item.id} className="py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={item.image} className="w-10 h-10 rounded-xl object-cover border" />
              <div>
                <h5 className="text-xs font-bold text-slate-900">{item.name}</h5>
                <span className="text-xs font-mono font-bold text-emerald-600">{item.price}</span>
              </div>
            </div>

            <button 
              onClick={() => setAdded(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 ${
                added.includes(item.id) ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {added.includes(item.id) ? <Check size={14} /> : <Plus size={14} />}
              <span>{added.includes(item.id) ? "Added" : "Add"}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}