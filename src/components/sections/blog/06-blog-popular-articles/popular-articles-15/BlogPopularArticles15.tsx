import React from 'react';
import { motion } from 'framer-motion';

export function BlogPopularArticles15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full">
          NEON EDGE GLOW POPULAR CARDS #15
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl relative overflow-hidden">
              <div className="bg-slate-950 rounded-[22px] p-6 space-y-3 relative z-10">
                <span className="text-xs font-mono text-pink-400">RANK #{art.rank}</span>
                <h3 className="text-lg font-bold text-white">{art.title}</h3>
                <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}