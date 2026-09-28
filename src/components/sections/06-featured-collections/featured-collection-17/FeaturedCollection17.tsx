import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection17Props {
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

export function FeaturedCollection17({ section }: FeaturedCollection17Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(2); // Start in middle
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -100 && activeIndex < content.collections.length - 1) {
      setActiveIndex(prev => prev + 1);
    } else if (swipe > 100 && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-24"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor, perspective: 1000 }}
    >
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-[150] pointer-events-none drop-shadow-lg">
        <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center mt-12 md:mt-0">
        {content.collections.map((collection, index) => {
          const isActive = index === activeIndex;
          const offset = index - activeIndex;
          const direction = Math.sign(offset);
          const absOffset = Math.abs(offset);
          
          // Math for Cover Flow effect
          const x = isMobile ? offset * 60 : offset * 250;
          const scale = isActive ? 1 : 1 - (absOffset * 0.15);
          const rotateY = isActive ? 0 : -direction * 45;
          const zIndex = 100 - absOffset;
          const opacity = isActive ? 1 : Math.max(0, 1 - (absOffset * 0.3));

          return (
            <motion.div
              key={collection.id}
              className="absolute w-[65vw] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
              initial={false}
              animate={{ x, scale, rotateY, zIndex, opacity }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              onClick={() => setActiveIndex(index)}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 z-10 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover pointer-events-none"
              />
              <motion.div 
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{collection.title}</h3>
                <p className="text-white/80 font-light">{collection.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="absolute bottom-12 flex gap-4 z-[150]">
        {content.collections.map((_, index) => (
          <button 
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-current scale-150' : 'bg-current/30'}`}
          />
        ))}
      </div>
    </div>
  );
}
