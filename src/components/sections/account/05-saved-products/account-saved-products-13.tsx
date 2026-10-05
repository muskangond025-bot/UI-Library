import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export function AccountSavedProducts13() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Direct Cart Transfer</h2>
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-left space-y-4">
          <h3 className="text-2xl font-bold text-white">Oversized Streetwear Jacket</h3>
          <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" /> Transfer Saved Item to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts13;
