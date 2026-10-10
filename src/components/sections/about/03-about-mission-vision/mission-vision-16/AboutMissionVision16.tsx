import React from 'react';
import { motion } from 'framer-motion';
import { Sliders } from 'lucide-react';

export function AboutMissionVision16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto border-l-4 border-orange-500 pl-8 space-y-6 py-4 bg-slate-900/40 rounded-r-3xl p-8 border-y border-r border-slate-800">
        <span className="text-xs font-mono text-orange-400 font-bold uppercase">WIREFRAME #16</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white uppercase">LINEAR MISSION</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{settings.mission || 'Structural grid alignment and minimalist typographic focus.'}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white uppercase">LINEAR VISION</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{settings.vision || 'Architectural precision guidelines for enterprise applications.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
