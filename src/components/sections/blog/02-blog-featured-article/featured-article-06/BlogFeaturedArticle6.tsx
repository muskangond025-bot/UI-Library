import React from 'react';

export function BlogFeaturedArticle6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between space-y-6">
          <span className="px-3 py-1 w-fit rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
            FROSTED BENTO MAIN #06
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {settings.title || 'MODERN BENTO GRID EDITORIAL ARCHITECTURE'}
          </h2>
          <p className="text-slate-400 leading-relaxed">
            {settings.excerpt || 'Segmenting complex featured stories into interactive multi-tile bento grid components.'}
          </p>
          <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>By Elena Rostova</span>
            <span>6 MIN READ</span>
          </div>
        </div>
        <div className="md:col-span-4 bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden min-h-[300px] relative">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"} alt="Bento" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
      </div>
    </div>
  );
}