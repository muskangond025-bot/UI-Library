import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon } from 'lucide-react';

export function AboutMissionVision10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto p-8 sm:p-14 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> DARK VELVET RADAR #10
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          <div className="space-y-3">
            <h3 className="text-2xl font-black text-white">VELVET MISSION</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">{settings.mission || 'Combining deep dark velvet aesthetics with ultra-high contrast focus.'}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-black text-white">VELVET VISION</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">{settings.vision || 'Setting gold-standard design guidelines for high-end digital luxury interfaces.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
