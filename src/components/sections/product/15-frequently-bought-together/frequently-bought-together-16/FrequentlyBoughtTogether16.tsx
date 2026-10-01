import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ShoppingBag, Sparkles } from 'lucide-react';

export default function FrequentlyBoughtTogether16({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1, 2]); // Pods + Leather Folio selected by default
  const [hovered, setHovered] = useState<number | null>(null);

  const items = [
    { 
      id: 1, 
      name: "Noise Cancelling Pods", 
      price: 249, 
      img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
      desc: "Pro Spatial Audio & ANC"
    },
    { 
      id: 2, 
      name: "Leather Folio Case", 
      price: 129, 
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
      desc: "Handcrafted Italian Leather"
    },
    { 
      id: 3, 
      name: "Fast Charging Dock", 
      price: 49, 
      img: "https://images.unsplash.com/photo-1622445268045-8f85f3a097d7?w=600&auto=format&fit=crop&q=80",
      desc: "30W MagSafe Fast Charge"
    },
    { 
      id: 4, 
      name: "Ultra Glass Shield", 
      price: 29, 
      img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80",
      desc: "9H Armor Scratch Guard"
    },
  ];

  const total = 999 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-[680px] w-full rounded-[2.5rem] bg-[#f5f5f7] flex flex-col items-center py-12 px-6 relative overflow-hidden font-sans border border-slate-200 shadow-xl select-none">
      
      {/* Header */}
      <div className="text-center mb-12 z-10 w-full px-4 flex flex-col md:flex-row justify-between items-center md:items-end max-w-5xl gap-4">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 mb-3 border border-slate-300">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-slate-800 font-semibold text-xs tracking-wider uppercase">Custom Bundle</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1d1d1f] tracking-tight">Mix. Match.</h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#86868b] tracking-tight">Make it yours.</h2>
        </div>

        <div className="text-center md:text-right bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-[#86868b] text-xs font-semibold uppercase tracking-wider mb-0.5">Total Package</p>
          <div className="text-3xl font-extrabold text-[#1d1d1f]">${total.toLocaleString()}</div>
        </div>
      </div>

      {/* Product Cards perspective grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-5xl px-2 perspective-[2000px] z-10">
        {items.map((item, i) => {
          const isSel = selected.includes(item.id);
          const isHovered = hovered === item.id;
          
          return (
            <motion.div
              key={item.id}
              onClick={() => toggle(item.id)}
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
              className={`relative h-[340px] rounded-3xl cursor-pointer p-5 flex flex-col justify-between overflow-hidden group border-2 transition-all backdrop-blur-xl ${
                isSel ? 'border-blue-600 shadow-2xl ring-2 ring-blue-500/30' : 'border-slate-200 shadow-md hover:border-slate-300'
              }`}
              initial={false}
              animate={{ 
                rotateY: hovered !== null && hovered !== item.id ? (i > items.findIndex(x => x.id === hovered) ? -8 : 8) : 0,
                scale: isHovered ? 1.04 : 1,
                y: isHovered ? -6 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Product Background Image */}
              <img 
                src={item.img} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 z-0" 
              />
              
              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-0" />
              
              {/* Top Tag & Selection Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Add-on 0{i + 1}
                </span>

                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all shadow-md ${
                  isSel ? 'bg-blue-600 text-white' : 'bg-black/40 border border-white/40 text-transparent'
                }`}>
                  <Check size={14} className={isSel ? 'opacity-100 font-extrabold' : 'opacity-0'} />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10">
                <p className="text-blue-300 text-[11px] font-medium mb-0.5">{item.desc}</p>
                <div className="text-white font-bold text-lg leading-tight mb-2">{item.name}</div>
                <div className="flex items-center justify-between border-t border-white/20 pt-2">
                  <div className="text-white font-extrabold text-base">+${item.price}</div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    isSel ? 'bg-blue-600 text-white' : 'bg-white/20 text-white'
                  }`}>
                    {isSel ? 'Added' : 'Select'}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-10 z-10 w-full max-w-5xl px-2 flex justify-end">
        <button className="bg-[#1d1d1f] hover:bg-[#333336] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2.5 shadow-xl transition-all transform hover:scale-105">
          <ShoppingBag size={16} /> Buy Complete Package (${total.toLocaleString()})
        </button>
      </div>

    </div>
  );
}
