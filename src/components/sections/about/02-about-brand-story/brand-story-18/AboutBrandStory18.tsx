import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function AboutBrandStory18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_0_50px_rgba(34,211,238,0.25)] space-y-6 relative overflow-hidden"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full tracking-wider">
            <Sparkles className="w-3.5 h-3.5 shrink-0" /> PRISMATIC #18
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300 leading-[1.15]">
            {settings.title || 'PRISMATIC CHROMATIC REFRACTION GLASS'}
          </h2>
          <p className="text-cyan-100/90 text-base sm:text-lg leading-relaxed max-w-3xl">
            {settings.excerpt || 'Multi-tinted rainbow light refractions creating dynamic chromatic edge blurs on glass cards with striking visual shimmer.'}
          </p>
          <div className="pt-4 border-t border-cyan-400/20">
            <motion.button whileHover={{ scale: 1.04 }} className="px-8 py-4 bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-2">
              <span>View Prismatic Story</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
