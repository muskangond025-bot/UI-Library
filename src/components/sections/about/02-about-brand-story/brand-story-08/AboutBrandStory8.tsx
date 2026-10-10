import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';

export function AboutBrandStory8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[110px] pointer-events-none"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/40 border border-white/15 backdrop-blur-3xl rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 shrink-0" /> AURORA MESH #08
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.15]">
            {settings.title || 'DYNAMIC AURORA FLUID MESH HERITAGE'}
          </h2>
          <p className="text-purple-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
            {settings.excerpt || 'Blending vivid liquid gradient meshes with ultra-clear frosted glass overlays to reflect our creative brand essence.'}
          </p>
          <div className="pt-4 border-t border-white/10">
            <motion.button whileHover={{ scale: 1.04 }} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2">
              <span>Explore Aurora Story</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
