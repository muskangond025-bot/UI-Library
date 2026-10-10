import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Compass } from 'lucide-react';

export function AboutMissionVision7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl p-1 bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 shadow-2xl">
          <div className="bg-slate-950 rounded-[23px] p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 border-r border-slate-800 pr-6">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase">[CHROME_MISSION]</span>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">PRECISION PURPOSE</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{settings.mission || 'Engineering chrome metallic UI components built for high-contrast visibility.'}</p>
            </div>
            <div className="space-y-4 pl-6">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase">[CHROME_VISION]</span>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">METALLIC FUTURE</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{settings.vision || 'Building high-performance software interfaces engineered for the next decade.'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
