import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu, Lock, ArrowUpRight } from 'lucide-react';

export function AboutPartnersBrands2() {
  const brands = [
    { name: 'Quantum Core Systems', status: 'Active Node', hash: '0x992A...44F1' },
    { name: 'CyberSec Shield Labs', status: 'Audited Partner', hash: '0x11B8...99E0' },
    { name: 'Neural AI Tech Alliance', status: 'Premier Tier', hash: '0x77C3...D102' },
    { name: 'Zero Trust Foundation', status: 'Global Sponsor', hash: '0x44D9...F992' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> DARK OBSIDIAN GLASS #02 • ANIMATION: NEON CYAN OUTLINE PULSE & LASER SWEEP
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-400">
            Dark Obsidian Brand Alliance
          </h2>
          <p className="opacity-70 text-base sm:text-lg">
            High-contrast obsidian glass with glowing cyan border reflections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 hover:border-cyan-500/60 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{b.status}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{b.name}</h3>
                  <span className="text-xs font-mono text-zinc-500 block mt-1">Hash: {b.hash}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                <span>VERIFIED IDENTITY</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
