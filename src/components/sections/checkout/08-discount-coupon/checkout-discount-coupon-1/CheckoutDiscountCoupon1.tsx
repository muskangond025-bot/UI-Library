import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon1({ data }: { data?: any }) {
  const [code, setCode] = useState('SPRING2026');
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Tag className="w-4 h-4 text-indigo-400" /> Apply Discount Code
        </h3>
        <span className="text-xs text-slate-400">Have a promo code?</span>
      </div>

      <div className="relative flex items-center mb-4">
        <input 
          type="text" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          placeholder="Enter Coupon Code"
          className="w-full pl-4 pr-28 py-3 bg-slate-800/80 border border-slate-700 rounded-2xl text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors uppercase"
        />
        <button 
          onClick={() => setApplied(!applied)} 
          className="absolute right-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors"
        >
          {applied ? 'Applied' : 'Apply'}
        </button>
      </div>

      <AnimatePresence>
        {applied && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2 text-indigo-300 font-medium">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Code <strong className="font-mono text-white">SPRING2026</strong> applied successfully!</span>
            </div>
            <span className="font-bold text-emerald-400">-$100.00 SAVED</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutDiscountCoupon1;
