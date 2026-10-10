import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu, ExternalLink } from 'lucide-react';

export function AboutCertifications4() {
  const certs = [
    { title: 'Quantum Cryptography Readiness', code: 'HOLO-QC-01', level: 'Level 5' },
    { title: 'Next-Gen AI Safety Compliance', code: 'HOLO-AI-02', level: 'Tier 1' },
    { title: 'Hyperscale Cloud Architecture', code: 'HOLO-CLOUD-03', level: 'Master' },
    { title: 'Autonomous Network Security', code: 'HOLO-NET-04', level: 'Platinum' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" /> HOLOGRAPHIC FOIL #04
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Holographic Foil Certificates
          </h2>
          <p className="opacity-70 text-sm">Iridescent rainbow foil shimmer borders with dynamic light refraction.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-slate-900/90 via-purple-950/40 to-slate-900/90 backdrop-blur-xl border border-pink-500/30 hover:border-cyan-400 transition-all flex flex-col justify-between space-y-6 shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 via-cyan-500/20 to-transparent blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/10 text-pink-300 border border-white/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-mono font-bold">
                    {c.level}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
                <span>{c.code}</span>
                <span className="text-pink-400 flex items-center gap-1 font-bold">Foil Verify <ExternalLink className="w-3 h-3" /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
