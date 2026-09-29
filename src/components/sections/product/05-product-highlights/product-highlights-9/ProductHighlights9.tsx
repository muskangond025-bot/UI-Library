import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights9({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-neutral-950 overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      {/* Background Infinite Wireframes */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <motion.div style={{ scale, opacity }} className="relative flex items-center justify-center h-screen">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute border border-white/10 rounded-full"
              style={{ width: `${i * 30}vw`, height: `${i * 30}vw` }}
              animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
              transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Scrollable Content to trigger parallax */}
      <div ref={contentRef} className="relative z-10 w-full h-[200vh] -mt-[100vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-center max-w-3xl px-6 backdrop-blur-md bg-black/20 p-12 rounded-3xl border border-white/5">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6"
            >
              Absolute Focus.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl text-neutral-400 font-light"
            >
              Distraction-free engineering.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
