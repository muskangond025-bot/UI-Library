import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SplitImage14Props {
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

export default function SplitImage14({ data }: SplitImage14Props) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right'>('right'); // Default focus on the larger side

  return (
    <div 
      className="w-full h-screen flex flex-col md:flex-row overflow-hidden font-sans"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Left Panel (Default 25%) */}
      <motion.div 
        onMouseEnter={() => setHoveredSide('left')}
        animate={{ width: hoveredSide === 'left' ? '75%' : '25%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[50vh] md:h-screen flex items-end p-8 md:p-12 overflow-hidden cursor-crosshair group border-r border-white/20"
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="relative z-10 w-full">
          <motion.h2 
            className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-2 writing-mode-vertical-rl transform rotate-180 md:writing-mode-horizontal md:rotate-0"
            style={{ writingMode: hoveredSide === 'left' ? 'horizontal-tb' : 'vertical-rl' } as any}
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.div
            animate={{ opacity: hoveredSide === 'left' ? 1 : 0, height: hoveredSide === 'left' ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <p className="text-lg opacity-80 max-w-sm mt-4">
              {data.content.leftPanel.description}
            </p>
            <a href={data.content.leftPanel.url} className="inline-block mt-6 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-gray-300">
              View Details
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel (Default 75%) */}
      <motion.div 
        onMouseEnter={() => setHoveredSide('right')}
        animate={{ width: hoveredSide === 'right' ? '75%' : '25%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[50vh] md:h-screen flex items-end p-8 md:p-12 overflow-hidden cursor-crosshair group"
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover filter saturate-150 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="relative z-10 w-full flex flex-col items-end text-right">
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter uppercase mb-2 leading-none"
            animate={{ 
              writingMode: hoveredSide === 'right' ? 'horizontal-tb' : 'vertical-rl',
              rotate: hoveredSide === 'right' ? 0 : 180
            } as any}
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <motion.div
            animate={{ opacity: hoveredSide === 'right' ? 1 : 0, height: hoveredSide === 'right' ? 'auto' : 0 }}
            className="overflow-hidden flex flex-col items-end"
          >
            <p className="text-xl md:text-2xl font-bold max-w-md mt-4 drop-shadow-lg">
              {data.content.rightPanel.description}
            </p>
            <a href={data.content.rightPanel.url} className="inline-block mt-6 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 transition-colors">
              Explore Chaos
            </a>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
