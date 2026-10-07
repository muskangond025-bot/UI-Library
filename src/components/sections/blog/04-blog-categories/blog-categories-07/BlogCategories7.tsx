import React from 'react';

export function BlogCategories7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono uppercase">
          CHROME METALLIC TILES #07
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-[1px] bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 rounded-2xl">
              <div className="bg-slate-950 rounded-[15px] p-6 space-y-3">
                <span className="text-xs font-mono text-slate-400">{cat.articleCount} Posts</span>
                <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                <p className="text-slate-400 text-xs">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}