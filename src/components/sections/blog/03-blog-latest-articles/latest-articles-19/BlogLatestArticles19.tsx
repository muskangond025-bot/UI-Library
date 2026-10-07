import React from 'react';

export function BlogLatestArticles19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-900 text-amber-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg">
          RETRO EMBOSSED #19
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-zinc-900 border border-amber-800/40 rounded-3xl p-6 space-y-3 shadow-inner">
              <h3 className="text-xl font-serif font-bold text-amber-50">{art.title}</h3>
              <p className="text-amber-200/70 text-xs font-sans">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}