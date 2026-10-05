import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight } from 'lucide-react';

export function OrderContinueShopping8() {
  return (
    <section className="w-full bg-gradient-to-b from-stone-950 via-zinc-950 to-black text-amber-50 py-12 px-4 sm:px-6 rounded-2xl border border-amber-900/30 my-4 relative overflow-hidden shadow-2xl">
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
          <Crown className="w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest">VIP MEMBER ACCESS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-white">Private Shopping Lounge</h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto">As a valued customer, explore early access to unreleased studio drops.</p>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs transition-colors shadow-lg inline-flex items-center gap-2"
        >
          Enter Private Lounge <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
export default OrderContinueShopping8;
