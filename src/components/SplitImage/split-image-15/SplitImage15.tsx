import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SplitImage15Props {
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

export default function SplitImage15({ data }: SplitImage15Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="w-full h-screen relative flex items-center justify-center font-sans overflow-hidden cursor-crosshair"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      
      {/* Revealed Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-0">
        <motion.div
          animate={{ scale: isOpen ? 1 : 0.8, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.2em] mb-6">
            The Truth Inside
          </h1>
          <p className="text-xl opacity-80 leading-relaxed font-light mb-10">
            When we strip away the exterior, we reveal the core essence of our vision.
          </p>
          <div className="flex gap-4 justify-center">
            <a href={data.content.leftPanel.url} className="px-8 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors">
              {data.content.leftPanel.heading}
            </a>
            <a href={data.content.rightPanel.url} className="px-8 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors">
              {data.content.rightPanel.heading}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Left Door */}
      <motion.div 
        animate={{ x: isOpen ? '-100%' : '0%' }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="absolute top-0 bottom-0 left-0 w-1/2 z-10 overflow-hidden shadow-[10px_0_30px_rgba(0,0,0,0.5)] border-r-2 border-black/50"
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-end p-12">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter transform rotate-90 origin-right -mr-12 opacity-50">
            {data.content.leftPanel.heading}
          </h2>
        </div>
      </motion.div>

      {/* Right Door */}
      <motion.div 
        animate={{ x: isOpen ? '100%' : '0%' }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="absolute top-0 bottom-0 right-0 w-1/2 z-10 overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l-2 border-black/50"
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-start p-12">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter transform -rotate-90 origin-left -ml-12 opacity-50">
            {data.content.rightPanel.heading}
          </h2>
        </div>
      </motion.div>

      {/* Split Line Indicator */}
      <motion.div 
        animate={{ opacity: isOpen ? 0 : 1 }}
        className="absolute inset-y-0 left-1/2 w-1 bg-white/20 z-20 -translate-x-1/2 pointer-events-none flex items-center justify-center"
      >
        <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>

    </div>
  );
}
