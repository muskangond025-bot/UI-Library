import React from 'react';
import { motion } from 'framer-motion';

export function AccountSavedProducts9() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 aspect-square rounded-3xl overflow-hidden bg-slate-800">
          <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" alt="Product" className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-3xl font-bold text-white">Oversized Streetwear Jacket</h2>
          <p className="text-2xl font-bold text-indigo-400">$180</p>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts9;
