import React from 'react';

export function BlogFeaturedArticle14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto bg-slate-900/60 border border-blue-500/30 rounded-[3rem] p-8 sm:p-14 backdrop-blur-2xl text-center space-y-6 shadow-2xl">
        <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase rounded-full">
          LIQUID GLASS CAPSULE #14
        </span>
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
          {settings.title || 'LIQUID GLASS FLOATING CAPSULE DESIGN'}
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {settings.excerpt || 'Curved capsule container design featuring floating glass highlight aesthetics and clean focus.'}
        </p>
        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg">
          Explore Capsule
        </button>
      </div>
    </div>
  );
}