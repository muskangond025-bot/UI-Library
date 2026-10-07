import React from 'react';

export function BlogLatestArticles9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">SPLIT HERO RAIL #09</span>
          <h2 className="text-3xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-400 text-sm">{settings.sectionSubtitle}</p>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex gap-4 items-center">
              <img src={art.image} alt={art.title} className="w-24 h-20 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-blue-400">{art.category}</span>
                <h4 className="text-base font-bold text-white leading-snug">{art.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}