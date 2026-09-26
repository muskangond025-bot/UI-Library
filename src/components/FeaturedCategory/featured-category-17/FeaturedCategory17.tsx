"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function FeaturedCategory17({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Motion values for the X-Ray spotlight tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Apply spring physics for buttery smooth tracking (no rigid snapping)
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 300 });

  // Generate the dynamic CSS mask
  const maskImage = useMotionTemplate`radial-gradient(circle ${isHoveringImage ? '300px' : '0px'} at ${smoothX}px ${smoothY}px, black 60%, transparent 100%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handleMouseEnter = () => setIsHoveringImage(true);
  const handleMouseLeave = () => setIsHoveringImage(false);

  // Set initial position to center of the container once mounted
  useEffect(() => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }
  }, [mouseX, mouseY]);

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 h-auto md:h-[75vh]">
        
        {/* Left Side: Category List (Strictly separated) */}
        <div className="w-full md:w-[45%] flex flex-col justify-center z-10 pr-0 md:pr-8">
          <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-40 mb-12 block">
            {settings.title}
          </span>

          <div className="flex flex-col border-t border-white/10">
            {categories.map((cat: any, index: number) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={cat.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group relative py-8 border-b border-white/10 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-6 min-w-0 pr-4">
                    <span className={`text-sm md:text-xl font-bold transition-all duration-500 ${isActive ? 'opacity-100 translate-x-2' : 'opacity-30'}`}>
                      0{index + 1}
                    </span>
                    
                    <h3 className={`text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter truncate transition-all duration-500
                      ${isActive ? 'text-white translate-x-4' : 'text-white/30 group-hover:text-white/50'}
                    `}>
                      {cat.name}
                    </h3>
                  </div>

                  <div className={`shrink-0 transition-all duration-500 transform ${isActive ? 'rotate-0 opacity-100 scale-100' : '-rotate-45 opacity-0 scale-50'}`}>
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: The X-Ray Image Reveal */}
        <div 
          className="w-full md:w-[55%] h-[50vh] md:h-full relative rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 shadow-2xl cursor-crosshair group"
          ref={imageContainerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Base Layer: Extremely blurred and darkened version of the active image */}
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={`bg-${activeIndex}`}
              src={categories[activeIndex].image}
              alt="Background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover blur-2xl grayscale"
            />
          </AnimatePresence>

          {/* Top Layer: The X-Ray Masked sharp image */}
          <motion.div 
            className="absolute inset-0 z-10 w-full h-full transition-[mask-size] duration-700 ease-out"
            style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={`fg-${activeIndex}`}
                src={categories[activeIndex].image}
                alt={categories[activeIndex].name}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Inner description overlay strictly constrained to the masked area */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">
              <p className="text-white text-lg font-medium max-w-sm drop-shadow-lg">
                {categories[activeIndex].description}
              </p>
            </div>
          </motion.div>

          {/* Custom Cursor Prompt when not hovering */}
          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isHoveringImage ? 'opacity-0' : 'opacity-100'}`}>
            <span className="text-white/40 uppercase tracking-[0.3em] font-bold text-sm bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              Hover to Reveal
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
