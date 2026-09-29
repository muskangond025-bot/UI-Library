import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = ["Device", "Cable", "Manual", "Stickers"];

export default function WhatsInTheBox8({ data }: { data: any }) {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={containerRef} className="bg-neutral-100 h-[200vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <h2 className="absolute top-12 text-4xl font-black text-black z-50">Included</h2>

        <div className="relative w-full max-w-md h-[400px]">
          {items.map((item, i) => {
            // We create a staggered stack effect based on index
            return <StackingCard key={i} item={item} index={i} total={items.length} containerRef={containerRef} />;
          })}
        </div>

      </div>
    </section>
  );
}

function StackingCard({ item, index, total, containerRef }: any) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate when this card should drop in
  const start = index * (1 / total);
  
  // y moves from -100% to 0%
  const y = useTransform(scrollYProgress, [Math.max(0, start - 0.2), start], ["-150%", "0%"]);
  // scale compresses slightly as more cards pile on top
  const scale = useTransform(scrollYProgress, [start, 1], [1, 1 - ((total - index) * 0.05)]);
  // margin pushes cards down to fake a stack
  const top = `${index * 20}px`;

  return (
    <motion.div 
      style={{ y, scale, top, zIndex: index }}
      className="absolute w-full h-48 bg-white border border-neutral-200 rounded-3xl shadow-xl flex items-center justify-center"
    >
      <h3 className="text-3xl font-black text-black">{item}</h3>
    </motion.div>
  );
}
