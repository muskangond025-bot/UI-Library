import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Moon, Shield, Eye, Heart, Crown } from 'lucide-react';

export function BlogFeaturedArticle10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(945);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 rounded-[2.5rem] border border-violet-500/35 shadow-[0_30px_90px_rgba(139,92,246,0.2)] overflow-hidden group"
        >
          {/* Ambient Violet Glow Aura */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="space-y-6 relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/40 text-violet-300 text-xs font-mono font-bold tracking-widest uppercase shadow-inner">
                <Sparkles className="w-3.5 h-3.5 shrink-0 text-violet-400 animate-pulse" /> DARK VELVET GLASS #10
              </span>
              <span className="text-xs font-mono text-zinc-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                <Crown className="w-3.5 h-3.5 text-violet-400 shrink-0" /> LUXURY EDITION
              </span>
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                <Eye className="w-3.5 h-3.5 text-violet-400 shrink-0" /> 16.8K VIEWS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.12]"
            >
              {settings.title || 'DARK VELVET HIGH-CONTRAST EDITORIAL'}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {settings.excerpt || 'Deep dark mode aesthetics enhanced with subtle violet glow aura badges, high-contrast typography, and velvet surface tactile responses.'}
            </motion.p>

            {/* Author & Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-zinc-800/80"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-400 p-0.5 shadow-md">
                  <img
                    src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                    alt={settings.author?.name || 'Elena Rostova'}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">{settings.author?.name || 'Elena Rostova'}</h4>
                  <span className="text-xs text-violet-300/80 font-mono mt-1 inline-block">{settings.date || 'OCT 07, 2026'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLike}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all text-xs font-mono font-bold ${
                    liked
                      ? 'bg-violet-500/30 border-violet-400 text-violet-300'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800'
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
                      ? 'bg-violet-500/30 border-violet-400 text-violet-300'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800'
                  }`}
                  aria-label="Bookmark"
                >
                  <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_25px_rgba(139,92,246,0.5)] flex items-center gap-2"
                >
                  <span>Read Story</span>
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