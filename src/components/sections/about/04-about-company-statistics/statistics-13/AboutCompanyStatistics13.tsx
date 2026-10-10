import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics13({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl space-y-6">
        <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-mono font-bold rounded-full uppercase">BENTO STACKED STATS #13</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {[
            { num: '2.5M+', label: 'TILES RENDERED' },
            { num: '45+', label: 'UI LIBRARIES' },
            { num: '99.9%', label: 'ACCESSIBILITY SCORE' },
            { num: '120k', label: 'GITHUB STARS' },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-3xl font-black text-teal-400 font-mono">{item.num}</h3>
              <p className="text-xs text-slate-300 font-bold uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
