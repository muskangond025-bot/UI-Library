import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
          DEPTH GRID #04
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} className="relative group" whileHover={{ rotateX: 3, rotateY: 3 }} transition={{ type: 'spring' }}>
              <motion.div className="absolute inset-0 bg-emerald-500/20 rounded-2xl border border-emerald-500/30" animate={{ x: [4, 8, 4], y: [4, 8, 4] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3 shadow-2xl">
                <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-xl object-cover" />
                <span className="text-xs font-mono text-emerald-400">{art.category}</span>
                <h3 className="text-xl font-bold text-white">{art.title}</h3>
                <p className="text-zinc-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}