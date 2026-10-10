import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

export function AboutBrandStory13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-14 backdrop-blur-xl relative overflow-hidden shadow-2xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 shrink-0" /> BENTO STACKED GLASS #13
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            {settings.title || 'ASYMMETRIC STACKED GLASS BRAND MANIFESTO'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {settings.excerpt || 'Combining primary featured hero glass cards with layered secondary detail panels to present modular company narratives.'}
          </p>
          <div className="pt-4 border-t border-slate-800">
            <motion.button whileHover={{ scale: 1.03 }} className="px-7 py-3.5 bg-teal-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2">
              <span>Read Manifesto</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
