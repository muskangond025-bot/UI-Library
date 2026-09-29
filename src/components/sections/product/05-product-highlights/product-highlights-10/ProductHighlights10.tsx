import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights10({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: contentRef, 
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"] 
  });
  
  // The background image scales up slightly as you scroll down
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // The text moves up faster than the background to create parallax
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  return (
    <section 
      ref={scrollContainerRef} 
      className="h-[800px] lg:h-screen bg-black w-full overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[250vh] w-full relative">
        {/* Sticky Background */}
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div 
            style={{ scale: bgScale }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2000" 
              className="w-full h-full object-cover opacity-60 grayscale" 
              alt="Background" 
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>
        
        {/* Scrolling Parallax Text */}
        <motion.div 
          style={{ y: textY }}
          className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-[50vh] mix-blend-difference z-10 pointer-events-none"
        >
          <h2 className="text-[12vw] font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap">
            Pure Power.
          </h2>
          <h2 className="text-[12vw] font-black text-transparent text-stroke-2 text-stroke-white leading-none tracking-tighter uppercase whitespace-nowrap -mt-4 opacity-50">
            Unleashed.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
