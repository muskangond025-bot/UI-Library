import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Lock, Globe } from 'lucide-react';

export function AboutHero2({ data }: { data?: any }) {
  const stats = [
    { label: 'Global Active Shoppers', value: '5.2M+' },
    { label: 'E-Commerce GMV Processed', value: '$1.4B+' },
    { label: 'Cloud Microservice Uptime', value: '99.99%' },
    { label: 'Verified Brand Partners', value: '850+' }
  ];

  return (
    <section className="w-full h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden flex flex-col justify-between">
      {/* Background 3D Glowing Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-gradient-to-tr from-purple-600/20 via-cyan-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative z-10 gap-3 sm:gap-4">
        {/* Top Header Section */}
        <div className="text-center space-y-1.5 sm:space-y-2 max-w-3xl mx-auto shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Sparkles className="w-3 h-3 animate-pulse" /> DARK OBSIDIAN GLASS #02 • 3D LASER SCANLINE & NEON PULSE
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-cyan-300">
            Pioneering Next-Gen 3D E-Commerce Architecture
          </h1>
          <p className="opacity-80 text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto line-clamp-2">
            We build zero-latency digital storefronts powered by 3D spatial computing, real-time inventory ledgers, and obsidian glass design systems.
          </p>
        </div>

        {/* Main 3D Interactive Hero Canvas & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center flex-1 min-h-0">
          {/* Left Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-4 sm:p-6 lg:p-7 rounded-2xl bg-zinc-900/85 backdrop-blur-2xl border border-zinc-800 shadow-xl flex flex-col justify-between h-full group hover:border-cyan-500/50 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase">SECURE 3D ENGINE V2.6</span>
              </div>

              <h3 className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-white leading-snug">
                Transforming Global Shopping with Real-Time 3D Mesh Rendering
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                Our spatial 3D shopping engine renders product textures at 60fps across desktop, mobile, and AR headsets with instant multi-region sync.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                <span>Explore 3D Storefront</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white/15 transition-all"
              >
                <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                <span>Watch Brand Film</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right 3D Dynamic Graphic Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 h-full"
          >
            <div className="h-full rounded-2xl bg-gradient-to-tr from-zinc-900 via-zinc-950 to-black border border-cyan-500/40 p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.2)] group relative">
              {/* Scanline Laser Effect */}
              <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] pointer-events-none"
              />

              <div className="flex justify-between items-center relative z-10">
                <span className="text-[10px] sm:text-xs font-mono text-cyan-400 font-bold">3D TELEMETRY LIVE</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* 3D Orb Mesh Graphic Placeholder */}
              <div className="relative z-10 my-auto text-center space-y-2 py-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/40 to-cyan-300/20 border-2 border-dashed border-cyan-400/60 p-2 flex items-center justify-center shadow-inner"
                >
                  <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-300 animate-pulse" />
                </motion.div>
                <span className="text-[10px] font-mono text-zinc-400 block tracking-widest">SPATIAL MESH v2.0</span>
              </div>

              <div className="pt-2 border-t border-zinc-800 flex justify-between text-[10px] font-mono text-cyan-400 font-bold relative z-10">
                <span>LATENCY: 1.2ms</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Stats Counter Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 shrink-0">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="py-2.5 px-3 sm:px-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/40 transition-all text-center space-y-0.5 shadow-md"
            >
              <h4 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">{s.value}</h4>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block truncate">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
