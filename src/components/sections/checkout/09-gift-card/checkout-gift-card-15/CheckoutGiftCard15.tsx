import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard15({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">PROFILE GIFT VOUCHER</span>
      <h3 className="text-xl font-bold text-white mb-6">Gift Card Credentials</h3>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-slate-400 block mb-1">Cardholder Name</span>
          <span className="font-bold text-white">Alex Morgan</span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">Card Number</span>
          <span className="font-mono font-bold text-amber-300">GC-8842-9901</span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">Available Balance</span>
          <span className="font-mono font-bold text-emerald-400 text-sm">$250.00</span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">Status</span>
          <span className="font-bold text-emerald-400">ACTIVE ✓</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutGiftCard15;
