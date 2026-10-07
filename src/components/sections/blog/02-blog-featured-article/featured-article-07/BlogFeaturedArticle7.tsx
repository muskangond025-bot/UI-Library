import React from 'react';

export function BlogFeaturedArticle7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-black text-slate-200">
      <div className="max-w-7xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-slate-500 via-slate-200 to-slate-700 shadow-2xl">
        <div className="bg-slate-950 rounded-[23px] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono tracking-widest uppercase">
              CHROME METALLIC FOCUS #07
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400">
              {settings.title || 'HIGH-CONTRAST METALLIC LIQUID UI MORPHISM'}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              {settings.excerpt || 'Precision chrome highlights, high-contrast borders, and liquid metal aesthetics for futuristic editorial banners.'}
            </p>
            <button className="px-8 py-3.5 bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-xl hover:brightness-110 transition-all">
              View Feature
            </button>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-700">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} alt="Chrome" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}