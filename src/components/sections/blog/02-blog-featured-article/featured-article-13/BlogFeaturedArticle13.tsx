import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Clock, Layers, Eye, Heart, Share2 } from 'lucide-react';

export function BlogFeaturedArticle13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(589);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-14 backdrop-blur-xl relative overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8)] group hover:border-teal-500/40 transition-colors duration-500"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-500/15 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold rounded-full uppercase tracking-wider shadow-inner">
                  <Layers className="w-3.5 h-3.5 shrink-0 text-teal-400" /> BENTO STACKED GLASS #13
                </span>
                <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60">
                  <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" /> {settings.readTime || '5 MIN READ'}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60">
                  <Eye className="w-3.5 h-3.5 text-teal-400 shrink-0" /> 12.4K VIEWS
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.14]"
              >
                {settings.title || 'STACKED GLASS TILE ARCHITECTURE'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
              >
                {settings.excerpt || 'Combining primary featured hero glass cards with layered secondary detail panels to present modular editorial narratives.'}
              </motion.p>

              {/* Author & Action Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-800/80"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 p-0.5 shadow-md">
                    <img
                      src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                      alt={settings.author?.name || 'Elena Rostova'}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">{settings.author?.name || 'Elena Rostova'}</h4>
                    <span className="text-[11px] text-slate-400 font-mono">SYSTEMS ARCHITECT</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleLike}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all text-xs font-mono font-bold ${
                      liked
                        ? 'bg-teal-500/20 border-teal-400 text-teal-300'
                        : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800'
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
                        ? 'bg-teal-500/20 border-teal-400 text-teal-300'
                        : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                    aria-label="Bookmark"
                  >
                    <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-7 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] flex items-center gap-2"
                  >
                    <span>Read Feature</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Stacked 3D Image Cards Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group/img"
            >
              <img
                src={settings.featuredImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"}
                alt={settings.title || "Stacked Tile"}
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