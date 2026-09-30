import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether2({ data }: { data: any }) {
  const [spin, setSpin] = useState(0);

  const main = { name: "Gaming Console", price: 499 };
  const accessories = [
    [{ name: "Extra Controller", price: 69 }, { name: "Pro Controller", price: 129 }, { name: "Racing Wheel", price: 199 }],
    [{ name: "1TB Storage", price: 89 }, { name: "2TB Storage", price: 149 }, { name: "Cloud Subs", price: 59 }],
    [{ name: "Headset", price: 99 }, { name: "Pro Headset", price: 199 }, { name: "Earbuds", price: 79 }]
  ];

  const currentAcc = accessories.map(slot => slot[spin % slot.length]);
  const total = main.price + currentAcc.reduce((sum, a) => sum + a.price, 0);

  const handleSpin = () => {
    setSpin(s => s + 1);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">Bundle Machine</h2>
        <p className="text-neutral-500 font-bold mt-2 text-sm uppercase">Spin for new combo ideas</p>
      </div>

      <div className="flex gap-4 mb-12 perspective-[1000px]">
        {/* Main Item Fixed Slot */}
        <div className="w-32 h-40 bg-neutral-900 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-neutral-900">
          <span className="text-xs text-neutral-400 font-bold uppercase mb-2">Main</span>
          <span className="font-black text-white">{main.name}</span>
          <span className="text-emerald-400 font-bold mt-2">${main.price}</span>
        </div>

        {/* Spinner Slots */}
        {accessories.map((slot, i) => (
          <div key={i} className="w-32 h-40 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white relative overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={spin}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4"
              >
                <span className="text-xs text-neutral-400 font-bold uppercase mb-2">Add-on {i+1}</span>
                <span className="font-black text-neutral-900">{slot[spin % slot.length].name}</span>
                <span className="text-emerald-600 font-bold mt-2">+${slot[spin % slot.length].price}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <div className="text-neutral-400 font-bold uppercase tracking-widest text-xs mb-1">Total Bundle Price</div>
          <div className="text-5xl font-black text-neutral-900">${total}</div>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={handleSpin}
            className="px-8 py-4 bg-neutral-200 hover:bg-neutral-300 text-neutral-900 rounded-full font-black uppercase tracking-widest text-sm transition-colors"
          >
            Spin Combo
          </button>
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-black uppercase tracking-widest text-sm transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            Add Bundle
          </button>
        </div>
      </div>
    </div>
  );
}
