import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary16({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-lg mx-auto my-6 [perspective:1000px]">
      <motion.div 
        initial={{ rotateX: 20, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, type: 'spring' }}
        whileHover={{ rotateY: 4, scale: 1.02 }}
        className="p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl text-center cursor-pointer font-sans"
      >
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">PERSPECTIVE CARD</span>
        <h3 className="text-2xl font-bold text-white mb-1">Order Summary</h3>
        <p className="text-xs font-mono text-slate-400">Total Payable: <strong className="text-emerald-400">₹5,999</strong></p>
      </motion.div>
    </div>
  );
}
export default OrderSummary16;