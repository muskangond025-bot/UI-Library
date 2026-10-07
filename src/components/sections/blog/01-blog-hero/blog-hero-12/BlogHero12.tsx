import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export function BlogHero12({ data, section }: { data?: any; section?: any }) {
  const steps = [
    { year: '2022', text: 'Monolithic Architectures' },
    { year: '2024', text: 'Micro-Frontend Transition' },
    { year: '2026', text: 'Edge AI Edge-native Nodes' },
  ];

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>TIMELINE JOURNAL</span>
        </motion.div>

        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          DECADAL EVOLUTION OF FRONTEND INFRASTRUCTURE
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-b border-slate-800 py-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.year}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800"
            >
              <div className="text-amber-400 font-mono text-xl font-bold">{s.year}</div>
              <div className="text-slate-300 text-xs font-medium">{s.text}</div>
            </motion.div>
          ))}
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Tracing how rendering patterns moved from server HTML to client SPAs, island hydration, and now real-time edge streaming.
        </p>

        <button className="px-7 py-3.5 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 hover:bg-amber-300 transition-all">
          <span>READ TIMELINE ARTICLE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default BlogHero12;
