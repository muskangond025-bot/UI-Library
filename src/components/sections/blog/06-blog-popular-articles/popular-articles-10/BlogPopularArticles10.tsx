import React from 'react';
import { motion } from 'framer-motion';

export function BlogPopularArticles10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase">
          DARK VELVET FLAME STREAM #10
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ y: -5, boxShadow: '0 0 30px rgba(139,92,246,0.25)' }} className="bg-zinc-900 border border-violet-500/30 rounded-3xl p-6 space-y-3 shadow-[0_0_25px_rgba(139,92,246,0.1)]">
              <span className="text-xs font-mono text-violet-400">RANK #{art.rank} • {art.views}</span>
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-zinc-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}