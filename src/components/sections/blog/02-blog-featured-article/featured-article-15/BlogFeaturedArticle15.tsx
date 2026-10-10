import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Zap, Clock, Eye, Heart, Flame } from 'lucide-react';

export function BlogFeaturedArticle15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(834);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-[2.5px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl shadow-[0_0_50px_rgba(236,72,153,0.4)] group"
        >
          <div className="bg-slate-950 rounded-[22px] p-6 sm:p-10 lg:p-14 space-y-6 relative overflow-hidden">
            {/* Ambient Neon Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap relative z-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-500/20 text-pink-300 border border-pink-500/40 text-xs font-mono font-bold rounded-full uppercase tracking-wider shadow-inner">
                <Zap className="w-3.5 h-3.5 shrink-0 animate-bounce text-pink-400" style={{ animationDuration: '2.5s' }} /> NEON EDGE GLOW #15
              </span>
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <Clock className="w-3.5 h-3.5 text-pink-400 shrink-0" /> {settings.readTime || '6 MIN READ'}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <Flame className="w-3.5 h-3.5 text-pink-500 shrink-0" /> HIGH IMPACT
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight relative z-10"
            >
              {settings.title || 'NEON RAINBOW EDGE GLOW ARTICLE FRAME'}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl relative z-10"
            >
              {settings.excerpt || 'Vibrant multi-tinted neon border gradient framing dark glass content cards with high visibility and energetic highlights.'}
            </motion.p>

            {/* Author & Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-800/80 relative z-10"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 p-0.5 shadow-md">
                  <img
                    src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                    alt={settings.author?.name || 'Elena Rostova'}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">{settings.author?.name || 'Elena Rostova'}</h4>
                  <span className="text-xs text-pink-300/80 font-mono mt-1 inline-block">{settings.date || 'OCT 07, 2026'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLike}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all text-xs font-mono font-bold ${
                    liked
                      ? 'bg-pink-500/25 border-pink-400 text-pink-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
                  <span>{likes}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`p-3 rounded-xl border transition-all ${
                    bookmarked
                      ? 'bg-pink-500/25 border-pink-400 text-pink-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
                  aria-label="Bookmark"
                >
                  <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(236,72,153,0.6)] flex items-center gap-2"
                >
                  <span>Read Neon Story</span>
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