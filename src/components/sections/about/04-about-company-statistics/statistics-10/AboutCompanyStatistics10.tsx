import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics10({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto p-8 sm:p-14 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase">DARK VELVET STATS #10</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {[
            { num: '$80M+', label: 'ARR REVENUE' },
            { num: '99.9%', label: 'SLA COMPLIANCE' },
            { num: '500+', label: 'FORTUNE 500 CLIENTS' },
            { num: '100%', label: 'CARBON NEUTRAL' },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-3xl font-black text-white font-mono">{item.num}</h3>
              <p className="text-xs text-violet-300 font-bold uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
