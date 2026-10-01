import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ShoppingBag, Star, Sparkles, Check } from 'lucide-react';

export default function ProductBundles10({ data }: { data?: any }) {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState([1]);

  const images = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512790182412-b19e6d61b39a?w=800&auto=format&fit=crop&q=80"
  ];

  const main = { name: "Cinematic 8K Camera Body", price: 1899 };
  const addOns = [
    { id: 1, name: "50mm Prime Portrait Lens", price: 349, image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "Heavy Duty Carbon Tripod", price: 189, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80" }
  ];

  const total = main.price + addOns.filter(a => selected.includes(a.id)).reduce((acc, c) => acc + c.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[680px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          10. 360° PERSPECTIVE ROTATION SUITE
        </span>
        <h2 className="text-3xl font-black text-white">Interactive Camera Ecosystem</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl z-10 my-4 items-center">
        {/* 360 Viewer */}
        <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-5 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative">
          <div className="flex justify-between items-center mb-2 text-xs font-bold text-cyan-400">
            <span className="flex items-center gap-1"><RotateCw size={14} className="animate-spin" /> 360° Camera View</span>
            <span>${main.price}</span>
          </div>

          <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-3 relative">
            <img src={images[rotation]} alt="Camera 360" className="w-full h-full object-cover" />
          </div>

          <div className="bg-slate-950 p-2 rounded-xl border border-white/5">
            <input 
              type="range" 
              min="0" 
              max="2" 
              value={rotation} 
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>
        </div>

        {/* Addon Selector */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-300">Select Accessories to Bundle:</h3>
          {addOns.map(item => {
            const isSel = selected.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setSelected(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
                className={`p-3.5 rounded-2xl cursor-pointer border flex items-center justify-between transition-all ${
                  isSel ? 'bg-slate-900 border-cyan-500 shadow-md' : 'bg-slate-900/40 border-white/10 opacity-70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800'}`}>
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-xl" />
                  <span className="text-xs font-bold">{item.name}</span>
                </div>
                <span className="text-sm font-black text-cyan-400">+${item.price}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-4xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Total 360° Bundle</span>
          <span className="text-2xl font-black text-cyan-400">${total}</span>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Reserve 360 Bundle
        </button>
      </div>

    </div>
  );
}
