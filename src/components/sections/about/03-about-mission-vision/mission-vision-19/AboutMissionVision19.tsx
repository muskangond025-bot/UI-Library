import React from 'react';
import { motion } from 'framer-motion';
import { Stamp } from 'lucide-react';

export function AboutMissionVision19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-amber-100 overflow-hidden">
      <div className="max-w-6xl mx-auto bg-zinc-900 border border-amber-800/40 rounded-3xl p-8 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.9),inset_-3px_-3px_6px_rgba(255,255,255,0.05)] space-y-6">
        <span className="px-3.5 py-1.5 bg-zinc-950 text-amber-400 text-xs font-mono font-bold rounded-lg uppercase">EMBOSSED RETRO #19</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          <div className="space-y-3">
            <h3 className="text-2xl font-serif font-black text-amber-50">STAMPED MISSION</h3>
            <p className="text-amber-200/80 text-sm font-sans leading-relaxed">{settings.mission || 'Pressed debossed typography badges and warm vintage film grain textures.'}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-serif font-black text-amber-50">STAMPED VISION</h3>
            <p className="text-amber-200/80 text-sm font-sans leading-relaxed">{settings.vision || 'Organic tactile feel engineered for enduring brand legacy.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
