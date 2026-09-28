import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage13Props {
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

export default function SplitImage13({ data }: SplitImage13Props) {
  return (
    <div 
      className="w-full min-h-screen flex flex-col md:flex-row font-sans overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor }}
    >
      
      {/* Left Panel - Text Mask */}
      <motion.a 
        href={data.content.leftPanel.url}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center relative p-8 group cursor-pointer"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{ backgroundImage: `url(${data.content.leftPanel.image.url})` }}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 
            className="text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-none bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ 
              backgroundImage: `url(${data.content.leftPanel.image.url})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            {data.content.leftPanel.heading}
          </h2>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileHover={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden mt-4"
          >
            <p className="text-xl font-bold uppercase tracking-widest text-black/60">
              {data.content.leftPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.a>

      {/* Right Panel - Full Image */}
      <motion.a
        href={data.content.rightPanel.url}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden group cursor-pointer"
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-white transition-transform duration-700 group-hover:scale-105">
            {data.content.rightPanel.heading}
          </h2>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileHover={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden mt-4"
          >
            <p className="text-xl font-bold uppercase tracking-widest text-white/80">
              {data.content.rightPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.a>

    </div>
  );
}
