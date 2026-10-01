import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Plus, ShoppingBag, Sparkles, Gamepad2, Headphones, BatteryCharging, X } from 'lucide-react';

export default function FrequentlyBoughtTogether13({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number[]>([1]); // Controller by default

  const mainProduct = { 
    name: "NextGen Gaming Console Pro", 
    price: 499, 
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80",
    desc: "4K 120Hz Ultra HD Console with 1TB Custom NVMe SSD"
  };

  const items = [
    { 
      id: 1, 
      name: "Wireless Elite Controller", 
      price: 149, 
      image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&auto=format&fit=crop&q=80",
      icon: <Gamepad2 className="w-5 h-5 text-emerald-400" />
    },
    { 
      id: 2, 
      name: "7.1 Surround Pro Headset", 
      price: 99, 
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=80",
      icon: <Headphones className="w-5 h-5 text-indigo-400" />
    },
    { 
      id: 3, 
      name: "Dual Rapid Charging Dock", 
      price: 49, 
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
      icon: <BatteryCharging className="w-5 h-5 text-cyan-400" />
    },
  ];

  const total = mainProduct.price + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-6 md:p-10 min-h-[720px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 max-w-xl mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Sparkles size={14} className="text-emerald-400" />
          <span className="text-emerald-300 font-semibold text-xs tracking-wider uppercase">Portal Reveal Bundle</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Gaming System Ecosystem</h2>
        <p className="text-slate-400 text-sm mt-1">Unlock modular accessories by opening the interactive bundle portal.</p>
      </div>

      {/* Center Interactive Portal Area */}
      <div className="relative w-full max-w-4xl h-[420px] my-6 flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Background Revealed Accessories (Open Portal Content) */}
        <div className="absolute inset-0 bg-slate-900/90 p-6 flex flex-col items-center justify-center z-0">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              Select Ecosystem Add-ons
            </span>
          </div>

          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
            {items.map(item => {
              const isSel = selected.includes(item.id);
              return (
                <motion.div 
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between backdrop-blur-xl ${
                    isSel 
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                      isSel ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500 border border-white/10'
                    }`}>
                      {isSel ? <Check size={12} className="font-extrabold" /> : <Plus size={12} />}
                    </div>
                  </div>

                  <div className="h-28 rounded-xl overflow-hidden bg-slate-950 border border-white/10 my-2">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                    <span className="text-sm font-extrabold text-emerald-400 mt-0.5 block">+${item.price}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sliding Left Door */}
        <motion.div 
          className="absolute inset-y-0 left-0 w-1/2 bg-slate-900 border-r border-white/10 flex flex-col justify-center items-end pr-8 z-10 shadow-2xl backdrop-blur-3xl"
          animate={{ x: isOpen ? '-100%' : '0%' }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <div className="text-right max-w-xs pr-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">Base Console</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">GAMING</h3>
            <p className="text-xs text-slate-400 mt-2 line-clamp-2">{mainProduct.desc}</p>
          </div>
        </motion.div>

        {/* Sliding Right Door */}
        <motion.div 
          className="absolute inset-y-0 right-0 w-1/2 bg-slate-900 border-l border-white/10 flex flex-col justify-center items-start pl-8 z-10 shadow-2xl backdrop-blur-3xl"
          animate={{ x: isOpen ? '100%' : '0%' }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <div className="text-left max-w-xs pl-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Flagship Unit</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">SYSTEM</h3>
            <div className="text-2xl font-extrabold text-emerald-400 mt-2">${mainProduct.price}</div>
          </div>
        </motion.div>

        {/* Center Portal Toggle Trigger (NO OVERLAPPING ON TEXT!) */}
        <AnimatePresence>
          {!isOpen && (
            <motion.button 
              className="absolute z-20 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all transform hover:scale-105"
              onClick={() => setIsOpen(true)}
              exit={{ scale: 0, opacity: 0 }}
              initial={{ scale: 0.9, opacity: 1 }}
              animate={{ scale: 1 }}
            >
              <span>Explore Add-ons</span>
              <ChevronRight size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Portal Close Control when Open */}
        {isOpen && (
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-20 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-full border border-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        )}

      </div>

      {/* Bottom Summary Bar */}
      <div className="w-full max-w-4xl z-10 bg-slate-900/90 border border-white/10 p-5 rounded-3xl backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <div>
          <div className="text-xs text-slate-400 font-medium">Console + Selected Add-ons Total ({1 + selected.length} Items)</div>
          <div className="text-3xl font-extrabold text-white flex items-baseline gap-2">
            <span className="text-emerald-400">${total}</span>
            {selected.length > 0 && (
              <span className="text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                Ecosystem Discount Active
              </span>
            )}
          </div>
        </div>

        <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
          <ShoppingBag size={18} /> Buy Ecosystem Bundle (${total})
        </button>
      </div>

    </div>
  );
}
