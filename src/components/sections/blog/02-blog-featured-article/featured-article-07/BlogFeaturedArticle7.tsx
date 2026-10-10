import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Bookmark, Sparkles, Clock, Eye, Disc } from 'lucide-react';

export function BlogFeaturedArticle7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2.5rem] p-1 bg-gradient-to-r from-slate-600 via-slate-100 to-slate-700 shadow-[0_25px_80px_rgba(0,0,0,0.9)] group"
        >
          <div className="bg-slate-950 rounded-[2.3rem] p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
            {/* Liquid Metallic Ambient Shimmer */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-slate-200 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-slate-300 shrink-0 animate-spin" style={{ animationDuration: '8s' }} /> CHROME LIQUID #07
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-slate-300 shrink-0" /> {settings.readTime || '7 MIN READ'}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                  <Disc className="w-3.5 h-3.5 text-slate-300 shrink-0" /> METALLIC FINISH
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 tracking-tight leading-[1.14]"
              >
                {settings.title || 'HIGH-CONTRAST METALLIC LIQUID UI MORPHISM'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
              >
                {settings.excerpt || 'Precision chrome highlights, high-contrast reflective borders, and liquid metal aesthetics engineered for futuristic high-impact editorial banners.'}
              </motion.p>

              {/* Author & Action Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-800/80"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-400 to-slate-100 p-0.5 shadow-md">
                    <img
                      src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                      alt={settings.author?.name || 'Elena Rostova'}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">{settings.author?.name || 'Elena Rostova'}</h4>
                    <span className="text-[11px] text-slate-400 font-mono">CHROME ART DIRECTOR</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-3.5 rounded-xl border transition-all ${
                      bookmarked
                        ? 'bg-slate-800 border-slate-400 text-slate-100 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                    aria-label="Bookmark"
                  >
                    <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-8 py-3.5 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 hover:from-white hover:to-slate-300 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
                  >
                    <span>View Feature</span>
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
              className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group/img"
            >
              <img
                src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"}
                alt={settings.title || "Chrome Metallic"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}