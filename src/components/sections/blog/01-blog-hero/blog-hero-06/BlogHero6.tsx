import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

export function BlogHero6({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-16 border border-rose-900/40 shadow-2xl overflow-hidden relative">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>KINETIC TYPOGRAPHY JOURNAL</span>
        </motion.div>

        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300 uppercase"
          >
            DISRUPTIVE TECH
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-7xl font-serif italic text-slate-200"
          >
            & Human Psychology
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl font-light"
        >
          Unpacking how hyper-fast feedback loops in modern software alter attention spans, memory retention, and creative output.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-4"
        >
          <button className="group px-8 py-4 bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-3 transition-all shadow-lg shadow-rose-500/20">
            <span>START READING</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero6;
