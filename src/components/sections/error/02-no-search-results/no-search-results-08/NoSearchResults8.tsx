import React, { useState } from 'react';
import { Search, X, RefreshCw, ShoppingBag, ArrowRight } from 'lucide-react';

export const NoSearchResults8: React.FC = () => {
  const [query, setQuery] = useState('Specialized Quantum Device 990');

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-900 via-neutral-900 to-black text-amber-100 transition-all duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 bg-amber-900/40 text-amber-300 border border-amber-500/40">
          GOLD FOIL SEARCH DECK
        </span>

        <div className="w-24 h-24 mx-auto rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
          <Search className="w-12 h-12 text-indigo-400" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          Boutique Catalog Search Void
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 mb-8 leading-relaxed">
          Tactile brass & velvet card deck offering private concierge catalog assistance.
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
