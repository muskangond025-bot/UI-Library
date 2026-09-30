import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function FrequentlyBoughtTogether12({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Mechanical Keyboard", price: 149 },
    { id: 2, name: "Wireless Mouse", price: 79 },
    { id: 3, name: "Desk Mat XXL", price: 39 },
    { id: 4, name: "Monitor Arm", price: 99 },
    { id: 5, name: "Webcam 4K", price: 129 },
  ];

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = 1999 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="min-h-[500px] rounded-3xl bg-[#0a0a0a] flex flex-col justify-center relative overflow-hidden font-sans border border-neutral-800">
      
      <div className="px-12 mb-12 flex justify-between items-end">
        <div>
          <h3 className="text-neutral-500 text-xs font-bold tracking-[0.3em] uppercase mb-2">Enhance your setup</h3>
          <h2 className="text-4xl font-black text-white tracking-tight">Add Accessories</h2>
        </div>
        <div className="text-right">
          <h3 className="text-neutral-500 text-xs font-bold tracking-[0.3em] uppercase mb-2">Total</h3>
          <motion.div key={total} className="text-4xl font-black text-white">$${total}</motion.div>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group py-8">
        
        {/* Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicate array for infinite seamless scroll */}
          {[...items, ...items].map((item, i) => {
            const isSel = selected.includes(item.id);
            return (
              <motion.div 
                key={i}
                onClick={() => toggle(item.id)}
                className={`flex-shrink-0 w-[300px] h-[160px] rounded-2xl p-6 cursor-pointer border flex flex-col justify-between transition-colors ${isSel ? 'bg-white text-black border-white' : 'bg-neutral-900 text-white border-neutral-800 hover:border-neutral-600'}`}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${isSel ? 'border-black' : 'border-neutral-600'}`}>
                    <AnimatePresence>
                      {isSel && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check size={16} /></motion.div>}
                    </AnimatePresence>
                  </div>
                  <div className="text-xl font-black">+$${item.price}</div>
                </div>
                <div className="font-bold text-lg tracking-wide">{item.name}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
