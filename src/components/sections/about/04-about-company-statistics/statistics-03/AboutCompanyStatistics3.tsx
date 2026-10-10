import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';

export function AboutCompanyStatistics3({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-cyan-400 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-2xl border border-cyan-500/40 p-8 bg-slate-950/90 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] space-y-6">
        <div className="flex justify-between items-center border-b border-cyan-500/30 pb-3 text-xs">
          <span className="flex items-center gap-2 font-bold text-cyan-300"><Terminal className="w-4 h-4" /> SYS.METRIC_TELEMETRY // V3.0</span>
          <span>LIVE METRICS PING</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {[
            { num: '99.999%', label: 'NODE AVAILABILITY' },
            { num: '1.2B+', label: 'API REQUESTS / DAY' },
            { num: '0.4ms', label: 'PACKET LATENCY' },
            { num: '256-BIT', label: 'QUANTUM ENCRYPTION' },
          ].map((item, i) => (
            <div key={i} className="p-4 border border-cyan-500/30 rounded-xl bg-slate-900/40 space-y-2">
              <h3 className="text-3xl font-black text-white">{item.num}</h3>
              <p className="text-xs text-cyan-300 font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
