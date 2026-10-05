import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary2({ data }: { data?: any }) {
  const items = [
    { num: '01', name: 'AURA WIRELESS HEADPHONES', variant: 'MATTE BLACK / ANC', price: '$299.00', qty: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80' },
    { num: '02', name: 'LEATHER CARRYALL BACKPACK', variant: 'COGNAC BROWN', price: '$185.00', qty: 1, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80' },
    { num: '03', name: 'TITANIUM CHRONO WATCH', variant: '42MM MIDNIGHT', price: '$420.00', qty: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-8 sm:p-12 bg-stone-900 text-stone-100 border border-stone-800 font-serif shadow-2xl rounded-xl">
      <div className="flex items-baseline justify-between border-b border-stone-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-sans tracking-widest uppercase text-amber-500 font-bold block mb-1">ISSUE 2026 // COLLECTION</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-stone-100 italic">Order Selection Overview</h2>
        </div>
        <span className="font-sans text-xs text-stone-400 tracking-wider">3 ITEMS SELECTED</span>
      </div>

      <div className="space-y-8 mb-12">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="grid grid-cols-12 gap-4 items-center border-b border-stone-800/60 pb-6"
          >
            <div className="col-span-2 font-mono text-2xl text-stone-600 font-light">{item.num}</div>
            <div className="col-span-3 sm:col-span-2">
              <img src={item.image} alt={item.name} className="w-full h-20 object-cover rounded grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="col-span-5 sm:col-span-6 font-sans">
              <h3 className="text-sm sm:text-base font-semibold tracking-wide text-stone-200">{item.name}</h3>
              <p className="text-xs text-stone-400 font-mono mt-1">{item.variant} • QTY: {item.qty}</p>
            </div>
            <div className="col-span-2 text-right font-mono text-sm sm:text-base font-bold text-amber-400">
              {item.price}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-4 font-sans">
        <div className="text-xs text-stone-400 space-y-1">
          <p className="font-mono text-stone-300">SHIPPING: EXPRESS AIR (TRACKED)</p>
          <p className="font-mono text-stone-300">PROMO APPLIED: SPRING2026 (-$100.00)</p>
          <p className="text-stone-500 pt-2">All prices include applicable taxes and international customs clearance.</p>
        </div>
        <div className="p-6 bg-stone-950 border border-stone-800 rounded-lg text-right">
          <span className="text-xs font-mono tracking-widest text-stone-400 uppercase block mb-1">TOTAL AMOUNT</span>
          <span className="text-3xl sm:text-4xl font-serif text-stone-100">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary2;
