import React from 'react';
import { Home, ArrowUpRight, AlertTriangle, RefreshCw } from 'lucide-react';

export const PageNotFound3: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-yellow-100 text-slate-900 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 md:p-14 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
        <span className="inline-block bg-black text-yellow-300 font-black px-4 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6">
          NEO-BRUTALIST STAMP
        </span>

        <div className="inline-flex items-center justify-center bg-yellow-300 border-4 border-black px-6 py-2 text-6xl md:text-9xl font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          404!
        </div>

        <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
          404: YOU ARE LOST!
        </h2>
        <p className="text-lg font-bold max-w-md mx-auto mb-10 text-slate-800">
          This page went to buy milk and never came back. Let us get you home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-black text-yellow-300 font-black uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            <span>GO HOME NOW</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-8 py-4 bg-yellow-300 text-black font-black uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            <span>TRY AGAIN</span>
          </button>
        </div>
      </div>
    </section>
  );
};
