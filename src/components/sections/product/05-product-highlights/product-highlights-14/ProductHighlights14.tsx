import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights14({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"]
  });

  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(20px)", "blur(0px)", "blur(20px)"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[200vh] w-full">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <motion.div style={{ filter: blur, opacity, scale }} className="text-center">
            <h2 className="text-6xl md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 leading-none tracking-tighter mb-8">
              Breathtaking.
            </h2>
            <p className="text-xl md:text-3xl text-neutral-400 max-w-2xl mx-auto font-light">
              Experience clarity like never before. Every pixel rendered with absolute precision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
