import React from 'react';
import { motion } from 'framer-motion';

export function BlogGrid8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <motion.div className="absolute top-1/2 left-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[110px] opacity-30 pointer-events-none" animate={{ x: ['-50%', '-45%', '-55%', '-50%'], y: ['-50%', '-55%', '-45%', '-50%'], scale: [1, 1.1, 0.95, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
          AURORA MESH TRIPLE GRID #08
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ y: -6, backdropFilter: 'blur(30px)' }} className="bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-6 space-y-4 shadow-2xl">
              <img src={art.image} alt={art.title} className="w-full aspect-[16/10] rounded-2xl object-cover" />
              <h3 className="text-xl font-bold text-white">{art.title}</h3>
              <p className="text-purple-100/70 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}