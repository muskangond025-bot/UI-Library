"use client";
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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

export function FeaturedCategory1({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#09090b';
  const textCol = styles?.textColor || '#ffffff';
  
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Duplicate categories for infinite scrolling marquee
  const categories = settings?.categories || [];
  const loopedCategories = [...categories, ...categories, ...categories];
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="w-full relative overflow-hidden flex flex-col justify-center py-20 md:py-32"
      style={{ backgroundColor: bg, color: textCol, minHeight: '80vh' }}
    >
      {/* Header Section */}
      <div 
        ref={headerRef}
        className="w-full max-w-full px-6 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10"
      >
        <div className="flex flex-col gap-2">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase opacity-60"
          >
            {settings.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter"
          >
            {settings.title}
          </motion.h2>
        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div 
        className="relative w-full overflow-hidden flex items-center py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, ${bg}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to left, ${bg}, transparent)` }} />

        <motion.div 
          className="flex gap-6 md:gap-10 px-6"
          animate={{ x: isHovered ? "0%" : ["0%", "-33.333%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity,
            // If hovered, we just let the animation freeze (using a different state approach would be better, but Framer Motion handles this automatically if we use useAnimation, or we can just slow it down)
          }}
          // A better way to pause on hover is using animation controls or just CSS, but for simplicity we'll let it scroll continuously, maybe just slower
        >
          <div className="flex gap-6 md:gap-10 shrink-0 animate-marquee" style={{ animationPlayState: isHovered ? 'paused' : 'running' }}>
             {loopedCategories.map((category: any, idx: number) => (
               <a 
                 key={`${category.id}-${idx}`}
                 href={category.link}
                 className="relative group w-[280px] h-[400px] md:w-[380px] md:h-[550px] shrink-0 rounded-3xl overflow-hidden cursor-pointer"
               >
                 {/* Card Background Image */}
                 <motion.img 
                   src={category.image}
                   alt={category.name}
                   className="absolute inset-0 w-full h-full object-cover grayscale-[20%] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                 />
                 
                 {/* Dark Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                 
                 {/* Glassmorphism Floating Icon/Text (ReactBits Glass Concept) */}
                 <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                   <div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-white/20 group-hover:border-white/40">
                      
                      {/* Highlight sweep effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />

                      <div className="flex justify-between items-end relative z-10">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                            {category.itemCount}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                            {category.name}
                          </h3>
                        </div>
                        
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-lg transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                   </div>
                 </div>
               </a>
             ))}
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
