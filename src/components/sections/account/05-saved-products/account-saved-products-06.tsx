import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export function AccountSavedProducts6() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
          <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" alt="Glass" className="aspect-square rounded-2xl object-cover" />
          <h3 className="text-2xl font-bold text-white">Oversized Streetwear Jacket</h3>
          <p className="text-rose-400 font-bold text-xl">$180</p>
          <button className="w-full py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            Move to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts6;
