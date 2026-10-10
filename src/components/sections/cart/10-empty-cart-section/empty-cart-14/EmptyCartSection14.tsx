import React from 'react';
import { ShoppingBag, ArrowRight, Sparkles, Plus } from 'lucide-react';

export const EmptyCartSection14: React.FC = () => {
  const products = [
  {
    "name": "Aero Pro Headphones",
    "price": "$299",
    "image": "🎧"
  },
  {
    "name": "Minimalist Smart Watch",
    "price": "$199",
    "image": "⌚"
  },
  {
    "name": "Leather Travel Bag",
    "price": "$149",
    "image": "🎒"
  }
];

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-950 text-indigo-100 transition-all duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 bg-indigo-900/40 text-indigo-300 border border-indigo-500/40 backdrop-blur-md">
          PRISM GLASS FACETS
        </span>

        <div className="w-24 h-24 mx-auto rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          Reflective Prism Glass Cart Facet
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 mb-10 leading-relaxed">
          Prismatic crystal glass layout with dynamic spectrum product preview cards.
        </p>

        {/* QUICK ADD SUGGESTIONS CAROUSEL */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">Quick Add Popular Bestsellers</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl">{item.image}</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{item.name}</h4>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{item.price}</span>
                  </div>
                </div>
                <button className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
          >
            <span>Start Shopping Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
