import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner16: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-purple-300 font-mono">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-purple-950 border border-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          <Activity className="w-12 h-12 text-purple-400 animate-pulse" />
        </div>
        <span className="px-4 py-1.5 rounded bg-purple-900/60 text-purple-300 text-xs mb-4 inline-block">AUDIO_SIGNAL: 100% OPTIMAL</span>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6">SOUNDWAVE EQUALIZER HERO</h1>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm font-sans">High-frequency acoustic audio gear & studio monitor headphones.</p>
        <button className="px-8 py-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] inline-flex items-center gap-2">
          <span>TUNE INTO AUDIO</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner16;
