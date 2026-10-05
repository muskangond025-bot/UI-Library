import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon4({ data }: { data?: any }) {
  const [applied, setApplied] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-6 p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl border border-indigo-800/60 text-white flex flex-col justify-between shadow-2xl"
      >
        <div>
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-2">SPRING SAVINGS EVENT</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Save $100.00 Instantly</h2>
          <p className="text-xs text-indigo-200/80 leading-relaxed">Apply code SPRING2026 at checkout to receive flat $100 discount + free nationwide express shipping.</p>
        </div>
        <div className="pt-6 mt-6 border-t border-indigo-800/50 flex items-center gap-2 text-xs text-indigo-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Limited time promotional offer</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-6 p-8 bg-slate-900 rounded-3xl border border-slate-800 text-slate-100 flex flex-col justify-between shadow-2xl"
      >
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Enter Promo Code</h3>
          <div className="space-y-4">
            <input 
              type="text" 
              defaultValue="SPRING2026" 
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-sm font-mono text-white focus:outline-none focus:border-indigo-500 uppercase"
            />
            <button 
              onClick={() => setApplied(!applied)}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-xs transition-colors shadow-lg shadow-indigo-600/30"
            >
              {applied ? 'Discount Applied ✓' : 'Apply Promo Code'}
            </button>
          </div>
        </div>
        {applied && (
          <p className="text-xs text-emerald-400 font-medium mt-4">
            ✓ Coupon SPRING2026 active (-$100.00)
          </p>
        )}
      </motion.div>
    </div>
  );
}
export default CheckoutDiscountCoupon4;
