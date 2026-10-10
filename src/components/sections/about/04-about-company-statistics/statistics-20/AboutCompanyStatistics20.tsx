import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics20({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-black border border-fuchsia-500/30 rounded-[3rem] p-8 sm:p-14 shadow-[0_0_60px_rgba(217,70,239,0.2)] flex flex-col items-center text-center space-y-8">
          <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
            ULTRA FULL-BLEED METRICS #20
          </span>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-fuchsia-300 max-w-4xl leading-[1.12]">
            OUR FLAGSHIP GLOBAL METRICS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl pt-4">
            {[
              { num: '$1B+', label: 'GLOBAL MARKET CAP' },
              { num: '50M+', label: 'DAILY ACTIVE USERS' },
              { num: '99.999%', label: 'ENTERPRISE SLA' },
              { num: '#1 RANK', label: 'DESIGN LIBRARY' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                <h3 className="text-3xl font-black text-fuchsia-300 font-mono">{item.num}</h3>
                <p className="text-xs text-slate-300 font-bold uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
