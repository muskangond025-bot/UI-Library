import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductFeatures2({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const features = [
    { title: "Design", desc: "Forged in titanium.", img: "https://picsum.photos/seed/feat1/800/1200" },
    { title: "Camera", desc: "48MP Main camera.", img: "https://picsum.photos/seed/feat2/800/1200" },
    { title: "Chip", desc: "A17 Pro chip.", img: "https://picsum.photos/seed/feat3/800/1200" },
    { title: "Battery", desc: "All-day battery life.", img: "https://picsum.photos/seed/feat4/800/1200" }
  ];

  return (
    <section 
      ref={scrollContainerRef}
      className="h-screen bg-white overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[400vh] w-full flex">
        
        {/* Sticky Left: Dynamic Images */}
        <div className="w-1/2 h-screen sticky top-0 overflow-hidden">
          {features.map((feat, i) => {
            const start = i * 0.25;
            const end = (i + 1) * 0.25;
            
            // Image fades in and out based on scroll progress
            const fadeStart = Math.max(0, start - 0.1);
            const fadeEnd = Math.min(1, end + 0.1);
            
            const opacity = useTransform(scrollYProgress, [fadeStart, start, end, fadeEnd], [0, 1, 1, 0]);
            
            return (
              <motion.div 
                key={i}
                style={{ opacity }}
                className="absolute inset-0 w-full h-full"
              >
                <img src={feat.img} alt={feat.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90" />
              </motion.div>
            );
          })}
        </div>

        {/* Scrolling Right: Text Content */}
        <div className="w-1/2 flex flex-col justify-between py-[50vh]">
          {features.map((feat, i) => (
            <div key={i} className="h-[100vh] flex flex-col justify-center px-16">
              <motion.h2 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-200px" }}
                className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-6"
              >
                {feat.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-200px" }}
                className="text-2xl text-neutral-500 font-light"
              >
                {feat.desc}
              </motion.p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
