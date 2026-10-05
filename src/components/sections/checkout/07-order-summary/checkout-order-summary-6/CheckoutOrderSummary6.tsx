import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary6({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="mb-8">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">TIMELINE FLOW</span>
        <h2 className="text-2xl font-bold text-white">Order Summary Timeline</h2>
      </div>

      <div className="relative pl-8 space-y-8">
        <svg className="absolute left-3 top-2 bottom-4 w-0.5 h-[85%]" overflow="visible">
          <motion.line
            x1="0" y1="0" x2="0" y2="100%"
            stroke="rgb(6, 182, 212)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 text-xs font-bold">1</span>
          <h4 className="text-sm font-bold text-white mb-2">Order Products (3)</h4>
          <div className="space-y-2">
            {items.map((it: any, i: number) => (
              <div key={i} className="flex justify-between items-center text-xs bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-200 truncate max-w-[220px]">{it.name}</span>
                <span className="font-mono text-cyan-300 font-semibold">{it.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-300 text-xs font-bold">2</span>
          <div className="flex justify-between items-center text-xs bg-slate-900 p-3 rounded-xl border border-slate-800">
            <div>
              <p className="font-bold text-white">Express Air Shipping</p>
              <p className="text-[10px] text-slate-400">Guaranteed 2-day delivery</p>
            </div>
            <span className="font-mono text-emerald-400 font-bold">$15.00</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-300 text-xs font-bold">3</span>
          <div className="flex justify-between items-center text-xs bg-slate-900 p-3 rounded-xl border border-slate-800">
            <div>
              <p className="font-bold text-white">SPRING2026 Promo & Tax</p>
              <p className="text-[10px] text-slate-400">Discount -$100.00 | Tax $64.32</p>
            </div>
            <span className="font-mono text-emerald-400 font-bold">-$35.68</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="relative">
          <span className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold text-xs shadow-lg shadow-cyan-500/50">✓</span>
          <div className="bg-gradient-to-r from-cyan-950 to-slate-900 p-4 rounded-2xl border border-cyan-500/40 flex justify-between items-center">
            <span className="text-sm font-bold text-white uppercase tracking-wider">Grand Total</span>
            <span className="text-2xl font-mono font-extrabold text-cyan-400">$883.32</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary6;
