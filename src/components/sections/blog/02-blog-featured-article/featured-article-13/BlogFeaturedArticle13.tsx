import React from 'react';

export function BlogFeaturedArticle13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
          <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full">
            BENTO STACKED GLASS #13
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
            {settings.title || 'STACKED GLASS TILE ARCHITECTURE'}
          </h2>
          <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
            {settings.excerpt || 'Combining primary featured hero glass cards with layered secondary detail panels.'}
          </p>
        </div>
      </div>
    </div>
  );
}