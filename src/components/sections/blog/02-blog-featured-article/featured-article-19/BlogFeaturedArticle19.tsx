import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bookmark, Stamp, Clock, Eye, Heart, Share2 } from 'lucide-react';

export function BlogFeaturedArticle19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(520);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-amber-100 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900 border border-amber-800/50 rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.95),inset_-4px_-4px_8px_rgba(255,255,255,0.04)] space-y-6 relative overflow-hidden group"
        >
          {/* Subtle Warm Amber Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 flex-wrap relative z-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-950 border border-amber-700/60 text-amber-400 text-xs font-mono font-bold rounded-xl shadow-inner uppercase tracking-wider">
              <Stamp className="w-3.5 h-3.5 shrink-0 text-amber-400" /> EMBOSSED RETRO #19
            </span>
            <span className="text-xs font-mono text-amber-200/90 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-950 border border-amber-900/40">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" /> {settings.readTime || '8 MIN READ'}
            </span>
            <span className="text-xs font-mono text-amber-200/90 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-950 border border-amber-900/40">
              <Eye className="w-3.5 h-3.5 text-amber-400 shrink-0" /> ARCHIVE #42
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-amber-50 leading-[1.12] tracking-tight relative z-10"
          >
            {settings.title || 'EMBOSSED VINTAGE NEUMORPHIC RETRO'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-amber-200/90 text-base sm:text-lg leading-relaxed max-w-3xl font-sans relative z-10"
          >
            {settings.excerpt || 'Warm retro vintage tones, pressed debossed typography badges, and tactile organic feel engineered for legacy editorial archives.'}
          </motion.p>

          {/* Author & Vintage Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-amber-900/50 relative z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-amber-700/60 p-0.5 shadow-md">
                <img
                  src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                  alt={settings.author?.name || 'Elena Rostova'}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-amber-100 font-serif">{settings.author?.name || 'Elena Rostova'}</h4>
                <span className="text-[11px] text-amber-400/80 font-mono">RETRO EDITOR</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLike}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all text-xs font-mono font-bold ${
                  liked
                    ? 'bg-amber-700/30 border-amber-500 text-amber-300'
                    : 'bg-zinc-950 border-amber-900/40 text-amber-400 hover:bg-zinc-900'
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
                  bookmarked
                    ? 'bg-amber-700/30 border-amber-500 text-amber-300'
                    : 'bg-zinc-950 border-amber-900/40 text-amber-400 hover:bg-zinc-900'
                }`}
                aria-label="Bookmark"
              >
                <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Read Vintage</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}