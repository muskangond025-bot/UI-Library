import React from 'react';

export function BlogFeaturedArticle12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-7xl mx-auto border-2 border-emerald-500/50 p-6 sm:p-10 rounded-xl relative bg-emerald-950/20">
        <div className="absolute -top-3 left-6 px-2 bg-black text-xs text-emerald-400">
          [HUD_ARTICLE_FRAME // ID: 12]
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-wider uppercase text-white">
              {settings.title || 'SCI-FI HUD INTERACTION FRAMEWORK'}
            </h2>
            <p className="text-emerald-300/70 text-sm sm:text-base font-sans leading-relaxed">
              {settings.excerpt || 'Futuristic technical indicators, telemetry badges, and corner bracket frames for tech blogs.'}
            </p>
            <button className="px-6 py-3 bg-emerald-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-emerald-400">
              EXECUTE_READ()
            </button>
          </div>
          <div className="lg:col-span-4 aspect-square border border-emerald-500/40 rounded-lg overflow-hidden p-1">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"} alt="HUD" className="w-full h-full object-cover opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}