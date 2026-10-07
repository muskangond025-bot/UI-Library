import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

export function BlogHero10({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-indigo-900/50 shadow-2xl overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>3D PERSPECTIVE COVER</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            QUANTUM COMPUTING & ENCRYPTION SHIFTS
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Preparing cloud infrastructure for post-quantum cryptography algorithms before harvest-now-decrypt-later exploits emerge.
          </p>
          <button className="px-7 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20">
            <span>READ FULL ANALYSIS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotateY: 25, rotateX: 10, scale: 0.9 }}
          animate={{ opacity: 1, rotateY: -5, rotateX: 5, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl bg-slate-900 transform perspective-1000"
        >
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80"
            alt="3D Quantum abstraction"
            className="w-full h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-indigo-300">
            [FIG 01: QUANTUM ENTANGLEMENT STATE]
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero10;
