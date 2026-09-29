import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductSpecifications15({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-neutral-950 overflow-y-auto overflow-x-hidden hide-scrollbar relative py-32"
    >
      <div className="text-center mb-24 sticky top-12 z-20 mix-blend-difference pointer-events-none">
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">Everything.</h2>
      </div>

      <div ref={contentRef} className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Left Column (moves UP) */}
        <motion.div style={{ y: yLeft }} className="flex flex-col gap-8">
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[400px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Titanium</h3>
            <p className="text-neutral-400">Grade 5 titanium bands with a new brushed texture.</p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[300px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">A17 Pro</h3>
            <p className="text-neutral-400">The industry's first 3-nanometer chip.</p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[400px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Display</h3>
            <p className="text-neutral-400">6.7" Super Retina XDR.</p>
          </div>
        </motion.div>

        {/* Right Column (moves DOWN) */}
        <motion.div style={{ y: yRight }} className="flex flex-col gap-8 md:-mt-48">
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[300px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Action Button</h3>
            <p className="text-neutral-400">A fast track to your favorite feature.</p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[500px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Pro Camera</h3>
            <p className="text-neutral-400">48MP Main camera. Up to 4x resolution.</p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[300px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Battery</h3>
            <p className="text-neutral-400">Up to 29 hours of video playback.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
