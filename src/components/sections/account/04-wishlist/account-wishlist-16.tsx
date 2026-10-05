import React from 'react';
import { motion } from 'framer-motion';

export function AccountWishlist16() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Floating Modules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="p-6 rounded-3xl bg-slate-900 border border-indigo-500/30 text-left shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Sneakers" className="aspect-square rounded-2xl object-cover mb-4" />
            <h3 className="text-xl font-bold text-white">Nike Air Max 270</h3>
            <p className="text-indigo-400 font-bold">$150</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist16;
