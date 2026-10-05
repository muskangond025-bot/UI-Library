import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Tag, Clock } from 'lucide-react';

export function AccountSavedProducts8() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Saved Item Status</h2>

        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300">In Stock</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300">Price Locked</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Oversized Streetwear Jacket</h3>
          <p className="text-xl font-bold text-white">$180</p>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts8;
