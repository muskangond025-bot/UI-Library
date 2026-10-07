import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Flame } from 'lucide-react';

export function BlogPopularArticles3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-cyan-400 font-mono relative overflow-hidden">
      <motion.div className="absolute inset-x-0 h-0.5 bg-cyan-400/50 blur-sm pointer-events-none" animate={{ y: ['0%', '100%', '0%'] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        <div className="flex items-center gap-2 text-xs text-cyan-400"><Terminal className="w-4 h-4 animate-pulse" /> [HOLO_CYBER_TRENDING_MATRIX // 03]</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(6,182,212,0.4)' }} className="border border-cyan-500/40 p-5 rounded-xl bg-slate-950 space-y-3">
              <div className="flex justify-between items-center text-xs text-cyan-300">
                <span className="flex items-center gap-1"><Flame className="w-4 h-4 text-cyan-400 animate-pulse" /> RANK #{art.rank}</span>
                <span>{art.views}</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase">{art.title}</h3>
              <p className="text-xs text-cyan-200/60 font-sans line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}