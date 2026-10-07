import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

export function BlogHero11({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full bg-slate-950 text-white rounded-3xl overflow-hidden min-h-[560px] flex items-end p-8 sm:p-16 border border-slate-800 shadow-2xl">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
          alt="Fullwidth nature editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-mono uppercase"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>FULLWIDTH ECO EDITION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-serif font-bold leading-tight text-white"
        >
          OCEAN CONSERVATION THROUGH ROBOTIC CLEANUP FLEETS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl font-light"
        >
          Deploying autonomous solar vessels to intercept microplastics in coastal estuaries before reaching open waters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2"
        >
          <button className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 transition-all">
            <span>READ FULL DISPATCH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero11;
