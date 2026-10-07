import React from 'react';

export function BlogFeaturedArticle17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-6 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden aspect-[16/9] min-h-[450px] flex items-end p-8 sm:p-12 border border-slate-800">
        <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Poster" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <span className="px-3 py-1 bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md">
            MAGAZINE COVER SPOTLIGHT #17
          </span>
          <h2 className="text-3xl sm:text-6xl font-black text-white leading-none">
            {settings.title || 'FULL-HEIGHT MAGAZINE COVER OVERLAY'}
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {settings.excerpt || 'Full viewport hero background image layered under floating gradient text overlays.'}
          </p>
        </div>
      </div>
    </div>
  );
}