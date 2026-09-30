import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function FrequentlyBoughtTogether9({ data }: { data: any }) {
  const [steps, setSteps] = useState([true, false, false]);

  const items = [
    { name: "Coffee Machine", price: 299 },
    { name: "1 Year Filters", price: 49 },
    { name: "Care Plan", price: 29 }
  ];

  const total = items.reduce((sum, item, i) => sum + (steps[i] ? item.price : 0), 0);
  const discount = steps.every(Boolean) ? 30 : 0; // $30 off if all selected

  const toggle = (index: number) => {
    if (index === 0) return;
    const newSteps = [...steps];
    newSteps[index] = !newSteps[index];
    setSteps(newSteps);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-rose-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-rose-950 uppercase tracking-widest">Timeline Combo</h2>
        <p className="text-rose-600 font-bold mt-2 text-xs tracking-widest uppercase">Complete the timeline for a discount</p>
      </div>

      <div className="flex w-full max-w-3xl justify-between relative mb-16 px-8">
        {/* Progress Line */}
        <div className="absolute top-6 left-16 right-16 h-2 bg-rose-200 rounded-full z-0">
          <motion.div 
            className="h-full bg-rose-500 rounded-full"
            animate={{ width: `${(steps.filter(Boolean).length - 1) * 50}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>

        {items.map((item, i) => {
          const active = steps[i];
          return (
            <div key={i} className="relative z-10 flex flex-col items-center cursor-pointer" onClick={() => toggle(i)}>
              <motion.div 
                className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-colors ${active ? 'bg-rose-500 border-rose-200 text-white' : 'bg-white border-rose-200 text-rose-300'}`}
                whileHover={{ scale: i === 0 ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {active ? <Check strokeWidth={3} /> : <span className="font-black">{i+1}</span>}
              </motion.div>
              <div className="mt-4 text-center">
                <div className={`font-bold uppercase tracking-widest text-xs ${active ? 'text-rose-900' : 'text-rose-400'}`}>{item.name}</div>
                <div className={`font-black text-lg ${active ? 'text-rose-600' : 'text-rose-300'}`}>+${item.price}</div>
              </div>
            </div>
          );
        })}
      </div>

      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl border border-rose-100 flex items-center justify-between w-full max-w-lg"
        layout
      >
        <div className="flex flex-col">
          <span className="text-rose-400 font-bold uppercase tracking-widest text-xs">Final Price</span>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-black text-rose-950">${total - discount}</span>
            {discount > 0 && <span className="text-rose-500 font-bold line-through mb-1">${total}</span>}
          </div>
          {discount > 0 && <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest mt-1">Bundle Discount Applied!</span>}
        </div>

        <button className="w-16 h-16 bg-rose-950 rounded-2xl flex items-center justify-center text-white hover:bg-rose-800 transition-colors shadow-lg">
          <ArrowRight size={24} />
        </button>
      </motion.div>
    </div>
  );
}
