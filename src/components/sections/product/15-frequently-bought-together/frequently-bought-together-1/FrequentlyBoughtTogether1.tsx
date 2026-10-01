import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function FrequentlyBoughtTogether1({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([0]); // Main product selected by default

  const products = [
    { id: 0, name: "Pro Camera Body", price: 1299, type: "main", image: "📸", desc: "Flagship mirrorless camera" },
    { id: 1, name: "50mm Prime Lens", price: 349, type: "accessory", image: "🔍", desc: "f/1.4 portrait master" },
    { id: 2, name: "Pro Tripod", price: 129, type: "accessory", image: "🗼", desc: "Carbon fiber stability" },
    { id: 3, name: "64GB SD Card", price: 49, type: "accessory", image: "💾", desc: "300MB/s ultra fast" }
  ];

  const toggle = (id: number) => {
    if (id === 0) return; // Main product always selected
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = products.filter(p => selected.includes(p.id)).reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="p-8 min-h-[700px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center relative overflow-hidden font-sans border border-white/5">
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="text-center mb-12 z-10 w-full max-w-4xl flex justify-between items-end">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-blue-400 font-medium text-xs tracking-wide uppercase">Curated Bundle</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">Build Your Dream Kit</h2>
          <p className="text-slate-400 text-lg">Select accessories to complete your setup and save.</p>
        </div>
        
        <motion.div 
          className="hidden md:flex flex-col items-end bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-xl"
          layout
        >
          <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Total Value</div>
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={total}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl font-bold text-white flex items-start"
            >
              <span className="text-xl text-blue-400 mt-1 mr-1">$</span>{total}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 z-10">
        
        {/* Main Product */}
        <div className="md:col-span-5 flex flex-col">
          <motion.div 
            className="flex-1 bg-gradient-to-b from-blue-900/40 to-slate-900/80 border border-blue-500/30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)] group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 border border-blue-500/30 backdrop-blur-sm shadow-inner">
              {products[0].image}
            </div>
            <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">Main Item</div>
            <h3 className="text-2xl font-bold text-white mb-2">{products[0].name}</h3>
            <p className="text-slate-400 text-sm mb-6">{products[0].desc}</p>
            <div className="text-3xl font-bold text-white mt-auto pt-4 border-t border-white/10 flex items-center">
              <span className="text-xl text-blue-400 mr-1">$</span>{products[0].price}
            </div>
          </motion.div>
        </div>

        {/* Accessories */}
        <div className="md:col-span-7 flex flex-col gap-4">
          {products.slice(1).map((p, i) => {
            const isSel = selected.includes(p.id);
            return (
              <motion.div
                key={p.id}
                className={`relative overflow-hidden rounded-2xl flex items-center p-4 cursor-pointer transition-all duration-300 border backdrop-blur-md ${
                  isSel 
                    ? 'bg-blue-900/20 border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.15)]' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                }`}
                onClick={() => toggle(p.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Checkbox/Add icon */}
                <div className={`mr-4 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  isSel ? 'bg-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.6)]' : 'bg-slate-800 border border-slate-600 text-transparent'
                }`}>
                  <Check size={14} className={isSel ? 'opacity-100' : 'opacity-0'} />
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center text-2xl mr-4 shadow-inner">
                  {p.image}
                </div>
                
                <div className="flex-1">
                  <h4 className={`font-semibold text-lg ${isSel ? 'text-white' : 'text-slate-200'}`}>{p.name}</h4>
                  <p className="text-slate-500 text-sm">{p.desc}</p>
                </div>
                
                <div className={`text-lg font-bold flex items-center ${isSel ? 'text-blue-400' : 'text-slate-400'}`}>
                  <Plus size={14} className="mr-1 opacity-50" />
                  <span className="text-sm mr-0.5">$</span>{p.price}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <motion.div 
        className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-full flex items-center justify-between w-full max-w-4xl z-10 md:hidden"
        layout
      >
        <div className="px-4">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Bundle Total</div>
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={total}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-bold text-white flex items-center"
            >
              <span className="text-lg text-blue-400 mr-1">$</span>{total}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      
      <div className="mt-8 z-10 w-full max-w-4xl flex justify-end">
        <button className="bg-white text-black hover:bg-slate-200 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-3 transition-all transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
          <ShoppingBag size={18} /> Add {selected.length} Items to Cart
        </button>
      </div>

    </div>
  );
}
