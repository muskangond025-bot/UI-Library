import React from 'react';

export function BlogCategories16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">ARCHITECTURAL HAIRLINE GRID #16</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-l-2 border-orange-500 pl-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="space-y-2">
              <span className="text-xs font-mono text-slate-400">{cat.articleCount} Articles</span>
              <h3 className="text-xl font-light text-white">{cat.name}</h3>
              <p className="text-slate-500 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}