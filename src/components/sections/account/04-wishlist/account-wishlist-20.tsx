import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Sparkles } from 'lucide-react';

export function AccountWishlist20() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Award Master Hub
            </div>
            <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">Saved Favorites</h2>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-indigo-600 font-bold text-xs uppercase tracking-widest shadow-xl">
            Move All to Cart
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} className="p-8 rounded-3xl bg-slate-900/80 border border-rose-500/30 backdrop-blur-xl">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Product" className="aspect-video rounded-2xl object-cover mb-4" />
            <h3 className="text-2xl font-bold text-white">Nike Air Max 270</h3>
            <p className="text-xl font-bold text-rose-400 mt-1">$150</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist20;
