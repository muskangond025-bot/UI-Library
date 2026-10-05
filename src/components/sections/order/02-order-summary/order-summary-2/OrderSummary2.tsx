import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary2({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-stone-950 text-stone-100 rounded-3xl border border-stone-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="mb-8 border-b border-stone-800 pb-4"
      >
        <span className="text-xs font-sans text-emerald-400 uppercase tracking-widest font-bold block mb-1">SELECTED CART</span>
        <h2 className="text-3xl sm:text-5xl font-normal italic text-white">Order Breakdown</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs mb-6">
        <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800">
          <span className="text-[10px] text-stone-400 font-mono block mb-2">ITEMIZED LIST</span>
          <p className="font-bold text-white text-sm">Monochrome Wool Blazer (x1)</p>
          <p className="text-stone-400 mt-1">₹6,499</p>
        </div>
        <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800">
          <span className="text-[10px] text-stone-400 font-mono block mb-2">PRICE CALCULATION</span>
          <p className="text-stone-300">Subtotal: ₹6,499</p>
          <p className="text-emerald-400 font-bold mt-1">Final Total: ₹6,499</p>
        </div>
      </div>
    </div>
  );
}
export default OrderSummary2;