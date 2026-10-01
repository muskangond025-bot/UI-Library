import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ShoppingBag, Sparkles, Grid } from 'lucide-react';

export default function FrequentlyBoughtTogether8({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1, 2]); // default Desk Mat + Mouse

  const items = [
    { 
      id: 1, 
      name: "Minimalist Leather Desk Mat", 
      price: 35, 
      type: 'main',
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80",
      desc: "Water-resistant vegan leather 900x400mm" 
    },
    { 
      id: 2, 
      name: "Ergonomic Precision Wireless Mouse", 
      price: 85, 
      type: 'acc',
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80",
      desc: "Silent clicks with dual optical sensors" 
    },
    { 
      id: 3, 
      name: "Custom Mechanical RGB Keyboard", 
      price: 150, 
      type: 'acc',
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
      desc: "Hot-swappable tactile switches" 
    },
    { 
      id: 4, 
      name: "Ergonomic Memory Foam Wrist Rest", 
      price: 25, 
      type: 'acc',
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&auto=format&fit=crop&q=80",
      desc: "Cooling gel padding with anti-slip base" 
    },
  ];

  const total = items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    if (id === 1) return; // Main item locked
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-6 md:p-10 min-h-[720px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810d_1px,transparent_1px),linear-gradient(to_bottom,#10b9810d_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 max-w-lg mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Grid size={14} className="text-emerald-400" />
          <span className="text-emerald-300 font-semibold text-xs tracking-wider uppercase">Desk Setup Bundle</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Minimal Matrix Kit</h2>
        <p className="text-slate-400 text-sm mt-1">Select modular accessories to build your ideal productivity matrix.</p>
      </div>

      {/* Product Grid Matrix */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-8 z-10">
        {items.map((item) => {
          const isSel = selected.includes(item.id);
          const isMain = item.type === 'main';

          return (
            <motion.div 
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`relative rounded-3xl p-4 border transition-all duration-300 flex flex-col justify-between cursor-pointer backdrop-blur-xl group overflow-hidden ${
                isSel 
                  ? 'bg-emerald-950/20 border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/40' 
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
              }`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Top Tag & Selection Badge */}
              <div className="flex items-center justify-between z-10 mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                  isMain 
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
                    : 'bg-white/10 border-white/10 text-slate-300'
                }`}>
                  {isMain ? 'Core Unit' : `+$${item.price}`}
                </span>

                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all shadow-md ${
                  isSel ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500 border border-white/10'
                }`}>
                  {isSel ? <Check size={13} className="font-extrabold" /> : <Plus size={13} />}
                </div>
              </div>

              {/* Real Product Image Container */}
              <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 my-2 group-hover:shadow-lg transition-all">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Product Info */}
              <div className="mt-2 z-10">
                <h4 className={`text-sm font-bold truncate ${isSel ? 'text-white' : 'text-slate-200'}`}>
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">{item.desc}</p>
                <div className="text-base font-extrabold text-white mt-2 flex items-baseline justify-between">
                  <span>${item.price}</span>
                  {!isMain && (
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase">
                      {isSel ? 'Selected' : 'Tap to Add'}
                    </span>
                  )}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="w-full max-w-4xl z-10 bg-slate-900/90 border border-white/10 p-5 rounded-3xl backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Sparkles size={22} />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Matrix Bundle Total ({selected.length} Products)</div>
            <div className="text-3xl font-extrabold text-white flex items-baseline gap-2">
              <span className="text-emerald-400">${total}</span>
              {selected.length > 1 && (
                <span className="text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  Bundle Price Applied
                </span>
              )}
            </div>
          </div>
        </div>

        <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
          <ShoppingBag size={18} /> Buy Matrix Bundle
        </button>
      </div>

    </div>
  );
}
