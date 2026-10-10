import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, ArrowRight, Play, CheckCircle2, Lock, Cpu, Globe } from 'lucide-react';

export function AboutHero2({ data }: { data?: any }) {
  const stats = [
    { label: 'Global Active Shoppers', value: '5.2M+' },
    { label: 'E-Commerce GMV Processed', value: '$1.4B+' },
    { label: 'Cloud Microservice Uptime', value: '99.99%' },
    { label: 'Verified Brand Partners', value: '850+' }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background 3D Glowing Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-tr from-purple-600/20 via-cyan-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Header Badge */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> DARK OBSIDIAN GLASS #02 • ANIMATION: 3D LASER SCANLINE & NEON PULSE
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-cyan-300">
            Pioneering Next-Gen 3D E-Commerce Architecture
          </h1>
          <p className="opacity-80 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto">
            We build zero-latency digital storefronts powered by 3D spatial computing, real-time inventory ledgers, and obsidian glass design systems.
          </p>
        </div>

        {/* Main 3D Interactive Hero Canvas & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 shadow-2xl space-y-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase">SECURE 3D ENGINE V2.6</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
              Transforming Global Shopping with Real-Time 3D Mesh Rendering
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Our spatial 3D shopping engine renders product textures at 60fps across desktop, mobile, and AR headsets with instant multi-region sync.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
              >
                <span>Explore 3D Storefront</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-2xl bg-white/10 border border-white/15 text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-white/15 transition-all"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>Watch Brand Film</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right 3D Dynamic Graphic Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-tr from-zinc-900 via-zinc-950 to-black border border-cyan-500/40 p-8 flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.25)] group">
              {/* Scanline Laser Effect */}
              <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] pointer-events-none"
              />

              <div className="flex justify-between items-center relative z-10">
                <span className="text-xs font-mono text-cyan-400 font-bold">3D TELEMETRY LIVE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* 3D Orb Mesh Graphic Placeholder */}
              <div className="relative z-10 my-auto text-center space-y-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/40 to-cyan-300/20 border-2 border-dashed border-cyan-400/60 p-4 flex items-center justify-center shadow-inner"
                >
                  <Globe className="w-16 h-16 text-cyan-300 animate-pulse" />
                </motion.div>
                <span className="text-xs font-mono text-zinc-400 block tracking-widest">SPATIAL MESH v2.0</span>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-between text-xs font-mono text-cyan-400 font-bold relative z-10">
                <span>LATENCY: 1.2ms</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Stats Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/40 transition-all text-center space-y-2 shadow-xl"
            >
              <h4 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">{s.value}</h4>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
