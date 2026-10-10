import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, ArrowRight } from 'lucide-react';

export function AboutBrandStory16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-4 border-orange-500 pl-6 sm:pl-10 space-y-6 py-6 bg-slate-900/40 rounded-r-3xl p-6 sm:p-10 border-y border-r border-slate-800 backdrop-blur-md"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 font-bold tracking-widest uppercase bg-orange-500/10 px-3 py-1 rounded border border-orange-500/30">
            <Sliders className="w-3.5 h-3.5 shrink-0" /> WIREFRAME #16
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]">
            {settings.title || 'ARCHITECTURAL WIREFRAME BRAND ALIGNMENT'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {settings.excerpt || 'Clean linear guidelines, structural alignment gridlines, and minimalist typography focus for high-precision design teams.'}
          </p>
          <div className="pt-4 border-t border-slate-800">
            <motion.button whileHover={{ scale: 1.03 }} className="px-7 py-3.5 border border-orange-500/60 text-orange-400 hover:bg-orange-500/10 font-mono text-xs uppercase tracking-wider rounded-xl flex items-center gap-2">
              <span>Inspect Alignment</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
