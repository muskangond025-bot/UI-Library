import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Target } from 'lucide-react';

export function AboutMissionVision12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-emerald-400 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto border-2 border-emerald-500/50 p-8 rounded-xl bg-emerald-950/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative space-y-6">
        <div className="absolute -top-3.5 left-6 px-3 py-0.5 bg-black border border-emerald-500/60 text-xs text-emerald-400 font-bold uppercase">
          [HUD_TARGET_TELEMETRY // ID: 12]
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          <div className="space-y-3 p-4 border border-emerald-500/30 rounded bg-black/40">
            <span className="text-xs font-bold text-white uppercase">[MISSION_VECTOR]</span>
            <p className="text-emerald-300/80 text-sm font-sans leading-relaxed">{settings.mission || 'Deploying telemetry-tested components for developer portals.'}</p>
          </div>
          <div className="space-y-3 p-4 border border-emerald-500/30 rounded bg-black/40">
            <span className="text-xs font-bold text-white uppercase">[VISION_CROSSHAIR]</span>
            <p className="text-emerald-300/80 text-sm font-sans leading-relaxed">{settings.vision || 'Establishing sci-fi level HUD telemetry standards across web apps.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
