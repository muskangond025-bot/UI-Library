import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA STREAM FULL-BLEED GRID #20
        </motion.span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6, borderColor: '#d946ef' }} className="p-8 bg-slate-950 border border-fuchsia-500/30 rounded-3xl space-y-3">
              <h3 className="text-xl font-black text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}