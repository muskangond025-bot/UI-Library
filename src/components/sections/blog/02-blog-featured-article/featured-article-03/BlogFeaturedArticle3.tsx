import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Activity, Cpu, Lock, Radio, CornerDownRight } from 'lucide-react';

export function BlogFeaturedArticle3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [hovered, setHovered] = useState(false);
  const [encrypted, setEncrypted] = useState(false);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-cyan-400 font-mono overflow-hidden relative">
      {/* Background Cybernetic Matrix Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-cyan-500/40 p-6 sm:p-10 lg:p-12 bg-slate-950/90 relative overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.2)] backdrop-blur-xl"
        >
          {/* Cyber Scanning Beam Animation */}
          <motion.div
            animate={{ y: ['0%', '100%', '0%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent pointer-events-none z-20 shadow-[0_0_15px_#22d3ee]"
          />

          {/* Top HUD Terminal Bar */}
          <div className="flex items-center justify-between border-b border-cyan-900/80 pb-4 mb-8 text-[11px] tracking-widest text-cyan-400/80">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>TERMINAL_ID // QUANTUM_GRID_X09</span>
            </div>
            <div className="flex items-center gap-4 hidden sm:flex">
              <span className="flex items-center gap-1.5"><Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> SIGNAL: 100%</span>
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-cyan-400" /> ENCRYPTION: ZK-SNARK</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 text-xs text-cyan-300 flex-wrap"
              >
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/50 font-bold tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  <Terminal className="w-3.5 h-3.5" /> HOLOGRAPHIC CYBER #03
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400/90 font-mono text-[11px] bg-slate-900 px-3 py-1 rounded border border-cyan-900/60">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> NODE_CLUSTER_09
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-black text-white tracking-wide uppercase leading-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              >
                {settings.title || 'QUANTUM ENCRYPTION & NEURAL MESH PROTOCOLS'}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-cyan-200/80 text-base leading-relaxed font-sans max-w-3xl"
              >
                {settings.excerpt || 'Analyzing the convergence of zero-knowledge cryptography and decentralized neural networks in 2026 for high-speed fault-tolerant computing.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-cyan-900/80"
              >
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    className="px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded transition-all shadow-[0_0_25px_rgba(6,182,212,0.8)] flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4 fill-slate-950" />
                    <span>INITIALIZE_READ</span>
                  </motion.button>

                  <button
                    onClick={() => setEncrypted(!encrypted)}
                    className="p-3.5 bg-cyan-950/80 border border-cyan-500/40 rounded text-cyan-300 hover:bg-cyan-900/50 transition-colors"
                    title="Toggle Node Lock"
                  >
                    <Shield className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3 text-xs text-cyan-400/80 font-mono bg-slate-900/80 px-4 py-2 rounded border border-cyan-900/60">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>SYSTEM_HEALTH: 100% OPERATIONAL</span>
                </div>
              </motion.div>
            </div>

            {/* Media Image Column with Cyber Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-4 relative aspect-square border border-cyan-500/40 rounded-2xl overflow-hidden p-2 bg-slate-900/60 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <img
                  src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"}
                  alt={settings.title || "Cyber Protocol"}
                  className="w-full h-full object-cover opacity-85 mix-blend-screen transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/90 backdrop-blur-md rounded border border-cyan-500/40 text-[11px] text-cyan-300 flex items-center justify-between font-mono shadow-lg">
                  <span className="flex items-center gap-1.5">
                    <CornerDownRight className="w-3.5 h-3.5 text-cyan-400" /> LATENCY: 1.2ms
                  </span>
                  <span className="text-cyan-400 font-bold">CYBER HUD</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}