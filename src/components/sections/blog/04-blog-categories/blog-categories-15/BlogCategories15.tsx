import React from 'react';

export function BlogCategories15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full">
          NEON EDGE GLOW CARDS #15
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl">
              <div className="bg-slate-950 rounded-[22px] p-6 space-y-3">
                <span className="text-xs font-mono text-pink-400">{cat.articleCount} Posts</span>
                <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                <p className="text-slate-400 text-xs">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}