import React from 'react';
import { Zap, ShoppingBag } from 'lucide-react';

export const GlobalHeader10: React.FC = () => {
  return (
    <header className="w-full bg-black text-fuchsia-400 font-mono border-b border-fuchsia-500/60 p-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Zap className="w-6 h-6 text-fuchsia-500 animate-bounce" />
          <span className="font-black text-xl text-white tracking-widest">CYBER<span className="text-fuchsia-500">LATTICE</span></span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs text-slate-300">
          <a href="#matrix" className="hover:text-fuchsia-400">[ MATRIX ]</a>
          <a href="#nodes" className="hover:text-fuchsia-400">[ NODES ]</a>
          <a href="#laser" className="hover:text-fuchsia-400">[ LASER_BAR ]</a>
        </nav>
        <button className="px-6 py-2.5 bg-fuchsia-600 text-black font-black text-xs uppercase hover:bg-fuchsia-400 shadow-[3px_3px_0px_#fff]">
          TERMINAL DISPATCH
        </button>
      </div>
    </header>
  );
};
export default GlobalHeader10;
