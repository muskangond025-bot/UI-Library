import React from 'react';
import { Heart, Sun, Flame, ArrowRight } from 'lucide-react';

export const EmptyWishlist20: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-purple-950 via-slate-950 to-pink-950 text-pink-300 font-mono relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-t from-pink-500 to-yellow-400 p-1 flex items-center justify-center shadow-[0_0_50px_rgba(236,72,153,0.5)]">
          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
            <Heart className="w-14 h-14 text-pink-400 fill-pink-500/40 animate-pulse" />
          </div>
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-pink-950 text-pink-300 border border-pink-700/50 inline-block mb-4">
          SYNTHWAVE SUNSET MATRIX
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
          OUTRUN THE BLANK WISHLIST
        </h2>
        <p className="text-slate-300 max-w-lg mx-auto mb-8 text-sm font-sans">
          Retro 80s synth grid horizon. Zero saved vectors in memory cache. Launch catalog run now!
        </p>
        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black hover:from-pink-600 hover:to-purple-700 shadow-[0_0_30px_rgba(236,72,153,0.6)] inline-flex items-center gap-2">
          <span>CRUISE THE CATALOG</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
export default EmptyWishlist20;
