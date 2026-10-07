import React from 'react';
import { motion } from 'framer-motion';

export function BlogRecentArticles2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold uppercase">
          NEUMORPHIC COMPACT FEED #02
        </span>
        <div className="space-y-4">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="p-6 rounded-2xl bg-slate-900 shadow-[8px_8px_16px_#0b0f19,-8px_-8px_16px_#1b253b] border border-slate-800/60 flex items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold">{art.publishedTime} • {art.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{art.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}