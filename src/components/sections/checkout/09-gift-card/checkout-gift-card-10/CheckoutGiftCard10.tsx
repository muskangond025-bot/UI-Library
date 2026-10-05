import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">DIGITAL TICKET VOUCHER</span>
      <h3 className="text-xl font-bold text-white mb-6">Gift Voucher Pass</h3>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border border-amber-500/40 flex justify-between items-center"
      >
        <div className="text-left">
          <span className="text-[10px] font-mono text-amber-300 block">VOUCHER #GC-8842</span>
          <h4 className="text-2xl font-extrabold text-white font-mono">$250.00</h4>
        </div>
        <button className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl">
          Apply to Order
        </button>
      </motion.div>
    </div>
  );
}
export default CheckoutGiftCard10;
