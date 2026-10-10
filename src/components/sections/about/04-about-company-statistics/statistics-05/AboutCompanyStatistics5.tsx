import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics5({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-indigo-950/40 text-indigo-100 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { num: '4.8/5', label: 'APP STORE RATING' },
          { num: '85M+', label: 'DOWNLOADS' },
          { num: '99.9%', label: 'CUSTOMER SATISFACTION' },
          { num: '24/7', label: 'LIVE SUPPORT' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-indigo-900/60 rounded-[2.5rem] p-6 border border-indigo-400/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl text-center space-y-2">
            <h3 className="text-3xl font-black text-white">{item.num}</h3>
            <p className="text-xs font-bold text-indigo-200 uppercase">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
