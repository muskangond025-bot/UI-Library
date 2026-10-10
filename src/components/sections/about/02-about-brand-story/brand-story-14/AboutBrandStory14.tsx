import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, ArrowRight } from 'lucide-react';

export function AboutBrandStory14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/60 border border-blue-500/30 rounded-[3rem] p-6 sm:p-10 lg:p-14 backdrop-blur-2xl text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase rounded-full tracking-wider">
            <Droplet className="w-3.5 h-3.5 shrink-0" /> LIQUID GLASS CAPSULE #14
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.15]">
            {settings.title || 'FLOATING LIQUID CAPSULE BRAND PURPOSE'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {settings.excerpt || 'Curved capsule container design featuring floating glass highlight aesthetics and centered brand storytelling focus.'}
          </p>
          <div className="pt-4 flex justify-center">
            <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-blue-500 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2">
              <span>Explore Capsule</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
