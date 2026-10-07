import React from 'react';
import { motion } from 'framer-motion';

export function BlogPopularArticles7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono uppercase">
          CHROME METALLIC SHEEN FEED #07
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="p-[1px] bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 rounded-2xl relative overflow-hidden group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="bg-slate-950 rounded-[15px] p-6 space-y-3 relative z-10">
                <span className="text-xs font-mono text-slate-400">RANK #{art.rank} • {art.views}</span>
                <h3 className="text-xl font-bold text-white">{art.title}</h3>
                <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}