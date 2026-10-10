import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Droplet, Clock, Eye, Heart, Share2 } from 'lucide-react';

export function BlogFeaturedArticle14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(482);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/70 border border-blue-500/40 rounded-[3rem] p-6 sm:p-10 lg:p-14 backdrop-blur-2xl text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-blue-400/60 transition-colors duration-500"
        >
          {/* Ambient Aqua Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center items-center gap-3 flex-wrap"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/15 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold uppercase rounded-full tracking-wider shadow-inner">
              <Droplet className="w-3.5 h-3.5 shrink-0 text-blue-400 animate-pulse" /> LIQUID GLASS CAPSULE #14
            </span>
            <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {settings.readTime || '6 MIN READ'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.12]"
          >
            {settings.title || 'LIQUID GLASS FLOATING CAPSULE DESIGN'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {settings.excerpt || 'Curved capsule container design featuring floating glass highlight aesthetics and clean centered editorial focus.'}
          </motion.p>

          {/* Actions & Author Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-6 border-t border-slate-800/80 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLike}
              className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all text-xs font-mono font-bold ${
                liked
                  ? 'bg-blue-500/25 border-blue-400 text-blue-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
              <span>{likes}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-3.5 rounded-full border transition-all ${
                bookmarked
                  ? 'bg-blue-500/25 border-blue-400 text-blue-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
              aria-label="Bookmark"
            >
              <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-[0_0_25px_rgba(59,130,246,0.6)] flex items-center gap-2"
            >
              <span>Explore Capsule</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}