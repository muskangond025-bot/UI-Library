import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, User } from 'lucide-react';

export function BlogLatestArticles1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" /> GLASS BENTO FEED #01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
              {settings.sectionTitle || 'LATEST INSIGHTS & DISCOVERIES'}
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">{settings.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-[10px] font-mono font-bold text-amber-400 border border-white/10">
                  {art.category}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>{art.date}</span> • <span>{art.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug hover:text-amber-300 transition-colors cursor-pointer">
                  {art.title}
                </h3>
                <p className="text-slate-400 text-xs line-clamp-2">{art.excerpt}</p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img src={art.author?.avatar} alt={art.author?.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-slate-300 font-medium">{art.author?.name}</span>
                </div>
                <button className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">Read <ArrowRight className="w-3.5 h-3.5" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}