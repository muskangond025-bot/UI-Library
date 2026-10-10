import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Radio } from 'lucide-react';

export function AboutPartnersBrands8() {
  const partners = [
    { title: 'CYBER-CYAN-NODE-01', speed: '100 Gbps', ping: '1.2ms' },
    { title: 'NEON-RADAR-GATEWAY', speed: '400 Gbps', ping: '0.8ms' },
    { title: 'LIME-SECURITY-GRID', speed: '200 Gbps', ping: '1.5ms' },
    { title: 'QUANTUM-HUD-PARTNER', speed: '800 Gbps', ping: '0.4ms' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Radio className="w-3.5 h-3.5 animate-ping text-lime-400" /> CYBERPUNK HUD GLASS #08 • ANIMATION: SCANLINE RADAR SWEEP & LATENCY PING
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-400 font-mono">
            CYBERPUNK HUD BRAND ALLIANCE
          </h2>
          <p className="opacity-80 text-base sm:text-lg font-mono text-slate-400">
            Scanline radar sweep animations with real-time network latency HUD stats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-slate-900/90 border border-lime-500/40 hover:border-lime-400 transition-all shadow-[0_0_25px_rgba(132,204,22,0.2)] flex flex-col justify-between space-y-6 font-mono"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-lime-400 font-bold">
                  <span>SYS-STATUS: ONLINE</span>
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wider">{p.title}</h3>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex justify-between"><span>Throughput:</span><span className="text-lime-400 font-bold">{p.speed}</span></div>
                <div className="flex justify-between"><span>Latency:</span><span className="text-cyan-400 font-bold">{p.ping}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
