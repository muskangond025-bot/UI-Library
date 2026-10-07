import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function BlogHero8({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-slate-950 text-slate-200 rounded-3xl p-8 sm:p-16 border border-slate-800 font-mono shadow-2xl">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-emerald-400 border-b border-slate-800 pb-3 flex justify-between"
        >
          <span>SYS_JOURNAL_V8.0</span>
          <span>EST. READ: 5M</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
        >
          OPTIMIZING LARGE LANGUAGE MODEL INFERENCE AT SCALE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed"
        >
          A comprehensive breakdown of speculative decoding, vLLM paging techniques, and hardware-level quantization strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-4 border-t border-slate-800 flex items-center justify-between"
        >
          <div className="text-xs text-slate-500">AUTHORED BY AI LABS RESEARCH TEAM</div>
          <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md inline-flex items-center gap-2 transition-all">
            <span>READ PAPER</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero8;
