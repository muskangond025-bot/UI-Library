"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function PromotionalBanner20({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#18181b';
  const textCol = styles?.textColor || '#ffffff';
  
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section 
      className="w-full flex items-center justify-center font-sans py-16 md:py-24 px-4 md:px-8 z-10 relative"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <div className="w-full max-w-7xl relative rounded-3xl shadow-2xl h-[70vh] md:h-[80vh]">
        
        {/* Main Background Image Container (Handles border radius & overflow) */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <motion.img 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={settings.image}
            alt={settings.title}
            className="absolute inset-0 w-full h-full object-cover pointer-events-auto"
          />
          
          {/* Dark Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>

        {/* Title & Subtitle */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10 pointer-events-none">
           <motion.h4 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-80 mb-2"
           >
             {settings.subtitle}
           </motion.h4>
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter"
           >
             {settings.title}
           </motion.h2>
        </div>

        {/* Hotspots */}
        {settings.hotspots?.map((hotspot: any) => {
          const isActive = activeHotspot === hotspot.id;
          
          return (
            <div 
              key={hotspot.id} 
              className="absolute z-20"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              onMouseEnter={() => setActiveHotspot(hotspot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              {/* Pulsing Dot */}
              <div className="relative flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2 group">
                <motion.div 
                  className="absolute w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm pointer-events-none"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              {/* Popover Card */}
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: hotspot.y > 60 ? -10 : 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: hotspot.y > 60 ? -10 : 10, scale: 0.95 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                    className={`absolute left-1/2 -translate-x-1/2 ${hotspot.y > 60 ? 'bottom-8' : 'top-8'} w-64 md:w-72 bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl`}
                    style={{ transformOrigin: hotspot.y > 60 ? 'bottom center' : 'top center' }}
                  >
                    <div className="w-full h-32 md:h-40 overflow-hidden bg-black/20">
                      <img src={hotspot.image} alt={hotspot.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 md:p-5">
                      <div className="flex justify-between items-start gap-2 mb-4">
                        <h3 className="text-base font-bold text-white leading-tight">{hotspot.title}</h3>
                        <span className="text-sm font-black text-white/90">{hotspot.price}</span>
                      </div>
                      
                      <a 
                        href={hotspot.link}
                        className="w-full flex items-center justify-center gap-2 py-2.5 md:py-3 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-colors"
                      >
                        Shop Now
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

      </div>
    </section>
  );
}
