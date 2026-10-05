import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export function AccountWishlist10() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Quick Cart Transfer</h2>

        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-left">
          <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden mb-6">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Product" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-white">Nike Air Max 270</h3>
          <p className="text-xl font-bold text-rose-400 mt-1">$150</p>

          <button className="w-full mt-6 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl">
            <ShoppingCart className="w-5 h-5" /> Move All to Shopping Bag
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist10;
