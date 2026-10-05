import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary14({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      {/* Delivery Context Card */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/30 flex items-center gap-4 mb-6"
      >
        <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl">
          <Truck className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">EXPRESS AIR DELIVERY</span>
          <h4 className="text-sm font-semibold text-white">Est. Arrival: Wednesday, Oct 8</h4>
          <p className="text-xs text-teal-200/70">Tracked shipping via FedEx Express</p>
        </div>
      </motion.div>

      <div className="space-y-3 mb-6">
        {items.map((item: any, idx: number) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40"
          >
            <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-white truncate">{item.name}</h4>
              <p className="text-[11px] text-slate-400">{item.variant}</p>
            </div>
            <span className="font-mono text-sm font-bold text-teal-300">{item.price}</span>
          </motion.div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
        <div className="flex justify-between text-slate-300">
          <span>Items Subtotal</span>
          <span className="font-mono">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Discount Applied</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>FedEx Air Fee</span>
          <span className="font-mono">$15.00</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Estimated Tax</span>
          <span className="font-mono">$64.32</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-sm font-bold text-white">
          <span>Total Order Value</span>
          <span className="font-mono text-xl text-teal-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary14;
