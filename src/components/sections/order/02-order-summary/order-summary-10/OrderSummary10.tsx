import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="sm:col-span-2 p-6 bg-slate-900 rounded-3xl border border-slate-800 text-white"
      >
        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-2">PRIMARY ITEM</span>
        <h3 className="text-lg font-bold">Mechanical Wireless Keyboard</h3>
        <p className="text-slate-400 mt-1 font-mono">₹4,200</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.15 }}
        className="p-6 bg-slate-950 rounded-3xl border border-slate-800 font-mono text-slate-300 flex flex-col justify-center"
      >
        <span className="text-[10px] text-slate-500 block mb-1">PAYABLE TOTAL</span>
        <span className="text-2xl font-bold text-emerald-400">₹4,200</span>
      </motion.div>
    </div>
  );
}
export default OrderSummary10;