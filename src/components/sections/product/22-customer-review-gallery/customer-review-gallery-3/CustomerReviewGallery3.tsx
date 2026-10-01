import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Play, Pause, ShoppingBag } from 'lucide-react';

export default function CustomerReviewGallery3({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || customers.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, customers.length]);

  const current = customers[currentIndex] || {};

  return (
    <section className="relative min-h-[650px] w-full bg-neutral-950 text-white overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Full-Bleed Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <img src={current.media} alt={current.name} className="w-full h-full object-cover filter brightness-50 contrast-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-white border border-white/20 backdrop-blur-md mb-6">
          {data?.eyebrow || 'CINEMATIC SHOWCASE'}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex text-amber-400 mb-6">
              {[...Array(current.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 stroke-none" />
              ))}
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-white max-w-3xl leading-relaxed mb-8">
              "{current.reviewText}"
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <img src={current.avatar} alt={current.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/60 shadow-xl" />
              <div className="text-left">
                <h4 className="text-base font-semibold text-white flex items-center gap-1.5">
                  {current.name}
                  {current.verified && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </h4>
                <p className="text-xs text-neutral-300">{current.location} • {current.productName}</p>
              </div>
            </div>

            <a
              href={current.productLink || '#'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-xl"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop {current.productName}
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Gallery Slider Controls */}
        <div className="mt-12 flex items-center gap-6">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + customers.length) % customers.length)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % customers.length)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Progress Indicator */}
        <div className="flex gap-2 mt-8">
          {customers.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
