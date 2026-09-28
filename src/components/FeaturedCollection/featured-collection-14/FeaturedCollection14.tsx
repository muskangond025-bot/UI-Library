import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection14Props {
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

export function FeaturedCollection14({ section }: FeaturedCollection14Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Calculate horizontal sweep
  const x = useTransform(scrollYProgress, [0, 1], ["50vw", "-150vw"]);
  
  // Calculate a slight rotation to make it feel more dynamic
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[800px] md:h-screen w-full overflow-y-auto overflow-x-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="relative h-[400vh] w-full">
        {/* Sticky wrapper */}
        <div className="sticky top-0 left-0 w-full h-[800px] md:h-screen overflow-hidden flex items-center">
          
          {/* Header */}
          <div className="absolute top-12 left-8 md:top-24 md:left-24 z-30 pointer-events-none">
            <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mix-blend-difference text-white">
              {content.title}
            </h2>
          </div>

          {/* Scrolling Grid */}
          <motion.div 
            style={{ x, rotate }}
            className="flex gap-8 md:gap-16 px-8 md:px-24 items-center mt-24"
          >
            {content.collections.map((collection, index) => {
              // Create a diagonal offset pattern
              const yOffset = index % 2 === 0 ? -40 : 40;
              
              return (
                <motion.div
                  key={collection.id}
                  className="relative w-[70vw] md:w-[35vw] aspect-[3/4] shrink-0 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                  style={{ y: yOffset }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <img 
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tighter">
                      {collection.title}
                    </h3>
                    <p className="text-white/80 font-light">{collection.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
