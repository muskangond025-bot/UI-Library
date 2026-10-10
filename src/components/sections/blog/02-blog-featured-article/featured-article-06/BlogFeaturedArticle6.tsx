import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Clock, ArrowRight, Bookmark, Sparkles, User, Eye, Share2, Flame, ThumbsUp } from 'lucide-react';

export function BlogFeaturedArticle6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(542);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleLike = () => {
    setHasLiked(!hasLiked);
    setLikes(prev => hasLiked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Bento Tile (Article Hero) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group hover:border-rose-500/40 transition-colors duration-500"
          >
            {/* Ambient Background Gradient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider shadow-inner">
                  <LayoutGrid className="w-3.5 h-3.5 shrink-0 text-rose-400" /> FROSTED BENTO #06
                </span>
                <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  {settings.readTime || '6 MIN READ'}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0" /> TOP FEATURED
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.14]"
              >
                {settings.title || 'MODERN BENTO GRID EDITORIAL ARCHITECTURE'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
              >
                {settings.excerpt || 'Segmenting complex featured stories into interactive multi-tile bento grid components with rich visual contrast and fluid hierarchy.'}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4 relative z-10"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/40 p-0.5 flex items-center justify-center text-rose-400 shadow-md">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">{settings.author?.name || 'Elena Rostova'}</h4>
                  <span className="text-xs text-slate-400 font-mono mt-1 inline-block">{settings.date || 'OCT 07, 2026'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLike}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all ${
                    hasLiked
                      ? 'bg-rose-500/20 border-rose-400 text-rose-300'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" fill={hasLiked ? "currentColor" : "none"} />
                  <span className="text-xs font-mono font-bold">{likes}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`p-2.5 rounded-xl border transition-all ${
                    bookmarked
                      ? 'bg-rose-500/20 border-rose-400 text-rose-300'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800'
                  }`}
                  aria-label="Bookmark"
                >
                  <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(244,63,94,0.4)] flex items-center gap-2"
                >
                  <span>Explore Bento</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Secondary Bento Tile - Image & Metrics Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden min-h-[320px] relative group flex flex-col justify-end p-6 hover:border-rose-500/40 transition-colors duration-500"
          >
            <img
              src={settings.featuredImage || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"}
              alt={settings.title || "Bento Showcase"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-md border border-slate-800 text-rose-400 text-xs font-mono font-bold inline-block shadow-lg">
                FEATURED BENTO TILE
              </span>
              <p className="text-xs text-slate-300 font-mono">Dynamic multi-card layout architecture</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}