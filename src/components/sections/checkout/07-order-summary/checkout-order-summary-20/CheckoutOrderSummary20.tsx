import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

export function CheckoutOrderSummary20({ data }: { data?: any }) {
  const [promo, setPromo] = useState('SPRING2026');
  const [applied, setApplied] = useState(true);
  const items = [{"id":"1","name":"Aura Studio Wireless Headphones","variant":"Matte Black / ANC","price":"$299.00","priceNum":299,"qty":1,"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"},{"id":"2","name":"Minimalist Leather Backpack","variant":"Cognac Brown / Leather","price":"$185.00","priceNum":185,"qty":1,"image":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"},{"id":"3","name":"Chronos Titanium Watch","variant":"Midnight Blue / 42mm","price":"$420.00","priceNum":420,"qty":1,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"}];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-2xl relative overflow-hidden font-sans">
      {/* Background Glow Orb */}
      <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl absolute -top-12 -right-12 w-64 h-64 pointer-events-none" />

      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6 relative">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">256-BIT SSL ENCRYPTED</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" /> Premium Order Summary
          </h2>
        </div>
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold rounded-full">
          3 Items
        </span>
      </div>

      <div className="space-y-4 mb-6 relative">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-slate-600 transition-all flex items-center gap-4"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-slate-700" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
              <p className="text-xs text-slate-400">{item.variant}</p>
              <span className="text-xs bg-slate-700/60 px-2 py-0.5 rounded text-slate-300 inline-block mt-1">Qty: {item.qty}</span>
            </div>
            <span className="font-mono text-sm font-bold text-indigo-300">{item.price}</span>
          </motion.div>
        ))}
      </div>

      {/* Promo Applicator */}
      <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 flex items-center gap-3">
        <Tag className="w-4 h-4 text-indigo-400" />
        <input 
          type="text" 
          value={promo} 
          onChange={(e) => setPromo(e.target.value)}
          className="bg-transparent text-xs font-mono text-white focus:outline-none flex-1 uppercase"
        />
        <button 
          onClick={() => setApplied(!applied)}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
        >
          {applied ? <><Check className="w-3.5 h-3.5" /> Applied</> : 'Apply'}
        </button>
      </div>

      <div className="space-y-2 text-sm text-slate-300 pb-6 border-b border-slate-800 mb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono text-white">$904.00</span>
        </div>
        {applied && (
          <div className="flex justify-between text-emerald-400">
            <span>SPRING2026 Promo Discount</span>
            <span className="font-mono">-$100.00</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Express Air Shipping</span>
          <span className="font-mono text-white">$15.00</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span className="font-mono text-white">$64.32</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block">GRAND TOTAL</span>
          <span className="text-3xl font-extrabold font-mono text-white">$883.32</span>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2">
          Proceed to Checkout <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary20;
