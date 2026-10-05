import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary10({ data }: { data?: any }) {
  const mainProduct = {"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"};
  const otherProducts = [{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">FEATURED ITEM SHOWCASE</span>
      <h2 className="text-2xl font-extrabold text-white mb-6">Order Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-6 relative overflow-hidden rounded-2xl border border-slate-700 shadow-xl"
        >
          <img src={mainProduct.image} alt={mainProduct.name} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-4 flex flex-col justify-end">
            <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded w-fit mb-1 font-mono">PRIMARY ITEM</span>
            <h3 className="text-base font-bold text-white">{mainProduct.name}</h3>
            <p className="text-xs text-slate-300">{mainProduct.variant} • {mainProduct.price}</p>
          </div>
        </motion.div>

        <div className="md:col-span-6 space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Additional Items in Order</h4>
          {otherProducts.map((item: any, idx: number) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">{item.name}</p>
                <p className="text-[10px] text-slate-400">{item.variant}</p>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400">{item.price}</span>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-mono">$904.00</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Discount</span>
              <span className="font-mono">-$100.00</span>
            </div>
            <div className="flex justify-between text-white font-bold pt-2 border-t border-slate-800 text-sm">
              <span>Total Amount</span>
              <span className="font-mono text-cyan-400">$883.32</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary10;
