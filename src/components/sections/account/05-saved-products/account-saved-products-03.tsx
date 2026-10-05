import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, ShoppingBag } from 'lucide-react';

export function AccountSavedProducts3() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="inline-block p-4 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400">
          <Bookmark className="w-8 h-8 fill-rose-500" />
        </motion.div>
        <h2 className="text-3xl font-bold text-white">Item Permanently Saved</h2>

        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-left space-y-4">
          <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" alt="Product" className="aspect-video rounded-2xl object-cover" />
          <h3 className="text-2xl font-bold text-white">Oversized Streetwear Jacket</h3>
          <p className="text-xl font-bold text-rose-400">$180</p>
          <button className="w-full py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 font-bold text-xs uppercase tracking-wider text-white">
            Add Saved Item to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts3;
