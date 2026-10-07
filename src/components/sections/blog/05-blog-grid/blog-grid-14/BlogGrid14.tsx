import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-full">
          LIQUID GLASS CAPSULE GRID #14
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }} whileHover={{ scale: 1.03 }} className="bg-slate-900/60 border border-blue-500/30 rounded-3xl p-6 backdrop-blur-xl space-y-3">
              <h3 className="text-lg font-bold text-white">{art.title}</h3>
              <p className="text-slate-300 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}