import React from 'react';
import { Heart, Terminal, ShieldAlert, Cpu, RefreshCw, Radio, Search } from 'lucide-react';

export const EmptyWishlist2: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-cyan-400 relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Terminal Header Bar */}
        <div className="w-full rounded-t-2xl bg-slate-900 border border-slate-800 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-400 ml-2">sys_wishlist_v2.0.exe</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>RADAR ACTIVE</span>
          </div>
        </div>

        {/* Terminal Main Content */}
        <div className="rounded-b-2xl bg-slate-900/60 backdrop-blur-xl border-x border-b border-slate-800 p-8 md:p-12 text-center relative">
          {/* Radar Ring Visual */}
          <div className="relative mx-auto w-40 h-40 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-dashed animate-spin [animation-duration:20s]" />
            <div className="absolute inset-4 rounded-full border border-rose-500/40 animate-ping [animation-duration:3s]" />
            <div className="relative w-24 h-24 rounded-full bg-slate-950 border-2 border-cyan-500/60 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <Heart className="w-10 h-10 text-rose-500 fill-rose-500/20 animate-pulse" />
            </div>
          </div>

          <div className="inline-block px-3 py-1 rounded bg-slate-800 text-rose-400 text-xs font-mono uppercase mb-4 border border-rose-500/30">
            STATUS: 0 SAVED NODES DETECTED
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            WISHLIST MEMORY EMPTY
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto mb-8 font-sans">
            Target scan returned zero saved telemetry items. Initiate product discovery protocol to bookmark inventory for rapid recall.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-mono font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>INITIATE SCAN</span>
            </button>
            <button className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 font-mono text-sm hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-2">
              <Cpu className="w-4 h-4 text-rose-400" />
              <span>VIEW CATALOG</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmptyWishlist2;
