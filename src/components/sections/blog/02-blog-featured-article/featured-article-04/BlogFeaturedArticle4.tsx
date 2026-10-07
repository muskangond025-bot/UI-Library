import React from 'react';
import { motion } from 'framer-motion';

export function BlogFeaturedArticle4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl translate-x-3 translate-y-3 blur-sm border border-emerald-500/20" />
        <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded-md">
              DEPTH MORPHISM #04
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {settings.title || 'ARCHITECTURAL DEPTH & SPATIAL HIERARCHY'}
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              {settings.excerpt || 'Utilizing multi-layered spatial z-indexing to guide user attention through modern editorial content.'}
            </p>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg">
              Explore Depth Model
            </button>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"} alt="Depth" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}