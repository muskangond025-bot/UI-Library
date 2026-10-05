import React from 'react';
import { motion } from 'framer-motion';

export function OrderSuccess15({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-center relative overflow-hidden">
      <div className="relative w-36 h-36 mx-auto mb-4 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" className="text-slate-850" strokeWidth="6" stroke="currentColor" fill="none" />
          <motion.circle 
            cx="50" cy="50" r="42" 
            className="text-emerald-400" 
            strokeWidth="6" 
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white">✓</span>
          <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold">CONFIRMED</span>
        </div>
      </div>
      <h4 className="text-lg font-bold text-white mb-1">Order #DH-28491</h4>
      <p className="text-xs text-slate-400">₹4,999 • Arriving Oct 12–15</p>
    </div>
  );
}
export default OrderSuccess15;