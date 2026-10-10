import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics6({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { num: '300+', label: 'GLOBAL TEAM MEMBERS' },
          { num: '12', label: 'WORLDWIDE OFFICES' },
          { num: '$120M', label: 'SERIES B FUNDING' },
          { num: '5.0', label: 'GLASSDOOR RATING' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-2">
            <h3 className="text-3xl font-black text-rose-400 font-mono">{item.num}</h3>
            <p className="text-xs font-bold text-white uppercase">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
