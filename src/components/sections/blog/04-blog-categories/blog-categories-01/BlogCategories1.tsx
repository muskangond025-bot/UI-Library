import React from 'react';
import { Sparkles, ArrowUpRight, Brain, Layout, Leaf, Rocket } from 'lucide-react';

export function BlogCategories1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const categories = settings.categories || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" /> BENTO GLASS CATEGORIES #01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">{settings.sectionTitle || 'FEATURED BLOG CATEGORIES'}</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">{settings.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-4 hover:border-amber-400/50 transition-all group">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-white/10 text-amber-400 font-mono text-xs font-bold">{cat.articleCount} Articles</span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">{cat.name}</h3>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}