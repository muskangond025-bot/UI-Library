import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

export function BlogRecentArticles1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> GLASS RECENT TIMELINE #01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">{settings.sectionTitle || 'RECENTLY PUBLISHED'}</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">{settings.sectionSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-amber-400">
                <span className="px-2.5 py-1 bg-amber-500/10 rounded-full border border-amber-500/30">{art.publishedTime}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
              </div>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white hover:text-amber-300 transition-colors">{art.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}