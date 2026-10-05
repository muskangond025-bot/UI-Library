import React from 'react';
import { motion } from 'framer-motion';

export function AccountSavedProducts5() {
  return (
    <section className="w-full min-h-[600px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light text-white uppercase tracking-tighter mb-8">SAVED // N°01</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-neutral-800 pt-8">
          <div className="md:col-span-7 aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" alt="Editorial" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-5 space-y-4 font-sans">
            <span className="text-xs uppercase tracking-widest text-neutral-400">ARCHIVE ITEM</span>
            <h2 className="text-3xl font-serif text-white">OVERSIZED STREETWEAR JACKET</h2>
            <p className="text-xl font-bold text-white">$180.00 USD</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts5;
