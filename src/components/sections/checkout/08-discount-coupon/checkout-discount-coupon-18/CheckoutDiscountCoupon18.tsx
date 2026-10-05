import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans perspective-1000">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">3D PERSPECTIVE CARD</span>
        <h3 className="text-xl font-bold text-white">3D Ticket Pass</h3>
      </div>

      <motion.div 
        whileHover={{ rotateX: -6, rotateY: 5, scale: 1.02 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/40 shadow-2xl flex items-center justify-between cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div>
          <span className="text-xs font-mono text-purple-300 font-bold block mb-1">VIP PASS</span>
          <h4 className="text-2xl font-extrabold text-white font-mono">SPRING2026</h4>
          <p className="text-xs text-purple-200/70">Flat $100.00 Discount</p>
        </div>
        <span className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold">Active</span>
      </motion.div>
    </div>
  );
}
export default CheckoutDiscountCoupon18;
