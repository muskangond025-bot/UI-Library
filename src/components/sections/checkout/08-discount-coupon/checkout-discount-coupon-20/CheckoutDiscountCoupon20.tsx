import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon20({ data }: { data?: any }) {
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-2xl relative overflow-hidden font-sans">
      <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl absolute -top-12 -right-12 w-64 h-64 pointer-events-none" />

      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6 relative">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">VERIFIED SAVINGS ENGINE</span>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" /> Award Coupon Suite
          </h2>
        </div>
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold rounded-full">
          Verified Active
        </span>
      </div>

      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative">
        <div>
          <span className="text-xs font-mono text-indigo-400 block mb-1">PROMOTIONAL CODE</span>
          <h3 className="text-2xl font-extrabold font-mono text-white">SPRING2026</h3>
          <p className="text-xs text-slate-400">Flat $100.00 Savings Applied</p>
        </div>
        <button 
          onClick={() => setApplied(!applied)}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xs transition-all shadow-lg shadow-indigo-600/30"
        >
          {applied ? 'Applied ✓' : 'Apply Code'}
        </button>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon20;
