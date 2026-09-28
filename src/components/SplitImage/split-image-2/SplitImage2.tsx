import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage2Props {
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

export default function SplitImage2({ data }: SplitImage2Props) {
  return (
    <div 
      className="w-full h-screen relative overflow-hidden font-sans group"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Background (Right Panel) */}
      <div className="absolute inset-0">
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute bottom-1/4 right-[10%] text-right max-w-sm z-10">
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
      </div>

      {/* Foreground Diagonal (Left Panel) */}
      <motion.div 
        initial={{ clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)' }}
        whileInView={{ clipPath: 'polygon(0 0, 70% 0, 30% 100%, 0 100%)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20 overflow-hidden"
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-1/4 left-[10%] max-w-sm">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl font-light opacity-90"
          >
            {data.content.leftPanel.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Center Divider Line */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute inset-0 pointer-events-none z-30"
      >
        {/* SVG to draw the exact diagonal line cleanly */}
        <svg className="w-full h-full drop-shadow-2xl" preserveAspectRatio="none">
          <line x1="70%" y1="0" x2="30%" y2="100%" stroke="white" strokeWidth="2" opacity="0.5" />
        </svg>
      </motion.div>

    </div>
  );
}
