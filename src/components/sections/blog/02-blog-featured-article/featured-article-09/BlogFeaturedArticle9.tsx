import React from 'react';

export function BlogFeaturedArticle9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-slate-950">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold w-fit">
            SPLIT CAROUSEL #09
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {settings.title || 'SPLIT CAROUSEL FEATURED FOCUS & TIMELINE'}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {settings.excerpt || 'Dual-pane editorial layout featuring timeline navigation indicators and smooth dynamic slide updates.'}
          </p>
          <div className="flex items-center gap-2 pt-4">
            <div className="w-12 h-1 bg-blue-500 rounded-full" />
            <div className="w-3 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Split" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}