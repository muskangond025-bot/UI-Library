import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function OrderSuccess17({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-lg mx-auto my-6 [perspective:1000px]">
      <motion.div 
        initial={{ rotateX: 30, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, type: 'spring' }}
        whileHover={{ rotateY: 5, scale: 1.02 }}
        className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl text-center cursor-pointer"
      >
        <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">SECURE TRANSACTION</span>
        <h3 className="text-2xl font-bold text-white mb-2">Order #DH-28491</h3>
        <p className="text-xs text-slate-400">₹4,999 • Estimated delivery Oct 12–15</p>
      </motion.div>
    </div>
  );
}
export default OrderSuccess17;