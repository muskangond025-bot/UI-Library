import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Clock, Flame, Heart, Share2, Compass } from 'lucide-react';

export function BlogFeaturedArticle8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(612);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Liquid Blob in Background */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, 90, 0],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[420px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/40 border border-white/20 backdrop-blur-3xl rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden group relative"
        >
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/25 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider shadow-inner">
                <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse text-pink-400" /> AURORA MESH #08
              </span>
              <span className="text-xs font-mono text-purple-200/90 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Flame className="w-3.5 h-3.5 text-pink-400 shrink-0" /> TRENDING TOPIC
              </span>
              <span className="text-xs font-mono text-purple-200/90 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Compass className="w-3.5 h-3.5 text-purple-300 shrink-0" /> 6 MIN READ
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.12]"
            >
              {settings.title || 'DYNAMIC AURORA FLUID MESH BACKGROUNDS'}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-purple-100/90 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {settings.excerpt || 'Blending vivid liquid gradient meshes with ultra-clear frosted glass overlays for an immersive high-aesthetic visual hero experience.'}
            </motion.p>

            {/* Author & Action Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/15"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5 shadow-md">
                  <img
                    src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                    alt={settings.author?.name || 'Elena Rostova'}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">{settings.author?.name || 'Elena Rostova'}</h4>
                  <span className="text-xs text-purple-300/80 font-mono mt-1 inline-block">{settings.date || 'OCT 07, 2026'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLike}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all text-xs font-mono font-bold ${
                    liked
                      ? 'bg-purple-500/30 border-purple-400 text-pink-300'
                      : 'bg-white/5 border-white/10 text-purple-200 hover:bg-white/10'
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
                      ? 'bg-purple-500/30 border-purple-400 text-purple-200'
                      : 'bg-white/5 border-white/10 text-purple-200 hover:bg-white/10'
                  }`}
                  aria-label="Bookmark"
                >
                  <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(168,85,247,0.6)] flex items-center gap-2"
                >
                  <span>Explore Mesh</span>
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