import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">CALCULATION PATH</span>
        <h2 className="text-2xl font-bold text-white">Visual Price Breakdown Flow</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Subtotal</span>
          <span className="font-mono text-sm font-bold text-white">$904.00</span>
        </div>
        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center">
          <span className="text-[10px] text-emerald-300 block">Discount</span>
          <span className="font-mono text-sm font-bold text-emerald-400">-$100.00</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Shipping</span>
          <span className="font-mono text-sm font-bold text-white">$15.00</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Tax</span>
          <span className="font-mono text-sm font-bold text-white">$64.32</span>
        </div>
      </div>

      {/* SVG Connecting Paths */}
      <div className="flex justify-center mb-6">
        <svg className="w-48 h-12 text-indigo-500 overflow-visible" viewBox="0 0 200 50">
          <motion.path
            d="M 10 0 Q 100 50 190 0 M 100 0 L 100 45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/40 text-center shadow-xl"
      >
        <span className="text-xs font-mono text-indigo-300 uppercase tracking-widest block mb-1">TOTAL PAYMENT REQUIRED</span>
        <span className="text-4xl font-mono font-extrabold text-white">$883.32</span>
      </motion.div>
    </div>
  );
}
export default CheckoutOrderSummary18;
