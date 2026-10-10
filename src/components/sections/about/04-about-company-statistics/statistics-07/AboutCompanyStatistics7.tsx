import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics7({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 shadow-2xl">
        <div className="bg-slate-950 rounded-[23px] p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: '99.99%', label: 'CHROME SPEED' },
            { num: '5.2TB', label: 'DAILY DATA BANDWIDTH' },
            { num: '180+', label: 'INTEGRATIONS' },
            { num: '< 1s', label: 'RENDER TIME' },
          ].map((item, i) => (
            <div key={i} className="space-y-2 border-r border-slate-800 last:border-0 pr-4">
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 font-mono">{item.num}</h3>
              <p className="text-xs text-slate-400 font-bold uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
