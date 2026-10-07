import React from 'react';
import { motion } from 'framer-motion';

export function BlogPopularArticles6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED POPULAR SLIDER #06
        </span>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="min-w-[300px] bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-3 shrink-0">
              <span className="text-xs text-rose-400 font-mono font-bold">RANK #{art.rank} • {art.views}</span>
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}