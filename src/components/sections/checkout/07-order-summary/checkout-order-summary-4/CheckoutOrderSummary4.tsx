import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary4({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-5xl mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 rounded-3xl text-slate-100"
      >
        <h3 className="text-lg font-bold mb-4 text-white flex items-center justify-between border-b border-slate-800 pb-3">
          <span>Order Items</span>
          <span className="text-xs text-slate-400 font-normal">3 Selected</span>
        </h3>
        <div className="space-y-4">
          {items.map((item: any, idx: number) => (
            <div key={idx} className="flex gap-4 p-3 rounded-2xl bg-slate-800/40 border border-slate-800 items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                <p className="text-xs text-slate-400">{item.variant}</p>
                <p className="text-xs text-slate-300 mt-1">Quantity: <strong className="text-white">{item.qty}</strong></p>
              </div>
              <div className="text-right font-mono font-bold text-indigo-400 text-sm">{item.price}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 border border-indigo-800/60 p-6 sm:p-8 rounded-3xl text-white flex flex-col justify-between shadow-2xl"
      >
        <div>
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-2">FINANCIAL BREAKDOWN</span>
          <h3 className="text-xl font-extrabold mb-6">Payment Summary</h3>

          <div className="space-y-3 text-sm text-indigo-100/80 mb-6">
            <div className="flex justify-between">
              <span>Items Subtotal</span>
              <span className="font-mono text-white">$904.00</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Coupon SPRING2026</span>
              <span className="font-mono">-$100.00</span>
            </div>
            <div className="flex justify-between">
              <span>Express Shipping</span>
              <span className="font-mono text-white">$15.00</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span className="font-mono text-white">$64.32</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-indigo-800/60">
          <div className="flex justify-between items-baseline mb-4">
            <span className="text-sm uppercase tracking-wider text-indigo-200">Total Due</span>
            <span className="text-3xl font-mono font-extrabold text-white">$883.32</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-indigo-300 bg-indigo-900/50 p-3 rounded-xl border border-indigo-700/40">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default CheckoutOrderSummary4;
