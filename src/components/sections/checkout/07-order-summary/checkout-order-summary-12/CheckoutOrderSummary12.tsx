import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary12({ data }: { data?: any }) {
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <motion.div 
      initial={{ opacity: 0, scaleY: 0.8, y: -20 }}
      animate={{ opacity: 1, scaleY: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto my-6 bg-stone-900 text-stone-100 p-8 rounded-t-2xl shadow-2xl border-t-4 border-amber-500 font-mono relative"
    >
      <div className="text-center pb-6 border-b border-dashed border-stone-700 mb-6">
        <h3 className="text-lg font-bold tracking-widest text-amber-400">STORE RECEIPT</h3>
        <p className="text-[10px] text-stone-400 mt-1">ORDER #ORD-8942-X • {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-4 mb-6 text-xs">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex justify-between items-start">
            <div>
              <p className="font-bold text-stone-200">{item.name}</p>
              <p className="text-[10px] text-stone-400">QTY: {item.qty} | {item.variant}</p>
            </div>
            <span className="font-bold text-amber-400">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-dashed border-stone-700 pt-4 space-y-2 text-xs text-stone-300 mb-6">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span>$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>DISCOUNT (SPRING2026)</span>
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
        <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-stone-700">
          <span>TOTAL DUE</span>
          <span className="text-amber-400">$883.32</span>
        </div>
      </div>

      {/* SVG Barcode */}
      <div className="text-center pt-2">
        <svg className="w-full h-12 opacity-80" viewBox="0 0 200 40">
          <path d="M10 0 v40 M14 0 v40 M20 0 v40 M24 0 v40 M30 0 v40 M36 0 v40 M40 0 v40 M48 0 v40 M54 0 v40 M60 0 v40 M68 0 v40 M74 0 v40 M80 0 v40 M86 0 v40 M92 0 v40 M100 0 v40 M108 0 v40 M114 0 v40 M120 0 v40 M126 0 v40 M134 0 v40 M140 0 v40 M148 0 v40 M154 0 v40 M160 0 v40 M168 0 v40 M174 0 v40 M180 0 v40 M186 0 v40 M190 0 v40" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="text-[9px] text-stone-500 tracking-widest uppercase block mt-1">THANK YOU FOR YOUR PURCHASE</span>
      </div>
    </motion.div>
  );
}
export default CheckoutOrderSummary12;
