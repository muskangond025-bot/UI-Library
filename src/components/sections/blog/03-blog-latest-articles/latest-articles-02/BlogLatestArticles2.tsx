import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export function BlogLatestArticles2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold tracking-widest uppercase">
            NEUMORPHIC VERTICAL LIST #02
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">{settings.sectionTitle || 'NEUMORPHIC ARTICLE STREAM'}</h2>
        </div>
        <div className="space-y-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 shadow-[10px_10px_20px_#0b0f19,-10px_-10px_20px_#1b253b] border border-slate-800/60 flex flex-col md:flex-row gap-6 items-center">
              <img src={art.image} alt={art.title} className="w-full md:w-48 aspect-[16/10] rounded-xl object-cover shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]" />
              <div className="flex-1 space-y-2">
                <span className="text-xs font-mono font-bold text-sky-400">{art.category} • {art.date}</span>
                <h3 className="text-xl font-bold text-white">{art.title}</h3>
                <p className="text-slate-400 text-xs">{art.excerpt}</p>
              </div>
              <button className="px-5 py-2.5 rounded-xl bg-slate-900 shadow-[4px_4px_8px_#0b0f19,-4px_-4px_8px_#1b253b] active:shadow-[inset_2px_2px_4px_#0b0f19] text-sky-400 font-bold text-xs shrink-0 flex items-center gap-1.5">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}