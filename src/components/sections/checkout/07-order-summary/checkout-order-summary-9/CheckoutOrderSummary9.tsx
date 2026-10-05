import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary9({ data }: { data?: any }) {
  const [items, setItems] = useState([{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}]);
  const [giftWrap, setGiftWrap] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-indigo-400" /> Shopping Bag ({items.length})
        </h3>
        <span className="text-xs text-slate-400">Review Items</span>
      </div>

      <div className="space-y-4 mb-6">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50"
          >
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h4 className="text-xs font-semibold text-white truncate max-w-[180px]">{item.name}</h4>
                <p className="text-[11px] text-slate-400">{item.variant}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-indigo-300 font-mono">Qty: {item.qty}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-bold text-white block">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-6 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 cursor-pointer text-slate-300">
          <input 
            type="checkbox" 
            checked={giftWrap} 
            onChange={(e) => setGiftWrap(e.target.checked)} 
            className="rounded accent-indigo-500"
          />
          <span>Add complimentary gift packaging</span>
        </label>
        <Sparkles className="w-4 h-4 text-amber-400" />
      </div>

      <div className="space-y-2 text-xs text-slate-300 pt-3 border-t border-slate-800">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Discount (SPRING2026)</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping & Tax</span>
          <span className="font-mono">$79.32</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-base font-bold text-white">
          <span>Order Total</span>
          <span className="text-xl font-mono text-indigo-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary9;
