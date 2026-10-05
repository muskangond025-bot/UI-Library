import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, CheckCircle2, Clock, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export function AccountSavedProducts12() {
  const [cartState, setCartState] = useState(false);

  const product = {
    name: 'Oversized Streetwear Jacket',
    category: 'Premium Outerwear',
    price: '$180.00',
    oldPrice: '$220.00',
    stockCount: 3,
    totalStock: 20,
    stockStatus: 'Low Stock Alert',
    savedDate: 'September 25, 2026',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'
  };

  const claimedPercentage = Math.round(((product.totalStock - product.stockCount) / product.totalStock) * 100);

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              <ShieldAlert className="w-4 h-4 text-amber-400" /> LIVE INVENTORY MONITOR
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Availability Focus
            </h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
            Variant 12
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          {/* Left Visual Hero */}
          <div className="lg:col-span-6 relative aspect-square rounded-2xl overflow-hidden bg-slate-800 group">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/40 backdrop-blur-md flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Only {product.stockCount} Left
              </span>
            </div>
          </div>

          {/* Right Stock Metrics & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">{product.category}</span>
              <h3 className="text-3xl font-extrabold text-white mt-1">{product.name}</h3>
              <p className="text-xs text-slate-400 mt-2">Saved on {product.savedDate}</p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white">{product.price}</span>
              <span className="text-sm text-slate-500 line-through">{product.oldPrice}</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                18% OFF
              </span>
            </div>

            {/* Inventory Stock Bar */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Claimed Inventory</span>
                <span className="text-amber-400 font-bold">{claimedPercentage}% Claimed</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${claimedPercentage}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">High demand item — stock selling quickly.</p>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setCartState(true)}
                className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all active:scale-98"
              >
                <ShoppingBag className="w-4 h-4" /> Move to Cart Before Sold Out
              </button>

              <AnimatePresence>
                {cartState && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs text-center font-bold border border-emerald-500/30 flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Saved item moved to cart!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts12;
