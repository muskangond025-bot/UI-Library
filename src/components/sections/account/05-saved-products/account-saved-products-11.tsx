import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function AccountSavedProducts11() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest">
          <Calendar className="w-4 h-4" /> Saved on 25 September 2026
        </div>
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <h2 className="text-3xl font-bold text-white">Oversized Streetwear Jacket</h2>
          <p className="text-xl font-bold text-indigo-400">$180</p>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts11;
