import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon14({ data }: { data?: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-2xl font-sans"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest block mb-1">FLOATING PROMO PANEL</span>
          <h3 className="text-xl font-bold text-white">Elevated Coupon Box</h3>
        </div>
        <Tag className="w-6 h-6 text-indigo-400" />
      </div>

      <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 block">Active Code</span>
          <span className="font-mono text-base font-bold text-white">SPRING2026</span>
        </div>
        <span className="text-xs font-bold text-emerald-400">-$100.00 APPLIED</span>
      </div>
    </motion.div>
  );
}
export default CheckoutDiscountCoupon14;
