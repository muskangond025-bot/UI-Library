import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-block px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold uppercase">
          NEUMORPHIC SOFT CARD GRID #02
        </motion.span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 250 }} className="p-6 rounded-2xl bg-slate-900 shadow-[8px_8px_16px_#0b0f19,-8px_-8px_16px_#1b253b] border border-slate-800/60 space-y-4">
              <div className="overflow-hidden rounded-xl">
                <motion.img src={art.image} alt={art.title} className="w-full aspect-[16/10] object-cover shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]" whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }} />
              </div>
              <span className="text-xs font-mono text-sky-400 font-bold">{art.category} • {art.date}</span>
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}