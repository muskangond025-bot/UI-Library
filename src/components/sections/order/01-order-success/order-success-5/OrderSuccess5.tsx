import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

export function OrderSuccess5({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-widest block mb-2">
        ORDER #DH-28491 CONFIRMED
      </span>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="my-6 p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 shadow-inner"
      >
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">EXPECTED ARRIVAL WINDOW</span>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
          OCT 12–15
        </h2>
        <span className="text-xs text-slate-400 mt-2 block flex items-center justify-center gap-1.5">
          <Truck className="w-4 h-4 text-emerald-400 animate-bounce" /> Express Air Courier Shipment
        </span>
      </motion.div>

      <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
        We've dispatched tracking info to <strong className="text-white">muskan@example.com</strong>. Total: <span className="text-emerald-400 font-mono font-bold">₹4,999</span>.
      </p>

      <div className="flex gap-3 justify-center">
        <button className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess5;