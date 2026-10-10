import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics8({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { num: '10M+', label: 'AURORA USERS' },
          { num: '400k+', label: 'COMMUNITY DESIGNS' },
          { num: '99.8%', label: 'ACCURACY RATE' },
          { num: '120+', label: 'GLOBAL EVENT SPEAKERS' },
        ].map((item, i) => (
          <div key={i} className="bg-slate-900/40 border border-white/15 backdrop-blur-3xl rounded-3xl p-6 space-y-2">
            <h3 className="text-3xl font-black text-purple-300 font-mono">{item.num}</h3>
            <p className="text-xs font-bold text-white uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
