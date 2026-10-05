import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon16({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center bg-slate-800/60 hover:bg-slate-800 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Tag className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-bold text-white">Have a promo code? Click to unlock</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-6 border-t border-slate-800 space-y-4"
          >
            <div className="flex gap-2">
              <input 
                type="text" 
                defaultValue="SPRING2026" 
                className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase"
              />
              <button className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">Apply Code</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutDiscountCoupon16;
