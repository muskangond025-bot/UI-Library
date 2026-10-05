import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Gift className="w-5 h-5 text-amber-400" /> Gift Card Payment Deduction
        </h3>
      </div>

      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs mb-4">
        <div className="flex justify-between text-slate-400">
          <span>Order Total</span>
          <span className="font-mono text-white">$883.32</span>
        </div>
        <div className="flex justify-between text-amber-400 font-bold">
          <span>Applied Gift Card (GC-8842)</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-white font-bold pt-2 border-t border-slate-800 text-sm">
          <span>Remaining Payment Due</span>
          <span className="font-mono text-amber-300">$783.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutGiftCard13;
