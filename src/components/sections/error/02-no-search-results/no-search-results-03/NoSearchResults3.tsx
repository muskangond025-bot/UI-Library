import React, { useState } from 'react';
import { Search, X, ArrowUpRight, RefreshCw, ShoppingBag } from 'lucide-react';

export const NoSearchResults3: React.FC = () => {
  const [query, setQuery] = useState('SuperCalfragilistic123');

  return (
    <section className="py-20 px-4 md:px-8 bg-yellow-50 text-slate-900 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center">
          <span className="inline-block bg-black text-yellow-300 font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            NEO-BRUTALIST SEARCH ERROR
          </span>

          <div className="w-24 h-24 mx-auto bg-yellow-300 border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Search className="w-12 h-12 text-black" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
            ZERO RESULTS FOUND!
          </h2>
          <p className="text-lg font-bold max-w-md mx-auto mb-8 text-slate-800">
            Your search term was too specific or misspelled. Clear search and try again.
          </p>

          {/* SEARCH INPUT BAR WITH CLEAR */}
          <div className="relative max-w-lg mx-auto mb-8">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full p-4 font-bold text-sm bg-slate-100 border-4 border-black focus:outline-none focus:bg-yellow-100 pr-12"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black text-white hover:bg-yellow-300 hover:text-black border-2 border-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setQuery('')}
              className="w-full sm:w-auto px-8 py-4 bg-yellow-300 text-black font-black uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>CLEAR & RESET SEARCH</span>
            </button>
            <a
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-black text-yellow-300 font-black uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>BROWSE ALL PRODUCTS</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
