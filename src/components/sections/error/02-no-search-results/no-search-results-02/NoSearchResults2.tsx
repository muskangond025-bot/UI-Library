import React, { useState } from 'react';
import { Search, X, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

export const NoSearchResults2: React.FC = () => {
  const [search, setSearch] = useState('Wireless Noise-Canceling Earbuds v99');
  const tags = [
  "Wireless Headphones",
  "Smart Watches",
  "Leather Jackets",
  "Ergonomic Chairs",
  "4K Monitors"
];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-blue-50/60 text-slate-900 transition-all duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 bg-indigo-100 text-indigo-700 border border-indigo-200">
          SMART SUGGESTION PODS
        </span>

        {/* SEARCH INPUT BAR */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-12 py-4 text-sm bg-white border border-slate-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          NO EXACT MATCHES FOUND
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 mb-10 leading-relaxed">
          We could not find matching products. Try checking for spelling or explore top categories.
        </p>

        {/* POPULAR TRENDING CATEGORY TAGS */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/80 shadow-xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">Try searching for these popular items:</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => setSearch(tag)}
                className="px-4 py-2 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>{tag}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setSearch('')}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
          >
            <span>Clear Search</span>
          </button>
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-indigo-600" />
            <span>Browse All Products</span>
          </a>
        </div>
      </div>
    </section>
  );
};
