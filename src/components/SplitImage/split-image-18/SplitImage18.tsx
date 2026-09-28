import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage18Props {
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

export default function SplitImage18({ data }: SplitImage18Props) {
  return (
    <div 
      className="w-full h-screen relative flex overflow-hidden font-sans"
      style={{ backgroundColor: data.style.backgroundColor }}
    >
      
      {/* Left Panel - Slides up */}
      <motion.div 
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-1/2 h-full relative group"
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 w-full p-12 md:p-24 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl font-light opacity-80"
          >
            {data.content.leftPanel.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Right Panel - Slides down */}
      <motion.div 
        initial={{ y: '-100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-1/2 h-full relative group"
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent opacity-80" />
        
        <div className="absolute top-0 left-0 w-full p-12 md:p-24 text-white flex flex-col justify-start items-end text-right">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl font-light opacity-80 max-w-sm"
          >
            {data.content.rightPanel.description}
          </motion.p>
        </div>
      </motion.div>

    </div>
  );
}
