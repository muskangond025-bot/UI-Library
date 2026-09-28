import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection1Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      description: string;
      collections: Collection[];
      buttonText: string;
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function FeaturedCollection1({ section }: FeaturedCollection1Props) {
  const { content, style } = section;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(content.collections.length - 1) * 100}vw`]);

  return (
    <div 
      ref={scrollContainerRef}
      className="relative h-[800px] md:h-screen w-full overflow-y-auto overflow-x-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Header Content */}
        <div className="absolute top-12 left-12 md:top-24 md:left-24 z-20 max-w-xl mix-blend-difference">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4"
          >
            {content.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-2xl font-light mb-2">{content.subtitle}</p>
            <p className="text-sm md:text-base opacity-70 mb-8 max-w-sm">{content.description}</p>
            
            <button 
              className="group relative flex items-center gap-4 text-sm font-bold uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10">{content.buttonText}</span>
              <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div style={{ x }} className="flex h-[70vh] items-center pl-[20vw] md:pl-[30vw] pt-[10vh]">
          {content.collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className="relative h-full w-[80vw] md:w-[60vw] shrink-0 flex items-center justify-center px-4 md:px-12"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, clipPath: 'inset(10% 10% 10% 10%)' }}
                whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                
                <motion.img 
                  src={collection.image} 
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                  <div className="overflow-hidden mb-2">
                    <motion.h3 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="text-4xl md:text-6xl font-bold uppercase tracking-tight"
                    >
                      {collection.title}
                    </motion.h3>
                  </div>
                  <div className="overflow-hidden">
                    <motion.p 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-lg md:text-xl font-light opacity-90"
                    >
                      {collection.description}
                    </motion.p>
                  </div>
                </div>
                
                {/* Number indicator */}
                <div className="absolute top-8 right-8 z-20 text-6xl font-black opacity-30 mix-blend-overlay">
                  0{index + 1}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 z-20 flex items-center gap-4">
          <div className="text-xs font-mono uppercase tracking-widest">Scroll to explore</div>
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
