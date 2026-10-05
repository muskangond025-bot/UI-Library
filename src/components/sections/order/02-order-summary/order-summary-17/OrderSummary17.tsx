import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary17({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-center font-mono text-xs">
      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-6">PRICE CALCULATION FLOW</span>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">Items: ₹5,000</div>
        <span className="text-emerald-400 font-bold">→</span>
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-emerald-400">Discount: -₹1,000</div>
        <span className="text-emerald-400 font-bold">→</span>
        <div className="p-3 bg-emerald-950 rounded-xl border border-emerald-500/40 text-emerald-300 font-bold">TOTAL: ₹4,000</div>
      </div>
    </div>
  );
}
export default OrderSummary17;