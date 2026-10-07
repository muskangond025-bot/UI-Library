import React from 'react';

export function BlogFeaturedArticle15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.3)]">
        <div className="bg-slate-950 rounded-[22px] p-8 sm:p-12 space-y-6">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full">
            NEON EDGE GLOW #15
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {settings.title || 'NEON RAINBOW EDGE GLOW ARTICLE FRAME'}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-3xl">
            {settings.excerpt || 'Vibrant multi-tinted neon border gradient framing dark glass content cards.'}
          </p>
          <button className="px-7 py-3.5 bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl">
            Read Neon Story
          </button>
        </div>
      </div>
    </div>
  );
}