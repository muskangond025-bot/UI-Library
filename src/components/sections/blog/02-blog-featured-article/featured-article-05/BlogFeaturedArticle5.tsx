import React from 'react';

export function BlogFeaturedArticle5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-6xl mx-auto bg-indigo-900/60 rounded-[2.5rem] p-8 sm:p-14 border border-indigo-400/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-400/20 shadow-inner">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} alt="Clay" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase tracking-widest shadow-sm">
              CLAYMORPHIC STORY #05
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              {settings.title || 'SOFT 3D CLAYMORPHISM & PLAYFUL INTERACTION'}
            </h2>
            <p className="text-indigo-200/80 text-base leading-relaxed">
              {settings.excerpt || 'Embracing organic soft volume, inner shadow illumination, and friendly tactile UI elements.'}
            </p>
            <button className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs tracking-wider shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.3)] transition-all">
              Read Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}