import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection9Props {
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

export function FeaturedCollection9({ section }: FeaturedCollection9Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Background Image that morphs based on selection */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          animate={{ opacity: 0.15, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src={content.collections[activeIndex].image} 
            alt="background" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Interactive Circle */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl px-8 items-center gap-12 md:gap-24">
        
        {/* Left Side: Circular Image Reveal */}
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1 mt-12 md:mt-0">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-2" style={{ borderColor: style.accentColor }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={content.collections[activeIndex].image}
                alt={content.collections[activeIndex].title}
                initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)', rotate: -10 }}
                animate={{ opacity: 1, clipPath: 'circle(100% at 50% 50%)', rotate: 0 }}
                exit={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)', rotate: 10 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 rounded-full ring-inset ring-2 ring-white/20 pointer-events-none mix-blend-overlay" />
          </div>
        </div>

        {/* Right Side: Interactive List */}
        <div className="w-full md:w-1/2 flex flex-col order-1 md:order-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-mono uppercase tracking-widest mb-4" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              {content.title}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {content.collections.map((collection, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={collection.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group cursor-pointer flex flex-col items-start"
                >
                  <div className="flex items-center gap-6">
                    <span 
                      className="text-lg font-mono transition-opacity duration-300"
                      style={{ opacity: isActive ? 1 : 0.3, color: isActive ? style.accentColor : 'inherit' }}
                    >
                      0{index + 1}
                    </span>
                    <h3 
                      className="text-3xl md:text-5xl font-bold uppercase tracking-tight transition-all duration-500"
                      style={{ 
                        opacity: isActive ? 1 : 0.3,
                        transform: isActive ? 'translateX(10px)' : 'translateX(0px)'
                      }}
                    >
                      {collection.title}
                    </h3>
                  </div>
                  <motion.div 
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    className="overflow-hidden pl-12"
                  >
                    <p className="text-lg font-light opacity-80 mt-2 max-w-sm">
                      {collection.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
