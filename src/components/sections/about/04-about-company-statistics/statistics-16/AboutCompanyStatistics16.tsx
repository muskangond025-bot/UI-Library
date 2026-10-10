import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics16({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto border-l-4 border-orange-500 pl-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4 bg-slate-900/40 rounded-r-3xl p-8 border-y border-r border-slate-800">
        {[
          { num: '0.001', label: 'TOLERANCE MARGIN' },
          { num: '100%', label: 'GRID ALIGNMENT' },
          { num: '4.95/5', label: 'PRECISION RATING' },
          { num: '85+', label: 'DESIGN MODULES' },
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <h3 className="text-3xl font-light text-white font-mono">{item.num}</h3>
            <p className="text-xs text-orange-400 font-mono font-bold uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
