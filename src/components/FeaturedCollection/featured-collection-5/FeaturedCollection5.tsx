import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection5Props {
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

function ParallaxImage({ collection, scrollYProgress, index }: { collection: Collection, scrollYProgress: any, index: number }) {
  // Even items move up faster, odd items move slightly down relative to scroll
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? ["0%", "-20%"] : ["0%", "20%"]
  );

  return (
    <motion.div 
      style={{ y }}
      className="relative w-full rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid mb-8"
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 z-10" />
      <img 
        src={collection.image} 
        alt={collection.title}
        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 p-8 z-20 w-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">{collection.title}</h3>
        <p className="text-white/80 font-light">{collection.description}</p>
      </div>
    </motion.div>
  );
}

export function FeaturedCollection5({ section }: FeaturedCollection5Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <div 
      ref={scrollRef}
      className="relative h-[800px] md:h-screen w-full overflow-y-auto overflow-x-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div ref={containerRef} className="relative min-h-[150vh] w-full px-8 md:px-24 py-32">
        <div className="max-w-2xl mx-auto text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-widest mb-4"
            style={{ color: style.accentColor }}
          >
            {content.subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            {content.title}
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto relative z-10">
          {content.collections.map((collection, index) => (
            <ParallaxImage 
              key={collection.id} 
              collection={collection} 
              scrollYProgress={scrollYProgress} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
