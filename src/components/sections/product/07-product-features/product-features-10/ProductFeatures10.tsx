import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductFeatures10({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const maskSize = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "200%"]);

  return (
    <section 
      ref={scrollContainerRef}
      className="h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[300vh] w-full">
        
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          
          {/* Background Image that scales up */}
          <motion.div 
            style={{ scale: bgScale }}
            className="absolute inset-0 z-0"
          >
            <img src="https://picsum.photos/seed/feat10/1920/1080" alt="Background" className="w-full h-full object-cover opacity-50 grayscale" />
          </motion.div>

          {/* Typography Mask Reveal */}
          <motion.div 
            style={{ y: textY }}
            className="relative z-10 w-full px-6 mix-blend-overlay flex flex-col items-center text-center"
          >
            <h2 className="text-[15vw] font-black text-white leading-none tracking-tighter uppercase">Titanium</h2>
            <h2 className="text-[15vw] font-black text-transparent stroke-white stroke-2 leading-none tracking-tighter uppercase" style={{ WebkitTextStroke: "2px white" }}>Forged</h2>
          </motion.div>

          {/* Circular mask reveal effect (simulated with radial gradient opacity) */}
          <motion.div 
            style={{ 
              background: useTransform(maskSize, (s) => `radial-gradient(circle ${s} at center, transparent 0%, black 100%)`)
            }}
            className="absolute inset-0 z-20 pointer-events-none"
          />
          
        </div>

      </div>
    </section>
  );
}
