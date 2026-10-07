import React from 'react';

export function BlogLatestArticles6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED HORIZONTAL SCROLL #06
        </span>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="min-w-[320px] bg-slate-900/80 border border-slate-800 rounded-3xl p-5 backdrop-blur-xl space-y-4 shrink-0">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-2xl object-cover" />
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}