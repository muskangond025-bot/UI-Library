import React from 'react';
import { motion } from 'framer-motion';

export function BlogPopularArticles16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">ARCHITECTURAL HAIRLINE RANK FEED #16</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-l-2 border-orange-500 pl-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ x: 6 }} className="space-y-2">
              <span className="text-xs font-mono text-slate-400">RANK 0{art.rank}</span>
              <h3 className="text-xl font-light text-white">{art.title}</h3>
              <p className="text-slate-500 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}