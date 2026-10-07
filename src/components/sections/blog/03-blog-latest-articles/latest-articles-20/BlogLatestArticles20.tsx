import React from 'react';

export function BlogLatestArticles20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA STREAM FULL-BLEED #20
        </span>
        <div className="space-y-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-8 bg-slate-950 border border-fuchsia-500/30 rounded-3xl flex justify-between items-center">
              <h3 className="text-2xl font-black text-white">{art.title}</h3>
              <button className="px-6 py-3 bg-fuchsia-500 text-black font-bold text-xs uppercase rounded-xl">Read</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}