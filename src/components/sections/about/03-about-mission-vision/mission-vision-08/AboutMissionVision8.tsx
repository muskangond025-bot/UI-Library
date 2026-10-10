import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Compass } from 'lucide-react';

export function AboutMissionVision8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-pink-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900/40 border border-white/15 backdrop-blur-3xl rounded-3xl p-8 space-y-4">
          <span className="text-xs font-mono text-purple-300 font-bold uppercase">AURORA MISSION</span>
          <h3 className="text-3xl font-black text-white">AURORA PURPOSE</h3>
          <p className="text-purple-100/90 text-sm leading-relaxed">{settings.mission || 'Creating fluid, dynamic gradient mesh UI experiences that inspire.'}</p>
        </div>
        <div className="bg-slate-900/40 border border-white/15 backdrop-blur-3xl rounded-3xl p-8 space-y-4">
          <span className="text-xs font-mono text-pink-300 font-bold uppercase">AURORA VISION</span>
          <h3 className="text-3xl font-black text-white">AURORA HORIZON</h3>
          <p className="text-purple-100/90 text-sm leading-relaxed">{settings.vision || 'A colorful world of digital interfaces blending fluid art and computer science.'}</p>
        </div>
      </div>
    </section>
  );
}
