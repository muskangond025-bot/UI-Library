import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  { title: "Speed", speed: 0.8, color: "bg-blue-500", size: "h-[300px]" },
  { title: "Power", speed: 1.2, color: "bg-purple-500", size: "h-[400px]" },
  { title: "Design", speed: 0.9, color: "bg-pink-500", size: "h-[250px]" },
  { title: "Battery", speed: 1.1, color: "bg-emerald-500", size: "h-[350px]" },
];

export default function ProductHighlights19({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={scrollContainerRef}
      className="h-screen bg-neutral-950 overflow-y-auto overflow-x-hidden hide-scrollbar relative py-[20vh]"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 h-[150vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [200 * f.speed, -200 * f.speed]);
            
            return (
              <motion.div
                key={i}
                style={{ y }}
                className={`${f.size} w-full rounded-[3rem] ${f.color} flex items-center justify-center p-8 shadow-2xl`}
              >
                <h3 className="text-5xl font-black text-white mix-blend-overlay">{f.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
