import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon12({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="mb-6">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">PROMOTIONAL TIMELINE</span>
        <h3 className="text-xl font-bold text-white">Discount Progression</h3>
      </div>

      <div className="relative pl-8 space-y-6">
        <svg className="absolute left-3 top-2 bottom-2 w-0.5 h-[80%]" overflow="visible">
          <motion.line 
            x1="0" y1="0" x2="0" y2="100%" 
            stroke="rgb(6, 182, 212)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-cyan-500 text-black font-bold text-xs flex items-center justify-center">1</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <span className="font-bold text-white">Tier 1: Free Shipping</span>
            <p className="text-slate-400">Unlocked automatically on orders over $100</p>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-cyan-500 text-black font-bold text-xs flex items-center justify-center">2</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-cyan-500/40 text-xs">
            <span className="font-bold text-cyan-300">Tier 2: Code SPRING2026 ($100 OFF)</span>
            <p className="text-slate-400">Active promo code applied to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon12;
