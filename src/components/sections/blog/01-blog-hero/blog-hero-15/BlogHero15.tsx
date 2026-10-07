import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function BlogHero15({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-stone-100 text-stone-900 rounded-3xl p-8 sm:p-16 border border-stone-300 font-sans shadow-xl">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between items-center text-xs font-mono border-b border-stone-300 pb-4 text-stone-500"
        >
          <span>SWISS STYLE ESSAY • NO. 15</span>
          <span>ZÜRICH, CH</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-7xl font-black tracking-tighter leading-none text-stone-950 uppercase"
        >
          TYPOGRAPHIC RIGOR IN DIGITAL AGE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed"
        >
          Reassessing grid structures, optical leading, and rag control across fluid responsive layouts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 border-t border-stone-300 flex justify-between items-center"
        >
          <span className="text-xs font-mono text-stone-500">BY JOSEF MÜLLER</span>
          <button className="px-6 py-3 bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-widest rounded-lg inline-flex items-center gap-2 transition-all">
            <span>READ ESSAY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero15;
