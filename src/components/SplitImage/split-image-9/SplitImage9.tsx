import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage9Props {
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

export default function SplitImage9({ data }: SplitImage9Props) {
  return (
    <div 
      className="w-full h-screen relative flex overflow-hidden font-sans"
      style={{ backgroundColor: data.style.backgroundColor }}
    >
      
      {/* Left Half */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-1/2 h-full relative overflow-hidden group"
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="w-full h-full object-cover filter grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <p className="text-white text-xl font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {data.content.leftPanel.description}
          </p>
        </div>
      </motion.div>

      {/* Right Half */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-1/2 h-full relative overflow-hidden group"
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover filter grayscale brightness-110 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-end p-12 text-right">
          <p className="text-black text-xl font-medium max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {data.content.rightPanel.description}
          </p>
        </div>
      </motion.div>

      {/* Central Typographic Overlay with Difference Blending */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 text-white"
        >
          <h1 className="text-8xl md:text-[10rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none">
            {data.content.leftPanel.heading}
          </h1>
          <span className="text-6xl md:text-8xl font-light opacity-50">&</span>
          <h1 className="text-8xl md:text-[10rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none">
            {data.content.rightPanel.heading}
          </h1>
        </motion.div>
      </div>

    </div>
  );
}
