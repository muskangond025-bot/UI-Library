import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function AboutMissionVision13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full uppercase">
          <Layers className="w-3.5 h-3.5" /> BENTO QUADRANTS #13
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">STACKED MISSION</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{settings.mission || 'Combining hero glass cards with layered secondary detail panels.'}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">STACKED VISION</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{settings.vision || 'Building modular glass tile components for complex web layouts.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
