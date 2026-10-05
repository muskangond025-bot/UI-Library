import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary3({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-md mx-auto my-6 p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl font-sans text-slate-100">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-cyan-400" /> Summary (3)
        </h3>
        <button className="text-xs text-cyan-400 hover:underline">Edit</button>
      </div>

      <div className="space-y-3 mb-4">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <p className="font-medium text-slate-200 truncate max-w-[160px]">{item.name}</p>
                <p className="text-[10px] text-slate-400">Qty: {item.qty}</p>
              </div>
            </div>
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              className="font-mono font-bold text-white"
            >
              {item.price}
            </motion.span>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Discount</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-mono">$15.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span className="font-mono">$64.32</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-sm font-bold text-white">
          <span>Total</span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-lg font-mono text-cyan-400"
          >
            $883.32
          </motion.span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary3;
