import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock, User, Bookmark } from 'lucide-react';

export function BlogHero1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data || {};
  const category = settings.category || 'EDITORIAL / INSIGHTS';
  const title = settings.title || 'THE FUTURE OF SUSTAINABLE DIGITAL COMMERCE';
  const description = settings.description || 'Exploring how zero-carbon logistics and ethical AI-driven personalization are reshaping global retail experiences in 2026.';
  const author = settings.author || 'Elena Rostova';
  const date = settings.date || 'OCT 07, 2026';
  const readTime = settings.readTime || '6 MIN READ';
  const image = settings.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80';

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl">
      <div className="absolute inset-0 overflow-hidden opacity-35">
        <motion.img
          src={image}
          alt="Editorial Cover"
          className="w-[120%] h-full object-cover max-w-none"
          animate={{ scale: [1, 1.05, 1], x: ['0%', '-5%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col justify-center min-h-[520px]">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{category}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium pt-2 border-t border-slate-800/80"
          >
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-white font-semibold">{author}</span>
            </div>
            <span>•</span>
            <div>{date}</div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{readTime}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button className="group inline-flex items-center gap-3 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg transition-all duration-300">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="p-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded-xl transition-all">
              <Bookmark className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BlogHero1;
