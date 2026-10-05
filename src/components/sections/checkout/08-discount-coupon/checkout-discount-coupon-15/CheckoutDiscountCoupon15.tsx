import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon15({ data }: { data?: any }) {
  const [activeIcon, setActiveIcon] = useState(0);
  const categories = [
    { icon: Percent, label: '20% OFF', code: 'SPRING2026' },
    { icon: Truck, label: 'FREE AIR', code: 'FREESHIP' },
    { icon: Sparkles, label: 'VIP PERK', code: 'VIPMEM' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <h3 className="text-lg font-bold text-white mb-6 text-center">Category Offer Selector</h3>
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((c, idx) => {
          const IconComponent = c.icon;
          const isSelected = activeIcon === idx;
          return (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIcon(idx)}
              className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${isSelected ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}`}
            >
              <IconComponent className="w-6 h-6" />
              <span className="text-xs font-bold">{c.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center text-xs">
        Active Category Promo: <strong className="font-mono text-indigo-300">{categories[activeIcon].code}</strong>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon15;
