import React from 'react';
import { motion } from 'framer-motion';

export function BlogRecentArticles11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded">
          JOURNAL SKEUOMORPHIC NEWSPAPER #11
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ rotate: idx % 2 === 0 ? 1 : -1, y: -4 }} className="bg-stone-950 border border-stone-800 p-6 rounded-2xl shadow-[6px_6px_0px_#1c1917] space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">{art.publishedTime}</span>
              <h3 className="text-xl font-serif font-bold text-stone-100">{art.title}</h3>
              <p className="text-stone-400 text-xs font-sans line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}