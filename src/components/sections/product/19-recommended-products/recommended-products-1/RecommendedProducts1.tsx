import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function RecommendedProducts1({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const items = data?.section?.settings?.recommendations || [
    { id: 1, name: "Silk Pocket Square", price: "₹499", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
    { id: 2, name: "Silver Metal Tie Bar", price: "₹349", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
    { id: 3, name: "Leather Care Cream", price: "₹299", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" },
    { id: 4, name: "Premium Cotton Socks", price: "₹399", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&auto=format&fit=crop&q=80" }
  ];

  const toggleAdd = (id: number) => {
    setAddedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="w-full py-6 px-4 bg-slate-50 border border-slate-200/80 rounded-3xl font-sans my-4">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Cart Add-Ons & Recommendations
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-500">Pairs with cart items</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item: any) => {
          const isAdded = addedIds.includes(item.id);
          return (
            <div key={item.id} className="bg-white border border-slate-200/90 rounded-2xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover border border-slate-100 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h5 className="text-xs font-bold text-slate-900 truncate">{item.name}</h5>
                <span className="text-xs font-mono text-emerald-600 font-bold">{item.price}</span>
              </div>
              <button
                onClick={() => toggleAdd(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                  isAdded ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                <span>{isAdded ? "Added" : "Add"}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
