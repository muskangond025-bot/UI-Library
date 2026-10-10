import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function AboutBrandStory20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-r from-slate-900 via-slate-950 to-black border border-fuchsia-500/30 rounded-[3rem] p-6 sm:p-12 lg:p-16 shadow-[0_0_60px_rgba(217,70,239,0.2)] flex flex-col items-center text-center space-y-8 relative overflow-hidden"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
            <Sparkles className="w-4 h-4 shrink-0" /> ULTRA FULL-BLEED OVERLAY #20
          </span>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-fuchsia-300 max-w-4xl leading-[1.12]">
            {settings.title || 'ULTRA IMMERSIVE FULL-BLEED BRAND MANIFESTO'}
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
            {settings.excerpt || 'Maximum visual weight flagship brand manifesto engineered with responsive multi-layered prism glass depth and pulsing background aura.'}
          </p>
          <div className="pt-2">
            <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-fuchsia-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl flex items-center gap-2">
              <span>Read Flagship Manifesto</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
