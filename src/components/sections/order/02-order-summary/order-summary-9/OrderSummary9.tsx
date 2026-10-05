import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary9({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-lg mx-auto my-6 p-5 bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 font-sans text-xs">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-3 font-bold">
        <span>SUMMARY (2 ITEMS)</span>
        <span className="font-mono text-emerald-400">₹2,999</span>
      </div>
      <div className="space-y-1.5 text-slate-400 font-mono">
        <div className="flex justify-between"><span>Items Total:</span><span>₹3,499</span></div>
        <div className="flex justify-between text-emerald-400"><span>Discount:</span><span>-₹500</span></div>
      </div>
    </div>
  );
}
export default OrderSummary9;