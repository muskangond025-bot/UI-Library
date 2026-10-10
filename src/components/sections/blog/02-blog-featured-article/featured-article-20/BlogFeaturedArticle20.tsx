import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Flame, Clock, Eye, Heart, Crown } from 'lucide-react';

export function BlogFeaturedArticle20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(1280);
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
          className="bg-gradient-to-r from-slate-900 via-slate-950 to-black border border-fuchsia-500/40 rounded-[3rem] p-6 sm:p-12 lg:p-16 shadow-[0_30px_90px_rgba(217,70,239,0.3)] flex flex-col items-center text-center space-y-8 relative overflow-hidden group hover:border-fuchsia-400/60 transition-colors duration-500"
        >
          {/* Animated Ambient Pulsing Aura */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 flex-wrap justify-center relative z-10"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-fuchsia-500/15 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-mono font-bold tracking-widest uppercase rounded-full shadow-inner">
              <Sparkles className="w-4 h-4 shrink-0 text-fuchsia-400 animate-pulse" /> ULTRA FULL-BLEED OVERLAY #20
            </span>
            <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <Crown className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" /> FLAGSHIP ARTICLE
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <Eye className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" /> 24.5K VIEWS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-fuchsia-300 max-w-4xl leading-[1.12] relative z-10"
          >
            {settings.title || 'ULTRA IMMERSIVE FULL-BLEED HERO OVERLAY'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed relative z-10"
          >
            {settings.excerpt || 'Maximum visual weight flagship featured article layout engineered with responsive multi-layered prism glass depth.'}
          </motion.p>

          {/* Author & Action Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 flex-wrap justify-center pt-4 relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLike}
              className={`flex items-center gap-2 px-5 py-4 rounded-2xl border transition-all text-xs font-mono font-bold ${
                liked
                  ? 'bg-fuchsia-500/25 border-fuchsia-400 text-fuchsia-300'
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
              className={`p-4 rounded-2xl border transition-all ${
                bookmarked
                  ? 'bg-fuchsia-500/25 border-fuchsia-400 text-fuchsia-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
              aria-label="Bookmark"
            >
              <Bookmark className="w-5 h-5" fill={bookmarked ? "currentColor" : "none"} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-4.5 bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-400 hover:to-pink-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_35px_rgba(217,70,239,0.6)] flex items-center gap-2"
            >
              <span>Read Flagship Article</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}