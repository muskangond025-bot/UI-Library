import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Feather } from 'lucide-react';

export function OrderSuccess3({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 sm:p-12 bg-stone-950 text-stone-100 rounded-3xl border border-stone-800 font-serif shadow-2xl relative overflow-hidden">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-emerald-500/10 pointer-events-none flex items-center justify-center text-emerald-500/5 text-9xl font-serif"
      >
        ✦
      </motion.div>

      <div className="mb-8 border-b border-stone-800 pb-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Feather className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-sans font-extrabold text-emerald-400 uppercase tracking-widest block">
              TRANSACTION COMPLETE
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal italic text-white tracking-tight leading-none">
            ORDER CONFIRMED
          </h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs mb-8">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="p-5 rounded-2xl bg-stone-900 border border-stone-800"
        >
          <span className="text-[10px] text-stone-500 uppercase font-mono block mb-1">REFERENCE</span>
          <p className="text-base font-bold text-white font-mono">ORDER #DH-28491</p>
          <p className="text-stone-400 mt-1">Receipt emailed to muskan@example.com</p>
        </motion.div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="p-5 rounded-2xl bg-stone-900 border border-stone-800"
        >
          <span className="text-[10px] text-stone-500 uppercase font-mono block mb-1">ESTIMATED DISPATCH</span>
          <p className="text-base font-bold text-emerald-400">OCTOBER 12–15, 2026</p>
          <p className="text-stone-400 mt-1">Total Paid: ₹4,999 via Express Checkout</p>
        </motion.div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-stone-800 font-sans text-xs">
        <span className="text-stone-400">Questions? Contact Concierge 24/7</span>
        <button className="px-5 py-2.5 rounded-xl bg-white text-stone-950 font-bold hover:bg-stone-200 transition-colors flex items-center gap-2 cursor-pointer">
          Continue Shopping <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess3;