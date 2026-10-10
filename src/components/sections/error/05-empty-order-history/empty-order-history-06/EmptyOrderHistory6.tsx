import React from 'react';
import { Package, Snowflake, Shield, RefreshCw, ArrowUpRight } from 'lucide-react';

export const EmptyOrderHistory6: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-cyan-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative mx-auto w-36 h-36 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 border border-cyan-400/40 rotate-45 animate-pulse" />
          <div className="relative w-28 h-28 rounded-2xl bg-slate-900/90 border border-cyan-300/50 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)]">
            <Package className="w-14 h-14 text-cyan-400 animate-bounce" />
            <Snowflake className="absolute top-2 right-2 w-5 h-5 text-cyan-300 animate-spin [animation-duration:10s]" />
          </div>
        </div>

        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-950 text-cyan-400 border border-cyan-800/60 inline-block mb-4">
          Sub-Zero Frozen Vault Archive
        </span>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          Order Ledger Frozen in Ice
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-8 text-base">
          Zero order records archived in cryogenic storage. Unfreeze your shopping profile by completing your first order today.
        </p>

        <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] inline-flex items-center gap-2">
          <span>Unfreeze Ledger & Shop</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyOrderHistory6;
