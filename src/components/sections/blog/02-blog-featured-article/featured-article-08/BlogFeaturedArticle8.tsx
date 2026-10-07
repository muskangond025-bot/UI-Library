import React from 'react';

export function BlogFeaturedArticle8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-8 sm:p-14 shadow-2xl">
        <div className="max-w-3xl space-y-6">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
            AURORA MESH MESH #08
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            {settings.title || 'DYNAMIC AURORA FLUID MESH BACKGROUNDS'}
          </h2>
          <p className="text-purple-100/80 text-lg leading-relaxed">
            {settings.excerpt || 'Blending vivid liquid gradient meshes with ultra-clear frosted glass overlays for an immersive visual experience.'}
          </p>
          <button className="px-7 py-3.5 bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg">
            Explore Mesh Design
          </button>
        </div>
      </div>
    </div>
  );
}