import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass } from 'lucide-react';

export function AboutMissionVision11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto bg-stone-950 border border-stone-800 rounded-2xl p-8 shadow-[12px_12px_0px_#1c1917] relative space-y-6">
        <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded-md shadow-md flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5" /> FOUNDER COMPASS #11
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3">
            <h3 className="text-2xl font-serif font-bold text-stone-100">JOURNAL MISSION</h3>
            <p className="text-stone-400 text-sm font-sans leading-relaxed">{settings.mission || 'Restoring paper fold textures and classic typography weight into digital products.'}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-serif font-bold text-stone-100">JOURNAL VISION</h3>
            <p className="text-stone-400 text-sm font-sans leading-relaxed">{settings.vision || 'A harmonious blend of legacy print craftsmanship and responsive web tech.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
