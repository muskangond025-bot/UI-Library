import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function OrderSuccess16({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div 
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 flex flex-col justify-center"
      >
        <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-2" />
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-1">SUCCESS</span>
        <h3 className="text-2xl font-bold text-white">Order Confirmed!</h3>
        <p className="text-xs text-slate-400 mt-2">Thank you for your purchase.</p>
      </motion.div>

      <motion.div 
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-xs font-mono flex flex-col justify-center space-y-2"
      >
        <div><span className="text-slate-500">REF:</span> <strong className="text-emerald-400">#DH-28491</strong></div>
        <div><span className="text-slate-500">TOTAL:</span> <strong className="text-white">₹4,999</strong></div>
        <div><span className="text-slate-500">DELIVERY:</span> <strong className="text-teal-400">Oct 12–15</strong></div>
      </motion.div>
    </div>
  );
}
export default OrderSuccess16;