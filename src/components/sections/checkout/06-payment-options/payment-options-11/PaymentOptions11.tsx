import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function PaymentOptions11({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');
  const items = ['card', 'upi', 'netbanking', 'wallet'];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold block mb-2">
          11 — HORIZONTAL PILL BAR
        </span>
        <h2 className="text-2xl font-bold text-white mb-8">Select Payment Channel</h2>

        <div className="flex gap-2 p-1.5 bg-slate-950 border border-slate-800 rounded-full mb-8 relative">
          {items.map((item) => {
            const isSel = selected === item;
            return (
              <button
                key={item}
                onClick={() => setSelected(item)}
                className={`relative flex-1 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isSel ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isSel && (
                  <motion.div layoutId="pillBar" className="absolute inset-0 bg-sky-400 rounded-full" />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions11;
