import React from 'react';
import { Terminal } from 'lucide-react';

export function BlogCategories12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs text-emerald-400"><Terminal className="w-4 h-4" /> [TOPIC_TELEMETRY // 12]</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="border border-emerald-500/40 p-5 rounded-lg bg-emerald-950/20 space-y-3">
              <span className="text-[10px] text-emerald-400">TELEMETRY_ID: #{cat.id}</span>
              <h3 className="text-lg font-bold text-white uppercase">{cat.name}</h3>
              <p className="text-xs text-emerald-300/70 font-sans">{cat.description}</p>
              <div className="text-xs font-bold text-emerald-400">[POSTS: {cat.articleCount}]</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}