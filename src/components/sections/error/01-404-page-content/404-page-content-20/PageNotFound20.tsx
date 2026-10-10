import React from 'react';
import { Home, ArrowLeft, Search, HelpCircle, Compass } from 'lucide-react';

export const PageNotFound20: React.FC = () => {
  return (
    <section className="min-h-[80vh] py-20 px-4 md:px-8 bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white flex items-center justify-center transition-all duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 backdrop-blur-xl">
          FLAGSHIP 3D STACKED GLASS
        </span>

        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight mb-4 opacity-90">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
          404 — 3D Stacked Spatial Prism
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 mb-10 leading-relaxed">
          Multi-layered 3D perspective glass cards with interactive tilt physics.
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
