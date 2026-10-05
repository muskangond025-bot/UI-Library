import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard6({ data }: { data?: any }) {
  const [applied, setApplied] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-5 p-8 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-slate-950 rounded-3xl border border-amber-400/50 flex flex-col justify-between shadow-2xl"
      >
        <div>
          <Gift className="w-8 h-8 mb-4 text-slate-950" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest block mb-1">STORED GIFT CARD</span>
          <h3 className="text-2xl font-extrabold font-mono text-slate-950">$250.00 VALUE</h3>
        </div>
        <div className="pt-6 border-t border-amber-900/30 font-mono text-xs font-bold text-slate-900">
          CODE: GC-8842-9901
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-7 p-8 bg-slate-900 rounded-3xl border border-slate-800 text-slate-100 flex flex-col justify-between shadow-2xl"
      >
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Enter Gift Credentials</h3>
          <div className="space-y-3">
            <input 
              type="text" 
              defaultValue="GC-8842-9901" 
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs font-mono text-white focus:outline-none uppercase"
            />
            <input 
              type="password" 
              defaultValue="4829" 
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs font-mono text-white focus:outline-none"
            />
            <button 
              onClick={() => setApplied(!applied)}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-2xl transition-colors shadow-lg shadow-amber-500/20"
            >
              {applied ? 'Applied ✓' : 'Apply Gift Card Balance'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default CheckoutGiftCard6;
