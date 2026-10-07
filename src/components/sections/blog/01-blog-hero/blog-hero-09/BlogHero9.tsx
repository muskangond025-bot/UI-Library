import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    tag: 'FEATURED STORIES • 01',
    title: 'THE NEXT WAVE OF AUTONOMOUS ELECTRIC VEHICLES',
    desc: 'How solid-state batteries and neural vision systems are doubling vehicle range while lowering manufacturing costs.',
    img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=80',
  },
  {
    tag: 'FEATURED STORIES • 02',
    title: 'NEURAL AUDIO SYNTHESIS & THE FUTURE OF MUSIC',
    desc: 'Inside the algorithmic sound engines composing adaptive soundtracks for next-gen interactive gaming.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=80',
  },
];

export function BlogHero9({ data, section }: { data?: any; section?: any }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative min-h-[500px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[index].img}
            alt="Carousel slide"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-16 py-12 space-y-6">
        <span className="inline-block text-amber-400 font-mono text-xs tracking-widest uppercase">
          {slides[index].tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {slides[index].title}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl">
          {slides[index].desc}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <button className="px-6 py-3 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 hover:bg-amber-300 transition-all">
            <span>READ STORY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="p-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-slate-300" />
            </button>
            <button
              onClick={() => setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
              className="p-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
            >
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHero9;
