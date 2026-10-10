import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Target, Compass } from 'lucide-react';

export function AboutMissionVision4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 relative"
          >
            <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl translate-x-3 translate-y-3 blur-sm border border-emerald-500/20 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold rounded uppercase">
                <Target className="w-3.5 h-3.5" /> SPATIAL MISSION #04
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">PRECISION PURPOSE</h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                {settings.mission || 'Building multi-tiered spatial design systems that elevate readability and content indexing.'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 relative"
          >
            <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl translate-x-3 translate-y-3 blur-sm border border-emerald-500/20 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold rounded uppercase">
                <Compass className="w-3.5 h-3.5" /> SPATIAL VISION #04
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">SPATIAL ELEVATION</h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                {settings.vision || 'A futuristic ecosystem of layered UI surfaces where every element occupies distinct depth.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
