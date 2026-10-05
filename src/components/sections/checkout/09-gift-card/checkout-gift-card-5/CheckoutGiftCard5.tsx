import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard5({ data }: { data?: any }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">GIFT ENVELOPE CONCEPT</span>
      <h3 className="text-xl font-bold text-white mb-6">Digital Gift Envelope</h3>

      <div 
        onClick={() => setOpened(!opened)}
        className="cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 border border-amber-500/40 shadow-xl relative overflow-hidden transition-all"
      >
        <motion.div 
          animate={{ rotateX: opened ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex justify-center text-amber-400"
        >
          <Gift className="w-12 h-12" />
        </motion.div>

        {!opened ? (
          <p className="text-xs text-amber-300 font-bold">Tap envelope to open gift card</p>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <span className="text-xs font-mono text-amber-400 font-bold">CARD CODE: GC-8842-9901</span>
            <h4 className="text-xl font-extrabold text-white font-mono">$250.00 GIFT BALANCE</h4>
            <button className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs mt-2">
              Apply to Order ✓
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
export default CheckoutGiftCard5;
