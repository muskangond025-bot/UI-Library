import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Compass, Shield } from 'lucide-react';

export function AboutBrandStory4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Spatial Shadow Layer */}
        <motion.div
          animate={{
            x: [0, 10, 0],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-emerald-500/15 rounded-3xl translate-x-4 translate-y-4 blur-md border border-emerald-500/20 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden"
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
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider rounded-md uppercase">
                  <Layers className="w-3.5 h-3.5 shrink-0" /> SPATIAL DEPTH #04
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> MULTI-TIER ARCHITECTURE
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
              >
                {settings.title || 'SPATIAL HIERARCHY & MULTI-LAYERED PURPOSE'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl"
              >
                {settings.excerpt || 'By layering spatial z-indexing and multi-tier lighting dynamics, we guide attention seamlessly through our brand heritage and product evolution.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 pt-4 border-t border-zinc-800 flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Explore Spatial Model</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl group">
                <img
                  src={settings.featuredImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"}
                  alt={settings.title || "Spatial Brand"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-700/80 text-xs font-mono text-zinc-300 flex justify-between items-center">
                  <span>Z-INDEX: DEPTH 04</span>
                  <span className="text-emerald-400 font-bold">SPATIAL RENDER</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
