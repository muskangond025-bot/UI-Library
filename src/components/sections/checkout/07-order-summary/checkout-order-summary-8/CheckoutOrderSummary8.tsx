import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary8({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-neutral-800/80 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest block mb-1">LUXURY COLLECTION</span>
          <h2 className="text-2xl font-bold text-white">Order Summary</h2>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full">
          3 Premium Items
        </span>
      </div>

      <div className="space-y-4 mb-8">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.12 }}
            className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/40 transition-colors flex items-center gap-4"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-neutral-800" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-neutral-100 truncate">{item.name}</h4>
              <p className="text-xs text-neutral-400">{item.variant}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-neutral-400 block">Qty: {item.qty}</span>
              <span className="font-mono text-sm font-bold text-amber-400">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-3 text-sm">
        <div className="flex justify-between text-neutral-400">
          <span>Subtotal</span>
          <span className="font-mono text-white">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Exclusive Discount</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-neutral-400">
          <span>Insured Shipping & Tax</span>
          <span className="font-mono text-white">$79.32</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-neutral-800 text-xl font-bold text-white">
          <span>Grand Total</span>
          <span className="font-mono text-2xl text-amber-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary8;
