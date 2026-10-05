import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export function OrderSuccess6({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 relative group">
      <motion.div 
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600/30 to-teal-600/20 blur-xl pointer-events-none" 
      />
      <motion.div 
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="w-full p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl relative font-sans text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest block mb-1">
          PURCHASE VERIFIED ✓
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">Order Successfully Placed</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
          Order #DH-28491 (₹4,999) has been authorized. Email sent to muskan@example.com.
        </p>
        <div className="pt-4 border-t border-slate-800 flex justify-center gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer">
            View Order Summary
          </button>
        </div>
      </motion.div>
    </div>
  );
}
export default OrderSuccess6;