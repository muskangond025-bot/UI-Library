import React, { useState } from 'react';
import { Search, X, RefreshCw, ShoppingBag, ArrowRight } from 'lucide-react';

export const NoSearchResults18: React.FC = () => {
  const [query, setQuery] = useState('Specialized Quantum Device 990');

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-indigo-950 via-purple-950 to-pink-950 text-pink-100 border-t border-pink-500/40 transition-all duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 bg-pink-950 text-pink-400 border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
          80S SYNTHWAVE
        </span>

        <div className="w-24 h-24 mx-auto rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
          <Search className="w-12 h-12 text-indigo-400" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          SYNTHWAVE NEON SEARCH MATRIX
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 mb-8 leading-relaxed">
          Neon wireframe horizon grid with 80s synth vibes and pulsing search tags.
        </p>

        {/* SEARCH INPUT */}
        <div className="relative max-w-md mx-auto mb-10">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full px-5 py-3.5 text-sm bg-white/10 dark:bg-slate-900/80 border border-white/20 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setQuery('')}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset Search Query</span>
          </button>
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Explore Catalog</span>
          </a>
        </div>
      </div>
    </section>
  );
};
