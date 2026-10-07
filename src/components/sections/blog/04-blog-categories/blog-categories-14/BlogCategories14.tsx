import React from 'react';

export function BlogCategories14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-full">
          LIQUID CAPSULE FILTER #14
        </span>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-slate-900/60 border border-blue-500/30 rounded-full px-6 py-3 backdrop-blur-xl flex items-center gap-4">
              <h3 className="text-base font-bold text-white">{cat.name}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold">{cat.articleCount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}