import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowRight } from 'lucide-react';

export function OrderSuccess2({ data }: { data?: any }) {
  const [animKey, setAnimKey] = useState(0);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center relative">
      <button 
        onClick={() => setAnimKey(k => k + 1)}
        className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-emerald-400 hover:bg-slate-700 border border-slate-700 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>Re-Tick</span>
      </button>

      <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
        <motion.div 
          key={"aura-" + animKey}
          initial={{ scale: 0.8, opacity: 0.9 }}
          animate={{ scale: [0.8, 1.3, 1.1], opacity: [0.9, 0, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          className="absolute inset-0 rounded-full bg-emerald-500/30 border border-emerald-400/40 pointer-events-none"
        />

        <svg className="w-28 h-28 overflow-visible" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" className="text-slate-800" strokeWidth="6" stroke="currentColor" fill="none" />
          <motion.circle 
            key={"circle-" + animKey}
            cx="50" cy="50" r="44" 
            className="text-emerald-400" 
            strokeWidth="6" 
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))' }}
          />
          <motion.path 
            key={"check-" + animKey}
            d="M30 52 L44 66 L70 36" 
            className="text-emerald-400" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            stroke="currentColor" 
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
            style={{ filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.8))' }}
          />
        </svg>
      </div>

      <span className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-widest block mb-1">
        PAYMENT SUCCESSFUL
      </span>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Order Confirmed!</h3>
      
      <p className="text-xs text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
        Your order <strong className="text-emerald-400 font-mono">#DH-28491</strong> for <strong className="text-white">₹4,999</strong> is placed. Estimated delivery: <span className="text-teal-300 font-medium">Oct 12–15</span>.
      </p>

      <div className="flex gap-3 justify-center">
        <button className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer">
          Track Package
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-700 transition-all cursor-pointer">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess2;