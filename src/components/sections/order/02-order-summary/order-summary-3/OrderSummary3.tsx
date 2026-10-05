import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary3({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800"
      >
        <span className="text-xs font-mono text-emerald-400 uppercase font-bold block mb-3">PRODUCT SELECTION</span>
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <h4 className="font-bold text-white">Wireless Noise-Canceling Headphones</h4>
          <span className="text-emerald-400 font-mono font-bold block mt-1">₹8,999</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 font-mono text-xs flex flex-col justify-between"
      >
        <span className="text-slate-400 block mb-2">FINANCIAL BREAKDOWN</span>
        <div className="space-y-1.5 text-slate-300">
          <div className="flex justify-between"><span>Items Subtotal:</span><span>₹8,999</span></div>
          <div className="flex justify-between text-emerald-400"><span>VIP Discount:</span><span>-₹1,000</span></div>
          <div className="flex justify-between font-bold text-white text-sm pt-2 border-t border-slate-800">
            <span>TOTAL:</span><span className="text-emerald-400">₹7,999</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default OrderSummary3;