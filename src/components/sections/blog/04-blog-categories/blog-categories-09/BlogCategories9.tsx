import React from 'react';

export function BlogCategories9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">SPLIT FEATURE #09</span>
          <h2 className="text-3xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-400 text-sm">{settings.sectionSubtitle}</p>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-blue-400">{cat.articleCount} Articles</span>
              <h3 className="text-lg font-bold text-white">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}