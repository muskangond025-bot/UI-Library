import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics14({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { num: '85.4%', label: 'CONVERSION GAIN' },
          { num: '14.2M', label: 'MONTHLY REACH' },
          { num: '120k+', label: 'COMMUNITY MEMBERS' },
          { num: '0.2s', label: 'LOAD SPEED' },
        ].map((item, i) => (
          <div key={i} className="bg-slate-900/60 border border-blue-500/30 rounded-[2.5rem] p-6 backdrop-blur-2xl text-center space-y-2 shadow-2xl">
            <h3 className="text-3xl font-black text-blue-400 font-mono">{item.num}</h3>
            <p className="text-xs text-slate-300 font-bold uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
