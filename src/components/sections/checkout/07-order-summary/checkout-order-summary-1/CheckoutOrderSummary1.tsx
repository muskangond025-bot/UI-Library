import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary1({ data }: { data?: any }) {
  const items = data?.items || [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-slate-100 shadow-2xl backdrop-blur-xl font-sans">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">
            PREMIUM CHECKOUT • ORDER #ORD-2026-98
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-400" /> Order Summary
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          3 Items
        </span>
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } }
        }}
        className="space-y-4 mb-6"
      >
        {items.map((item: any, idx: number) => (
          <motion.div 
            key={item.id || idx}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 }
            }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-slate-700" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
              <p className="text-xs text-slate-400">{item.variant}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs bg-slate-700/60 px-2 py-0.5 rounded text-slate-300">Qty: {item.qty}</span>
              </div>
            </div>
            <span className="text-sm font-bold text-indigo-300">{item.price}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between mb-6 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-indigo-300 font-medium">
          <Tag className="w-4 h-4 text-indigo-400" />
          <span>Promo Code Applied: <strong className="font-mono text-white">SPRING2026</strong></span>
        </div>
        <span className="font-bold text-emerald-400">-$100.00</span>
      </div>

      <div className="space-y-2 text-sm text-slate-300 border-b border-slate-800 pb-6 mb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono text-white">$904.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping (Express Air)</span>
          <span className="font-mono text-emerald-400">$15.00</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span className="font-mono text-white">$64.32</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 mb-6">
        <div>
          <span className="text-xs text-slate-400 block uppercase tracking-wider">Grand Total</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">$883.32</span>
        </div>
        <button className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
          <Edit3 className="w-3.5 h-3.5" /> Edit Cart
        </button>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary1;
