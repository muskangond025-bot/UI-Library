import React from 'react';
import { motion } from 'framer-motion';

export function BlogRecentArticles18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION GLASS FEED #18
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.03, filter: 'hue-rotate(90deg)' }} className="bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-6 space-y-3">
              <span className="text-xs font-mono text-cyan-300">{art.publishedTime}</span>
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-cyan-100/70 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}