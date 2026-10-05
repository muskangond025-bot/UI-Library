import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard20({ data }: { data?: any }) {
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-amber-500/30 shadow-2xl backdrop-blur-2xl relative overflow-hidden font-sans">
      <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 rounded-full blur-3xl absolute -top-12 -right-12 w-64 h-64 pointer-events-none" />

      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6 relative">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">VIP STORED VALUE</span>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Award Digital Gift Suite
          </h2>
        </div>
        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold rounded-full">
          Verified $250.00
        </span>
      </div>

      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative">
        <div>
          <span className="text-xs font-mono text-amber-400 block mb-1">CARD #GC-8842-9901</span>
          <h3 className="text-2xl font-extrabold font-mono text-white">$250.00 AVAILABLE</h3>
          <p className="text-xs text-slate-400">Applies $100.00 • $150.00 Remaining</p>
        </div>
        <button 
          onClick={() => setApplied(!applied)}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-2xl font-bold text-xs transition-all shadow-lg shadow-amber-500/20"
        >
          {applied ? 'Applied ✓' : 'Apply Balance'}
        </button>
      </div>
    </div>
  );
}
export default CheckoutGiftCard20;
