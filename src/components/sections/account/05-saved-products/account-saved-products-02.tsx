import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ArrowRight, ShoppingBag } from 'lucide-react';

export function AccountSavedProducts2() {
  const item = {
    name: 'Oversized Streetwear Jacket',
    oldPrice: '$220',
    newPrice: '$180',
    savings: 'Save $40 Now',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-slate-950 border-2 border-emerald-500/50 shadow-2xl space-y-6"
        >
          <div className="flex justify-between items-center">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4" /> PRICE DROPPED
            </span>
            <span className="text-xs text-emerald-400 font-bold">{item.savings}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 aspect-square rounded-2xl overflow-hidden bg-slate-800">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <div className="sm:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-white">{item.name}</h3>

              <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <span className="text-xl text-slate-500 line-through font-bold">{item.oldPrice}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
                <span className="text-3xl font-extrabold text-emerald-400">{item.newPrice}</span>
              </div>

              <button className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Move to Cart at Low Price
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountSavedProducts2;
