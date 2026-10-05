import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShieldCheck, PhoneCall } from 'lucide-react';

export function OrderCustomerSupport8() {
  return (
    <section className="w-full bg-gradient-to-b from-stone-950 via-zinc-950 to-black text-amber-50 py-12 px-4 sm:px-6 rounded-2xl border border-amber-900/30 my-4 relative overflow-hidden shadow-2xl">
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-900/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">VIP CONCIERGE</span>
              <h3 className="text-2xl font-serif tracking-wide text-white">Dedicated Private Support</h3>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-200 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            ORDER #849202
          </span>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="bg-stone-900/60 backdrop-blur border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono text-amber-400 uppercase">YOUR PERSONAL SPECIALIST</span>
            <h4 className="text-xl font-serif text-white">Elena Rostova</h4>
            <p className="text-xs text-stone-400">Directly managing your order dispatch & white-glove delivery.</p>
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs transition-colors shadow-lg flex items-center gap-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4" /> Connect Directly
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport8;
