import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage5Props {
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

export default function SplitImage5({ data }: SplitImage5Props) {
  return (
    <div 
      className="w-full h-screen relative overflow-hidden font-sans group/container bg-black"
      style={{ color: data.style.textColor }}
    >
      
      {/* Background / Right Panel */}
      <motion.a
        href={data.content.rightPanel.url}
        className="absolute inset-0 z-0 block group/right"
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover/right:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover/right:bg-black/10 transition-colors duration-500" />
        
        <div className="absolute top-1/4 right-[10%] text-right z-10 flex flex-col items-end">
          <motion.h2 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-2 drop-shadow-lg"
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl opacity-90 drop-shadow-md"
          >
            {data.content.rightPanel.description}
          </motion.p>
        </div>
      </motion.a>

      {/* Foreground / Left Panel (V-Shape Clip) */}
      <motion.a
        href={data.content.leftPanel.url}
        initial={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} // Start as a normal split
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 40% 100%, 0 100%)' }} // Animate into V-shape
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        className="absolute inset-0 z-10 block group/left"
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover/left:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover/left:bg-black/10 transition-colors duration-500" />
        
        <div className="absolute bottom-1/4 left-[10%] text-left z-20 flex flex-col items-start">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-2 drop-shadow-lg"
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl opacity-90 drop-shadow-md"
          >
            {data.content.leftPanel.description}
          </motion.p>
        </div>
      </motion.a>

      {/* SVG Divider Line for the V-shape */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute inset-0 pointer-events-none z-20"
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          {/* Matches the polygon angle: top right to bottom 40% */}
          <line x1="100%" y1="0" x2="40%" y2="100%" stroke="white" strokeWidth="4" opacity="0.3" className="drop-shadow-xl" />
        </svg>
      </motion.div>

    </div>
  );
}
