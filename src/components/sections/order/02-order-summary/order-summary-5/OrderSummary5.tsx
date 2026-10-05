import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary5({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-center font-sans shadow-2xl">
      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">TOTAL AMOUNT PAYABLE</span>
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono mb-2"
      >
        ₹3,499
      </motion.h2>
      <span className="text-xs font-mono text-teal-300 font-bold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block mb-6">
        YOU SAVE ₹800 TODAY
      </span>
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-left space-y-1.5 text-slate-300">
        <div className="flex justify-between"><span>Base Price:</span><span>₹4,299</span></div>
        <div className="flex justify-between text-emerald-400"><span>Instant Savings:</span><span>-₹800</span></div>
        <div className="flex justify-between"><span>Delivery:</span><span>FREE</span></div>
      </div>
    </div>
  );
}
export default OrderSummary5;