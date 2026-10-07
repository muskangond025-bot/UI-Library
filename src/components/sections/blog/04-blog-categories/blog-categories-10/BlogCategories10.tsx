import React from 'react';

export function BlogCategories10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase">
          DARK VELVET RADAR #10
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-zinc-900 border border-violet-500/30 rounded-3xl p-6 space-y-3 shadow-[0_0_25px_rgba(139,92,246,0.1)]">
              <span className="text-xs font-mono text-violet-400">{cat.articleCount} Topics</span>
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
              <p className="text-zinc-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}