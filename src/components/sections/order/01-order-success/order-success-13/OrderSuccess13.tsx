import React from 'react';
import { motion } from 'framer-motion';

export function OrderSuccess13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 text-center font-mono shadow-2xl">
      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">SUCCESSFULLY REGISTERED</span>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: [0.7, 1.1, 1] }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight my-2"
      >
        #DH-28491
      </motion.h1>
      <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2">Order Confirmed • Total ₹4,999 • Delivery Oct 12–15</p>
    </div>
  );
}
export default OrderSuccess13;