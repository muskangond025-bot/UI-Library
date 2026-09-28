import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SplitImage12Props {
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

export default function SplitImage12({ data }: SplitImage12Props) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = async () => {
    setIsHovered(true);
    // Glitch sequence for the clip path
    await controls.start({
      clipPath: [
        'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
        'polygon(0 0, 48% 0, 52% 100%, 0 100%)',
        'polygon(0 0, 55% 0, 45% 100%, 0 100%)',
        'polygon(0 0, 51% 0, 49% 100%, 0 100%)',
        'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
      ],
      transition: { duration: 0.3, ease: "linear", times: [0, 0.2, 0.5, 0.8, 1] }
    });
  };

  const handleLeave = () => {
    setIsHovered(false);
    controls.start({ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' });
  };

  return (
    <div 
      className="w-full h-screen relative overflow-hidden font-mono bg-black"
      style={{ color: data.style.textColor }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      
      {/* Right Panel (Background) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Scanlines overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)', backgroundSize: '100% 4px' }} />

        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 text-right z-10 mix-blend-screen">
          <motion.h2 
            animate={{ x: isHovered ? [0, -5, 5, -2, 2, 0] : 0 }}
            transition={{ duration: 0.2, repeat: isHovered ? Infinity : 0, repeatDelay: 2 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-4"
            style={{ textShadow: isHovered ? '3px 0 0 red, -3px 0 0 blue' : 'none' }}
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <p className="text-lg opacity-80">
            {data.content.rightPanel.description}
          </p>
        </div>
      </div>

      {/* Left Panel (Clipped) */}
      <motion.div 
        animate={controls}
        initial={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        className="absolute inset-0 z-10"
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="w-full h-full object-cover filter grayscale contrast-150"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-left z-10 mix-blend-screen">
          <motion.h2 
            animate={{ x: isHovered ? [0, 5, -5, 2, -2, 0] : 0 }}
            transition={{ duration: 0.2, repeat: isHovered ? Infinity : 0, repeatDelay: 1.5 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-4 text-white"
            style={{ textShadow: isHovered ? '-3px 0 0 #00FF41, 3px 0 0 #FF00FF' : 'none' }}
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <p className="text-lg opacity-80 text-white">
            {data.content.leftPanel.description}
          </p>
        </div>
      </motion.div>

      {/* Glitch Divider Line */}
      <motion.div 
        animate={controls}
        initial={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
        // we use a trick to render the line based on the same polygon animation, but it's easier to just use a fixed div that jitters
      />
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white z-20 mix-blend-overlay"
        animate={{ 
          left: isHovered ? ['50%', '48%', '52%', '49%', '51%', '50%'] : '50%',
          opacity: isHovered ? [1, 0.5, 1, 0.2, 1] : 0.8
        }}
        transition={{ duration: 0.3, ease: "linear", repeat: isHovered ? Infinity : 0, repeatDelay: 2 }}
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      />

    </div>
  );
}
