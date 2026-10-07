import React from 'react';

export function BlogFeaturedArticle19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-zinc-900 text-amber-100">
      <div className="max-w-6xl mx-auto bg-zinc-900 border border-amber-800/40 rounded-3xl p-8 sm:p-12 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] space-y-6">
        <span className="px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg shadow-inner">
          EMBOSSED RETRO #19
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-amber-50 leading-tight">
          {settings.title || 'EMBOSSED VINTAGE NEUMORPHIC RETRO'}
        </h2>
        <p className="text-amber-200/70 text-base leading-relaxed max-w-2xl font-sans">
          {settings.excerpt || 'Warm retro vintage tones, pressed debossed typography badges, and tactile organic feel.'}
        </p>
        <button className="px-7 py-3.5 bg-amber-700 hover:bg-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-md">
          Read Vintage Story
        </button>
      </div>
    </div>
  );
}