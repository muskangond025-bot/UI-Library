import React, { useState } from 'react';
import { Heart, Sparkles, Compass, Search, Tag, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export const EmptyWishlist1: React.FC = () => {
  const [search, setSearch] = useState('');
  const tags = ['Wireless Audio', 'Minimalist Watches', 'Organic Skincare', 'Ergonomic Chairs'];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-rose-50/60 via-white to-pink-50/40 text-slate-800 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-rose-300/30 to-pink-400/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Floating Glass Heart Emblem */}
        <div className="relative mx-auto w-40 h-40 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-rose-200/80 bg-white/40 backdrop-blur-md shadow-xl animate-spin [animation-duration:15s]" />
          <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-2xl shadow-rose-300/60 transform hover:scale-110 transition-transform duration-500">
            <Heart className="w-16 h-16 fill-white/20 stroke-white stroke-[1.5] animate-bounce [animation-duration:2s]" />
            <Sparkles className="absolute top-2 right-2 w-6 h-6 text-amber-300 animate-spin [animation-duration:5s]" />
          </div>
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-rose-100 text-rose-700 mb-4 shadow-sm border border-rose-200">
          Design #1 • Crystal Glow Edition
        </span>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
          Your Wishlist is Light as Air
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
          You haven't saved any items yet. Tap the heart icon on any product to save it here for price-drop alerts & instant checkout.
        </p>

        {/* Search & Discover Input */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search items to save..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-white border border-rose-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-lg shadow-rose-100/50"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-rose-600 text-white font-semibold text-xs hover:bg-rose-700 transition-colors shadow-md">
            Explore
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-rose-500" /> Trending Topics:
          </span>
          {tags.map((t, idx) => (
            <button key={idx} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 hover:bg-rose-100 hover:text-rose-800 border border-slate-200 transition-all shadow-sm">
              #{t}
            </button>
          ))}
        </div>

        <a href="#browse" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-rose-600 transition-all shadow-xl hover:-translate-y-0.5">
          <Compass className="w-5 h-5" />
          <span>Browse Featured Collections</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
export default EmptyWishlist1;
