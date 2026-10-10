import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export function AboutMissionVision17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden min-h-[420px] flex items-end p-8 sm:p-12 border border-slate-800 shadow-2xl group">
        <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Cinema Vision" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded">CINEMA MISSION</span>
            <p className="text-slate-200 text-sm leading-relaxed">{settings.mission || 'Full viewport hero imagery layered under floating text curtains.'}</p>
          </div>
          <div className="space-y-2">
            <span className="px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded">CINEMA VISION</span>
            <p className="text-slate-200 text-sm leading-relaxed">{settings.vision || 'Immersive storytelling overlays for high-impact brand launches.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
