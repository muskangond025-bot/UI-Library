import React from 'react';

export function BlogFeaturedArticle10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto relative p-8 sm:p-14 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
        <div className="space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold tracking-widest uppercase">
            DARK VELVET GLASS #10
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            {settings.title || 'DARK VELVET HIGH-CONTRAST EDITORIAL'}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            {settings.excerpt || 'Deep dark mode aesthetics enhanced with subtle violet glow aura badges and rich contrast typography.'}
          </p>
          <button className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg">
            Read Premium Article
          </button>
        </div>
      </div>
    </div>
  );
}