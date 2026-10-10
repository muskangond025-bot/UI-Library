import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Clock, ArrowRight, User } from 'lucide-react';

export function AboutBrandStory6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
                <LayoutGrid className="w-3.5 h-3.5 shrink-0" /> FROSTED BENTO #06
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
                {settings.title || 'MULTI-TILE BENTO BRAND MILESTONE STORY'}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {settings.excerpt || 'Segmenting company evolution into structured frosted bento components for seamless readability and high-impact storytelling.'}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4 relative z-10">
              <span className="text-xs text-slate-400 font-mono">GLOBAL HEADQUARTERS • EST. 2021</span>
              <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-rose-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2">
                <span>View Timeline</span> <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden min-h-[320px] relative group flex flex-col justify-end p-6"
          >
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"} alt="Bento Brand" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-md border border-slate-800 text-rose-400 text-xs font-mono font-bold inline-block">MILESTONE 06</span>
              <p className="text-xs text-slate-300 font-mono">Scaling global impact across 40+ countries</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
