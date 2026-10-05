import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary17({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Featured Main Item */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="md:col-span-7 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between"
      >
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-2">PRIMARY SELECTION</span>
          <img src={items[0].image} alt={items[0].name} className="w-full h-44 object-cover rounded-xl mb-4" />
          <h3 className="text-lg font-bold text-white">{items[0].name}</h3>
          <p className="text-xs text-slate-400">{items[0].variant}</p>
        </div>
        <div className="pt-4 mt-4 border-t border-slate-700/50 flex justify-between items-center">
          <span className="text-xs text-slate-300">Quantity: {items[0].qty}</span>
          <span className="font-mono text-base font-bold text-cyan-400">{items[0].price}</span>
        </div>
      </motion.div>

      {/* Secondary Items Stack */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="md:col-span-5 space-y-4"
      >
        <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block">ADDITIONAL ITEMS</span>
        {items.slice(1).map((it: any, idx: number) => (
          <div key={idx} className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <img src={it.image} alt={it.name} className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <p className="font-semibold text-white truncate max-w-[120px]">{it.name}</p>
                <p className="text-[10px] text-slate-400">{it.variant}</p>
              </div>
            </div>
            <span className="font-mono font-bold text-cyan-400">{it.price}</span>
          </div>
        ))}

        <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-300">
          <p className="font-bold">SPRING2026 Promo Code</p>
          <p className="text-[11px] text-cyan-200/70">Applied -$100.00 discount to this order session.</p>
        </div>
      </motion.div>

      {/* Full-width Total */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="md:col-span-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <div className="text-xs text-slate-400 space-y-1">
          <p>Subtotal: $904.00 • Shipping: $15.00 • Tax: $64.32</p>
          <p className="text-emerald-400">Total Savings: -$100.00</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 uppercase tracking-widest block">GRAND TOTAL</span>
          <span className="text-3xl font-mono font-extrabold text-cyan-400">$883.32</span>
        </div>
      </motion.div>
    </div>
  );
}
export default CheckoutOrderSummary17;
