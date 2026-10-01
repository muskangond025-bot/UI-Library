import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductBundles4({ data }: { data?: any }) {
  const [sel, setSel] = useState<number[]>([1, 2]);

  const main = { name: "Smart Security Hub 4K", price: 299, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80" };
  const items = [
    { id: 1, name: "Wireless Doorbell Cam", price: 119, image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "Outdoor Floodlight Cam", price: 159, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80" }
  ];

  const total = main.price + items.filter(i => sel.includes(i.id)).reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Modular Smart Security
        </span>
        <h2 className="text-3xl font-extrabold">Build Security Protection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl z-10 my-4">
        <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-3xl p-4 text-center">
          <img src={main.image} alt={main.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">{main.name}</h3>
          <span className="text-sm font-black text-emerald-400">${main.price}</span>
        </div>

        {items.map(item => {
          const isSel = sel.includes(item.id);
          return (
            <div 
              key={item.id}
              onClick={() => setSel(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
              className={`bg-slate-900 border rounded-3xl p-4 text-center cursor-pointer transition-all ${isSel ? 'border-emerald-500 shadow-lg' : 'border-white/10 opacity-75'}`}
            >
              <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
              <h3 className="font-bold text-xs">{item.name}</h3>
              <span className="text-sm font-black text-emerald-400">+${item.price}</span>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-3xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Total Protection Kit</span>
          <span className="text-2xl font-black text-emerald-400">${total}</span>
        </div>
        <button className="px-6 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add Bundle
        </button>
      </div>
    </div>
  );
}
