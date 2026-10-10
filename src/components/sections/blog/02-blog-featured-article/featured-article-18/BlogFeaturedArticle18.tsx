import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Clock, Eye, Heart, Share2, Compass } from 'lucide-react';

export function BlogFeaturedArticle18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(654);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_0_60px_rgba(34,211,238,0.3)] space-y-6 relative overflow-hidden group hover:border-cyan-400/70 transition-colors duration-500"
        >
          {/* Chromatic Prism Flare */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-pink-500/25 via-cyan-400/25 to-transparent rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 flex-wrap relative z-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full tracking-wider shadow-inner">
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} /> PRISMATIC #18
            </span>
            <span className="text-xs font-mono text-cyan-200/90 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-400/20">
              <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> {settings.readTime || '6 MIN READ'}
            </span>
            <span className="text-xs font-mono text-cyan-200/90 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-400/20">
              <Compass className="w-3.5 h-3.5 text-pink-400 shrink-0" /> REFRACTION UI
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300 leading-[1.12] tracking-tight relative z-10"
          >
            {settings.title || 'PRISMATIC CHROMATIC REFRACTION GLASS'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cyan-100/90 text-base sm:text-lg leading-relaxed max-w-3xl relative z-10"
          >
            {settings.excerpt || 'Multi-tinted rainbow light refractions creating dynamic chromatic edge blurs on glass cards with striking visual shimmer.'}
          </motion.p>

          {/* Author & Action Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-cyan-400/20 relative z-10"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-400 to-pink-500 p-0.5 shadow-md">
                <img
                  src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                  alt={settings.author?.name || 'Elena Rostova'}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-none">{settings.author?.name || 'Elena Rostova'}</h4>
                <span className="text-xs text-cyan-300/80 font-mono mt-1 inline-block">{settings.date || 'OCT 07, 2026'}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLike}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all text-xs font-mono font-bold ${
                  liked
                    ? 'bg-cyan-400/30 border-cyan-400 text-cyan-200'
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
                    ? 'bg-cyan-400/30 border-cyan-400 text-cyan-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
                aria-label="Bookmark"
              >
                <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-pink-400 hover:from-cyan-300 hover:to-pink-300 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_25px_rgba(34,211,238,0.6)] flex items-center gap-2"
              >
                <span>View Prismatic</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}