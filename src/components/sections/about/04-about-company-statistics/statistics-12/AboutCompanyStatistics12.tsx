import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics12({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-emerald-400 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto border-2 border-emerald-500/50 p-8 rounded-xl bg-emerald-950/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative space-y-6">
        <div className="text-xs text-emerald-400 font-bold uppercase">[HUD_METRIC_READOUT // ID: 12]</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: '0.001ms', label: 'INTERACTION DELAY' },
            { num: '100% PASS', label: 'UNIT TEST COVERAGE' },
            { num: '8.4B', label: 'DOM NODES RENDERED' },
            { num: '0 EXCEPTIONS', label: 'RUNTIME STABILITY' },
          ].map((item, i) => (
            <div key={i} className="p-4 border border-emerald-500/30 rounded bg-black/40 space-y-2">
              <h3 className="text-3xl font-black text-white">{item.num}</h3>
              <p className="text-xs text-emerald-300 font-bold uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
