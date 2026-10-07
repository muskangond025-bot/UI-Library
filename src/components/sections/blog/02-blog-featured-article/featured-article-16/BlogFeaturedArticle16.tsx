import React from 'react';

export function BlogFeaturedArticle16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto border-l-2 border-orange-500 pl-6 sm:pl-10 space-y-6 py-4">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">
          ARCHITECTURAL WIREFRAME #16
        </span>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
          {settings.title || 'ARCHITECTURAL WIREFRAME & MINIMALIST GRID'}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          {settings.excerpt || 'Clean linear guidelines, structural alignment, and minimalist typographic focus.'}
        </p>
        <button className="px-6 py-3 border border-orange-500/60 text-orange-400 hover:bg-orange-500/10 font-mono text-xs uppercase tracking-wider rounded-lg">
          Inspect Structure
        </button>
      </div>
    </div>
  );
}