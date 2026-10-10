import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';

export function AboutBrandStory17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden min-h-[480px] lg:min-h-[550px] flex items-end p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-2xl group"
        >
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Brand Film Poster" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          <div className="relative z-10 space-y-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md shadow-md">
              <Flame className="w-3.5 h-3.5 shrink-0" /> BRAND FILM COVER #17
            </span>
            <h2 className="text-3xl sm:text-6xl font-black text-white leading-[1.1]">
              {settings.title || 'FULL-BLEED BRAND FILM & STORYOVERLAY'}
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              {settings.excerpt || 'Full viewport hero imagery layered under floating gradient text overlays for maximum cinematic brand impact.'}
            </p>
            <div className="pt-2">
              <motion.button whileHover={{ scale: 1.04 }} className="px-8 py-4 bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl flex items-center gap-2">
                <span>Watch Brand Film</span> <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
