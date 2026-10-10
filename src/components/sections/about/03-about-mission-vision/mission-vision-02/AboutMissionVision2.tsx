import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Sparkles } from 'lucide-react';

export function AboutMissionVision2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-900 shadow-[18px_18px_36px_#0b0f19,-18px_-18px_36px_#1b253b] border border-slate-800/80 space-y-6"
          >
            <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-2">
              <Target className="w-4 h-4" /> TACTILE MISSION #02
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {settings.missionTitle || 'ENGINEERING REALISTIC TACTILE EXPERIENCE'}
            </h3>
            <p className="text-slate-400 text-base leading-relaxed">
              {settings.mission || 'We aim to restore physical sensory weight to digital products through realistic dual-shadow depth dynamics and tactile feedback.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-900 shadow-[18px_18px_36px_#0b0f19,-18px_-18px_36px_#1b253b] border border-slate-800/80 space-y-6"
          >
            <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-2">
              <Compass className="w-4 h-4" /> TACTILE VISION #02
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {settings.visionTitle || 'PIONEERING SOFT SURFACE DESIGN'}
            </h3>
            <p className="text-slate-400 text-base leading-relaxed">
              {settings.vision || 'A digital world where digital elements respond with natural physical bounce and intuitive tactile feedback.'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
