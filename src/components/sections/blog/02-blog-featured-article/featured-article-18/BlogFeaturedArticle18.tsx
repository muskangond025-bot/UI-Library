import React from 'react';

export function BlogFeaturedArticle18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-8 sm:p-14 shadow-[0_0_50px_rgba(34,211,238,0.2)] space-y-6">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION #18
        </span>
        <h2 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300">
          {settings.title || 'PRISMATIC CHROMATIC REFRACTION GLASS'}
        </h2>
        <p className="text-cyan-100/80 text-lg leading-relaxed max-w-3xl">
          {settings.excerpt || 'Multi-tinted rainbow light refractions creating dynamic chromatic edge blurs on glass cards.'}
        </p>
        <button className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg">
          View Prismatic Feature
        </button>
      </div>
    </div>
  );
}