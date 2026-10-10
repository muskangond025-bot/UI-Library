import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Cpu, Activity } from 'lucide-react';

export function AboutBrandStory3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-cyan-400 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-cyan-500/40 p-6 sm:p-10 lg:p-14 bg-slate-950/90 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]"
        >
          {/* Cyber Scanning Line */}
          <motion.div
            animate={{ y: ['0%', '100%', '0%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none z-20 opacity-60"
          />

          <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-500/20 border-b border-l border-cyan-500/40 text-[10px] tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            SYS.BRAND_ORIGIN // V3.0
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/40 font-bold tracking-wider">
                  <Terminal className="w-3.5 h-3.5" /> HOLOGRAPHIC CYBER #03
                </span>
                <span className="flex items-center gap-1 text-cyan-400/80">
                  <Cpu className="w-3.5 h-3.5" /> GENESIS NODE 2020
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-black text-white tracking-wide uppercase leading-tight drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              >
                {settings.title || 'ARCHITECTING HIGH-PERFORMANCE DECENTRALIZED SYSTEMS'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-cyan-200/80 text-base sm:text-lg leading-relaxed font-sans max-w-3xl"
              >
                {settings.excerpt || 'Founded on the principle of zero-latency decentralized protocols, our company bridges quantum security models with ultra-fast web rendering to redefine enterprise cloud architecture.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-4 border-t border-cyan-900/60"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs uppercase tracking-widest rounded transition-all shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>INITIALIZE_NARRATIVE</span>
                </motion.button>

                <div className="flex items-center gap-3 text-xs text-cyan-400/70 font-mono">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>DECRYPTION: 100% VERIFIED</span>
                </div>
              </motion.div>
            </div>

            {/* Media Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-4 relative aspect-square border border-cyan-500/40 rounded-xl overflow-hidden p-2 bg-slate-900/50"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden group">
                <img
                  src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"}
                  alt={settings.title || "Cyber Narrative"}
                  className="w-full h-full object-cover opacity-85 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/80 backdrop-blur-md rounded border border-cyan-500/30 text-[11px] text-cyan-300 flex items-center justify-between">
                  <span>LATENCY: 0.8ms</span>
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
