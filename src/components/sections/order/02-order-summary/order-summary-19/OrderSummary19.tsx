import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-serif">
      <span className="text-xs font-sans font-bold text-emerald-400 uppercase tracking-widest block mb-2">EDITORIAL SUMMARY</span>
      <h2 className="text-3xl sm:text-5xl font-normal italic text-white mb-4">Selected Items</h2>
      <p className="font-sans text-xs text-stone-400 max-w-md">1x Leather Jacket • Grand Total: <strong className="text-white font-mono">₹8,999</strong></p>
    </div>
  );
}
export default OrderSummary19;