import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon8({ data }: { data?: any }) {
  const [selected, setSelected] = useState('SPRING2026');

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-amber-500/30 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">LUXURY MEMBER PERKS</span>
          <h3 className="text-xl font-bold text-white">Privilege Coupon</h3>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full">
          VIP Unlocked
        </span>
      </div>

      <motion.div 
        whileHover={{ boxShadow: '0 0 25px rgba(245, 158, 11, 0.2)' }}
        className="p-6 rounded-2xl bg-neutral-900 border border-amber-500/40 flex justify-between items-center"
      >
        <div>
          <span className="text-xs font-mono text-amber-400 block mb-1">ACTIVE PROMO CODE</span>
          <h4 className="text-2xl font-extrabold text-white font-mono">SPRING2026</h4>
          <p className="text-xs text-neutral-400 mt-1">Saves $100.00 on total purchase</p>
        </div>
        <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl transition-colors">
          Applied ✓
        </button>
      </motion.div>
    </div>
  );
}
export default CheckoutDiscountCoupon8;
