import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function AccountRecentlyViewedProducts20() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Master History Portal
            </div>
            <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">Browsing History Master</h2>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-rose-600 font-bold text-xs uppercase tracking-widest shadow-xl">
            Clear History
          </button>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/80 border border-indigo-500/40 backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-2xl font-bold text-indigo-400 mt-2">$150</p>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts20;
