import React from 'react';
import { motion } from 'framer-motion';
import { PackageCheck } from 'lucide-react';

export function OrderSuccess9({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans flex flex-col sm:flex-row items-center gap-6">
      <motion.div 
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: [0.6, 1.1, 1], opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="w-36 h-36 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-xl"
      >
        <PackageCheck className="w-16 h-16 stroke-[2.2]" />
      </motion.div>
      <div className="text-center sm:text-left">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">ORDER CONFIRMED</span>
        <h3 className="text-2xl font-extrabold text-white mb-2">Order #DH-28491</h3>
        <p className="text-xs text-slate-300 mb-4">Your items have been reserved and are preparing for shipment. Total: <span className="text-white font-bold">₹4,999</span>.</p>
        <button className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer">
          Track Package
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess9;