import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-black text-white rounded-2xl border border-zinc-800 font-mono text-center relative">
      <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="h-0.5 bg-emerald-400 mx-auto mb-6" />
      <h3 className="text-xl font-extrabold mb-4">ORDER SUMMARY</h3>
      <div className="text-xs text-zinc-300 space-y-1 mb-6 text-left max-w-xs mx-auto border-l-2 border-emerald-400 pl-4">
        <p>SUBTOTAL: ₹4,999</p>
        <p>SHIPPING: FREE</p>
        <p>TOTAL: ₹4,999</p>
      </div>
      <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.3 }} className="h-0.5 bg-zinc-800 mx-auto" />
    </div>
  );
}
export default OrderSummary18;