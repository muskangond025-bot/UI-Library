import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Cpu } from 'lucide-react';

export function AboutMissionVision3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-cyan-400 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-cyan-500/40 p-6 sm:p-10 lg:p-14 bg-slate-950/90 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] space-y-8"
        >
          <div className="flex justify-between items-center border-b border-cyan-500/30 pb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Terminal className="w-4 h-4" /> SYS.MISSION_VISION_RADAR // V3.0
            </span>
            <span className="text-[10px] text-cyan-400/70">STATUS: TARGET ACQUIRED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 border border-cyan-500/30 rounded-xl bg-slate-900/40">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">[MISSION_PROTOCOL]</span>
              <h3 className="text-2xl font-black text-white uppercase">{settings.missionTitle || 'ZERO-LATENCY CRYPTOGRAPHIC ARCHITECTURE'}</h3>
              <p className="text-cyan-200/80 text-sm font-sans leading-relaxed">
                {settings.mission || 'Engineer immutable, zero-trust cloud infrastructure that powers fault-tolerant decentralized applications at warp speed.'}
              </p>
            </div>

            <div className="space-y-4 p-6 border border-cyan-500/30 rounded-xl bg-slate-900/40">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">[VISION_TELEMETRY]</span>
              <h3 className="text-2xl font-black text-white uppercase">{settings.visionTitle || 'GLOBAL NEURAL MESH CONVERGENCE'}</h3>
              <p className="text-cyan-200/80 text-sm font-sans leading-relaxed">
                {settings.vision || 'Connecting planetary computing nodes into a unified neural grid where privacy, speed, and security co-exist seamlessly.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
