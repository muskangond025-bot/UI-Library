import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts3() {
  return (
    <section className="w-full min-h-[600px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light text-white uppercase tracking-tighter mb-10">
          RECENTLY <span className="italic text-neutral-500">EXPLORED</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-neutral-800 pt-8">
          <div className="aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Editorial" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4 font-sans">
            <span className="text-xs uppercase tracking-widest text-neutral-400">EXPLORED 15 MINS AGO</span>
            <h2 className="text-3xl font-serif text-white">NIKE AIR MAX PULSE</h2>
            <p className="text-xl font-bold text-white">$150.00 USD</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts3;
