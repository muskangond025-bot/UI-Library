import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED MASONRY GRID #06
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6 }} className="bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 rounded-3xl p-5 backdrop-blur-xl space-y-4 transition-colors">
              <div className="overflow-hidden rounded-2xl">
                <motion.img src={art.image} alt={art.title} className="w-full aspect-[16/10] object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
              </div>
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}