import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts5() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-white">Recency Groups</h2>

        <div className="space-y-4">
          <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Viewed Today</span>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-white text-lg">Nike Air Max Pulse</h3>
            <span className="text-indigo-400 font-bold">$150</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts5;
