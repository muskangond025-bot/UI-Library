import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export function BlogLatestArticles3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-cyan-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="border-b border-cyan-500/40 pb-4 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-xs text-cyan-400"><Terminal className="w-4 h-4" /> CYBER_MATRIX_STREAM // 03</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mt-1">{settings.sectionTitle}</h2>
          </div>
          <span className="text-xs text-cyan-500/60">[SYNC_STATUS: LIVE]</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <div key={idx} className="border border-cyan-500/30 bg-slate-950 p-5 rounded-xl space-y-4 hover:border-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="aspect-[16/9] border border-cyan-500/20 rounded-lg overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
              </div>
              <div className="text-xs text-cyan-300/70">{art.date} // {art.readTime}</div>
              <h3 className="text-lg font-bold text-white leading-snug">{art.title}</h3>
              <p className="text-xs text-cyan-200/60 font-sans line-clamp-2">{art.excerpt}</p>
              <button className="w-full py-2 bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500 hover:text-black font-bold text-xs uppercase tracking-widest transition-all">
                EXECUTE_READ &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}