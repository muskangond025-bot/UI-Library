import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection7Props {
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

export function FeaturedCollection7({ section }: FeaturedCollection7Props) {
  const { content, style } = section;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col px-8 md:px-12 py-24"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
            {content.title}
          </h2>
          <p className="text-xl font-light opacity-70">
            {content.subtitle}
          </p>
        </div>
        <div className="mt-8 md:mt-0 text-sm font-mono tracking-widest uppercase opacity-50">
          Hover to focus
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.collections.map((collection, index) => {
          const isHovered = hoveredId === collection.id;
          const isOtherHovered = hoveredId !== null && hoveredId !== collection.id;

          return (
            <motion.div
              key={collection.id}
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setHoveredId(isHovered ? null : collection.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              animate={{
                scale: isHovered ? 1.05 : isOtherHovered ? 0.95 : 1,
                opacity: isOtherHovered ? 0.4 : 1,
                filter: isOtherHovered ? 'blur(4px) grayscale(100%)' : 'blur(0px) grayscale(0%)',
                zIndex: isHovered ? 20 : 10
              }}
              className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300" style={{ opacity: isHovered ? 0 : 0.4 }} />
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover"
              />
              
              <motion.div 
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0
                }}
                className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{collection.title}</h3>
                <p className="text-white/80 font-light">{collection.description}</p>
                <div 
                  className="mt-4 w-12 h-1 rounded-full" 
                  style={{ backgroundColor: style.accentColor }} 
                />
              </motion.div>
              
              {/* Default Title shown when not hovered */}
              <motion.div 
                animate={{ opacity: isHovered ? 0 : 1 }}
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
              >
                <h3 className="text-2xl font-bold uppercase tracking-widest text-white drop-shadow-xl">
                  {collection.title}
                </h3>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
