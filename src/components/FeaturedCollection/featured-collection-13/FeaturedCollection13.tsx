import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection13Props {
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

export function FeaturedCollection13({ section }: FeaturedCollection13Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track pointer position relative to center [-1 to 1]
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    // Normalize to -1 to 1
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;

    setPointer({ x, y });
  };

  const handlePointerLeave = () => {
    setPointer({ x: 0, y: 0 });
  };

  // Smooth the pointer values
  const smoothX = useSpring(pointer.x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(pointer.y, { stiffness: 50, damping: 20 });

  // Map pointer to 3D rotation
  const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerLeave}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-24"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor, perspective: 1200 }}
    >
      <div className="relative z-30 pointer-events-none mb-8 md:mb-12 text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter" style={{ color: style.textColor }}>
          {content.title}
        </h2>
        <p className="text-xl md:text-2xl font-light mt-2" style={{ color: style.textColor, opacity: 0.7 }}>
          {content.subtitle}
        </p>
      </div>

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-5xl h-[50vh] md:h-[70vh] grid grid-cols-2 grid-rows-2 gap-4 md:gap-8 px-4 md:px-8"
      >
        {content.collections.map((collection, index) => {
          // Varying depths for each card
          const translateZ = [50, -50, 100, 0][index % 4];
          
          return (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              style={{ transform: `translateZ(${translateZ}px)` }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 uppercase">{collection.title}</h3>
                <p className="text-white/80 text-sm md:text-base hidden md:block">{collection.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
