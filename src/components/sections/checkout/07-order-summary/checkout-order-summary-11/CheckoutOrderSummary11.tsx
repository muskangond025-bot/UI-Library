import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary11({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="text-center pb-8 border-b border-slate-800 mb-8">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">FINANCIAL BREAKDOWN OVERVIEW</span>
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight"
        >
          $883.32
        </motion.div>
        <span className="text-xs text-slate-400 mt-2 block">Grand Total Due Today</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Subtotal (3 Items)</span>
          <span className="text-lg font-mono font-bold text-white">$904.00</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
          <span className="text-xs text-emerald-300 block mb-1">Promo Discount</span>
          <span className="text-lg font-mono font-bold text-emerald-400">-$100.00</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Shipping Fee</span>
          <span className="text-lg font-mono font-bold text-white">$15.00</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Estimated Tax</span>
          <span className="text-lg font-mono font-bold text-white">$64.32</span>
        </motion.div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex justify-between items-center text-xs">
        <span className="text-slate-300 font-medium">Includes 3 products in current checkout session</span>
        <button className="text-emerald-400 font-bold hover:underline">View Product List →</button>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary11;
