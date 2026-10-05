import React from 'react';
import { motion } from 'framer-motion';

export function OrderSuccess18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-serif">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="text-xs font-sans text-emerald-400 font-bold uppercase tracking-widest block mb-2"
      >
        VOLUME 2026 // ISSUE #DH-28491
      </motion.span>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-5xl font-normal italic text-white mb-4"
      >
        Your Order Is Complete.
      </motion.h2>
      <p className="font-sans text-xs text-stone-400 max-w-md">Total Paid ₹4,999. Email sent to muskan@example.com.</p>
    </div>
  );
}
export default OrderSuccess18;