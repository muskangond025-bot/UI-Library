import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon5({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">HERO SAVINGS DISPLAY</span>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-6xl font-extrabold font-mono text-emerald-400 tracking-tight my-4"
      >
        YOU SAVE $100.00
      </motion.div>

      <p className="text-xs text-slate-400 mb-6 max-w-md mx-auto">
        Your current cart qualifies for our spring promotional discount code. Enter code below to confirm savings.
      </p>

      <div className="flex items-center gap-3 max-w-md mx-auto">
        <input 
          type="text" 
          defaultValue="SPRING2026" 
          className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-sm font-mono text-white focus:outline-none focus:border-emerald-500 uppercase"
        />
        <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold transition-colors">
          Redeem
        </button>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon5;
