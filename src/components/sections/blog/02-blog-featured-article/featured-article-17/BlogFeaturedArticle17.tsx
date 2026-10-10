import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Flame, Clock, Eye, Heart, Share2 } from 'lucide-react';

export function BlogFeaturedArticle17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(762);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-end p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-[0_25px_80px_rgba(0,0,0,0.9)] group"
        >
          <img
            src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"}
            alt={settings.title || "Magazine Cover"}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

          <div className="relative z-10 space-y-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg">
                <Flame className="w-3.5 h-3.5 shrink-0" /> MAGAZINE COVER #17
              </span>
              <span className="text-xs font-mono text-slate-200 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" /> {settings.readTime || '6 MIN READ'}
              </span>
              <span className="text-xs font-mono text-slate-200 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <Eye className="w-3.5 h-3.5 text-amber-400 shrink-0" /> 18.9K READS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-6xl font-black text-white leading-[1.1]"
            >
              {settings.title || 'FULL-HEIGHT MAGAZINE COVER OVERLAY'}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {settings.excerpt || 'Full viewport hero background image layered under floating gradient text overlays for maximum editorial impact.'}
            </motion.p>

            {/* Author & Cover Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/15"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400 p-0.5 shadow-md">
                  <img
                    src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                    alt={settings.author?.name || 'Elena Rostova'}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-mono">{settings.author?.name || 'Elena Rostova'}</h4>
                  <span className="text-[11px] text-amber-300 font-mono">{settings.date || 'OCT 2026'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLike}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border backdrop-blur-md transition-all text-xs font-mono font-bold ${
                    liked
                      ? 'bg-amber-400/25 border-amber-400 text-amber-300'
                      : 'bg-black/60 border-white/20 text-white hover:bg-black/80'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
                  <span>{likes}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`p-3.5 rounded-xl border backdrop-blur-md transition-all ${
                    bookmarked
                      ? 'bg-amber-400/25 border-amber-400 text-amber-300'
                      : 'bg-black/60 border-white/20 text-white hover:bg-black/80'
                  }`}
                  aria-label="Bookmark"
                >
                  <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl flex items-center gap-2"
                >
                  <span>Read Cover</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}