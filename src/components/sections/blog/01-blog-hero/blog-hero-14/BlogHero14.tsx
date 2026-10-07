import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';

export function BlogHero14({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-black text-emerald-400 rounded-3xl p-8 sm:p-14 border border-emerald-900/60 shadow-2xl font-mono relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black select-none pointer-events-none">
        0101
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs rounded-md"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>CYBERPUNK LOG ENTRY #9021</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-white leading-tight uppercase tracking-wide"
        >
          DECENTRALIZED MEMORY NETWORKS & NEURAL IMPLANTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-emerald-500/80 text-sm sm:text-base leading-relaxed"
        >
          Protocol specifications for zero-knowledge data synchronization between biological synapses and decentralized cloud vaults.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-4"
        >
          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-widest rounded-md inline-flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20">
            <span>DECRYPT LOG</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero14;
