import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection2Props {
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

export function FeaturedCollection2({ section }: FeaturedCollection2Props) {
  const { content, style } = section;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-24 py-20"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest font-mono mb-4"
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

      <div className="flex flex-col w-full border-t border-white/10">
        {content.collections.map((collection, index) => (
          <div 
            key={collection.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={() => setHoveredIndex(index)}
            className="group border-b border-white/10 overflow-hidden cursor-pointer"
          >
            <div className="py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-8 z-10 w-full md:w-1/2">
                <span className="text-xl font-light opacity-50 font-mono">0{index + 1}</span>
                <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-4">
                  {collection.title}
                </h3>
              </div>

              <motion.div 
                animate={{ 
                  height: hoveredIndex === index ? 'auto' : 0,
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                className="w-full md:w-1/2 overflow-hidden flex flex-col items-start gap-4"
              >
                <div className="h-[300px] w-full relative rounded-xl overflow-hidden mt-4 md:mt-0">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1 : 1.1,
                      filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)'
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={collection.image} 
                      alt={collection.title} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <p className="text-lg opacity-70 font-light mt-4 mb-2 max-w-sm">
                  {collection.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
