import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Compass } from 'lucide-react';

export function AboutMissionVision5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-indigo-950/40 text-indigo-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-indigo-900/60 rounded-[2.5rem] p-8 sm:p-12 border border-indigo-400/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl space-y-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-300/40 text-indigo-200 text-xs font-mono font-extrabold uppercase tracking-widest inline-flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-300" /> CLAY MISSION #05
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">ORGANIC HUMAN FOCUS</h3>
            <p className="text-indigo-200/90 text-base leading-relaxed">
              {settings.mission || 'Creating soft organic volume and friendly tactile components that make digital interaction comforting and accessible.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-indigo-900/60 rounded-[2.5rem] p-8 sm:p-12 border border-indigo-400/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl space-y-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-300/40 text-indigo-200 text-xs font-mono font-extrabold uppercase tracking-widest inline-flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-300" /> CLAY VISION #05
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">SOFT VOLUME FUTURE</h3>
            <p className="text-indigo-200/90 text-base leading-relaxed">
              {settings.vision || 'A design ecosystem standard where digital software feels friendly, tactile, and sculpturally balanced.'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
