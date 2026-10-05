import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans perspective-1000">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">3D PERSPECTIVE GIFT CARD</span>
        <h3 className="text-xl font-bold text-white">Digital Pass</h3>
      </div>

      <motion.div 
        whileHover={{ rotateX: -6, rotateY: 5, scale: 1.02 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 border border-amber-400/40 shadow-2xl flex items-center justify-between cursor-pointer text-slate-950"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div>
          <span className="text-xs font-mono font-bold block mb-1">STORE VOUCHER</span>
          <h4 className="text-2xl font-extrabold font-mono">$250.00 BALANCE</h4>
        </div>
        <span className="px-4 py-2 bg-slate-950 text-amber-400 rounded-xl text-xs font-bold">Apply</span>
      </motion.div>
    </div>
  );
}
export default CheckoutGiftCard18;
