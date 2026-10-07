import React from 'react';
import { motion } from 'framer-motion';

export function BlogPopularArticles5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase">
          CLAYMORPHIC BUBBLE CARDS #05
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="bg-indigo-900/60 border border-indigo-400/30 rounded-[2rem] p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_15px_30px_rgba(0,0,0,0.4)] space-y-3">
              <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-xs text-indigo-200 font-bold">TOP #{art.rank}</span>
              <h3 className="text-xl font-black text-white">{art.title}</h3>
              <p className="text-indigo-200/80 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}