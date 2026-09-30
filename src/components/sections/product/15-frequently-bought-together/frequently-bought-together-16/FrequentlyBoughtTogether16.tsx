import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether16({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  const items = [
    { id: 1, name: "Noise Cancelling Pods", price: 249, img: "bg-neutral-800" },
    { id: 2, name: "Leather Folio", price: 129, img: "bg-stone-800" },
    { id: 3, name: "Fast Charger", price: 49, img: "bg-zinc-800" },
    { id: 4, name: "Screen Shield", price: 29, img: "bg-slate-800" },
  ];

  const total = 999 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-[600px] rounded-3xl bg-[#f5f5f7] flex flex-col items-center py-16 relative overflow-hidden font-sans">
      
      <div className="text-center mb-16 z-10 w-full px-8 flex justify-between items-end max-w-5xl">
        <div className="text-left">
          <h2 className="text-5xl font-semibold text-[#1d1d1f] tracking-tight">Mix. Match.</h2>
          <h2 className="text-5xl font-semibold text-[#86868b] tracking-tight">Make it yours.</h2>
        </div>
        <div className="text-right">
          <p className="text-[#86868b] text-sm font-medium mb-1">Total Package</p>
          <div className="text-3xl font-semibold text-[#1d1d1f]">$${total}</div>
        </div>
      </div>

      <div className="flex gap-4 w-full max-w-5xl px-8 perspective-[2000px]">
        {items.map((item, i) => {
          const isSel = selected.includes(item.id);
          const isHovered = hovered === item.id;
          
          return (
            <motion.div
              key={item.id}
              onClick={() => toggle(item.id)}
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
              className={`relative flex-1 h-[300px] rounded-3xl cursor-pointer ${item.img} p-6 flex flex-col justify-between overflow-hidden group border-4 transition-colors ${isSel ? 'border-blue-500 shadow-2xl' : 'border-transparent'}`}
              initial={false}
              animate={{ 
                rotateY: hovered !== null && hovered !== item.id ? (i > items.findIndex(x => x.id === hovered) ? -15 : 15) : 0,
                scale: isHovered ? 1.05 : 1,
                z: isHovered ? 50 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 z-0" />
              
              <div className="relative z-10 text-white/50 text-xs font-semibold uppercase tracking-widest">
                Add-on 0{i + 1}
              </div>

              <div className="relative z-10">
                <div className="text-white font-semibold text-xl leading-tight mb-2">{item.name}</div>
                <div className="flex items-center justify-between">
                  <div className="text-white/80 font-medium">+$${item.price}</div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSel ? 'bg-blue-500 border-blue-500' : 'border-white/50 group-hover:border-white'}`}>
                    {isSel && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
