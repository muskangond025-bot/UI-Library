import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 sm:p-12 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 border-b border-stone-800 pb-4"
      >
        <span className="text-xs font-sans text-amber-500 uppercase tracking-widest font-bold block mb-1">EXCLUSIVE GIFT</span>
        <h2 className="text-3xl font-normal italic text-white">Redeem Your Gift</h2>
      </motion.div>

      <div className="flex gap-4 items-center">
        <input type="text" defaultValue="GC-8842-9901" className="flex-1 p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs font-mono text-white uppercase" />
        <button className="px-6 py-3 bg-amber-500 text-stone-950 font-sans font-bold text-xs rounded-xl">Redeem</button>
      </div>
    </div>
  );
}
export default CheckoutGiftCard19;
