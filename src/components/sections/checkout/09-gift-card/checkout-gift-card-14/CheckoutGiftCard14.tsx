import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard14({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center bg-slate-800/60 hover:bg-slate-800 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Gift className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-bold text-white">Have a Gift Card to redeem?</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-6 border-t border-slate-800 space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              <input type="text" defaultValue="GC-8842-9901" className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase" />
              <input type="password" defaultValue="4829" className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white" />
            </div>
            <button className="w-full py-2.5 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs">Apply Gift Card</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutGiftCard14;
