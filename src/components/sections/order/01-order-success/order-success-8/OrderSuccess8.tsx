import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';

export function OrderSuccess8({ data }: { data?: any }) {
  return (
    <motion.div 
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="w-full max-w-md mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-mono shadow-2xl relative"
    >
      <div className="text-center pb-4 border-b border-dashed border-stone-700 mb-4">
        <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
        <h4 className="text-base font-bold text-white uppercase">OFFICIAL RECEIPT</h4>
        <span className="text-[10px] text-stone-400 block">ORDER #DH-28491</span>
      </div>
      <div className="space-y-2 text-xs mb-6 text-stone-300">
        <div className="flex justify-between"><span>Items Subtotal:</span><span>₹4,499</span></div>
        <div className="flex justify-between"><span>Tax & Shipping:</span><span>₹500</span></div>
        <div className="flex justify-between font-bold text-white pt-2 border-t border-stone-800">
          <span>TOTAL PAID:</span><span className="text-emerald-400">₹4,999</span>
        </div>
      </div>
      <div className="text-center">
        <button className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-emerald-400 border border-stone-700 inline-flex items-center gap-2 cursor-pointer">
          <Download className="w-3.5 h-3.5" /> Download PDF Receipt
        </button>
      </div>
    </motion.div>
  );
}
export default OrderSuccess8;