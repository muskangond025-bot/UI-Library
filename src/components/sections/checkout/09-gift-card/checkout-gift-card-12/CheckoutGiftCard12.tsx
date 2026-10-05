import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard12({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">REDEMPTION FLOW</span>
        <h3 className="text-xl font-bold text-white">Gift Card Progression</h3>
      </div>

      <div className="relative pl-8 space-y-6">
        <svg className="absolute left-3 top-2 bottom-2 w-0.5 h-[80%]" overflow="visible">
          <motion.line 
            x1="0" y1="0" x2="0" y2="100%" 
            stroke="rgb(245, 158, 11)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center">1</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <span className="font-bold text-white">Step 1: Enter Card Credentials</span>
            <p className="text-slate-400">GC-8842-9901 Verified</p>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center">2</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-amber-500/40 text-xs">
            <span className="font-bold text-amber-300">Step 2: Apply $100.00 Balance</span>
            <p className="text-slate-400">Remaining balance: $150.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutGiftCard12;
