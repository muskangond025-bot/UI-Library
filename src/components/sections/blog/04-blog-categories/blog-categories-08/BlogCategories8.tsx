import React from 'react';

export function BlogCategories8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[110px] opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
          AURORA FLOATING PILLS #08
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-6 space-y-3 shadow-2xl">
              <span className="text-xs font-mono text-purple-300">{cat.articleCount} Articles</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-purple-100/70 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}