import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function OrderSuccess10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 space-y-3 font-sans">
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-emerald-950/90 text-emerald-300 rounded-2xl border border-emerald-500/40 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          <div>
            <h4 className="font-bold text-white text-sm">Order Confirmed!</h4>
            <span className="text-xs text-emerald-300 font-mono">#DH-28491</span>
          </div>
        </div>
        <span className="text-xs font-mono font-bold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">VERIFIED ✓</span>
      </motion.div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="p-6 bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 text-xs flex justify-between items-center"
      >
        <span>Estimated Delivery: <strong className="text-white">Oct 12–15</strong></span>
        <span className="font-mono text-emerald-400 font-bold">Total: ₹4,999</span>
      </motion.div>
    </div>
  );
}
export default OrderSuccess10;