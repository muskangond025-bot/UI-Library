import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';

export function AccountRecentlyViewedProducts4() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-rose-400">Most Recent Discovery</span>
          <h2 className="text-3xl font-bold text-white mt-1">Last Viewed Item</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-slate-800 p-8 rounded-3xl">
          <div className="lg:col-span-6 aspect-square rounded-2xl overflow-hidden bg-slate-900">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Hero" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-rose-500/20 text-rose-300">
              Viewed 5 mins ago
            </span>
            <h3 className="text-3xl font-bold text-white">Nike Air Max Pulse</h3>
            <p className="text-2xl font-bold text-indigo-400">$150</p>
            <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs uppercase tracking-wider text-white">
              Revisit Product Page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts4;
