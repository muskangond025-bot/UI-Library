import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Flame, ArrowRight } from 'lucide-react';

export function DeliveryOptions16({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Ground', price: 'Free', icon: Truck },
    { id: 'express', name: 'Priority Express', price: '$14.99', icon: Zap },
    { id: 'sameday', name: 'Same Day Dispatch', price: '$24.99', icon: Flame },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Icon-Led Shipping Speed Selector
        </h2>

        <div className="space-y-4">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selected === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className="flex items-center gap-4 cursor-pointer"
              >
                <motion.div
                  animate={isSelected ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition ${
                    isSelected ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <div className={`flex-1 p-4 rounded-xl border flex items-center justify-between transition ${
                  isSelected ? 'bg-slate-950 border-indigo-500 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
                }`}>
                  <span className="text-xs font-semibold">{opt.name}</span>
                  <span className="text-xs font-bold text-indigo-400">{opt.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions16;