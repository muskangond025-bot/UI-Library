import React from 'react';
import { Gamepad2, Heart } from 'lucide-react';

export const GlobalHeader8: React.FC = () => {
  return (
    <header className="w-full bg-slate-950 text-emerald-400 font-mono border-b-2 border-emerald-500/80 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-6 h-6 text-emerald-400 animate-pulse" />
          <span className="font-black text-lg text-white tracking-widest">ARCADE_HEADER</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-slate-400">
          <span>HIGH SCORE: 99999</span>
          <span className="text-rose-500 flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-current" /> LIVES: 3</span>
        </div>
        <button className="px-4 py-2 bg-emerald-500 text-black font-black hover:bg-emerald-400 uppercase tracking-widest">
          PRESS START
        </button>
      </div>
    </header>
  );
};
export default GlobalHeader8;
