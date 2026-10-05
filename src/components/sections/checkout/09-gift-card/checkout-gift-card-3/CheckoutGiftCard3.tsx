import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard3({ data }: { data?: any }) {
  const [applied, setApplied] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-400" /> Redeem Gift Voucher
        </h3>
        <span className="text-xs text-slate-400">Code + Security PIN</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-4">
        <input 
          type="text" 
          defaultValue="GC-8842-9901" 
          className="sm:col-span-6 px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs font-mono text-white focus:outline-none focus:border-amber-500 uppercase"
        />
        <input 
          type="password" 
          defaultValue="4829" 
          className="sm:col-span-3 px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs font-mono text-white focus:outline-none focus:border-amber-500"
        />
        <button 
          onClick={() => setApplied(!applied)}
          className="sm:col-span-3 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-2xl transition-colors"
        >
          {applied ? 'Applied' : 'Redeem'}
        </button>
      </div>

      <AnimatePresence>
        {applied && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex justify-between items-center text-xs text-emerald-300"
          >
            <span>✓ Gift Card balance $100.00 applied to current checkout</span>
            <button onClick={() => setApplied(false)} className="text-slate-400 hover:text-white underline">Remove</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutGiftCard3;
