import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Cpu, Activity, CornerDownRight, Radio, Lock } from 'lucide-react';

export function BlogFeaturedArticle12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [active, setActive] = useState(false);
  const [locked, setLocked] = useState(false);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-emerald-400 font-mono overflow-hidden relative">
      {/* Sci-Fi Grid Background Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto pt-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-2 border-emerald-500/60 p-6 sm:p-10 rounded-2xl relative bg-emerald-950/20 shadow-[0_0_50px_rgba(16,185,129,0.2)] backdrop-blur-md group"
        >
          {/* HUD Header Telemetry Tag */}
          <div className="absolute -top-4 left-6 px-4 py-1 bg-black border border-emerald-500/80 text-xs text-emerald-400 font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            [HUD_ARTICLE_FRAME // ID: 12]
          </div>

          {/* HUD Top Stats Status Line */}
          <div className="flex items-center justify-between border-b border-emerald-900/80 pb-4 mb-6 text-[11px] tracking-widest text-emerald-400/80">
            <span className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> TELEMETRY NODE: ONLINE
            </span>
            <span className="flex items-center gap-2 hidden sm:flex">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" /> MATRIX VERSION 4.8
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 text-xs text-emerald-300 flex-wrap"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/50 font-bold tracking-wider">
                  <Terminal className="w-3.5 h-3.5" /> HUD SYSTEM #12
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400/90 font-mono text-[11px] bg-black px-3 py-1 rounded border border-emerald-900">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> LATENCY: 0.8ms
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-wider uppercase text-white leading-tight drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]"
              >
                {settings.title || 'SCI-FI HUD INTERACTION FRAMEWORK'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-emerald-300/90 text-sm sm:text-base font-sans leading-relaxed max-w-2xl"
              >
                {settings.excerpt || 'Futuristic technical indicators, telemetry badges, and corner bracket frames engineered for advanced developer tech portals.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-between gap-4 pt-6 border-t border-emerald-900/80 flex-wrap"
              >
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setActive(!active)}
                    className="px-7 py-3.5 bg-emerald-400 text-slate-950 font-extrabold text-xs uppercase tracking-widest hover:bg-emerald-300 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.7)] rounded"
                  >
                    <Terminal className="w-4 h-4 fill-slate-950" />
                    <span>EXECUTE_READ()</span>
                  </motion.button>

                  <button
                    onClick={() => setLocked(!locked)}
                    className="p-3.5 bg-emerald-950/80 border border-emerald-500/40 rounded text-emerald-300 hover:bg-emerald-900/50 transition-colors"
                  >
                    <Lock className="w-4 h-4" />
                  </button>
                </div>

                <span className="text-xs text-emerald-400/80 font-mono">STATUS: OK</span>
              </motion.div>
            </div>

            {/* Media Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-4 aspect-square border border-emerald-500/50 rounded-xl overflow-hidden p-1.5 bg-black/80 relative group shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"}
                  alt={settings.title || "Sci-Fi HUD"}
                  className="w-full h-full object-cover opacity-85 mix-blend-screen transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/90 backdrop-blur-md rounded border border-emerald-500/40 text-[11px] text-emerald-300 flex items-center justify-between font-mono shadow-md">
                  <span className="flex items-center gap-1">
                    <CornerDownRight className="w-3.5 h-3.5 text-emerald-400" /> HUD MATRIX
                  </span>
                  <span className="text-emerald-400 font-bold">1080P</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}