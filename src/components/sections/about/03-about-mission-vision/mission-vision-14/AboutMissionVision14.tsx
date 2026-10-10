import React from 'react';
import { motion } from 'framer-motion';
import { Droplet } from 'lucide-react';

export function AboutMissionVision14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900/60 border border-blue-500/30 rounded-[2.5rem] p-8 backdrop-blur-2xl text-center space-y-4 shadow-2xl">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold uppercase rounded-full">CAPSULE MISSION</span>
          <h3 className="text-2xl font-black text-white">CURVED PURPOSE</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{settings.mission || 'Floating capsule container designs with highlighted focus.'}</p>
        </div>
        <div className="bg-slate-900/60 border border-blue-500/30 rounded-[2.5rem] p-8 backdrop-blur-2xl text-center space-y-4 shadow-2xl">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold uppercase rounded-full">CAPSULE VISION</span>
          <h3 className="text-2xl font-black text-white">CURVED HORIZON</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{settings.vision || 'Curved organic aesthetics with centered layout symmetry.'}</p>
        </div>
      </div>
    </section>
  );
}
