import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics11({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto bg-stone-950 border border-stone-800 rounded-2xl p-8 shadow-[12px_12px_0px_#1c1917] relative space-y-6">
        <span className="px-4 py-1.5 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded">SKEUOMORPHIC STAMP STATS #11</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {[
            { num: '7 YEARS', label: 'IN OPERATION' },
            { num: '1.5M', label: 'LINES OF CODE' },
            { num: '100%', label: 'COMMUNITY FUNDED' },
            { num: '45', label: 'PATENTS REGISTERED' },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <h3 className="text-3xl font-serif font-bold text-stone-100">{item.num}</h3>
              <p className="text-xs font-mono text-amber-400 font-bold uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
