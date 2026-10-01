import React, { useState } from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductBundles6({ data }: { data?: any }) {
  const [selected, setSelected] = useState([1, 2]);

  const main = { name: "RGB Mechanical Keyboard", price: 149, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80" };
  const items = [
    { id: 1, name: "Wireless Gaming Mouse", price: 79, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "XXL Desk Pad", price: 35, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80" }
  ];

  const total = main.price + items.filter(i => selected.includes(i.id)).reduce((acc, c) => acc + c.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase font-bold rounded-full mb-2 inline-block">
          Cyber Matrix Bundle
        </span>
        <h2 className="text-3xl font-extrabold text-white">Pro Cyber Battlestation Pack</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl z-10 my-4">
        <div className="bg-slate-900 border border-emerald-500/50 rounded-3xl p-4 text-center shadow-[0_0_25px_rgba(16,185,129,0.15)]">
          <img src={main.image} alt={main.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">{main.name}</h3>
          <span className="text-sm font-black text-emerald-400">${main.price}</span>
        </div>

        {items.map(i => {
          const isSel = selected.includes(i.id);
          return (
            <div 
              key={i.id}
              onClick={() => setSelected(prev => prev.includes(i.id) ? prev.filter(x => x !== i.id) : [...prev, i.id])}
              className={`bg-slate-900 border rounded-3xl p-4 text-center cursor-pointer transition-all ${isSel ? 'border-emerald-500 shadow-md' : 'border-white/10 opacity-70'}`}
            >
              <img src={i.image} alt={i.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
              <h3 className="font-bold text-xs">{i.name}</h3>
              <span className="text-sm font-black text-emerald-400">+${i.price}</span>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-3xl bg-slate-900 border border-emerald-500/30 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block font-mono">Deploy Battlestation</span>
          <span className="text-2xl font-black text-emerald-400 font-mono">${total}</span>
        </div>
        <button className="px-6 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Deploy Bundle
        </button>
      </div>
    </div>
  );
}
