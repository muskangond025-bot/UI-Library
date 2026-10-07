import React from 'react';

export function BlogFeaturedArticle20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-14 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 via-slate-950 to-black border border-fuchsia-500/30 rounded-[3rem] p-10 sm:p-16 shadow-[0_0_60px_rgba(217,70,239,0.15)] flex flex-col items-center text-center space-y-8">
        <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA FULL-BLEED OVERLAY #20
        </span>
        <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-fuchsia-300 max-w-4xl leading-tight">
          {settings.title || 'ULTRA IMMERSIVE FULL-BLEED HERO OVERLAY'}
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
          {settings.excerpt || 'Maximum visual weight flagship featured article layout with reading progress gauge.'}
        </p>
        <button className="px-10 py-5 bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl hover:scale-105">
          Read Flagship Article
        </button>
      </div>
    </div>
  );
}