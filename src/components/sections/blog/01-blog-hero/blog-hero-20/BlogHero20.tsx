import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

export function BlogHero20({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white rounded-3xl p-8 sm:p-16 border border-amber-500/30 shadow-2xl relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest"
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>AWARD WINNING ANNUAL FLAGSHIP REPORT</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-7xl font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-yellow-400"
        >
          GLOBAL DIGITAL TRANSFORMATION INDEX 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl"
        >
          Synthesizing data from 12,000 global enterprises on AI adoption ROI, cloud infrastructure consolidation, and workforce augmentation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4"
        >
          <button className="px-9 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-amber-500/20 hover:scale-105 transition-all inline-flex items-center gap-3">
            <span>DOWNLOAD REPORT (PDF)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero20;
