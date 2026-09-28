import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection12Props {
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

export function FeaturedCollection12({ section }: FeaturedCollection12Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // Start hidden
  const [isHovering, setIsHovering] = useState(false);

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

    setMousePos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
    setIsHovering(true);
  };

  const handlePointerLeave = () => {
    setIsHovering(false);
  };

  // Center the spotlight on mobile initially to indicate interactivity
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: rect.width / 2,
        y: rect.height / 2,
      });
      setIsHovering(true);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerLeave}
      className="relative min-h-screen w-full py-24 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-30 pointer-events-none mix-blend-difference">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
          {content.title}
        </h2>
        <p className="text-xl md:text-2xl font-light text-white/70 mt-2">
          {content.subtitle}
        </p>
      </div>

      {/* Base Layer (Dark/Desaturated) */}
      <div className="absolute inset-0 flex flex-col md:flex-row p-8 pt-48 md:pt-8 md:px-24 gap-4 items-center justify-center opacity-30 grayscale blur-[2px]">
        {content.collections.map((collection) => (
          <div key={`base-${collection.id}`} className="w-full md:w-1/3 aspect-[4/5] rounded-xl overflow-hidden">
            <img src={collection.image} alt={collection.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Spotlight Mask Layer */}
      <motion.div 
        className="absolute inset-0 flex flex-col md:flex-row p-8 pt-48 md:pt-8 md:px-24 gap-4 items-center justify-center pointer-events-none"
        animate={{
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        style={{
          WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 80%)`,
          maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 80%)`,
        }}
      >
        {content.collections.map((collection) => (
          <div key={`reveal-${collection.id}`} className="w-full md:w-1/3 aspect-[4/5] rounded-xl overflow-hidden relative">
            <img src={collection.image} alt={collection.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <h3 className="text-3xl font-bold text-white uppercase tracking-widest">{collection.title}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
