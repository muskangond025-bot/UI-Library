import React from 'react';
import { motion } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection8Props {
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

export function FeaturedCollection8({ section }: FeaturedCollection8Props) {
  const { content, style } = section;

  // Duplicate the collections to create an infinite loop effect
  const repeatedCollections = [...content.collections, ...content.collections, ...content.collections];

  return (
    <div 
      className="relative min-h-[70vh] md:min-h-screen w-full flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap">
          {content.title}
        </h2>
      </div>

      <div className="relative z-10 w-full py-20 flex flex-col gap-16 md:gap-24">
        <div className="text-center px-8">
          <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>

        {/* Top Marquee (Moving Left) */}
        <div className="flex w-full overflow-hidden">
          <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: [0, -1035] }} // Adjust based on estimated item width
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {repeatedCollections.map((collection, index) => (
              <div 
                key={`top-${collection.id}-${index}`} 
                className="relative w-[70vw] md:w-[400px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mix-blend-overlay">
                  <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter scale-90 group-hover:scale-100 transition-transform duration-500">
                    {collection.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee (Moving Right) */}
        <div className="flex w-full overflow-hidden">
          <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: [-1035, 0] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {repeatedCollections.map((collection, index) => (
              <div 
                key={`bottom-${collection.id}-${index}`} 
                className="relative w-[70vw] md:w-[400px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mix-blend-overlay">
                  <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter scale-90 group-hover:scale-100 transition-transform duration-500">
                    {collection.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
