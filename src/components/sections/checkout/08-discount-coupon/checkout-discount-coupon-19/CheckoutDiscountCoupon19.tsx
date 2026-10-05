import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 sm:p-12 bg-neutral-900 text-neutral-100 rounded-3xl border border-neutral-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 border-b border-neutral-800 pb-4"
      >
        <span className="text-xs font-sans text-amber-500 uppercase tracking-widest font-bold block mb-1">EDITORIAL OFFERS</span>
        <h2 className="text-3xl font-normal italic text-white">Unlock Your Savings</h2>
      </motion.div>

      <div className="flex gap-4 items-center">
        <input 
          type="text" 
          defaultValue="SPRING2026" 
          className="flex-1 p-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs font-mono text-white uppercase"
        />
        <button className="px-6 py-3 bg-amber-500 text-black font-sans font-bold text-xs rounded-xl">Apply</button>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon19;
