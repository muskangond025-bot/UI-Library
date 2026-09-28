import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SplitImage17Props {
  data: {
    content: {
      leftPanel: {
        heading: string;
        description: string;
        image: { url: string; alt: string };
        url: string;
      };
      rightPanel: {
        heading: string;
        description: string;
        image: { url: string; alt: string };
        url: string;
      };
    };
    style: {
      backgroundColor: string;
      textColor: string;
    };
  };
}

export default function SplitImage17({ data }: SplitImage17Props) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div 
      className="w-full h-screen relative overflow-hidden font-sans bg-black"
      style={{ color: data.style.textColor }}
    >
      
      {/* Right Panel (Base Layer) */}
      <div 
        className="absolute inset-0 z-0"
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover filter brightness-75 transition-transform duration-[2s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 text-right z-10 w-1/2 md:w-[40%] flex flex-col items-end pointer-events-none">
          <motion.h2 
            animate={{ scale: hoveredSide === 'right' ? 1.1 : 1 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4"
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <motion.p 
            animate={{ opacity: hoveredSide === 'right' ? 1 : 0.7 }}
            className="text-lg md:text-2xl font-light"
          >
            {data.content.rightPanel.description}
          </motion.p>
        </div>
      </div>

      {/* Left Panel (Masked Layer) */}
      <motion.div 
        className="absolute inset-0 z-10 overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{ 
          clipPath: hoveredSide === 'left' 
            ? 'circle(150% at 25% 50%)' // Expand to cover mostly everything
            : hoveredSide === 'right'
            ? 'circle(0% at 25% 50%)' // Shrink to reveal right side completely
            : 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' // Default 50/50 split
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-left z-10 w-1/2 md:w-[40%] flex flex-col items-start pointer-events-none">
          <motion.h2 
            animate={{ scale: hoveredSide === 'left' ? 1.1 : 1 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4"
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.p 
            animate={{ opacity: hoveredSide === 'left' ? 1 : 0.7 }}
            className="text-lg md:text-2xl font-light"
          >
            {data.content.leftPanel.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Center Divider Line (disappears on hover) */}
      <motion.div 
        animate={{ opacity: hoveredSide ? 0 : 0.5 }}
        className="absolute top-0 bottom-0 left-1/2 w-1 bg-white z-20 -translate-x-1/2 pointer-events-none"
      />

    </div>
  );
}
