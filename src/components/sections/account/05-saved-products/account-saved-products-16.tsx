import React from 'react';
import { motion } from 'framer-motion';

export function AccountSavedProducts16() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 text-left shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" alt="Floating" className="aspect-square rounded-2xl object-cover mb-4" />
          <h3 className="text-2xl font-bold text-white">Oversized Streetwear Jacket</h3>
          <p className="text-indigo-400 font-bold mt-1">$180</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountSavedProducts16;
