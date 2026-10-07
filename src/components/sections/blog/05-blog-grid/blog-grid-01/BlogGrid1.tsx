import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export function BlogGrid1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> GLASS BENTO GRID #01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">{settings.sectionTitle || 'EDITORIAL GRID'}</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">{settings.sectionSubtitle}</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }} className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/40 rounded-3xl p-5 backdrop-blur-xl shadow-2xl flex flex-col justify-between group">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                <motion.img src={art.image} alt={art.title} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-[10px] font-mono font-bold text-amber-400 border border-white/10">
                  {art.category}
                </span>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>{art.date}</span> • <span>{art.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">{art.title}</h3>
                <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">{art.author?.name}</span>
                <motion.button whileHover={{ x: 5 }} className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">Read <ArrowRight className="w-3.5 h-3.5" /></motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}