import React from 'react';

export function BlogCategories18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION CARDS #18
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-6 space-y-3">
              <span className="text-xs font-mono text-cyan-300">{cat.articleCount} Posts</span>
              <h3 className="text-lg font-bold text-white">{cat.name}</h3>
              <p className="text-cyan-100/70 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}