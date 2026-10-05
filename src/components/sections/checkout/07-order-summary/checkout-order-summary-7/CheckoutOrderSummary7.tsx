import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary7({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-black text-white border border-neutral-800 font-mono shadow-2xl">
      <div className="flex justify-between items-center pb-4 mb-6">
        <span className="text-xs uppercase tracking-widest text-neutral-400">[ORDER_SUMMARY_V07]</span>
        <span className="text-xs text-neutral-500">3 ITEMS</span>
      </div>

      <div className="space-y-6 mb-8">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-semibold text-neutral-200">{item.name}</span>
              <span className="font-bold">{item.price}</span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-500">
              <span>{item.variant}</span>
              <span>QTY: {item.qty}</span>
            </div>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="h-px bg-neutral-800 w-full origin-left"
            />
          </div>
        ))}
      </div>

      <div className="space-y-2 text-xs text-neutral-400 mb-6">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span>$904.00</span>
        </div>
        <div className="flex justify-between text-neutral-200">
          <span>DISCOUNT [SPRING2026]</span>
          <span>-$100.00</span>
        </div>
        <div className="flex justify-between">
          <span>SHIPPING</span>
          <span>$15.00</span>
        </div>
        <div className="flex justify-between">
          <span>TAX</span>
          <span>$64.32</span>
        </div>
      </div>

      <div className="p-4 bg-white text-black flex justify-between items-center font-bold text-base sm:text-lg">
        <span>TOTAL DUE</span>
        <span>$883.32</span>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary7;
