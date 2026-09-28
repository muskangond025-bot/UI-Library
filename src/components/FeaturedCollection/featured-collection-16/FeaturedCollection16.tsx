import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection16Props {
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

export function FeaturedCollection16({ section }: FeaturedCollection16Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col py-24 px-4 md:px-12"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="mb-12 text-center">
        <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="w-full h-[60vh] md:h-[70vh] flex flex-col md:flex-row gap-2 md:gap-4 max-w-[1400px] mx-auto">
        {content.collections.map((collection, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={collection.id}
              layout
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              initial={{ borderRadius: 32 }}
              animate={{ 
                flex: isActive ? 5 : 1,
                opacity: isActive ? 1 : 0.6,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative overflow-hidden cursor-pointer group h-full rounded-[32px]"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10" />
              
              <img 
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Vertical Title (when collapsed) */}
              <motion.div 
                animate={{ opacity: isActive ? 0 : 1 }}
                className="absolute inset-0 z-20 flex items-center justify-center p-4 pointer-events-none"
              >
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest md:-rotate-90 whitespace-nowrap drop-shadow-xl">
                  {collection.title}
                </h3>
              </motion.div>

              {/* Expanded Content */}
              <motion.div 
                animate={{ opacity: isActive ? 1 : 0 }}
                className="absolute inset-0 z-20 p-8 flex flex-col justify-end pointer-events-none bg-gradient-to-t from-black/80 to-transparent"
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-none uppercase tracking-tighter">
                    {collection.title}
                  </h3>
                  <p className="text-white/80 text-lg max-w-md hidden md:block">
                    {collection.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
