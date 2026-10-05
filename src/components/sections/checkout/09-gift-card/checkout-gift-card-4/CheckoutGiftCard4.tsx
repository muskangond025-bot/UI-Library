import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard4({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">STORED VALUE DISPLAY</span>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold font-mono text-amber-400 tracking-tight my-4"
      >
        BALANCE: $250.00
      </motion.div>

      <p className="text-xs text-slate-400 mb-6 max-w-md mx-auto">
        Available Gift Card GC-8842-9901 has $250.00 stored value ready to apply.
      </p>

      <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 max-w-md mx-auto flex justify-between items-center">
        <span className="text-xs text-slate-300 font-medium">Apply $100.00 to current order</span>
        <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors">
          Apply Balance
        </button>
      </div>
    </div>
  );
}
export default CheckoutGiftCard4;
