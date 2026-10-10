import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, Bookmark, Clock, Eye, Share2, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

export function BlogFeaturedArticle9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [activeIndex, setActiveIndex] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(729);
  const [liked, setLiked] = useState(false);

  const slides = [
    {
      title: settings.title || 'SPLIT CAROUSEL FEATURED FOCUS & TIMELINE',
      excerpt: settings.excerpt || 'Dual-pane editorial layout featuring timeline navigation indicators and smooth dynamic slide updates for fast multi-story discovery.',
      readTime: '6 MIN READ',
      image: settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
    },
    {
      title: 'QUANTUM DATA PIPELINES IN DIGITAL PUBLISHING',
      excerpt: 'Exploring real-time event-driven data streaming to deliver contextual editorial experiences across global multi-region Edge nodes.',
      readTime: '8 MIN READ',
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=80"
    },
    {
      title: 'THE PARADIGM SHIFT IN FRONTEND ARCHITECTURE',
      excerpt: 'How modern compiler-driven web frameworks are eliminating runtime overhead and revolutionizing web performance metrics.',
      readTime: '5 MIN READ',
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1800&q=80"
    }
  ];

  const currentSlide = slides[activeIndex];

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_25px_80px_rgba(0,0,0,0.8)] bg-slate-950 group hover:border-blue-500/40 transition-colors duration-500"
        >
          {/* Content Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Background Blue Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/15 border border-blue-500/40 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-inner">
                  <Layers className="w-3.5 h-3.5 shrink-0" /> SPLIT FOCUS #09
                </span>
                <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {currentSlide.readTime}
                </span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.14] tracking-tight">
                    {currentSlide.title}
                  </h2>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                    {currentSlide.excerpt}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls & Author Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 pt-6 border-t border-slate-800/80 relative z-10"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-400 p-0.5 shadow-md">
                    <img
                      src={settings.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                      alt={settings.author?.name || 'Elena Rostova'}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">{settings.author?.name || 'Elena Rostova'}</h4>
                    <span className="text-[11px] text-slate-400 font-mono">EDITORIAL DIRECTOR</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleLike}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all ${
                      liked
                        ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
                    <span className="text-xs font-mono font-bold">{likes}</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-2.5 rounded-xl border transition-all ${
                      bookmarked
                        ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                    aria-label="Bookmark"
                  >
                    <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Slide Timeline Indicators */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === idx ? 'w-10 bg-blue-500' : 'w-3 bg-slate-800 hover:bg-slate-700'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Media Column */}
          <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}