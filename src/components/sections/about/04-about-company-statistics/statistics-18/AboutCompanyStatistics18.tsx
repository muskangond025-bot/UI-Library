import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics18({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_50px_rgba(34,211,238,0.25)] space-y-6">
        <span className="px-4 py-1.5 bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">PRISMATIC STATS #18</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {[
            { num: '7 TINTS', label: 'RAINBOW SPECTRUM' },
            { num: '99.9%', label: 'PRISM PURITY' },
            { num: '12M', label: 'LIGHT REFRACTIONS' },
            { num: '0.00ms', label: 'SHIMMER DELAY' },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300 font-mono">{item.num}</h3>
              <p className="text-xs text-cyan-100/90 font-bold uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
