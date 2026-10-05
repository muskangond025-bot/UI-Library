import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon6({ data }: { data?: any }) {
  const [selected, setSelected] = useState('SPRING2026');
  const offers = [
    { code: 'SPRING2026', discount: '$100 OFF', tag: 'BEST VALUE' },
    { code: 'FREESHIP', discount: 'FREE SHIPPING', tag: 'AIR EXPRESS' },
    { code: 'WELCOME15', discount: '15% OFF', tag: 'NEW CUSTOMER' },
    { code: 'FLASH25', discount: '$25 BONUS', tag: 'FLASH DEAL' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Tag className="w-4 h-4 text-cyan-400" /> Coupon Carousel
        </h3>
        <span className="text-xs text-slate-400">Swipe or click offer</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {offers.map((o, idx) => {
          const isActive = selected === o.code;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelected(o.code)}
              className={`flex-shrink-0 w-52 p-4 rounded-2xl border cursor-pointer transition-all bg-slate-800/60 ${isActive ? 'border-cyan-400 bg-slate-800 shadow-lg shadow-cyan-500/20' : 'border-slate-700/60 hover:border-slate-600'}`}
            >
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold block w-fit mb-2">{o.tag}</span>
              <h4 className="text-lg font-extrabold text-white mb-1">{o.discount}</h4>
              <p className="text-xs font-mono text-slate-400 mb-3">{o.code}</p>
              <div className="text-xs font-bold text-cyan-400 flex items-center gap-1">
                {isActive ? '✓ Active' : 'Tap to Apply'}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon6;
