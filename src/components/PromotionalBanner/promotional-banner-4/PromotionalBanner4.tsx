"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

// 1. Number Counter Component (PDF: Data Visualization)
function AnimatedCounter({ endValue, isActive }: { endValue: number, isActive: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, isActive]);

  return <span>{count}</span>;
}

export function PromotionalBanner4({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#F9FAFB';
  const textCol = styles?.textColor || '#111827';
  const accent = styles?.accentColor || '#3B82F6';

  const [isInView, setIsInView] = useState(false);

  // 2. Crossfade with blur (PDF: Transition Animations)
  const blurRevealVariants = {
    hidden: { opacity: 0, filter: "blur(20px)", scale: 0.95 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <section 
      className="relative w-full overflow-hidden selection:bg-blue-500 selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* 
        Strict Grid Layout to prevent any text clipping/overlapping issues 
        Max-width wrapper for perfect alignment
      */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text & Content (Strictly bounded) */}
        <div className="flex flex-col items-start w-full z-10 relative">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
            <span className="text-sm font-mono tracking-widest uppercase font-bold text-gray-500">
              {settings.subtitle}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-8 text-balance"
          >
            {settings.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-md font-light leading-relaxed mb-12"
          >
            {settings.description}
          </motion.p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 w-full">
            <motion.a
              href={settings.buttonLink}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group flex items-center justify-between px-8 py-4 rounded-full font-bold tracking-wide text-white shadow-xl hover:shadow-2xl transition-shadow w-full sm:w-auto"
              style={{ backgroundColor: textCol }}
            >
              <span>{settings.buttonText}</span>
              <div 
                className="ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Stat Counter */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-start border-l-2 pl-6"
              style={{ borderColor: accent }}
            >
              <h4 className="text-3xl font-black font-mono">
                <AnimatedCounter endValue={settings.statNumber || 2026} isActive={isInView} />
              </h4>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">
                {settings.statText}
              </span>
            </motion.div>
          </div>

        </div>

        {/* Right Column: Image (Strictly bounded, no absolute overlaps) */}
        <div className="w-full relative flex items-center justify-center">
          
          {/* Decorative outline box behind the image */}
          <motion.div 
            initial={{ opacity: 0, x: 40, y: 40 }}
            whileInView={{ opacity: 1, x: 20, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 border-2 rounded-[2rem] hidden md:block"
            style={{ borderColor: accent, opacity: 0.3 }}
          />

          <motion.div
            variants={blurRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group"
          >
            {/* 3. Scale down and fade image hover (PDF: Hover Animations) */}
            <motion.img 
              src={settings.image} 
              alt="Promotional Feature"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            {/* Soft inner shadow/vignette */}
            <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
