import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon2({ data }: { data?: any }) {
  const [activeCode, setActiveCode] = useState('SPRING2026');
  const coupons = [
    { code: 'SPRING2026', discount: '$100 OFF', desc: 'Orders above $500', bg: 'from-indigo-900/60 to-slate-900' },
    { code: 'FREESHIP', discount: 'FREE EXPRESS AIR', desc: 'No minimum order', bg: 'from-teal-900/60 to-slate-900' },
    { code: 'VIP20', discount: '20% OFF ALL', desc: 'Exclusive VIP member tier', bg: 'from-purple-900/60 to-slate-900' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">AVAILABLE OFFERS</span>
          <h2 className="text-xl font-bold text-white">Select a Coupon Card</h2>
        </div>
        <span className="text-xs text-slate-400">Click to apply instantly</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coupons.map((c, idx) => {
          const isSelected = activeCode === c.code;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setActiveCode(c.code)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all bg-gradient-to-b ${c.bg} ${isSelected ? 'border-indigo-500 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500' : 'border-slate-800 hover:border-slate-700'}`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">{c.code}</span>
                {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
              </div>
              <h3 className="text-base font-extrabold text-white mb-1">{c.discount}</h3>
              <p className="text-xs text-slate-400 mb-4">{c.desc}</p>
              <button className={`w-full py-2 rounded-xl text-xs font-bold transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                {isSelected ? 'Applied ✓' : 'Apply Coupon'}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon2;
