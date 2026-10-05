import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts6() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Glassmorphic History</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Glass" className="aspect-video rounded-2xl object-cover mb-4" />
            <h3 className="text-xl font-bold text-white">Nike Air Max Pulse</h3>
            <p className="text-indigo-400 font-bold mt-1">$150</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts6;
