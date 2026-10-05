import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary6({ data }: { data?: any }) {
  return (
    <motion.div 
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-mono shadow-2xl"
    >
      <div className="text-center pb-4 border-b border-dashed border-stone-700 mb-4">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">PRE-CHECKOUT RECEIPT</h4>
        <span className="text-[10px] text-stone-400">ITEMIZED SUMMARY</span>
      </div>
      <div className="space-y-2 text-xs text-stone-300 mb-6">
        <div className="flex justify-between"><span>1x Leather Backpack</span><span>₹4,999</span></div>
        <div className="flex justify-between"><span>1x Card Holder</span><span>₹999</span></div>
        <div className="flex justify-between text-emerald-400"><span>Discount Code:</span><span>-₹1,000</span></div>
        <div className="flex justify-between font-bold text-white text-sm pt-3 border-t border-stone-800">
          <span>FINAL TOTAL:</span><span className="text-emerald-400">₹4,998</span>
        </div>
      </div>
    </motion.div>
  );
}
export default OrderSummary6;