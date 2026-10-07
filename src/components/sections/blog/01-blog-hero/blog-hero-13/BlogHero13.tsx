import React from 'react';
import { motion } from 'framer-motion';
import { Orbit, ArrowRight } from 'lucide-react';

export function BlogHero13({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-cyan-900/40 shadow-2xl overflow-hidden relative min-h-[500px] flex items-center">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-20 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="w-[500px] h-[500px] rounded-full border-2 border-dashed border-cyan-400"
        />
      </div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-700/50 text-cyan-400 text-xs font-mono uppercase"
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>CIRCULAR ORBIT DISCOVERY</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          DEEP SPACE TELEMETRY & QUANTUM SENSORS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg font-light max-w-xl"
        >
          Analyzing the first gravitational wave anomalies recorded by lunar radio arrays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2"
        >
          <button className="px-7 py-3.5 bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 hover:bg-cyan-300 transition-all">
            <span>EXPLORE TELEMETRY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero13;
