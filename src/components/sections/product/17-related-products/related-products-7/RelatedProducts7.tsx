import React, { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export default function RelatedProducts7({ data }: { data?: any }) {
  const [selectedHero, setSelectedHero] = useState(0);

  const items = [
    { name: "Classic Instant Camera", price: 159, desc: "Analog film lens with flash", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80" },
    { name: "Leather Strap & Case Kit", price: 45, desc: "Handcrafted calfskin leather", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=80" },
    { name: "Analog Film 3-Pack", price: 29, desc: "ISO 400 Color Negative Film", image: "https://images.unsplash.com/photo-1512790182412-b19e6d61b39a?w=500&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Split Hero Inspector
        </span>
        <h2 className="text-3xl font-extrabold text-white">Recommended Retro Gear</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl z-10 my-4 items-center">
        {/* Main Hero Inspector */}
        <div className="bg-slate-900 border border-rose-500/40 rounded-3xl p-5 shadow-2xl">
          <img src={items[selectedHero].image} alt="Hero" className="w-full h-56 object-cover rounded-2xl mb-4" />
          <h3 className="font-extrabold text-xl">{items[selectedHero].name}</h3>
          <p className="text-xs text-slate-400 mt-1 mb-4">{items[selectedHero].desc}</p>
          <div className="flex justify-between items-center pt-3 border-t border-white/10">
            <span className="text-2xl font-black text-rose-400">${items[selectedHero].price}</span>
            <button className="px-5 py-3 bg-rose-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
              <ShoppingBag size={16} /> Add Gear
            </button>
          </div>
        </div>

        {/* Side Selection Rail */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Click to Inspect Related Gear:</h4>
          {items.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedHero(idx)}
              className={`p-3.5 rounded-2xl cursor-pointer border flex items-center gap-3 transition-all ${
                selectedHero === idx ? 'bg-slate-900 border-rose-500 shadow-md' : 'bg-slate-900/40 border-white/10 opacity-70'
              }`}
            >
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-xl shrink-0" />
              <div>
                <h5 className="font-bold text-xs text-white">{item.name}</h5>
                <span className="text-xs font-black text-rose-400">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-slate-500 z-10">Select side items to inspect in main hero view.</div>
    </div>
  );
}
