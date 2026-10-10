import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function AboutMissionVision18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_50px_rgba(34,211,238,0.25)] space-y-6">
        <span className="px-4 py-1.5 bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">PRISMATIC #18</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          <div className="space-y-3">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300">PRISMATIC MISSION</h3>
            <p className="text-cyan-100/90 text-sm leading-relaxed">{settings.mission || 'Multi-tinted rainbow light refractions creating dynamic chromatic edge blurs.'}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300">PRISMATIC VISION</h3>
            <p className="text-cyan-100/90 text-sm leading-relaxed">{settings.vision || 'Striking visual shimmer across modern glass interface cards.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
