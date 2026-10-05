import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary14({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 relative group">
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600/30 to-teal-500/20 blur-xl pointer-events-none" 
      />
      <div className="w-full p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl relative font-sans text-center">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">LUXURY ORDER SELECTION</span>
        <h3 className="text-2xl font-bold text-white mb-4">Total Amount: ₹6,999</h3>
        <p className="text-xs text-slate-400 font-mono">Includes Tax & Express Insured Courier</p>
      </div>
    </div>
  );
}
export default OrderSummary14;