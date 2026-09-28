import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage4Props {
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

export default function SplitImage4({ data }: SplitImage4Props) {
  return (
    <div 
      className="w-full h-screen relative flex overflow-hidden font-sans bg-black"
      style={{ color: data.style.textColor }}
    >
      
      {/* Left Panel */}
      <motion.a
        href={data.content.leftPanel.url}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-[60%] h-full z-10 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 opacity-80" />
        
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 group-hover:origin-left"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-12 md:px-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-orange-500 mix-blend-screen">
            {data.content.leftPanel.heading}
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-xs opacity-80">
            {data.content.leftPanel.description}
          </p>
        </div>
      </motion.a>

      {/* Right Panel */}
      <motion.a
        href={data.content.rightPanel.url}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 right-0 w-[60%] h-full z-0 group"
      >
        {/* We set Right Panel to z-0 so Left panel overlays it, but we use mix-blend on the overlap */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent z-10" />
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 opacity-80" />
        
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 group-hover:origin-right mix-blend-screen"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-end text-right px-12 md:px-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-cyan-400 mix-blend-screen">
            {data.content.rightPanel.heading}
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-xs opacity-80">
            {data.content.rightPanel.description}
          </p>
        </div>
      </motion.a>

      {/* Center "VS" or overlap indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none mix-blend-difference">
        <span className="text-4xl md:text-6xl font-black italic opacity-50">/</span>
      </div>

    </div>
  );
}
