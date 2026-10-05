import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-mono text-xs relative">
      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-4">ORDER CALCULATION TIMELINE</span>
      <div className="space-y-4 relative pl-6 border-l-2 border-slate-800">
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}>
          <h4 className="font-bold text-white">Itemized Subtotal</h4>
          <p className="text-slate-400">₹4,500</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 0.15 }}>
          <h4 className="font-bold text-emerald-400">Discount Code</h4>
          <p className="text-emerald-400">-₹500</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 0.3 }}>
          <h4 className="font-bold text-white">Final Total Payable</h4>
          <p className="text-lg font-bold text-emerald-400">₹4,000</p>
        </motion.div>
      </div>
    </div>
  );
}
export default OrderSummary13;