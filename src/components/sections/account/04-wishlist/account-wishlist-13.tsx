import React from 'react';
import { motion } from 'framer-motion';

export function AccountWishlist13() {
  return (
    <section className="w-full min-h-[600px] bg-stone-900 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-light text-white mb-10 tracking-tight uppercase">PERSONAL LOOKBOOK</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] bg-stone-800 rounded-3xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Lookbook" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 font-sans text-xs uppercase tracking-widest bg-black/60 px-4 py-2 backdrop-blur-md">
              NIKE AIR MAX — $150
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist13;
