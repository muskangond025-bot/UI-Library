import React from 'react';

export function BlogLatestArticles17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-yellow-400 text-slate-950 font-bold text-xs uppercase rounded">MAGAZINE COMPACT LIST #17</span>
        <div className="space-y-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-6 bg-slate-900 rounded-2xl flex justify-between items-center border border-slate-800">
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <span className="text-xs text-yellow-400 font-mono">{art.readTime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}