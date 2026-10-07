import React from 'react';

export function BlogLatestArticles14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-full">
          LIQUID CAPSULE FEED #14
        </span>
        <div className="space-y-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-slate-900/60 border border-blue-500/30 rounded-full p-4 px-8 backdrop-blur-xl flex justify-between items-center gap-6">
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <span className="text-xs font-mono text-blue-400 shrink-0">{art.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}