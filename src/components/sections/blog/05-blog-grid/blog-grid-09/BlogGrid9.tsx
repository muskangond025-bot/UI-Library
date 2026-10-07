import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">SPLIT HERO + GRID #09</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -5 }} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-xl object-cover" />
              <span className="text-xs font-mono text-blue-400">{art.category}</span>
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}