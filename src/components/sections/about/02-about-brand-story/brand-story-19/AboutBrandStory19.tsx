import React from 'react';
import { motion } from 'framer-motion';
import { Stamp, ArrowRight } from 'lucide-react';

export function AboutBrandStory19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-amber-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900 border border-amber-800/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.9),inset_-3px_-3px_6px_rgba(255,255,255,0.05)] space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg shadow-inner uppercase tracking-wider">
            <Stamp className="w-3.5 h-3.5 shrink-0" /> EMBOSSED RETRO #19
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-amber-50 leading-[1.15] tracking-tight">
            {settings.title || 'EMBOSSED VINTAGE NEUMORPHIC HERITAGE'}
          </h2>
          <p className="text-amber-200/80 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            {settings.excerpt || 'Warm retro vintage tones, pressed debossed typography badges, and organic tactile feel engineered for classic archives.'}
          </p>
          <div className="pt-4 border-t border-amber-900/50">
            <motion.button whileHover={{ scale: 1.03 }} className="px-7 py-3.5 bg-amber-700 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-2">
              <span>Read Vintage Heritage</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
