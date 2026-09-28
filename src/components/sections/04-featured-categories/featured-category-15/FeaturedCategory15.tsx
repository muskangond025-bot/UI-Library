"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function FeaturedCategory15({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#09090b';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  // The left column slides up when advancing, right column slides down
  const leftVariants = {
    enter: (dir: number) => ({ y: dir > 0 ? '100%' : '-100%', scale: 0.9, opacity: 0 }),
    center: { y: '0%', scale: 1, opacity: 1 },
    exit: (dir: number) => ({ y: dir > 0 ? '-100%' : '100%', scale: 0.9, opacity: 0 })
  };

  const rightVariants = {
    enter: (dir: number) => ({ y: dir > 0 ? '-100%' : '100%', scale: 0.9, opacity: 0 }),
    center: { y: '0%', scale: 1, opacity: 1 },
    exit: (dir: number) => ({ y: dir > 0 ? '100%' : '-100%', scale: 0.9, opacity: 0 })
  };

  const isEven = activeIndex % 2 === 0;
  const currentCat = categories[activeIndex];

  const renderImage = (cat: any) => (
    <div className="w-full h-full p-4 md:p-8 flex items-center justify-center">
      <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#222] shadow-2xl relative">
        <img 
          src={cat.image} 
          alt={cat.name} 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  );

  const renderText = (cat: any) => (
    <div className="w-full h-full p-8 md:p-16 flex flex-col justify-center relative">
      <span className="text-sm font-bold tracking-[0.4em] uppercase opacity-40 mb-12 block">
        {settings.title}
      </span>
      
      <div className="flex items-center gap-4 mb-4 opacity-50">
        <div className="w-8 h-[2px] bg-white" />
        <span className="font-bold tracking-widest text-lg">0{activeIndex + 1}</span>
      </div>

      <h3 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 md:mb-8 leading-none">
        {cat.name}
      </h3>
      
      <p className="text-white/60 text-sm md:text-xl font-medium max-w-md leading-relaxed mb-8 md:mb-12">
        {cat.description}
      </p>

      <a 
        href={cat.link}
        className="inline-flex items-center gap-4 group/btn w-fit"
      >
        <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
          <ArrowUpRight className="w-6 h-6" />
        </div>
        <span className="text-sm font-bold uppercase tracking-widest group-hover/btn:tracking-[0.3em] transition-all">
          Explore Detail
        </span>
      </a>
    </div>
  );

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap">
          {currentCat?.name}
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto h-[80vh] md:h-[70vh] flex flex-col md:flex-row rounded-[2rem] overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
        
        {/* Left Column (Slides UP) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-black/40">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={leftVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {isEven ? renderImage(currentCat) : renderText(currentCat)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column (Slides DOWN) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-black/20">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={rightVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {!isEven ? renderImage(currentCat) : renderText(currentCat)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls (Moved outside to prevent overlap) */}
      <div className="w-full max-w-7xl mx-auto mt-6 md:mt-10 flex justify-center relative z-50">
        <div className="flex items-center gap-4 bg-black/80 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-2xl">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 px-2">
            {categories.map((_: any, idx: number) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
}
