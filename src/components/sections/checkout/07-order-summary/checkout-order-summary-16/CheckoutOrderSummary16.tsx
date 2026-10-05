import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary16({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans perspective-1000">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">3D DEPTH PERSPECTIVE</span>
        <h2 className="text-2xl font-bold text-white">Interactive Order Cards</h2>
      </div>

      <div className="space-y-4 mb-8">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ rotateX: 15, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ scale: 1.02, rotateX: -4, rotateY: 3 }}
            className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-850 border border-slate-700/80 shadow-xl flex items-center justify-between cursor-pointer transition-all"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-4" style={{ transform: 'translateZ(10px)' }}>
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover shadow-md" />
              <div>
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <p className="text-xs text-slate-400">{item.variant}</p>
              </div>
            </div>
            <div className="text-right" style={{ transform: 'translateZ(15px)' }}>
              <span className="font-mono text-sm font-extrabold text-purple-400">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-sm">
        <div className="flex justify-between text-slate-400">
          <span>Subtotal</span>
          <span className="font-mono text-white">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Promo Discount</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Shipping & Tax</span>
          <span className="font-mono text-white">$79.32</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-lg font-bold text-white">
          <span>Grand Total</span>
          <span className="font-mono text-2xl text-purple-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary16;
