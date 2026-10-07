import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function BlogHero5({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
      <div className="border border-slate-700 p-6 sm:p-10 rounded-2xl bg-slate-950/60 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 text-xs font-mono text-slate-400">
          <span>ISSUE #42 • FALL 2026 EDITION</span>
          <span className="text-amber-400 font-bold uppercase">EDITORIAL SPREAD</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight text-white">
              ARCHITECTURAL MINIMALISM IN HIGH-DENSITY CITIES
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Examining structural timber innovation, passive cooling micro-facades, and vertical forestry in Tokyo and Oslo.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button className="px-6 py-3 bg-white text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg inline-flex items-center gap-2 hover:bg-amber-300 transition-colors">
                <span>READ MAGAZINE SPREAD</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-700 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
              alt="Architecture minimal"
              className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BlogHero5;
