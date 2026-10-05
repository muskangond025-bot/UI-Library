import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary5({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-zinc-900 text-zinc-100 rounded-3xl border border-zinc-800 shadow-2xl font-sans">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">UNSTACKING ORDER CARDS</span>
        <h2 className="text-2xl font-extrabold text-white">Your Order Stack</h2>
      </div>

      <div className="relative mb-10 space-y-3">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ y: 20 + idx * 10, rotate: (idx - 1) * -3, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.4 }}
            className="p-4 rounded-2xl bg-zinc-800/80 border border-zinc-700/70 flex items-center justify-between hover:border-amber-400/50 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <p className="text-xs text-zinc-400">{item.variant}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs bg-zinc-700 text-zinc-300 px-2 py-0.5 rounded mr-3">Qty {item.qty}</span>
              <span className="font-mono font-bold text-amber-400 text-sm">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 text-sm">
        <div className="flex justify-between text-zinc-400">
          <span>Subtotal</span>
          <span className="font-mono text-zinc-200">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Promo Savings</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-zinc-400">
          <span>Shipping & Tax</span>
          <span className="font-mono text-zinc-200">$79.32</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-zinc-800 text-lg font-bold text-white">
          <span>Grand Total</span>
          <span className="font-mono text-2xl text-amber-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary5;
