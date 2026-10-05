import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-6 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 font-mono shadow-2xl">
      <div className="text-center pb-4 border-b border-dashed border-stone-700 mb-4">
        <h4 className="text-sm font-bold text-amber-400">RECEIPT SAVINGS SUMMARY</h4>
      </div>

      <div className="space-y-2 text-xs text-stone-300 mb-4">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span>$904.00</span>
        </div>

        {/* Animated Discount Row Insertion */}
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="flex justify-between text-emerald-400 font-bold"
        >
          <span>DISCOUNT (SPRING2026)</span>
          <span>-$100.00</span>
        </motion.div>

        <div className="flex justify-between">
          <span>SHIPPING</span>
          <span>$15.00</span>
        </div>
      </div>

      <div className="p-3 bg-stone-950 rounded-xl border border-amber-500/30 flex justify-between items-center text-sm font-bold text-white">
        <span>TOTAL SAVINGS</span>
        <span className="text-amber-400">$100.00</span>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon13;
