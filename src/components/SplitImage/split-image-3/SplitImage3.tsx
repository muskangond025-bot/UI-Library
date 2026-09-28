import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SplitImage3Props {
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

export default function SplitImage3({ data }: SplitImage3Props) {
  const [hoveredPanel, setHoveredPanel] = useState<'top' | 'bottom' | null>(null);

  return (
    <div 
      className="w-full h-screen flex flex-col font-sans overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Top Panel (using leftPanel data) */}
      <motion.a
        href={data.content.leftPanel.url}
        onMouseEnter={() => setHoveredPanel('top')}
        onMouseLeave={() => setHoveredPanel(null)}
        animate={{ height: hoveredPanel === 'top' ? '65%' : hoveredPanel === 'bottom' ? '35%' : '50%' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative overflow-hidden group border-b-2 border-white/20 block"
      >
        <motion.img 
          animate={{ scale: hoveredPanel === 'top' ? 1.05 : 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.h2 
            animate={{ y: hoveredPanel === 'top' ? -10 : 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-[0.2em] mb-4"
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: hoveredPanel === 'top' ? 1 : 0,
              height: hoveredPanel === 'top' ? 'auto' : 0
            }}
            className="overflow-hidden"
          >
            <p className="text-lg md:text-xl font-medium tracking-widest uppercase opacity-80 mt-2">
              {data.content.leftPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.a>

      {/* Bottom Panel (using rightPanel data) */}
      <motion.a
        href={data.content.rightPanel.url}
        onMouseEnter={() => setHoveredPanel('bottom')}
        onMouseLeave={() => setHoveredPanel(null)}
        animate={{ height: hoveredPanel === 'bottom' ? '65%' : hoveredPanel === 'top' ? '35%' : '50%' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative overflow-hidden group block"
      >
        <motion.img 
          animate={{ scale: hoveredPanel === 'bottom' ? 1.05 : 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.h2 
            animate={{ y: hoveredPanel === 'bottom' ? -10 : 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-[0.2em] mb-4"
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: hoveredPanel === 'bottom' ? 1 : 0,
              height: hoveredPanel === 'bottom' ? 'auto' : 0
            }}
            className="overflow-hidden"
          >
            <p className="text-lg md:text-xl font-medium tracking-widest uppercase opacity-80 mt-2">
              {data.content.rightPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.a>

    </div>
  );
}
