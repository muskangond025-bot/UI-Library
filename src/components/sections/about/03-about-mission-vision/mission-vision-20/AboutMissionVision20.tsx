import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function AboutMissionVision20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-slate-900 via-slate-950 to-black border border-fuchsia-500/30 rounded-[3rem] p-8 sm:p-14 shadow-[0_0_60px_rgba(217,70,239,0.2)] flex flex-col items-center text-center space-y-8">
          <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
            <Sparkles className="w-4 h-4" /> ULTRA FULL-BLEED VISION #20
          </span>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-fuchsia-300 max-w-4xl leading-[1.12]">
            OUR FLAGSHIP MISSION & FUTURE HORIZON
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl pt-4">
            <div className="space-y-3 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-fuchsia-300 uppercase">FLAGSHIP MISSION</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{settings.mission || 'To empower engineers and designers globally with ultra-performant UI architectures.'}</p>
            </div>
            <div className="space-y-3 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-fuchsia-300 uppercase">FLAGSHIP VISION</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{settings.vision || 'To define the gold standard of frictionless, human-centric software interface design.'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
