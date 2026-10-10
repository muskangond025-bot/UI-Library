import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bookmark, Clock, Eye, Sparkles, Heart, Share2, Award } from 'lucide-react';

export function BlogFeaturedArticle2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(892);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-10 lg:p-14 rounded-[2.5rem] bg-slate-900 shadow-[24px_24px_48px_#0b0f19,-24px_-24px_48px_#1b253b] border border-slate-800/80 relative overflow-hidden"
        >
          {/* Subtle Accent Glow Dot */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Neomorphic Inset Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden p-3 bg-slate-900 shadow-[inset_8px_8px_16px_#080c14,inset_-8px_-8px_16px_#1c263c] border border-slate-800/60 group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={settings.featuredImage || "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1800&q=80"}
                  alt={settings.title || "Neumorphic Spotlight"}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md shadow-[4px_4px_10px_#080c14,-4px_-4px_10px_#1c263c] text-sky-400 text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2 border border-slate-800">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 text-sky-400 animate-spin" style={{ animationDuration: '6s' }} /> NEUMORPHIC #02
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md shadow-[ inset_2px_2px_4px_#080c14] border border-slate-800 text-xs text-slate-300 flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-sky-400" /> TOP RATED UI
                  </span>
                  <span className="text-sky-400 font-bold">TACTILE EDITION</span>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4 text-xs font-mono text-slate-400 flex-wrap"
              >
                <span className="px-3 py-1 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#080c14,inset_-3px_-3px_6px_#1c263c] text-sky-400 font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 shrink-0" /> {settings.readTime || '5 MIN READ'}
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#080c14,inset_-3px_-3px_6px_#1c263c] text-slate-300 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 shrink-0 text-sky-400" /> 14.2K VIEWS
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]"
              >
                {settings.title || 'THE ART OF TACTILE NEUMORPHIC INTERFACES'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-400 text-base sm:text-lg leading-relaxed"
              >
                {settings.excerpt || 'Exploring soft dimensional depth, dual shadow dynamics, and tactile feedback in modern web product design for realistic physical sensations.'}
              </motion.p>

              {/* Author & Neomorphic Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-800/80"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 shadow-[4px_4px_8px_#080c14,-4px_-4px_8px_#1c263c] p-1 border border-slate-800 overflow-hidden">
                    <img
                      src={settings.author?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"}
                      alt={settings.author?.name || 'Marcus Vance'}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">{settings.author?.name || 'Marcus Vance'}</h4>
                    <span className="text-[11px] text-slate-500 font-mono">UI SYSTEMS ARCHITECT</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={toggleLike}
                    className={`px-4 py-3 rounded-2xl bg-slate-900 transition-all flex items-center gap-2 text-xs font-mono font-bold ${
                      isLiked
                        ? 'shadow-[inset_4px_4px_8px_#080c14,inset_-4px_-4px_8px_#1c263c] text-rose-400'
                        : 'shadow-[6px_6px_12px_#080c14,-6px_-6px_12px_#1c263c] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} />
                    <span>{likes}</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-3 rounded-2xl bg-slate-900 transition-all ${
                      bookmarked
                        ? 'shadow-[inset_4px_4px_8px_#080c14,inset_-4px_-4px_8px_#1c263c] text-sky-400'
                        : 'shadow-[6px_6px_12px_#080c14,-6px_-6px_12px_#1c263c] text-slate-400 hover:text-slate-200'
                    }`}
                    aria-label="Save Article"
                  >
                    <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-6 py-3 rounded-2xl bg-slate-900 shadow-[6px_6px_14px_#080c14,-6px_-6px_14px_#1c263c] active:shadow-[inset_4px_4px_8px_#080c14,inset_-4px_-4px_8px_#1c263c] text-sky-400 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border border-sky-500/20"
                  >
                    <span>Explore Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}