import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Bookmark, Compass, Eye, Share2, Sparkles, Box } from 'lucide-react';

export function BlogFeaturedArticle4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Layer 1 - Blurred Depth Glow Background */}
        <motion.div
          animate={{
            x: [0, 12, 0],
            y: [0, 10, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-emerald-500/20 rounded-3xl translate-x-5 translate-y-5 blur-xl border border-emerald-500/30 pointer-events-none"
        />

        {/* Layer 2 - Core Section Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl group hover:border-emerald-500/40 transition-colors duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold tracking-wider rounded-lg uppercase shadow-inner">
                  <Layers className="w-3.5 h-3.5 shrink-0 animate-bounce" style={{ animationDuration: '3s' }} /> DEPTH MORPHISM #04
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60">
                  <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> SPATIAL HIERARCHY
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60">
                  <Eye className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 8.4K READS
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.14]"
              >
                {settings.title || 'ARCHITECTURAL DEPTH & SPATIAL HIERARCHY'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl"
              >
                {settings.excerpt || 'Utilizing multi-layered spatial z-indexing and multi-tier lighting dynamics to guide user attention through modern editorial content seamlessly.'}
              </motion.p>

              {/* Author & Action Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-zinc-800/80"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 p-0.5 shadow-md">
                    <img
                      src={settings.author?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"}
                      alt={settings.author?.name || 'David Chen'}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">{settings.author?.name || 'David Chen'}</h4>
                    <span className="text-[11px] text-zinc-400 font-mono">SPATIAL UI DESIGNER</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-3 rounded-xl border transition-all ${
                      bookmarked
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:bg-zinc-800'
                    }`}
                    aria-label="Bookmark"
                  >
                    <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2"
                  >
                    <span>Explore Depth Model</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Media Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl group">
                <img
                  src={settings.featuredImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"}
                  alt={settings.title || "Spatial Depth"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-700/80 text-xs font-mono text-zinc-300 flex justify-between items-center shadow-lg">
                  <span className="flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-emerald-400" /> Z-INDEX: LAYER 03
                  </span>
                  <span className="text-emerald-400 font-bold tracking-wider">SPATIAL RENDER</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}