import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics15({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl shadow-[0_0_35px_rgba(236,72,153,0.35)]">
        <div className="bg-slate-950 rounded-[22px] p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: '360°', label: 'NEON COVERAGE' },
            { num: '50M+', label: 'RENDERED PIXELS' },
            { num: '99.9%', label: 'STABILITY INDEX' },
            { num: '10K+', label: 'DAILY USERS' },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-3xl font-black text-white font-mono">{item.num}</h3>
              <p className="text-xs text-pink-400 font-bold uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
