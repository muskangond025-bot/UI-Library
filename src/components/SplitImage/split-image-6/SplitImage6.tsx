import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage6Props {
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

export default function SplitImage6({ data }: SplitImage6Props) {
  return (
    <div 
      className="w-full h-screen relative overflow-hidden font-sans group/container"
      style={{ backgroundColor: data.style.backgroundColor }}
    >
      
      {/* SVG Clip Path Definition for the curve */}
      <svg className="w-0 h-0 absolute">
        <defs>
          <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 0.4 0 C 0.6 0.3, 0.3 0.7, 0.6 1 L 0 1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Right Panel (Background) */}
      <div className="absolute inset-0 z-0">
        <motion.a href={data.content.rightPanel.url} className="block w-full h-full relative group/right">
          <img 
            src={data.content.rightPanel.image.url} 
            alt={data.content.rightPanel.image.alt}
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover/right:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover/right:bg-black/0 transition-colors duration-500" />
          
          <div className="absolute bottom-1/4 right-[15%] text-right z-10 text-white drop-shadow-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
            >
              {data.content.rightPanel.heading}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl font-light opacity-90"
            >
              {data.content.rightPanel.description}
            </motion.p>
          </div>
        </motion.a>
      </div>

      {/* Left Panel (Clipped) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10"
        style={{ clipPath: 'url(#curveClip)' }}
      >
        <motion.a href={data.content.leftPanel.url} className="block w-full h-full relative group/left">
          <img 
            src={data.content.leftPanel.image.url} 
            alt={data.content.leftPanel.image.alt}
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover/left:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover/left:bg-black/0 transition-colors duration-500" />
          
          <div className="absolute top-1/4 left-[15%] text-left z-10 text-white drop-shadow-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
            >
              {data.content.leftPanel.heading}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl font-light opacity-90"
            >
              {data.content.leftPanel.description}
            </motion.p>
          </div>
        </motion.a>
      </motion.div>

    </div>
  );
}
