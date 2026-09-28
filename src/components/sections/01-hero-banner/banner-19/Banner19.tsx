"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner19({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#0A0A0A';
  const textCol = styles?.textColor || '#FFFFFF';

  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    if (isHovering || !settings?.panels?.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % settings.panels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering, settings?.panels?.length]);

  // Entrance variants for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const panelVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as any }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-white selection:text-black flex"
      style={{ backgroundColor: bg, color: textCol }}
    >
      
      
      {/* Absolute Header (Mix Blend) */}
      <div className="absolute top-12 left-12 right-12 flex justify-between items-center z-50 pointer-events-none mix-blend-difference text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-2xl md:text-4xl font-black uppercase tracking-[0.2em]"
        >
          {settings?.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xs font-mono tracking-widest hidden md:block opacity-60"
        >
          {settings?.description}
        </motion.p>
      </div>

      {/* Accordion Panels Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex"
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        {settings?.panels?.map((panel: any, idx: number) => {
          const isActive = activeIndex === idx;
          
          return (
            <motion.div
              key={panel.id}
              variants={panelVariants}
              onHoverStart={() => setActiveIndex(idx)}
              animate={{ 
                flex: isActive ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 5) : 1 
              }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }}
              className="relative h-full border-r border-white/10 last:border-r-0 cursor-pointer overflow-hidden group"
            >
              {/* Background Image */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                animate={{ 
                  scale: isActive ? 1 : 1.2,
                  filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)'
                }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] as any }}
              >
                <img 
                  src={panel.image} 
                  alt={panel.title} 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
              {/* Overlay Gradient for readability */}
              <div 
                className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' : 'bg-black/60 group-hover:bg-black/40'}`} 
              />

              {/* Panel Content (Text) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                {/* Vertical Text (Visible when inactive) */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    opacity: isActive ? 0 : 1,
                    x: isActive ? -20 : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 origin-bottom-left -rotate-90 whitespace-nowrap hidden md:block"
                >
                  <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase">
                    {panel.id} — {panel.title}
                  </span>
                </motion.div>

                {/* Horizontal Active Text (Visible when active) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col"
                    >
                      <span className="text-xs font-mono tracking-widest text-white/60 mb-4">
                        [ {panel.id} ] {panel.subtitle}
                      </span>
                      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                        {panel.title}
                      </h2>
                      
                      <motion.div 
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="h-[1px] bg-white/30 mt-8 relative"
                      >
                        <div className="absolute top-0 right-0 h-full w-1/4 bg-white" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
