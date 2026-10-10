import React from 'react';
import { Snowflake, ShoppingBag, Search, ShieldCheck } from 'lucide-react';

export const GlobalHeader6: React.FC = () => {
  return (
    <header className="w-full bg-slate-950 text-cyan-200 border-b border-cyan-500/30 py-4 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-400/50 text-cyan-400 flex items-center justify-center font-black shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <Snowflake className="w-6 h-6 animate-spin [animation-duration:12s]" />
          </div>
          <span className="font-black text-xl tracking-wider text-white">CRYSTAL<span className="text-cyan-400">.FROST</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-slate-300">
          <a href="#glacier" className="hover:text-cyan-400">GLACIER</a>
          <a href="#vault" className="hover:text-cyan-400">CRYO_VAULT</a>
          <a href="#subzero" className="hover:text-cyan-400">SUBZERO</a>
        </nav>
        <button className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span>FROZEN CART (1)</span>
        </button>
      </div>
    </header>
  );
};
export default GlobalHeader6;
