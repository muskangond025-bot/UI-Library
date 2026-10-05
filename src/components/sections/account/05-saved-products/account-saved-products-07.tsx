import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function AccountSavedProducts7() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Layered Product Specs</h2>

        <div className="relative h-[350px] flex items-center justify-center">
          <div className="absolute w-full p-6 rounded-3xl bg-slate-800 border border-slate-700 text-left shadow-2xl">
            <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" alt="Product" className="aspect-video rounded-2xl object-cover mb-4" />
            <h3 className="text-xl font-bold text-white">Oversized Streetwear Jacket</h3>
            <p className="text-indigo-400 font-bold">$180</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts7;
