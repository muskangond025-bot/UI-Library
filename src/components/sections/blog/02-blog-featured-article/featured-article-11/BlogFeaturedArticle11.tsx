import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, BookOpen, Clock, Heart, Share2, Feather } from 'lucide-react';

export function BlogFeaturedArticle11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(412);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-200 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative pt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-stone-950 border-2 border-stone-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[16px_16px_0px_#1c1917] relative group"
        >
          {/* Skeuomorphic Tag Ribbon */}
          <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-mono font-bold text-xs uppercase rounded-xl shadow-lg flex items-center gap-2 border border-amber-300/40">
            <BookOpen className="w-4 h-4 shrink-0" /> SKEUOMORPHIC #11
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-amber-400 font-mono text-xs font-bold">
                <Feather className="w-3.5 h-3.5" /> ESSAY & JOURNAL
              </span>
              <span className="text-xs font-mono text-stone-400 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900 border border-stone-800">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" /> {settings.readTime || '8 MIN READ'}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-100 tracking-tight leading-[1.12]"
            >
              {settings.title || 'TACTILE SKEUOMORPHIC JOURNAL & NOTE DESIGN'}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans max-w-3xl"
            >
              {settings.excerpt || 'Bringing organic paper fold textures, embossed margins, and classic editorial weight into modern responsive layouts.'}
            </motion.p>

            {/* Author & Skeuomorphic Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-stone-800/80 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-stone-400"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 p-0.5 shadow-md">
                  <img
                    src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                    alt={settings.author?.name || 'Elena Rostova'}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-200 font-mono">{settings.author?.name || 'Elena Rostova'}</h4>
                  <span className="text-[11px] text-stone-500 font-mono">{settings.date || 'OCT 2026'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLike}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all text-xs font-mono font-bold ${
                    liked
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                      : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
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
                    bookmarked ? 'bg-amber-500/20 border-amber-400 text-amber-300' : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                  aria-label="Save Journal"
                >
                  <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <span>Open Note</span>
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