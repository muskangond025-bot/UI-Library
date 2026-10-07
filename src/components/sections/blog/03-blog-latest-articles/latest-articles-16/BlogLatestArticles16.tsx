import React from 'react';

export function BlogLatestArticles16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">ARCHITECTURAL LINE FEED #16</span>
        <div className="border-l-2 border-orange-500 pl-6 space-y-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="space-y-1">
              <span className="text-xs font-mono text-slate-400">{art.date}</span>
              <h3 className="text-xl font-light text-white">{art.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}