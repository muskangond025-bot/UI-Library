import React, { useState } from 'react';
import { ShoppingBag, Star, Check } from 'lucide-react';

export default function ProductBundles7({ data }: { data?: any }) {
  const [selected, setSelected] = useState([1]);
  const main = { name: "Classic Vintage Camera", price: 159, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80" };
  const items = [
    { id: 1, name: "Leather Strap & Case Kit", price: 45, image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "Analog Film 3-Pack", price: 29, image: "https://images.unsplash.com/photo-1512790182412-b19e6d61b39a?w=500&auto=format&fit=crop&q=80" }
  ];

  const total = main.price + items.filter(i => selected.includes(i.id)).reduce((acc, c) => acc + c.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Retro Camera Kit
        </span>
        <h2 className="text-3xl font-extrabold text-white">Classic Film Bundle</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl z-10 my-4">
        <div className="bg-slate-900 border border-rose-500/40 rounded-3xl p-4 text-center">
          <img src={main.image} alt={main.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">{main.name}</h3>
          <span className="text-sm font-black text-rose-400">${main.price}</span>
        </div>

        {items.map(i => {
          const isSel = selected.includes(i.id);
          return (
            <div 
              key={i.id}
              onClick={() => setSelected(prev => prev.includes(i.id) ? prev.filter(x => x !== i.id) : [...prev, i.id])}
              className={`bg-slate-900 border rounded-3xl p-4 text-center cursor-pointer transition-all ${isSel ? 'border-rose-500 shadow-md' : 'border-white/10 opacity-70'}`}
            >
              <img src={i.image} alt={i.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
              <h3 className="font-bold text-xs">{i.name}</h3>
              <span className="text-sm font-black text-rose-400">+${i.price}</span>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-3xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Retro Film Package</span>
          <span className="text-2xl font-black text-rose-400">${total}</span>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Buy Retro Bundle
        </button>
      </div>
    </div>
  );
}
