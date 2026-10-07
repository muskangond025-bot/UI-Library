import React from 'react';

export function BlogLatestArticles11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded">
          JOURNAL NEWSPAPER GRID #11
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-stone-950 border border-stone-800 p-6 rounded-2xl shadow-[6px_6px_0px_#1c1917] space-y-4">
              <h3 className="text-xl font-serif font-bold text-stone-100">{art.title}</h3>
              <p className="text-stone-400 text-xs font-sans">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}