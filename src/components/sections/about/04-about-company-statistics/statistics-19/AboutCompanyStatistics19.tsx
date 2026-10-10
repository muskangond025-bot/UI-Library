import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics19({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-amber-100 overflow-hidden">
      <div className="max-w-6xl mx-auto bg-zinc-900 border border-amber-800/40 rounded-3xl p-8 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.9),inset_-3px_-3px_6px_rgba(255,255,255,0.05)] space-y-6">
        <span className="px-3.5 py-1.5 bg-zinc-950 text-amber-400 text-xs font-mono font-bold rounded-lg uppercase">EMBOSSED STATS #19</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {[
            { num: '1985', label: 'ORIGINAL FOUNDING YEAR' },
            { num: '40 YEARS', label: 'LEGACY EXPERIENCE' },
            { num: '100%', label: 'CRAFT INTEGRITY' },
            { num: '1M+', label: 'ARCHIVED DOCUMENTS' },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <h3 className="text-3xl font-serif font-black text-amber-50">{item.num}</h3>
              <p className="text-xs text-amber-200/80 font-bold uppercase font-sans">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
