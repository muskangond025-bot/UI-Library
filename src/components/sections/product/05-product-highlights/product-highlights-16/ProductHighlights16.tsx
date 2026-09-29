import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights16({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const features = [
    { title: "Designed", top: "20%" },
    { title: "Engineered", top: "50%" },
    { title: "Perfected", top: "80%" }
  ];

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="relative w-full h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 100 800" className="w-8 h-full" preserveAspectRatio="none">
              <motion.path 
                d="M 50 0 L 50 800" 
                stroke="white" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="1 1"
                style={{ pathLength, opacity: 0.5 }}
              />
            </svg>
          </div>

          <div className="relative w-full h-full max-w-4xl mx-auto flex flex-col items-center">
            {features.map((f, i) => {
              const start = i * 0.2;
              const opacity = useTransform(scrollYProgress, [start, start + 0.1, start + 0.2], [0, 1, 0.3]);
              const scale = useTransform(scrollYProgress, [start, start + 0.1], [0.8, 1]);
              
              return (
                <motion.div 
                  key={i}
                  style={{ top: f.top, opacity, scale }}
                  className="absolute transform -translate-y-1/2 w-full text-center"
                >
                  <div className="w-4 h-4 rounded-full bg-white mx-auto mb-4" />
                  <h3 className="text-6xl font-black text-white">{f.title}</h3>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
