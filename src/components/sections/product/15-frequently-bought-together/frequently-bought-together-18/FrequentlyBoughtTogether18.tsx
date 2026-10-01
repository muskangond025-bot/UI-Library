import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingBag, Sparkles, ShieldCheck, Tablet, Plus } from 'lucide-react';

export default function FrequentlyBoughtTogether18({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1, 2]); // Folio Case + Stylus selected by default

  const mainProduct = {
    name: "Tablet Pro 11\"",
    price: 999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80",
    desc: "Liquid Retina XDR Display, M2 Chip, 256GB Storage"
  };

  const items = [
    { 
      id: 1, 
      name: "Smart Folio Case", 
      price: 79, 
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80",
      desc: "Magnetic poly-leather protection" 
    },
    { 
      id: 2, 
      name: "Pro Stylus Pencil", 
      price: 129, 
      image: "https://images.unsplash.com/photo-1585336261026-8f5786372969?w=500&auto=format&fit=crop&q=80",
      desc: "Pixel-perfect pressure sensitivity" 
    },
    { 
      id: 3, 
      name: "Armor Screen Protector", 
      price: 39, 
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=80",
      desc: "9H Matte Anti-glare glass" 
    },
    { 
      id: 4, 
      name: "USB-C Fast Adapter", 
      price: 19, 
      image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=80",
      desc: "30W Compact PD Fast Charger" 
    },
    { 
      id: 5, 
      name: "Care Plan 2-Year Warranty", 
      price: 149, 
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=500&auto=format&fit=crop&q=80",
      desc: "Comprehensive accidental damage coverage" 
    },
  ];

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = mainProduct.price + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="h-[680px] rounded-[2.5rem] bg-slate-50 flex overflow-hidden font-sans border border-slate-200/90 shadow-2xl select-none">
      
      {/* Left: Scrollable Main Content */}
      <div id="scroll-container-18" className="w-2/3 h-full overflow-y-auto p-8 md:p-10 hide-scrollbar">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-2">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider">Custom Configurator</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Build your bundle.</h2>
        </div>
        
        {/* Main Base Product Card */}
        <div className="w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col md:flex-row items-center gap-6 mb-8 relative overflow-hidden group">
          <div className="w-full md:w-56 h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
            <img 
              src={mainProduct.image} 
              alt={mainProduct.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 uppercase tracking-wider">
              Base Device
            </span>
            <h3 className="font-extrabold text-2xl text-slate-900 mt-1.5">{mainProduct.name}</h3>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">{mainProduct.desc}</p>
            <div className="text-2xl font-black text-slate-900 mt-4">${mainProduct.price.toLocaleString()}</div>
          </div>
        </div>

        {/* Recommended Add-ons Section */}
        <h3 className="text-xl font-bold text-slate-900 mb-4">Recommended Add-ons</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-16">
          {items.map(item => {
            const isSel = selected.includes(item.id);
            return (
              <motion.div 
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`p-4 rounded-2xl cursor-pointer border-2 transition-all duration-300 flex items-center gap-4 ${
                  isSel 
                    ? 'border-blue-600 bg-blue-950 text-white shadow-xl ring-2 ring-blue-500/20' 
                    : 'border-slate-200/90 bg-white text-slate-900 hover:border-blue-300 shadow-sm'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className={`font-bold text-sm truncate ${isSel ? 'text-white' : 'text-slate-900'}`}>{item.name}</h4>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSel ? 'border-blue-400 bg-blue-500 text-white' : 'border-slate-300 bg-slate-100 text-slate-400'
                    }`}>
                      <Check size={12} className={isSel ? 'opacity-100 font-bold' : 'opacity-0'} />
                    </div>
                  </div>
                  <p className={`text-[11px] truncate mt-0.5 ${isSel ? 'text-blue-200' : 'text-slate-500'}`}>{item.desc}</p>
                  <div className={`font-extrabold text-sm mt-1.5 ${isSel ? 'text-blue-400' : 'text-slate-900'}`}>
                    +${item.price}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right: Sticky Sidebar Order Summary */}
      <div className="w-1/3 h-full bg-white border-l border-slate-200/90 relative shadow-xl">
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-6 pb-3 border-b border-slate-100">Order Summary</h3>
            
            <div className="flex flex-col gap-3.5 max-h-[380px] overflow-y-auto pr-1 hide-scrollbar">
              {/* Base Item */}
              <div className="flex justify-between text-sm font-semibold text-slate-900 pb-2 border-b border-slate-100">
                <span>{mainProduct.name}</span>
                <span>${mainProduct.price.toLocaleString()}</span>
              </div>
              
              {/* Selected Add-ons */}
              <motion.div layout className="flex flex-col gap-3">
                {items.filter(i => selected.includes(i.id)).map(item => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 15 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: 15 }}
                    className="flex justify-between text-xs font-semibold text-blue-600 bg-blue-50/80 p-2.5 rounded-xl border border-blue-100"
                  >
                    <span className="truncate mr-2">✓ {item.name}</span>
                    <span className="shrink-0">+${item.price}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <div className="flex justify-between items-baseline mb-4">
              <span className="font-semibold text-slate-500 text-xs uppercase tracking-wider">Total Package</span>
              <motion.span key={total} className="text-3xl font-black text-slate-900">${total.toLocaleString()}</motion.span>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              <ShoppingBag size={18} /> Buy Configured Bundle
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
