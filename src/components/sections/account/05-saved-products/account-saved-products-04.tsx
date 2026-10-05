import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Trash2 } from 'lucide-react';

export function AccountSavedProducts4() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
          <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" alt="Product" className="aspect-square rounded-2xl object-cover" />
          <div>
            <h3 className="text-2xl font-bold text-white">Oversized Streetwear Jacket</h3>
            <p className="text-indigo-400 font-bold text-lg mt-1">$180</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button className="py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-1">
              <ShoppingBag className="w-3.5 h-3.5" /> Cart
            </button>
            <button className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center gap-1">
              <Eye className="w-3.5 h-3.5" /> View
            </button>
            <button className="py-3 rounded-xl bg-slate-800 hover:bg-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center gap-1">
              <Trash2 className="w-3.5 h-3.5" /> Remove
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts4;
