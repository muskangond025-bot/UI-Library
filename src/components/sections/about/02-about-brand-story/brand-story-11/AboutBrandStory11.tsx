import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

export function AboutBrandStory11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto relative pt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[12px_12px_0px_#1c1917] relative space-y-6"
        >
          <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded-md shadow-md flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 shrink-0" /> SKEUOMORPHIC #11
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 tracking-tight leading-[1.15]">
            {settings.title || 'TACTILE SKEUOMORPHIC FOUNDER JOURNAL'}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg leading-relaxed font-sans max-w-3xl">
            {settings.excerpt || 'Bringing organic paper fold textures, embossed margins, and classic editorial weight into modern responsive layouts.'}
          </p>
          <div className="pt-6 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-400">
            <span>FOUNDER NOTE • EST 2019</span>
            <button className="underline text-amber-400 font-bold flex items-center gap-1 text-xs uppercase tracking-wider">
              <span>Open Journal Note</span> <ArrowRight className="w-3.5 h-3.5 inline" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
