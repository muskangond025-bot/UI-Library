import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ShoppingBag, Sparkles, Terminal, Laptop, Monitor, Keyboard, Cpu } from 'lucide-react';

export default function FrequentlyBoughtTogether14({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1, 2]); // Laptop + 4K Monitor by default

  const items = [
    { 
      id: 1, 
      name: "Developer Laptop M3 Max", 
      price: 1999, 
      type: "Core Workstation",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80",
      desc: "36GB Unified Memory, 1TB High-Speed SSD",
      icon: <Laptop className="w-5 h-5 text-emerald-400" />
    },
    { 
      id: 2, 
      name: "32-inch 4K Studio Display", 
      price: 699, 
      type: "Display",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=80",
      desc: "IPS Retina Color-Accurate 144Hz Panel",
      icon: <Monitor className="w-5 h-5 text-cyan-400" />
    },
    { 
      id: 3, 
      name: "Custom Wireless Mechanical Keyboard", 
      price: 159, 
      type: "Input",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
      desc: "Tactile Brown Switches with Aluminum Frame",
      icon: <Keyboard className="w-5 h-5 text-purple-400" />
    },
    { 
      id: 4, 
      name: "Thunderbolt 4 Pro Dock Station", 
      price: 249, 
      type: "Connectivity",
      image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=80",
      desc: "96W Power Delivery with Dual 4K Ports",
      icon: <Cpu className="w-5 h-5 text-amber-400" />
    },
  ];

  const toggle = (id: number) => {
    if (id === 1) return; // Core item locked
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = items
    .filter(i => selected.includes(i.id))
    .reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[720px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Background Lighting */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="w-full max-w-4xl text-center z-10 mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Terminal size={14} className="text-emerald-400" />
          <span className="text-emerald-300 font-semibold text-xs tracking-wider uppercase">Pro Developer Setup</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Compiled Workstation Kit</h2>
        <p className="text-slate-400 text-sm mt-1">Simple, high-performance hardware curation for modern creators.</p>
      </div>

      {/* Clean Horizontal Checklist Cards */}
      <div className="w-full max-w-4xl flex flex-col gap-3.5 my-6 z-10">
        {items.map((item) => {
          const isSel = selected.includes(item.id);
          const isMain = item.id === 1;

          return (
            <motion.div
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 backdrop-blur-xl cursor-pointer ${
                isSel
                  ? 'bg-slate-900/90 border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.12)]'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08] opacity-60'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Checkbox */}
              <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all shrink-0 ${
                isSel ? 'bg-emerald-500 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-500 border border-white/10'
              }`}>
                <Check size={14} className={isSel ? 'opacity-100 font-extrabold' : 'opacity-0'} />
              </div>

              {/* Real Thumbnail */}
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border border-white/10 shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Description */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white truncate">{item.name}</h4>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 ${
                    isMain 
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                      : 'bg-white/10 text-slate-300 border-white/10'
                  }`}>
                    {isMain ? 'Core Laptop' : item.type}
                  </span>
                </div>
                <p className="text-xs text-slate-400 truncate mt-0.5">{item.desc}</p>
              </div>

              {/* Price */}
              <div className="text-right shrink-0">
                <span className={`text-lg font-extrabold ${isSel ? 'text-white' : 'text-slate-400'}`}>
                  ${item.price.toLocaleString()}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Simple & Premium Bottom Bar */}
      <div className="w-full max-w-4xl z-10 bg-slate-900/90 border border-white/10 p-5 rounded-3xl backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <div>
          <div className="text-xs text-slate-400 font-medium">Workstation Bundle Total ({selected.length} Hardware Units)</div>
          <div className="text-3xl font-extrabold text-white flex items-baseline gap-2">
            <span className="text-emerald-400">${total.toLocaleString()}</span>
            {selected.length > 1 && (
              <span className="text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                Bundle Savings Included
              </span>
            )}
          </div>
        </div>

        <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
          <ShoppingBag size={18} /> Buy Workstation Kit (${total.toLocaleString()})
        </button>
      </div>

    </div>
  );
}
