import React from 'react';

export function BlogLatestArticles13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full">
          BENTO MASONRY #13
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}