import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export function BlogHero2({ data, section }: { data?: any; section?: any }) {
  const title = "REDEFINING DESIGN SYSTEMS IN MODERN TECH";
  const subtitle = "A minimalist dive into micro-interactions, accessibility guidelines, and scalable tokens for enterprise products.";
  const author = "Marcus Vance";
  const time = "4 Min Read";

  return (
    <div className="w-full bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-14 border border-stone-800 shadow-xl overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono tracking-widest uppercase bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded-md"
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Minimalist Edition</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight text-stone-50 tracking-normal"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-400 text-base sm:text-lg max-w-2xl font-sans font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400"
        >
          <div>BY <span className="text-stone-200 uppercase font-semibold">{author}</span> • {time}</div>
          <button className="inline-flex items-center gap-2 text-stone-200 hover:text-emerald-400 transition-colors uppercase tracking-wider font-semibold">
            <span>Read Story</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero2;
