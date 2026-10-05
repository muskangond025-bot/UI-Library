import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary12({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-widest block mb-2">TOTAL SAVINGS APPLIED</span>
      <h2 className="text-3xl font-black text-teal-300 font-mono mb-4">YOU SAVE ₹1,200</h2>
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1.5 text-left text-slate-300">
        <div className="flex justify-between"><span>Original Total:</span><span className="line-through text-slate-500">₹5,199</span></div>
        <div className="flex justify-between text-emerald-400 font-bold"><span>Final Checkout Total:</span><span>₹3,999</span></div>
      </div>
    </div>
  );
}
export default OrderSummary12;