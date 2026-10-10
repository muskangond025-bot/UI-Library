import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, Bookmark, Eye, Share2, ThumbsUp, Flame } from 'lucide-react';

export function BlogFeaturedArticle1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(428);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Background Ambient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.6, 0.35],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-gradient-to-br from-amber-500/30 to-orange-600/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.5, 0.25],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-gradient-to-tr from-amber-600/20 to-yellow-500/30 rounded-full blur-3xl pointer-events-none"
        />

        {/* Main Frosted Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 rounded-3xl p-6 sm:p-10 lg:p-14 bg-slate-900/50 backdrop-blur-2xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden group hover:border-amber-500/40 transition-colors duration-500"
        >
          {/* Subtle Top Shimmer Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase shadow-inner">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-400 animate-pulse" /> GLASS EDITORIAL #01
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  {settings.readTime || '6 MIN READ'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
                  <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" /> TRENDING #1
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200"
              >
                {settings.title || 'THE FUTURE OF SUSTAINABLE DIGITAL ARCHITECTURE'}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
              >
                {settings.excerpt || 'Exploring how zero-carbon cloud infrastructure and glassmorphic UI principles are reshaping modern web experiences for the next decade.'}
              </motion.p>

              {/* Author & Action Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-between flex-wrap gap-4 border-t border-white/10 pt-6 mt-2"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-md">
                    <img
                      src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                      alt={settings.author?.name || 'Elena Rostova'}
                      className="w-full h-full object-cover rounded-full"
                    />
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
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all ${
                      hasLiked
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
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
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                    aria-label="Bookmark"
                  >
                    <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Media Image Column with Glass Card Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] group">
                <img
                  src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"}
                  alt={settings.title || "Editorial"}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/15 text-xs font-mono text-slate-300 flex items-center justify-between shadow-xl">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                    Ultra Frosted Glass Blur: 24px
                  </span>
                  <span className="text-amber-400 font-bold tracking-wider">ULTRA HD</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}