import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection3Props {
  section: {
    content: {
      title: string;
      collections: Collection[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function FeaturedCollection3({ section }: FeaturedCollection3Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div 
      className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Left Column - Navigation */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-12 md:px-24 z-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-12 opacity-50">
          {content.title}
        </h2>
        
        <div className="flex flex-col gap-6">
          {content.collections.map((collection, index) => (
            <div 
              key={collection.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer group relative flex flex-col items-start"
            >
              <div className="flex items-center gap-6">
                <span 
                  className="font-mono text-xs tracking-widest transition-opacity duration-300"
                  style={{ opacity: activeIndex === index ? 1 : 0.3 }}
                >
                  0{index + 1}
                </span>
                <h3 
                  className="text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all duration-500 origin-left"
                  style={{ 
                    transform: activeIndex === index ? 'translateX(10px)' : 'translateX(0px)',
                    opacity: activeIndex === index ? 1 : 0.3
                  }}
                >
                  {collection.title}
                </h3>
              </div>
              <motion.div
                initial={false}
                animate={{ 
                  height: activeIndex === index ? 'auto' : 0, 
                  opacity: activeIndex === index ? 1 : 0 
                }}
                className="overflow-hidden pl-12 mt-4"
              >
                <p className="text-lg opacity-70 max-w-sm border-l-2 pl-4" style={{ borderColor: style.accentColor }}>
                  {collection.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Split Curtain Reveal Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-black/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.1 }}
            animate={{ clipPath: 'inset(0% 0 0 0)', scale: 1 }}
            exit={{ clipPath: 'inset(0 0 100% 0)', scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={content.collections[activeIndex].image} 
              alt={content.collections[activeIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Minimal overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
