"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export function PromotionalBanner14({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#09090b';
  const textCol = styles?.textColor || '#ffffff';
  
  const panels = settings?.panels || [];
  
  // By default, no panel is active. They return to balanced flex sizes when mouse leaves.
  const [activePanel, setActivePanel] = useState<string | null>(null);

  return (
    <section 
      className="w-full flex flex-col items-center justify-center font-sans overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none max-w-2xl">
           {settings.title}
         </h2>
         <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-60 text-left md:text-right max-w-xs">
           {settings.subtitle}
         </p>
      </div>

      <div 
        className="w-full max-w-[95%] xl:max-w-7xl h-[60vh] md:h-[75vh] flex flex-col md:flex-row gap-2 md:gap-4 px-4 md:px-8"
        onMouseLeave={() => setActivePanel(null)}
      >
        {panels.map((panel: any) => {
          const isActive = activePanel === panel.id;
          const isBalanced = activePanel === null;
          
          return (
            <motion.div
              key={panel.id}
              onMouseEnter={() => setActivePanel(panel.id)}
              animate={{ 
                flex: isActive ? 6 : isBalanced ? 1 : 0.8 
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
              className="relative rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer group flex-shrink-0"
              style={{ backgroundColor: '#1f2937' }}
            >
              {/* Background Image */}
              <motion.img 
                src={panel.image} 
                alt={panel.title}
                className="absolute inset-0 w-full h-full object-cover origin-center"
                animate={{ 
                  scale: isActive ? 1.05 : 1,
                  filter: isActive ? 'grayscale(0%)' : 'grayscale(80%)'
                }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Dark Overlay */}
              <motion.div 
                className="absolute inset-0 transition-colors duration-500"
                animate={{
                  backgroundColor: isActive ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.6)'
                }}
              />
              
              {/* Gradient to make text pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end pointer-events-none">
                
                {/* Default Title (Vertical on desktop, horizontal on mobile) */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 bottom-6 md:bottom-10 md:-translate-x-1/2 flex items-center justify-center w-full md:w-auto"
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xl md:text-3xl font-black uppercase tracking-widest md:[writing-mode:vertical-lr] md:rotate-180 drop-shadow-md whitespace-nowrap">
                    {panel.title}
                  </span>
                </motion.div>
                
                {/* Active Content (Revealed on hover) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4, delay: 0.15, type: "spring" }}
                      className="flex flex-col gap-1 md:gap-2 pointer-events-auto w-full md:w-[400px]"
                    >
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white/80 drop-shadow-lg">
                        {panel.title}
                      </h3>
                      <h4 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] tracking-tighter leading-none mb-4 md:mb-6">
                        {panel.discount}
                      </h4>
                      
                      <div className="mt-2 md:mt-4">
                        <a 
                          href={panel.ctaLink}
                          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
                        >
                          {panel.ctaText}
                          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
