import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowRight } from 'lucide-react';

const filterCategories = ['ALL', 'AI & ML', 'CYBERSECURITY', 'DESIGN SYSTEMS', 'QUANTUM'];

export function BlogHero19({ data, section }: { data?: any; section?: any }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
          <Filter className="w-4 h-4" />
          <span>FILTER RAIL JOURNAL</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeFilter === cat
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl space-y-6">
        <motion.h1
          key={activeFilter}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-black text-white leading-tight"
        >
          CURATED HIGHLIGHTS FOR [{activeFilter}]
        </motion.h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Deep-dive analysis and technical reports dynamically filtered for senior engineering leaders and architects.
        </p>

        <button className="px-7 py-3.5 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 hover:bg-amber-300 transition-all">
          <span>VIEW FILTERED LIST</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default BlogHero19;
