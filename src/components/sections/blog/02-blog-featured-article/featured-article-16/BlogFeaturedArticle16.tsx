import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bookmark, Compass, Sliders, Clock, Eye, Heart, Layers } from 'lucide-react';

export function BlogFeaturedArticle16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(389);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white font-sans overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-4 border-orange-500 pl-6 sm:pl-10 space-y-6 py-6 bg-slate-900/50 rounded-r-3xl p-6 sm:p-10 lg:p-14 border-y border-r border-slate-800 backdrop-blur-md relative overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8)] group"
        >
          {/* Ambient Orange Wireframe Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 flex-wrap relative z-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 font-bold tracking-widest uppercase bg-orange-500/15 px-3.5 py-1.5 rounded-lg border border-orange-500/30 shadow-inner">
              <Sliders className="w-3.5 h-3.5 shrink-0" /> WIREFRAME #16
            </span>
            <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" /> {settings.readTime || '7 MIN READ'}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
              <Layers className="w-3.5 h-3.5 text-orange-400 shrink-0" /> GRID ALIGNED
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12] relative z-10"
          >
            {settings.title || 'ARCHITECTURAL WIREFRAME & MINIMALIST GRID'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed relative z-10"
          >
            {settings.excerpt || 'Clean linear guidelines, structural grid alignment, and minimalist typographic focus for high-precision design publications.'}
          </motion.p>

          {/* Author & Wireframe Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-800 relative z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-orange-500/40 p-0.5 shadow-md">
                <img
                  src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                  alt={settings.author?.name || 'Elena Rostova'}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-mono">{settings.author?.name || 'Elena Rostova'}</h4>
                <span className="text-[11px] text-slate-400 font-mono">CAD & WIREFRAME ARCHITECT</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLike}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all text-xs font-mono font-bold ${
                  liked
                    ? 'bg-orange-500/20 border-orange-400 text-orange-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
                <span>{likes}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2.5 rounded-xl border transition-all ${
                  bookmarked
                    ? 'bg-orange-500/20 border-orange-400 text-orange-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
                aria-label="Bookmark"
              >
                <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 border border-orange-500/80 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(249,115,22,0.25)] flex items-center gap-2"
              >
                <span>Inspect Structure</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}