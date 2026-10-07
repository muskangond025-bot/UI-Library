import React from 'react';
import { Terminal } from 'lucide-react';

export function BlogCategories3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-cyan-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs text-cyan-400"><Terminal className="w-4 h-4" /> [HOLO_CYBER_MATRIX_CATEGORIES // 03]</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="border border-cyan-500/40 p-5 rounded-xl bg-slate-950 space-y-3 hover:border-cyan-300">
              <span className="text-[10px] text-cyan-500">TAG: #{cat.slug}</span>
              <h3 className="text-xl font-bold text-white uppercase">{cat.name}</h3>
              <p className="text-xs text-cyan-200/60 font-sans">{cat.description}</p>
              <div className="text-xs font-bold text-cyan-400">[COUNT: {cat.articleCount}]</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}