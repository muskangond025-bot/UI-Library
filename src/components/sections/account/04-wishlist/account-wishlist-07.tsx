import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';

export function AccountWishlist7() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Featured Save</span>
        <h2 className="text-3xl font-bold text-white mb-8 mt-1">Top Wishlist Pick</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/80 border border-slate-700 p-8 rounded-3xl">
          <div className="lg:col-span-6 aspect-square rounded-2xl overflow-hidden bg-slate-900">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Featured" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Most Wanted
            </span>
            <h3 className="text-3xl font-bold text-white">Nike Air Max 270</h3>
            <p className="text-2xl font-bold text-indigo-400">$150 <span className="text-sm line-through text-slate-500">$180</span></p>
            <button className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl">
              Move to Cart Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist7;
