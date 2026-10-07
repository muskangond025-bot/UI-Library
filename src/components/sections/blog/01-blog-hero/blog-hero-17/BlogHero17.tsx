import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function BlogHero17({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-16 border border-slate-800 shadow-2xl overflow-hidden min-h-[520px] flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80"
          alt="Abstract Glass Background"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 backdrop-blur-xl bg-slate-900/60 border border-white/20 p-8 sm:p-14 rounded-3xl max-w-3xl text-center space-y-6 shadow-2xl"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-mono uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FROSTED GLASS MORPHISM</span>
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          NEXT-GEN ETHICAL AI GOVERNANCE FRAMEWORKS
        </h1>

        <p className="text-slate-200 text-sm sm:text-base font-light max-w-xl mx-auto">
          Balancing model auditability, data provenance, and continuous open-source innovation.
        </p>

        <button className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 transition-all shadow-lg">
          <span>EXPLORE WHITE PAPER</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}

export default BlogHero17;
