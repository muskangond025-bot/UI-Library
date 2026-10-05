import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard16({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <h3 className="text-lg font-bold text-white mb-6 text-center">Icon-Guided Gift Card Entry</h3>

      <div className="space-y-4">
        <div className="relative">
          <Gift className="absolute left-3 top-3 w-4 h-4 text-amber-400" />
          <input type="text" defaultValue="GC-8842-9901" className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase" />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-4 h-4 text-amber-400" />
          <input type="password" defaultValue="4829" className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white" />
        </div>
        <button className="w-full py-3 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl">Apply Gift Balance</button>
      </div>
    </div>
  );
}
export default CheckoutGiftCard16;
