import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function AboutMissionVision15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.3)]">
          <div className="bg-slate-950 rounded-[22px] p-8 space-y-4">
            <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs font-mono font-bold rounded-full uppercase">NEON MISSION</span>
            <h3 className="text-2xl font-black text-white">RAINBOW PURPOSE</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{settings.mission || 'Vibrant multi-tinted neon border gradient framing mission cards.'}</p>
          </div>
        </div>
        <div className="p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <div className="bg-slate-950 rounded-[22px] p-8 space-y-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold rounded-full uppercase">NEON VISION</span>
            <h3 className="text-2xl font-black text-white">RAINBOW VISION</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{settings.vision || 'Energetic rainbow neon border animations across dark surfaces.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
