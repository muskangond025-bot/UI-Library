import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WhatsInTheBox2({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const items = [
    { name: "Main Device", start: 0, end: 0.4, xOut: -200, yOut: -100 },
    { name: "Braided Cable", start: 0.1, end: 0.5, xOut: 200, yOut: -50 },
    { name: "Manual", start: 0.2, end: 0.6, xOut: -150, yOut: 150 },
    { name: "Stickers", start: 0.3, end: 0.7, xOut: 150, yOut: 100 }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-black min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full text-center relative h-[800px] flex items-center justify-center">
        
        <h2 className="absolute top-10 w-full text-center text-4xl font-black text-white">Unboxing.</h2>

        {/* Central Box Placeholder */}
        <div className="absolute w-48 h-48 bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl z-10 flex items-center justify-center">
          <span className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Box</span>
        </div>

        {/* Exploding Items */}
        {items.map((item, i) => {
          const x = useTransform(scrollYProgress, [item.start, item.end], [0, item.xOut]);
          const y = useTransform(scrollYProgress, [item.start, item.end], [0, item.yOut]);
          const opacity = useTransform(scrollYProgress, [item.start, item.start + 0.1, item.end], [0, 1, 1]);
          const scale = useTransform(scrollYProgress, [item.start, item.end], [0.5, 1]);

          return (
            <motion.div
              key={i}
              style={{ x, y, opacity, scale }}
              className="absolute w-40 h-40 bg-neutral-800 rounded-2xl border border-white/10 flex items-center justify-center p-4 z-20 shadow-xl"
            >
              <span className="text-white font-bold text-center">{item.name}</span>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
