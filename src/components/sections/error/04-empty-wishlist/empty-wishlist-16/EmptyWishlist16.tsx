import React from 'react';
import { Heart, Activity, Radio, ArrowRight } from 'lucide-react';

export const EmptyWishlist16: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-purple-300 font-mono">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-purple-950/80 border-2 border-purple-500/60 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)]">
          <Activity className="w-14 h-14 text-purple-400 animate-pulse" />
        </div>
        <span className="px-4 py-1.5 rounded bg-purple-900/60 text-purple-300 border border-purple-700/50 text-xs font-mono mb-4 inline-block">
          WAVE_SIGNAL: NO_ITEMS_DETECTED
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          FREQUENCY WAVE QUIET
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm font-sans">
          Equalizer telemetry detected zero saved items. Tune into active product streams to bookmark your favorite gear.
        </p>
        <button className="px-8 py-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] inline-flex items-center gap-2">
          <Radio className="w-5 h-5" />
          <span>TUNE INTO CATALOG</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyWishlist16;
