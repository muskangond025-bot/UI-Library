import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FrequentlyBoughtTogether3({ data }: { data: any }) {
  const [inCart, setInCart] = useState<number[]>([]);

  const products = [
    { id: 1, name: "Lens Filter", price: 49 },
    { id: 2, name: "Battery Pack", price: 89 },
    { id: 3, name: "Camera Strap", price: 29 }
  ];

  const handleDragEnd = (e: any, info: any, id: number) => {
    if (info.offset.y > 100) {
      if (!inCart.includes(id)) setInCart([...inCart, id]);
    }
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-indigo-950 flex flex-col items-center justify-between relative overflow-hidden">
      
      <div className="text-center mt-8">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest">Physics Cart</h2>
        <p className="text-indigo-300 font-bold mt-2 text-xs tracking-widest uppercase">Drag items down to the tray</p>
      </div>

      {/* Floating Items */}
      <div className="flex gap-8 z-10 w-full justify-center">
        {products.map((p, i) => {
          const isAdded = inCart.includes(p.id);
          return (
            <motion.div
              key={p.id}
              drag={!isAdded}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.5}
              onDragEnd={(e, info) => handleDragEnd(e, info, p.id)}
              className={`w-32 h-32 rounded-2xl flex flex-col items-center justify-center cursor-grab active:cursor-grabbing border-2 border-indigo-500/50 shadow-2xl ${isAdded ? 'opacity-0 pointer-events-none' : 'bg-indigo-900'}`}
              animate={{ 
                y: isAdded ? 200 : [0, -10, 0],
                scale: isAdded ? 0.5 : 1
              }}
              transition={!isAdded ? { y: { repeat: Infinity, duration: 3, delay: i * 0.2, ease: "easeInOut" } } : { type: "spring" }}
            >
              <span className="font-bold text-white text-center text-sm">{p.name}</span>
              <span className="text-indigo-300 font-black mt-2">+${p.price}</span>
            </motion.div>
          );
        })}
      </div>

      {/* 3D Tray */}
      <div className="w-full max-w-lg h-48 bg-indigo-900/50 rounded-[3rem] border-t border-indigo-400 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)] mt-32 relative flex flex-col items-center justify-center p-8">
        <div className="absolute top-4 text-indigo-300/50 font-black uppercase tracking-[0.3em] text-xl">Bundle Tray</div>
        
        <div className="flex gap-4 mt-8">
          {inCart.length === 0 && <div className="text-indigo-400/50 font-bold text-sm uppercase">Empty</div>}
          {inCart.map(id => {
            const p = products.find(x => x.id === id);
            return (
              <motion.div 
                key={id}
                initial={{ scale: 0, y: -50 }}
                animate={{ scale: 1, y: 0 }}
                className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              >
                <span className="font-bold text-white text-[10px] text-center leading-tight">{p?.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
