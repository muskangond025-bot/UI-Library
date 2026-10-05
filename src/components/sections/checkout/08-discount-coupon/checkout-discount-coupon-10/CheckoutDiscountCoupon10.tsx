import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon10({ data }: { data?: any }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">SECRET PROMO REVEAL</span>
      <h3 className="text-xl font-bold text-white mb-4">Tap to Uncover Your Offer</h3>

      <div className="relative min-h-[140px] flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="scratch"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              onClick={() => setRevealed(true)}
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 flex items-center justify-center cursor-pointer font-bold text-white text-sm"
            >
              <Sparkles className="w-5 h-5 mr-2" /> TAP HERE TO REVEAL SECRET DISCOUNT
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <span className="text-xs font-mono text-emerald-400 font-bold block">CONGRATULATIONS!</span>
              <h2 className="text-3xl font-extrabold font-mono text-white my-1">$100 OFF</h2>
              <p className="text-xs text-slate-400">CODE: <strong className="text-cyan-400 font-mono">SPRING2026</strong></p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon10;
