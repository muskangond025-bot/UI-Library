import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary19({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-8 sm:p-12 bg-neutral-900 text-neutral-100 rounded-3xl border border-neutral-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 border-b border-neutral-800 pb-6 flex justify-between items-end"
      >
        <div>
          <span className="text-xs font-sans font-bold text-amber-500 uppercase tracking-widest block mb-1">SELECTION VOL. 04</span>
          <h2 className="text-3xl font-normal italic text-white">Magazine Order Summary</h2>
        </div>
        <span className="font-sans text-xs text-neutral-400">3 CURATED PIECES</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col justify-between"
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-xl mb-4 grayscale hover:grayscale-0 transition-all" />
            <div>
              <h4 className="font-sans text-xs font-bold text-white tracking-wide">{item.name}</h4>
              <p className="font-sans text-[11px] text-neutral-400 mt-1">{item.variant}</p>
            </div>
            <div className="pt-3 mt-3 border-t border-neutral-800 font-mono text-xs font-bold text-amber-400">
              {item.price}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800 font-sans flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs text-neutral-400 space-y-1">
          <p>Includes shipping, tax, and SPRING2026 (-$100.00) promo.</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-neutral-400 font-mono uppercase tracking-widest block">GRAND TOTAL</span>
          <span className="text-3xl font-serif text-amber-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary19;
