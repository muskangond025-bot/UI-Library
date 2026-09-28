import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SplitImage1Props {
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

export default function SplitImage1({ data }: SplitImage1Props) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div 
      className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden font-sans"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Left Panel */}
      <motion.a 
        href={data.content.leftPanel.url}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{ 
          flex: hoveredSide === 'left' ? 1.5 : hoveredSide === 'right' ? 0.5 : 1 
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[50vh] md:h-screen w-full flex items-center justify-center overflow-hidden group cursor-pointer"
      >
        <motion.img 
          animate={{ scale: hoveredSide === 'left' ? 1.05 : 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div 
          animate={{ opacity: hoveredSide === 'left' ? 0.3 : 0.6 }}
          className="absolute inset-0 bg-black transition-opacity duration-700" 
        />
        
        <div className="relative z-10 text-center px-6">
          <motion.h2 
            animate={{ y: hoveredSide === 'left' ? -10 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hoveredSide === 'left' ? 'auto' : 0, 
              opacity: hoveredSide === 'left' ? 1 : 0 
            }}
            className="overflow-hidden"
          >
            <p className="text-lg font-medium opacity-90 max-w-sm mx-auto mt-4">
              {data.content.leftPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.a>

      {/* Right Panel */}
      <motion.a 
        href={data.content.rightPanel.url}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{ 
          flex: hoveredSide === 'right' ? 1.5 : hoveredSide === 'left' ? 0.5 : 1 
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[50vh] md:h-screen w-full flex items-center justify-center overflow-hidden group cursor-pointer"
      >
        <motion.img 
          animate={{ scale: hoveredSide === 'right' ? 1.05 : 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div 
          animate={{ opacity: hoveredSide === 'right' ? 0.3 : 0.6 }}
          className="absolute inset-0 bg-black transition-opacity duration-700" 
        />
        
        <div className="relative z-10 text-center px-6">
          <motion.h2 
            animate={{ y: hoveredSide === 'right' ? -10 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hoveredSide === 'right' ? 'auto' : 0, 
              opacity: hoveredSide === 'right' ? 1 : 0 
            }}
            className="overflow-hidden"
          >
            <p className="text-lg font-medium opacity-90 max-w-sm mx-auto mt-4">
              {data.content.rightPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.a>

    </div>
  );
}
