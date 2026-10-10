import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics9({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto border border-slate-800 rounded-3xl p-8 bg-slate-950 shadow-2xl space-y-6">
        <h3 className="text-xl font-bold text-white uppercase border-b border-slate-800 pb-4">STATISTICAL COMPARISON & METRICS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: '3.5X', label: 'YEAR-OVER-YEAR GROWTH' },
            { num: '45.2M', label: 'TOTAL COMPONENT IMPRESSIONS' },
            { num: '12K+', label: 'ENTERPRISE DEPLOYMENTS' },
            { num: '0% Loss', label: 'ZERO PACKET DROPS' },
          ].map((item, i) => (
            <div key={i} className="space-y-2 p-4 bg-slate-900/60 rounded-xl border border-slate-800">
              <h3 className="text-3xl font-black text-blue-400 font-mono">{item.num}</h3>
              <p className="text-xs font-bold text-slate-300 uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
