import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export function OrderSummary4({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
      <motion.div 
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="w-32 h-32 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0"
      >
        <Package className="w-14 h-14 stroke-[2]" />
      </motion.div>
      <div className="text-center sm:text-left flex-1 font-sans">
        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest block mb-1">FEATURED ITEM SUMMARY</span>
        <h3 className="text-xl font-bold text-white">Smart Fitness Watch Pro</h3>
        <p className="text-xs text-slate-400 my-1">Midnight Black • Silicone Strap • Qty: 1</p>
        <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
          <span className="text-slate-400">Total Order Cost:</span>
          <span className="text-emerald-400 font-bold text-sm">₹5,499</span>
        </div>
      </div>
    </div>
  );
}
export default OrderSummary4;