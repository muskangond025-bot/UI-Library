import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FrequentlyBoughtTogether8({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([1]); // Main item

  const items = [
    { id: 1, name: "Desk Mat", price: 30, type: 'main' },
    { id: 2, name: "Mouse", price: 80, type: 'acc' },
    { id: 3, name: "Keyboard", price: 150, type: 'acc' },
    { id: 4, name: "Wrist Rest", price: 20, type: 'acc' },
  ];

  const total = items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    if (id === 1) return;
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative font-mono text-white">
      
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold tracking-[0.3em] uppercase text-neutral-400">Minimal Matrix</h2>
      </div>

      <div className="grid grid-cols-2 gap-8 relative z-10">
        {/* Connection Plus lines in center - decorative */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-px h-full bg-neutral-800" />
          <div className="w-full h-px bg-neutral-800 absolute" />
        </div>

        {items.map((item) => {
          const isSel = selected.includes(item.id);
          const isMain = item.type === 'main';

          return (
            <motion.div 
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`w-40 h-40 border ${isSel ? 'border-emerald-500 bg-emerald-900/20' : 'border-neutral-800 bg-neutral-900/50'} flex flex-col items-center justify-center cursor-pointer transition-colors relative group`}
              whileHover={{ scale: isMain ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <div className={`text-3xl mb-2 ${isSel ? 'text-emerald-400' : 'text-neutral-600'}`}>
                 {isMain ? '⬛' : '⬜'}
               </div>
               <div className={`text-xs uppercase tracking-widest ${isSel ? 'text-emerald-300' : 'text-neutral-500'}`}>{item.name}</div>
               <div className={`text-sm font-bold mt-1 ${isSel ? 'text-white' : 'text-neutral-600'}`}>${item.price}</div>
               
               {!isSel && !isMain && (
                 <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                   <span className="bg-emerald-500 text-black font-bold px-3 py-1 text-xs">ADD +</span>
                 </div>
               )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 flex items-center gap-6 bg-neutral-900 px-8 py-4 rounded-full border border-neutral-800">
        <div className="text-neutral-500 uppercase tracking-widest text-sm">Bundle Total</div>
        <div className="text-3xl font-black text-emerald-400">${total}</div>
        <button className="ml-4 bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-400 transition-colors">Buy</button>
      </div>

    </div>
  );
}
