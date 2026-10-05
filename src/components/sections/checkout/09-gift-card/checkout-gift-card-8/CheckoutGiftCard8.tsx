import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard8({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-amber-500/30 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">LUXURY STORE CARD</span>
          <h3 className="text-xl font-bold text-white">Digital Gift Balance</h3>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full">
          Active Stored Value
        </span>
      </div>

      <motion.div 
        whileHover={{ boxShadow: '0 0 25px rgba(245, 158, 11, 0.2)' }}
        className="p-6 rounded-2xl bg-neutral-900 border border-amber-500/40 flex justify-between items-center"
      >
        <div>
          <span className="text-xs font-mono text-amber-400 block mb-1">CARD #GC-8842-9901</span>
          <h4 className="text-2xl font-extrabold text-white font-mono">$250.00 STORE BALANCE</h4>
        </div>
        <button className="px-5 py-2.5 bg-amber-500 text-slate-950 font-extrabold text-xs rounded-xl hover:bg-amber-400 transition-colors">
          Apply $100.00
        </button>
      </motion.div>
    </div>
  );
}
export default CheckoutGiftCard8;
