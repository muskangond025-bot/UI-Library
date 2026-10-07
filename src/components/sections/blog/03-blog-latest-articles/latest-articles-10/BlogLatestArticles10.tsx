import React from 'react';

export function BlogLatestArticles10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold tracking-widest uppercase">
          DARK VELVET STREAM #10
        </span>
        <div className="border-l-2 border-violet-500/40 pl-6 space-y-8">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="relative space-y-2">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-zinc-950" />
              <span className="text-xs font-mono text-violet-400">{art.date}</span>
              <h3 className="text-2xl font-bold text-white">{art.title}</h3>
              <p className="text-zinc-400 text-sm max-w-2xl">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}