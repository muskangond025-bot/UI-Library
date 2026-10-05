import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary13({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-5xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-indigo-400" /> Horizontal Summary Strip
        </h3>
        <span className="text-xs text-slate-400">3 Products Selected</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Horizontal Carousel Strip */}
        <div className="lg:col-span-8 flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="flex-shrink-0 w-60 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex flex-col justify-between"
            >
              <img src={item.image} alt={item.name} className="w-full h-32 rounded-xl object-cover mb-3" />
              <h4 className="text-xs font-semibold text-white truncate">{item.name}</h4>
              <p className="text-[10px] text-slate-400 mb-2">{item.variant}</p>
              <div className="flex justify-between items-center pt-2 border-t border-slate-700/50">
                <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">Qty: {item.qty}</span>
                <span className="font-mono text-xs font-bold text-indigo-300">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Anchored Total Card */}
        <div className="lg:col-span-4 p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">Subtotal</span>
            <span className="font-mono text-white">$904.00</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>Discount</span>
            <span className="font-mono">-$100.00</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Shipping & Tax</span>
            <span className="font-mono text-white">$79.32</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-sm font-bold text-white">
            <span>Grand Total</span>
            <span className="font-mono text-xl text-indigo-400">$883.32</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary13;
