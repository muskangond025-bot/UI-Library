import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShoppingBag, PackageCheck, RefreshCw } from 'lucide-react';

export function OrderSuccess1({ data }: { data?: any }) {
  const [key, setKey] = useState(0);

  return (
    <motion.div 
      key={key}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800/80 shadow-2xl font-sans relative overflow-hidden text-center"
    >
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => setKey(k => k + 1)}
          className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-all cursor-pointer active:scale-95"
          title="Replay Entrance Animation"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      <motion.div 
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: [0, 1.2, 1], rotate: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 350, damping: 22 }}
        className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.35)]"
      >
        <PackageCheck className="w-10 h-10 stroke-[2.2]" />
      </motion.div>

      <motion.span 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 inline-block mb-3"
      >
        ORDER CONFIRMED ✓
      </motion.span>

      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3 }}
        className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight"
      >
        Thank You For Your Order!
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4 }}
        className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-8 leading-relaxed"
      >
        We've received your order and sent a receipt to <span className="text-slate-200 font-semibold">muskan@example.com</span>.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-8 text-xs font-mono"
      >
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 block mb-1">ORDER NUMBER</span>
          <span className="text-emerald-400 font-bold text-sm">#DH-28491</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 block mb-1">TOTAL AMOUNT</span>
          <span className="text-white font-bold text-sm">₹4,999</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 block mb-1">ESTIMATED DELIVERY</span>
          <span className="text-teal-400 font-bold text-sm">3–5 Business Days</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer">
          <ShoppingBag className="w-4 h-4" />
          Continue Shopping
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer">
          View Order Status
          <ArrowRight className="w-4 h-4 text-emerald-400" />
        </button>
      </motion.div>
    </motion.div>
  );
}
export default OrderSuccess1;