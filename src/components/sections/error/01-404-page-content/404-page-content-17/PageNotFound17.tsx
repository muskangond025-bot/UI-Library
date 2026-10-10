import React from 'react';
import { Home, ArrowLeft, Search, HelpCircle, Compass } from 'lucide-react';

export const PageNotFound17: React.FC = () => {
  return (
    <section className="min-h-[80vh] py-20 px-4 md:px-8 bg-slate-50 text-slate-900 flex items-center justify-center transition-all duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 bg-slate-900 text-white font-serif italic px-3 py-1">
          SPLIT MAGAZINE EDITORIAL
        </span>

        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight mb-4 opacity-90">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
          404 — Editorial Parallax Void
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 mb-10 leading-relaxed">
          Split-screen dual pane layout with high-fashion model & floating CTA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
          >
            <Home className="w-4 h-4" />
            <span>Back to Main Page</span>
          </a>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </section>
  );
};
