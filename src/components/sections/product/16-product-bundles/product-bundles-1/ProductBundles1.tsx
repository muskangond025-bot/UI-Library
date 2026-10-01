import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ShoppingBag, ShieldCheck, Truck, Star } from 'lucide-react';

export default function ProductBundles1({ data }: { data?: any }) {
  const mainProduct = {
    name: "4K Vlogging Mirrorless Camera",
    price: 799,
    originalPrice: 949,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
  };

  const addOns = [
    { id: 1, name: "Shotgun Vlog Microphone", price: 129, originalPrice: 159, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "Bi-Color LED Ring Light", price: 89, originalPrice: 109, image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=80" },
    { id: 3, name: "Flexi-Leg Heavy Duty Tripod", price: 49, originalPrice: 69, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80" }
  ];

  const [selected, setSelected] = useState<number[]>([1, 2]);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const selectedItems = addOns.filter(i => selected.includes(i.id));
  const total = mainProduct.price + selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const totalOriginal = mainProduct.originalPrice + selectedItems.reduce((acc, curr) => acc + curr.originalPrice, 0);
  const savings = totalOriginal - total;

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[170px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles size={14} /> Glassmorphism Studio Kit
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">Vlogging Master Bundle</h2>
        <p className="text-slate-400 text-xs md:text-sm mt-1">Select items below to build your bundle and save up to <span className="text-blue-400 font-bold">${savings}</span>.</p>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl z-10 my-6">
        
        {/* Core Product */}
        <div className="bg-slate-900/90 border-2 border-blue-500/60 rounded-3xl p-4 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex flex-col justify-between relative">
          <span className="absolute top-3 left-3 bg-blue-500 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-lg z-10">
            Core Unit
          </span>
          <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-950 mb-3">
            <img src={mainProduct.image} alt={mainProduct.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-white line-clamp-1">{mainProduct.name}</h3>
            <div className="flex items-baseline gap-2 mt-2 pt-2 border-t border-white/10">
              <span className="text-lg font-black text-white">${mainProduct.price}</span>
              <span className="text-xs text-slate-500 line-through">${mainProduct.originalPrice}</span>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        {addOns.map((item) => {
          const isSel = selected.includes(item.id);
          return (
            <motion.div 
              key={item.id}
              onClick={() => toggle(item.id)}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-4 cursor-pointer border flex flex-col justify-between relative transition-all ${
                isSel ? 'bg-slate-900/90 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-slate-900/40 border-white/10 opacity-75'
              }`}
            >
              <div className="absolute top-3 right-3 z-10">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-blue-500 text-slate-950' : 'bg-slate-800'}`}>
                  <Check size={14} className="stroke-[3]" />
                </div>
              </div>

              <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-950 mb-3">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-white line-clamp-1">{item.name}</h3>
                <div className="flex items-baseline gap-2 mt-2 pt-2 border-t border-white/10">
                  <span className="text-lg font-black text-white">+${item.price}</span>
                  <span className="text-xs text-slate-500 line-through">${item.originalPrice}</span>
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>

      {/* Summary Footer */}
      <div className="w-full max-w-5xl bg-slate-900/90 border border-white/10 p-4 md:p-5 rounded-3xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <ShoppingBag size={20} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">Bundle Total ({selected.length + 1} Items)</h4>
            <p className="text-xs text-slate-400">Total Savings: <strong className="text-emerald-400">${savings}</strong></p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-2xl font-black text-blue-400">${total}</span>
            <span className="text-xs text-slate-500 line-through block">${totalOriginal}</span>
          </div>

          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-extrabold rounded-2xl text-xs flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Add Bundle to Cart
          </button>
        </div>
      </div>

    </div>
  );
}
