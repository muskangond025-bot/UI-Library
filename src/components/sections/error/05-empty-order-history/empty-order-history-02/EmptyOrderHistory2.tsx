import React from 'react';
import { PackageSearch, Terminal, Radio, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';

export const EmptyOrderHistory2: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-emerald-400 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="w-full rounded-t-2xl bg-slate-900 border border-slate-800 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-400 ml-2">sys_order_log_v3.4.exe</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>LOGISTICS RADAR ONLINE</span>
          </div>
        </div>

        <div className="rounded-b-2xl bg-slate-900/60 backdrop-blur-xl border-x border-b border-slate-800 p-8 md:p-12 text-center relative">
          <div className="relative mx-auto w-36 h-36 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-emerald-500/30 border-dashed animate-spin [animation-duration:20s]" />
            <div className="relative w-24 h-24 rounded-full bg-slate-950 border-2 border-emerald-500/60 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <PackageSearch className="w-10 h-10 text-emerald-400 animate-pulse" />
            </div>
          </div>

          <span className="inline-block px-3 py-1 rounded bg-slate-800 text-emerald-400 text-xs font-mono uppercase mb-4 border border-emerald-500/30">
            STATUS: 0 DISPATCH RECORDS DETECTED
          </span>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            ORDER LOG MEMORY EMPTY
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto mb-8 font-sans">
            Dispatch database query returned 0 historical shipments. Initiate your first purchasing cycle to activate real-time GPS tracking.
          </p>

          <button className="px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)] inline-flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>INITIATE DISPATCH RUN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default EmptyOrderHistory2;
