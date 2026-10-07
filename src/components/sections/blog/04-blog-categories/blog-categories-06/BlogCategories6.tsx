import React from 'react';

export function BlogCategories6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED HORIZONTAL SLIDER #06
        </span>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="min-w-[280px] bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-3 shrink-0">
              <span className="text-xs text-rose-400 font-mono font-bold">{cat.articleCount} Articles</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}