import React from 'react';

export function BlogLatestArticles5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase tracking-widest">
          CLAYMORPHIC PILL GRID #05
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="bg-indigo-900/60 border border-indigo-400/30 rounded-[2rem] p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_15px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl space-y-4">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-[1.5rem] object-cover border-2 border-indigo-400/20" />
              <h3 className="text-xl font-black text-white">{art.title}</h3>
              <p className="text-indigo-200/80 text-xs">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}