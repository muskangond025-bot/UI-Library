import React from 'react';
import { Heart, Sparkles, Orbit, Compass, ArrowRight } from 'lucide-react';

export const EmptyWishlist12: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-indigo-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative mx-auto w-40 h-40 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-indigo-500/30 border-dashed animate-spin [animation-duration:25s]" />
          <div className="relative w-28 h-28 rounded-full bg-indigo-950/80 border border-indigo-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)]">
            <Heart className="w-14 h-14 text-indigo-400 fill-indigo-400/20 animate-pulse" />
            <Sparkles className="absolute top-2 right-2 w-5 h-5 text-amber-300 animate-spin" />
          </div>
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-950 text-indigo-300 border border-indigo-800/60 inline-block mb-4">
          Cosmic Constellation Chamber
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          No Saved Stars in Your Orbit
        </h2>
        <p className="text-indigo-300 max-w-lg mx-auto mb-8 text-base">
          Traverse our celestial product catalog. Bookmark items to form your personalized star constellation wishlist.
        </p>
        <button className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-[0_0_30px_rgba(99,102,241,0.5)] inline-flex items-center gap-2">
          <Orbit className="w-5 h-5" />
          <span>Launch Galactic Search</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyWishlist12;
