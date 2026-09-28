import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection6Props {
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

export function FeaturedCollection6({ section }: FeaturedCollection6Props) {
  const { content, style } = section;
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
      <div className="relative flex flex-col md:flex-row w-full max-w-7xl mx-auto px-8 py-24">
        
        {/* Sticky Left Column */}
        <div className="w-full md:w-1/3 h-auto md:h-screen relative md:sticky md:top-0 flex flex-col justify-center pb-12 md:pb-0 z-20 pt-12 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none">
              {content.title}
            </h2>
            <p className="text-xl font-light opacity-70 border-l-4 pl-4" style={{ borderColor: style.accentColor }}>
              {content.subtitle}
            </p>
          </motion.div>
          
          <div className="mt-12 h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full"
              style={{ backgroundColor: style.accentColor, scaleX: scrollYProgress, transformOrigin: 'left' }}
            />
          </div>
        </div>

        {/* Scrolling Right Column (Stacked Cards) */}
        <div className="w-full md:w-2/3 flex flex-col gap-24 md:pl-24 pb-[50vh]">
          {content.collections.map((collection, index) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden sticky group"
              style={{ top: `calc(10vh + ${index * 2}rem)` }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 z-10" />
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex justify-between items-end">
                <div>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">{collection.title}</h3>
                  <p className="text-lg text-white/90 drop-shadow-md">{collection.description}</p>
                </div>
                <div className="text-6xl md:text-8xl font-black text-white/20">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
