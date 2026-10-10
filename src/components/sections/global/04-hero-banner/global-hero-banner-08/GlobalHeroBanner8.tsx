import React from 'react';
import { Gamepad2, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner8: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-emerald-400 font-mono">
      <div className="max-w-4xl mx-auto p-10 rounded-2xl bg-black border-4 border-emerald-500/80 shadow-[0_0_30px_rgba(16,185,129,0.3)] text-center">
        <div className="flex justify-between items-center text-xs text-emerald-600 mb-6 border-b border-emerald-900 pb-3">
          <span>HERO QUEST: LEVEL 01</span>
          <span className="animate-pulse">HIGH SCORE: 999,990</span>
        </div>
        <div className="w-24 h-24 mx-auto mb-6 bg-emerald-950 border-2 border-emerald-400 flex items-center justify-center">
          <Gamepad2 className="w-12 h-12 text-emerald-400 animate-pulse" />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wider">
          START YOUR HERO QUEST
        </h1>
        <p className="text-emerald-500 text-sm md:text-base max-w-md mx-auto mb-8">
          RETRO 8-BIT GAMING GEAR & HARDWARE POWER-UPS. READY PLAYER ONE?
        </p>
        <button className="px-8 py-4 rounded bg-emerald-500 text-black font-black text-base hover:bg-emerald-400 uppercase tracking-widest inline-flex items-center gap-3">
          <span>PRESS START TO PLAY</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner8;
