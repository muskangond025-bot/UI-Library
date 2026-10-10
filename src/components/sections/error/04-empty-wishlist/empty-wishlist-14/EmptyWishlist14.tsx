import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export const EmptyWishlist14: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-black text-white font-sans border-y border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-left">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-slate-500 mb-3 block">
            [SYS_ID: ARCH_WISHLIST_00]
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            NULL_SAVED
          </h2>
          <p className="text-slate-400 max-w-md text-base leading-relaxed mb-8">
            Precision minimalist architecture. Zero active bookmarks saved in cache memory.
          </p>
          <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors flex items-center gap-3">
            <span>BROWSE CATALOG INDEX</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="w-48 h-48 rounded-full border-2 border-slate-700 flex items-center justify-center relative">
          <Heart className="w-20 h-20 text-white stroke-[1]" />
        </div>
      </div>
    </section>
  );
};
export default EmptyWishlist14;
