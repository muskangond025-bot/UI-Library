import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage19Props {
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

export default function SplitImage19({ data }: SplitImage19Props) {
  return (
    <div 
      className="w-full min-h-screen py-24 flex items-center justify-center font-sans overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-0">
        
        {/* Left Panel (Shifted Up) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:-mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-lg group relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative">
              <img 
                src={data.content.leftPanel.image.url} 
                alt={data.content.leftPanel.image.alt}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            
            <div className="absolute -left-4 md:-left-12 bottom-12 bg-white/10 backdrop-blur-md p-8 rounded-sm shadow-xl border border-white/10 pointer-events-none transform -rotate-2">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-2 text-white">
                {data.content.leftPanel.heading}
              </h2>
              <p className="text-white/80 font-medium">
                {data.content.leftPanel.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Panel (Shifted Down) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start md:mt-32">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-lg group relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative">
              <img 
                src={data.content.rightPanel.image.url} 
                alt={data.content.rightPanel.image.alt}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            
            <div className="absolute -right-4 md:-right-12 top-12 bg-white/10 backdrop-blur-md p-8 rounded-sm shadow-xl border border-white/10 pointer-events-none transform rotate-2">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-2 text-white">
                {data.content.rightPanel.heading}
              </h2>
              <p className="text-white/80 font-medium">
                {data.content.rightPanel.description}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
