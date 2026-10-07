import React from 'react';

export function BlogCategories4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
          DEPTH CARDS #04
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl translate-x-2 translate-y-2 border border-emerald-500/20" />
              <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <span className="text-xs font-mono text-emerald-400">{cat.articleCount} Posts</span>
                <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                <p className="text-zinc-400 text-xs">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}