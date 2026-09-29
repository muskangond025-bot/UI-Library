import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const specs = [
  { id: "01", title: "Core Processor", detail: "A17 Pro. The industry's first 3-nanometer chip." },
  { id: "02", title: "GPU Architecture", detail: "6-core GPU with hardware-accelerated ray tracing." },
  { id: "03", title: "Neural Engine", detail: "16-core design capable of 35 trillion operations per second." },
  { id: "04", title: "Memory Bandwidth", detail: "17% more memory bandwidth for intensive graphics." },
  { id: "05", title: "Power Efficiency", detail: "Up to 29 hours of video playback on a single charge." },
];

export default function ProductSpecifications16({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={scrollContainerRef} className="h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative">
      
      <div className="text-center py-24 sticky top-0 z-10 bg-gradient-to-b from-black to-transparent">
        <h2 className="text-5xl font-black text-white">System Architecture.</h2>
      </div>

      <div ref={contentRef} className="relative max-w-4xl mx-auto px-6 py-24 min-h-[150vh]">
        
        {/* Animated Vertical Line */}
        <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/10">
          <motion.div 
            style={{ scaleY: pathLength, transformOrigin: "top" }}
            className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        {/* Spec Points */}
        <div className="flex flex-col justify-between h-full py-12 gap-32">
          {specs.map((spec, i) => {
            const isEven = i % 2 === 0;
            const startOffset = i * 0.2;
            const endOffset = startOffset + 0.2;
            
            // Nodes appear sequentially as the line passes them
            const opacity = useTransform(scrollYProgress, [startOffset, endOffset], [0, 1]);
            const scale = useTransform(scrollYProgress, [startOffset, endOffset], [0.5, 1]);

            return (
              <div key={i} className={`relative w-full flex ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-24 md:pl-0`}>
                
                {/* Node Dot */}
                <motion.div 
                  style={{ opacity, scale }}
                  className="absolute left-0 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border-4 border-blue-500 z-10 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                />

                {/* Content Card */}
                <motion.div 
                  style={{ opacity, x: useTransform(scrollYProgress, [startOffset, endOffset], [isEven ? -50 : 50, 0]) }}
                  className={`md:w-[40%] bg-neutral-900 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative ${isEven ? 'md:-mr-12' : 'md:-ml-12'}`}
                >
                  <span className="text-blue-500 font-mono text-sm font-bold tracking-widest block mb-2">{spec.id}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{spec.title}</h3>
                  <p className="text-neutral-400">{spec.detail}</p>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
