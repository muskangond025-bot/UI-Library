import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage11Props {
  data: {
    content: {
      leftPanel: {
        heading: string;
        description: string;
        image: { url: string; alt: string }; // Optional use
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

export default function SplitImage11({ data }: SplitImage11Props) {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row font-sans">
      
      {/* Left Panel - Image with Color Overlay */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col justify-center p-12 md:p-24 relative overflow-hidden group"
        style={{ color: data.style.textColor }}
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <div 
          className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-80"
          style={{ backgroundColor: data.style.backgroundColor }}
        />
        
        <div className="relative z-10 max-w-lg">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight"
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl opacity-90 font-medium leading-relaxed"
          >
            {data.content.leftPanel.description}
          </motion.p>
          
          <motion.a 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            href={data.content.leftPanel.url}
            className="inline-block mt-12 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
            style={{ color: data.style.backgroundColor }}
          >
            Explore Brand
          </motion.a>
        </div>
        
        {/* Decorative oversized typography in background */}
        <div className="absolute -bottom-20 -left-10 text-[15rem] font-black opacity-10 leading-none pointer-events-none whitespace-nowrap mix-blend-overlay">
          {data.content.leftPanel.heading}
        </div>
      </motion.div>

      {/* Right Panel - Image */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden group"
      >
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-24">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-white/90 drop-shadow-md max-w-sm"
          >
            {data.content.rightPanel.description}
          </motion.p>
        </div>
      </motion.div>

    </div>
  );
}
