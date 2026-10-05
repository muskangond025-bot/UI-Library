import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon11({ data }: { data?: any }) {
  const [code, setCode] = useState('SPRING2026');
  const [isApplied, setIsApplied] = useState(true);
  const [currentOrder, setCurrentOrder] = useState(904);

  const discountAmount = isApplied ? 100 : 0;
  const progressPercent = Math.min(100, Math.round((currentOrder / 1200) * 100));

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">DISCOUNT THRESHOLD TRACKER</span>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" /> Unlock Tier 2 Discounts
          </h3>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
          {progressPercent}% UNLOCKED
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden mb-4 p-0.5 border border-slate-700">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-indigo-500 via-teal-400 to-emerald-400 rounded-full"
        />
      </div>

      <div className="flex justify-between text-xs text-slate-400 mb-6">
        <span>Current Order: <strong className="font-mono text-white">${currentOrder}.00</strong></span>
        <span className={`font-bold ${isApplied ? 'text-emerald-400' : 'text-slate-500'}`}>
          {isApplied ? `Code ${code} Applied (-$${discountAmount}.00)` : 'No Code Applied'}
        </span>
      </div>

      {/* Interactive Coupon Apply Box */}
      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
        <input 
          type="text" 
          value={code} 
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase focus:outline-none focus:border-indigo-500"
          placeholder="ENTER PROMO CODE"
        />
        <button 
          onClick={() => setIsApplied(!isApplied)}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition-colors ${isApplied ? 'bg-emerald-600 text-white hover:bg-emerald-500' : 'bg-indigo-600 text-white hover:bg-indigo-500'}`}
        >
          {isApplied ? 'Applied ✓' : 'Apply Code'}
        </button>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon11;
