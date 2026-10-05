import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary8({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-md mx-auto my-6 space-y-2 font-sans">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 text-xs flex justify-between items-center shadow-lg"
      >
        <div>
          <h4 className="font-bold">Over-Ear Studio Headphones</h4>
          <span className="text-slate-400">Qty: 1</span>
        </div>
        <span className="font-mono font-bold text-emerald-400">₹7,999</span>
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.15 }}
        className="p-5 bg-slate-950 text-slate-300 rounded-2xl border border-slate-800 text-xs flex justify-between items-center"
      >
        <span>Estimated Taxes & Shipping</span>
        <span className="font-mono font-bold text-white">FREE</span>
      </motion.div>
    </div>
  );
}
export default OrderSummary8;