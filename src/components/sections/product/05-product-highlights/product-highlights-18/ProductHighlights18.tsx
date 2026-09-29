import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights18({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const words = ["Powerful.", "Intelligent.", "Refined."];

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[300vh] w-full">
        {/* Subtle grid background so it doesn't look broken/empty */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-2 md:gap-4">
            {words.map((word, i) => {
              // WAAPI offsets must be in [0, 1] and strictly increasing!
              const start = i === 0 ? 0 : (i - 1) * 0.3;
              const end = i === 0 ? 1 : start + 0.3;
              
              // If i === 0, keep it always visible by mapping [0, 1] to ["0%", "0%"] and [1, 1]
              const y = useTransform(scrollYProgress, [start, end], i === 0 ? ["0%", "0%"] : ["120%", "0%"]);
              const opacity = useTransform(scrollYProgress, [start, end], i === 0 ? [1, 1] : [0, 1]);
              
              return (
                <div key={i} className="overflow-hidden p-2">
                  <motion.h2 
                    style={{ y, opacity }}
                    className="text-7xl md:text-[8vw] font-black text-white leading-none tracking-tighter"
                  >
                    {word}
                  </motion.h2>
                </div>
              );
            })}
          </div>
          
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-12 text-neutral-500 flex flex-col items-center animate-bounce"
          >
            <span className="text-sm font-bold tracking-widest uppercase mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
