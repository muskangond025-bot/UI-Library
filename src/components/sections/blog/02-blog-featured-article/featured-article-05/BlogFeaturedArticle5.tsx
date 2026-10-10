import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Bookmark, Eye, Smile } from 'lucide-react';

export function BlogFeaturedArticle5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(356);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-indigo-950/40 text-indigo-100 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-indigo-900/60 rounded-[2.8rem] p-6 sm:p-10 lg:p-14 border border-indigo-400/30 shadow-[inset_0_3px_8px_rgba(255,255,255,0.35),0_25px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl group relative overflow-hidden"
        >
          {/* Ambient Clay Background Bubble */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center relative z-10">
            {/* Claymorphic 3D Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 aspect-square rounded-[2.2rem] overflow-hidden border-4 border-indigo-400/40 shadow-[inset_0_6px_16px_rgba(0,0,0,0.6),0_16px_32px_rgba(0,0,0,0.35)] relative group/img"
            >
              <img
                src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"}
                alt={settings.title || "Claymorphic Story"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-108"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 rounded-full bg-indigo-950/85 backdrop-blur-md border border-indigo-300/40 text-indigo-200 text-xs font-mono font-extrabold uppercase tracking-widest shadow-md flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-300 animate-pulse" /> CLAYMORPHIC #05
                </span>
              </div>
            </motion.div>

            {/* Content Box */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-indigo-300">
                <span className="px-3.5 py-1.5 rounded-full bg-indigo-800/50 border border-indigo-400/30 flex items-center gap-1.5">
                  <Smile className="w-3.5 h-3.5 text-indigo-300" /> PLAYFUL TACTILE
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-indigo-800/50 border border-indigo-400/30 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-indigo-300" /> 11.8K VIEWS
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.14] tracking-tight"
              >
                {settings.title || 'SOFT 3D CLAYMORPHISM & PLAYFUL INTERACTION'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-indigo-200/90 text-base sm:text-lg leading-relaxed"
              >
                {settings.excerpt || 'Embracing organic soft volume, inner shadow illumination, and friendly tactile UI elements that delight users through physical softness.'}
              </motion.p>

              {/* Clay Action Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 pt-6 border-t border-indigo-500/30 flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLike}
                  className={`px-4 py-3.5 rounded-2xl border transition-all flex items-center gap-2 text-xs font-mono font-bold ${
                    liked
                      ? 'bg-rose-500/30 border-rose-400 text-rose-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]'
                      : 'bg-indigo-800/40 border-indigo-400/30 text-indigo-200 hover:bg-indigo-800/60'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
                  <span>{likeCount}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`p-3.5 rounded-2xl border backdrop-blur-md transition-all ${
                    bookmarked
                      ? 'bg-indigo-500/30 border-indigo-300 text-indigo-200'
                      : 'bg-indigo-800/40 border-indigo-400/30 text-indigo-200 hover:bg-indigo-800/60'
                  }`}
                  aria-label="Bookmark"
                >
                  <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-[inset_0_2px_5px_rgba(255,255,255,0.45),0_10px_20px_rgba(0,0,0,0.35)] transition-all flex items-center gap-2"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}