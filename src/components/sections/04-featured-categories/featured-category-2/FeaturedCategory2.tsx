"use client";
import React, { useRef } from 'react';
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

export function FeaturedCategory2({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#fafafa';
  const textCol = styles?.textColor || '#09090b';
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const categories = settings?.categories || [];

  return (
    <section 
      className="w-full relative flex flex-col items-center justify-center py-20 md:py-32 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
       {/* Header */}
       <div className="w-full max-w-7xl flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase opacity-50 mb-4"
          >
            {settings.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter"
          >
            {settings.title}
          </motion.h2>
       </div>

       {/* Bento Grid */}
       <div 
         ref={containerRef}
         className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-[140vh] md:h-[90vh] lg:h-[75vh]"
       >
         {categories.map((cat: any, i: number) => {
           const isLarge = cat.size === 'large';
           
           return (
             <motion.a
               key={cat.id}
               href={cat.link}
               initial={{ opacity: 0, y: 40 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
               transition={{ duration: 0.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
               className={`relative overflow-hidden rounded-3xl group block ${isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2 h-[45vh] md:h-auto' : 'col-span-1 row-span-1 h-[25vh] md:h-auto'}`}
             >
               {/* Background Image */}
               <div className="absolute inset-0 overflow-hidden bg-[#e0e0e0]">
                 <img 
                   src={cat.image} 
                   alt={cat.name} 
                   className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                 />
               </div>

               {/* Default Dark Overlay (Sweeps away on hover) */}
               <div className="absolute inset-0 bg-black/50 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-0" />

               {/* Gradient Overlay for bottom text readability (Fades in on hover) */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100" />

               {/* Content Container */}
               <div className="absolute inset-0 pointer-events-none">
                 
                 {/* The Text that morphs */}
                 <div 
                   className="text-container absolute w-full px-6 transition-all duration-[0.8s] ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col justify-center"
                   style={{
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     height: 'auto'
                   }}
                 >
                   <h3 
                     className={`title-text font-black uppercase tracking-tighter text-center transition-all duration-[0.8s] ease-[cubic-bezier(0.19,1,0.22,1)]
                       ${isLarge ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-3xl md:text-4xl'}
                     `}
                   >
                     {cat.name}
                   </h3>
                 </div>
                 
                 {/* Additional Details (Fade in) */}
                 <div className="absolute bottom-6 left-6 right-6 z-10 opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0 flex justify-between items-end">
                   <p className="text-white/80 text-xs md:text-sm font-medium max-w-[70%]">
                     {cat.description}
                   </p>
                   
                   <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-500">
                     <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                   </div>
                 </div>

               </div>
             </motion.a>
           );
         })}
       </div>
       
       <style dangerouslySetInnerHTML={{__html: `
         /* Initial state for title-text */
         .title-text {
           -webkit-text-stroke: 1px rgba(255, 255, 255, 0.9);
           color: transparent;
         }

         /* Hover state for container */
         .group:hover .text-container {
           top: 100%;
           left: 0%;
           transform: translate(0%, calc(-100% - 1.5rem)); /* align to bottom padding */
         }

         /* Extra lift for large card */
         @media (min-width: 1024px) {
           .group:hover .text-container {
             transform: translate(0%, calc(-100% - 2.5rem)); /* extra lift to fit description */
           }
         }

         /* Hover state for text */
         .group:hover .title-text {
           text-align: left;
           -webkit-text-stroke: 0px transparent;
           color: #ffffff;
           text-shadow: 0 4px 20px rgba(0,0,0,0.5);
         }
       `}} />
    </section>
  );
}
