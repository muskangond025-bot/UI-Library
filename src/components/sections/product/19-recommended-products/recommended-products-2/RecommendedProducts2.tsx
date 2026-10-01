import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, Plus, Check } from 'lucide-react';

export default function RecommendedProducts2({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([1]);

  const items = [
    { id: 1, name: "Navy Tailored Blazer", price: "₹8,999", role: "In Cart", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
    { id: 2, name: "Silk Pocket Square", price: "₹499", role: "Recommended", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
    { id: 3, name: "Silver Metal Tie Bar", price: "₹349", role: "Recommended", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="w-full py-8 px-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl font-sans my-4 shadow-xl border border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold block mb-1">
            COMPLETE THE LOOK
          </span>
          <h3 className="text-xl font-bold">Frequently Bought With Your Cart</h3>
        </div>
        <button className="text-xs bg-indigo-600 hover:bg-indigo-500 font-bold px-4 py-2 rounded-xl text-white shadow-md">
          Add Entire Bundle (+₹848)
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        {items.map((item, idx) => (
          <React.Fragment key={item.id}>
            <div className={`flex-1 p-3 rounded-2xl border flex items-center gap-3 w-full ${
              item.role === 'In Cart' ? 'bg-slate-800/80 border-indigo-500/40' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono uppercase text-indigo-300 font-bold">{item.role}</span>
                <h5 className="text-xs font-bold text-white truncate">{item.name}</h5>
                <span className="text-xs font-mono text-indigo-400 font-bold">{item.price}</span>
              </div>
              {item.role !== 'In Cart' && (
                <button 
                  onClick={() => setAddedIds(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
                  className={`p-2 rounded-xl border text-xs font-bold transition-colors ${
                    addedIds.includes(item.id) ? 'bg-emerald-500 text-white border-emerald-400' : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'
                  }`}
                >
                  {addedIds.includes(item.id) ? <Check size={16} /> : <Plus size={16} />}
                </button>
              )}
            </div>
            {idx < items.length - 1 && <span className="text-indigo-400 font-black text-lg hidden md:block">+</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
