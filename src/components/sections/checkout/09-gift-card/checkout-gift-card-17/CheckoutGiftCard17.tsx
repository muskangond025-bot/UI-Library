import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard17({ data }: { data?: any }) {
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      {applied ? (
        <div>
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
            <Check className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">GIFT CARD ACTIVE</span>
          <h3 className="text-2xl font-extrabold font-mono text-white mb-2">GC-••••-8842</h3>
          <p className="text-xs text-slate-400 mb-6">Applied $100.00 • Remaining Balance: <strong className="text-amber-400">$150.00</strong></p>
          <button onClick={() => setApplied(false)} className="text-xs text-rose-400 font-bold hover:underline">Remove Gift Card</button>
        </div>
      ) : (
        <button onClick={() => setApplied(true)} className="px-6 py-2.5 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold">Re-Apply Gift Card</button>
      )}
    </div>
  );
}
export default CheckoutGiftCard17;
