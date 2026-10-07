import React from 'react';

export function BlogLatestArticles7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-slate-200">
      <div className="max-w-6xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono tracking-widest uppercase">
          CHROME METALLIC LIST #07
        </span>
        <div className="space-y-4">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-[1px] bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 rounded-2xl">
              <div className="bg-slate-950 rounded-[15px] p-6 flex items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-slate-400">{art.category} • {art.date}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{art.title}</h3>
                </div>
                <button className="px-5 py-2.5 bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-bold text-xs uppercase rounded-xl shrink-0">
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}