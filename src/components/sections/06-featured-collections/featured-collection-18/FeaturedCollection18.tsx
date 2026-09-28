import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection18Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      collections: Collection[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

function StackCard({ collection, index, total, scrollYProgress }: { collection: Collection, index: number, total: number, scrollYProgress: any }) {
  // Each card peels away based on scroll progress
  // E.g., if total is 4, card 0 peels between 0-0.25, card 1 between 0.25-0.5
  const start = index / total;
  const end = (index + 1) / total;
  
  // Slide up and fade out
  const y = useTransform(scrollYProgress, [start, end], ["0vh", "-100vh"]);
  const opacity = useTransform(scrollYProgress, [start, end - 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  // Is this the last card? (It shouldn't peel away)
  const isLast = index === total - 1;

  return (
    <motion.div 
      className="absolute top-0 w-full h-full flex flex-col md:flex-row items-center justify-center p-8 md:p-24 origin-bottom"
      style={{ 
        y: isLast ? "0vh" : y, 
        opacity: isLast ? 1 : opacity, 
        scale: isLast ? 1 : scale,
        zIndex: total - index
      }}
    >
      <div className="w-full h-full max-w-6xl rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl bg-black">
        <img src={collection.image} alt={collection.title} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <span className="text-xl md:text-2xl font-mono text-white/50 mb-4">0{index + 1}</span>
          <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">{collection.title}</h3>
          <p className="text-xl md:text-3xl text-white/80 max-w-2xl font-light border-l-4 pl-6" style={{ borderColor: 'currentcolor' }}>{collection.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedCollection18({ section }: FeaturedCollection18Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div 
      ref={containerRef}
      className="relative h-[800px] md:h-screen w-full overflow-y-auto overflow-x-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="relative w-full" style={{ height: `${content.collections.length * 100}vh` }}>
        
        {/* Sticky Container for the stack */}
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          
          <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50 pointer-events-none mix-blend-difference">
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-white">{content.title}</h2>
          </div>

          <div className="relative w-full h-full">
            {content.collections.map((collection, index) => (
              <StackCard 
                key={collection.id} 
                collection={collection} 
                index={index} 
                total={content.collections.length} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
