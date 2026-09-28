import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SplitImage7Props {
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

export default function SplitImage7({ data }: SplitImage7Props) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div 
      className="w-full h-screen flex flex-col md:flex-row overflow-hidden font-sans"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Left Panel */}
      <motion.a 
        href={data.content.leftPanel.url}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{ 
          width: hoveredSide === 'left' ? '80%' : hoveredSide === 'right' ? '20%' : '50%',
          filter: hoveredSide === 'right' ? 'blur(10px) grayscale(80%)' : 'blur(0px) grayscale(0%)'
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[50vh] md:h-screen flex items-center justify-center overflow-hidden cursor-pointer border-r border-white/10"
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 p-8 flex flex-col items-center text-center">
          <motion.div
            animate={{ 
              opacity: hoveredSide === 'right' ? 0 : 1,
              scale: hoveredSide === 'right' ? 0.8 : 1,
              rotate: hoveredSide === 'right' ? -90 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-widest mb-4 whitespace-nowrap">
              {data.content.leftPanel.heading}
            </h2>
          </motion.div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hoveredSide === 'left' ? 'auto' : 0, 
              opacity: hoveredSide === 'left' ? 1 : 0 
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <p className="text-lg md:text-xl font-light opacity-90 max-w-md mx-auto mt-6">
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
          width: hoveredSide === 'right' ? '80%' : hoveredSide === 'left' ? '20%' : '50%',
          filter: hoveredSide === 'left' ? 'blur(10px) grayscale(80%)' : 'blur(0px) grayscale(0%)'
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[50vh] md:h-screen flex items-center justify-center overflow-hidden cursor-pointer"
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 p-8 flex flex-col items-center text-center">
          <motion.div
            animate={{ 
              opacity: hoveredSide === 'left' ? 0 : 1,
              scale: hoveredSide === 'left' ? 0.8 : 1,
              rotate: hoveredSide === 'left' ? 90 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-widest mb-4 whitespace-nowrap">
              {data.content.rightPanel.heading}
            </h2>
          </motion.div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hoveredSide === 'right' ? 'auto' : 0, 
              opacity: hoveredSide === 'right' ? 1 : 0 
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <p className="text-lg md:text-xl font-light opacity-90 max-w-md mx-auto mt-6">
              {data.content.rightPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.a>

    </div>
  );
}
