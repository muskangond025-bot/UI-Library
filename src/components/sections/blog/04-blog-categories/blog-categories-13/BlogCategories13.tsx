import React from 'react';

export function BlogCategories13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full">
          BENTO LAYERED MASONRY #13
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-3 backdrop-blur-xl">
              <span className="text-xs font-mono text-teal-400">{cat.articleCount} Posts</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}