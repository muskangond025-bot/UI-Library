import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary15({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-sans text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
          <span className="font-mono text-emerald-400 font-bold block mb-1">SELECTED PRODUCT</span>
          <p className="font-bold text-white text-sm">Designer Sunglasses</p>
          <span className="text-slate-400">Qty: 1</span>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.15 }} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-mono flex flex-col justify-center">
          <span className="text-slate-400">PAYABLE AMOUNT</span>
          <span className="text-xl font-bold text-emerald-400">₹3,299</span>
        </motion.div>
      </div>
    </div>
  );
}
export default OrderSummary15;