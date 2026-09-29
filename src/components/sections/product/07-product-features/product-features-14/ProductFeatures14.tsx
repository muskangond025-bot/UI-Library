import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductFeatures14({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-purple-800 to-blue-800 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 min-h-[600px] flex items-center justify-center">
        
        {/* Layer 1 (Back, slowest) */}
        <motion.div style={{ y: y1 }} className="absolute left-0 md:left-20 top-20 w-72 p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-2">Deep Integration</h3>
          <p className="text-sm text-neutral-400">Hooks seamlessly into your existing tech stack without friction.</p>
        </motion.div>

        {/* Layer 2 (Middle) */}
        <motion.div style={{ y: y2 }} className="absolute right-0 md:right-20 top-1/2 -translate-y-1/2 w-80 p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 z-20 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">Real-time Sync</h3>
          <p className="text-base text-neutral-300">Data propagates instantly across all connected clients and edge nodes.</p>
        </motion.div>

        {/* Layer 3 (Front, fastest) */}
        <motion.div style={{ y: y3 }} className="absolute left-10 md:left-1/3 bottom-20 w-64 p-6 bg-blue-500/20 backdrop-blur-xl rounded-3xl border border-blue-400/30 z-30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <h3 className="text-lg font-bold text-white mb-2">Edge Delivery</h3>
          <p className="text-xs text-blue-200">Millisecond response times anywhere in the world.</p>
        </motion.div>

      </div>
    </section>
  );
}
