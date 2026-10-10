import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics2({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { num: '$450M+', label: 'REVENUE PROCESSED', detail: 'Processed securely via quantum encrypted pipelines.' },
          { num: '850K+', label: 'COMMUNITY STARTERS', detail: 'Open-source contributors and active developers.' },
          { num: '4.9 / 5', label: 'USER RATING', detail: 'Average score across 50,000+ verified customer reviews.' },
          { num: '< 15ms', label: 'GLOBAL LATENCY', detail: 'Ultra-low edge network response speed.' },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-3xl bg-slate-900 shadow-[15px_15px_30px_#0b0f19,-15px_-15px_30px_#1b253b] border border-slate-800 space-y-3">
            <h3 className="text-3xl font-black text-sky-400 font-mono">{stat.num}</h3>
            <p className="text-sm font-bold text-white">{stat.label}</p>
            <p className="text-xs text-slate-400">{stat.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
