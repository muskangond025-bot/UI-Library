import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics4({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { num: '500K+', label: 'COMMUNITY PROJECTS' },
          { num: '98.5%', label: 'AUTOMATION SPEED' },
          { num: '120+', label: 'PATENTS GRANTED' },
          { num: '15.4M', label: 'MONTHLY IMPRESSIONS' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl relative space-y-2">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl translate-x-2 translate-y-2 blur-sm border border-emerald-500/20 pointer-events-none" />
            <div className="relative z-10 space-y-2">
              <h3 className="text-3xl font-black text-emerald-400 font-mono">{item.num}</h3>
              <p className="text-xs font-bold text-white uppercase">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
