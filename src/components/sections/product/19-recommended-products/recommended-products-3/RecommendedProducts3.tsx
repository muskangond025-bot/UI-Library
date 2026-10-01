import React, { useState } from 'react';
import { Plus, Check, Tag } from 'lucide-react';

export default function RecommendedProducts3({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Leather Care Cream", price: "₹299", desc: "Protects leather finish", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" },
    { id: 2, name: "Waterproof Shoe Spray", price: "₹449", desc: "Nano stain guard", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
    { id: 3, name: "Cedar Shoe Tree Pair", price: "₹699", desc: "Maintains shoe shape", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="w-full py-6 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
        <Tag className="w-4 h-4 text-emerald-600" />
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Cart Add-Ons & Care Protection</h4>
      </div>

      <div className="flex flex-col divide-y divide-slate-100">
        {items.map(item => {
          const isAdded = addedIds.includes(item.id);
          return (
            <div key={item.id} className="py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-xl object-cover border border-slate-100" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{item.name}</h5>
                  <span className="text-[11px] text-slate-500">{item.desc}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-mono font-bold text-slate-900">{item.price}</span>
                <button
                  onClick={() => setAddedIds(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors ${
                    isAdded ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {isAdded ? <Check size={14} /> : <Plus size={14} />}
                  <span>{isAdded ? "Added" : "Quick Add"}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
