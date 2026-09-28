import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface SplitImage8Props {
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

export default function SplitImage8({ data }: SplitImage8Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(50); // percentage
  
  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    // Keep it within bounds
    mouseX.set(Math.max(10, Math.min(90, percentage)));
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(50); // Return to center
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="w-full h-screen relative overflow-hidden font-sans cursor-ew-resize bg-black"
    >
      
      {/* Background (Right Panel) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 text-right z-10">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-white opacity-80">
            {data.content.rightPanel.heading}
          </h2>
        </div>
      </div>

      {/* Foreground (Left Panel) - Clipped by mouse position */}
      <motion.div 
        className="absolute inset-0 z-10 overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
        style={{ 
          clipPath: `polygon(0 0, ${smoothX}% 0, ${smoothX}% 100%, 0 100%)` 
        }}
      >
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-left z-10 w-full">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-white drop-shadow-2xl">
            {data.content.leftPanel.heading}
          </h2>
        </div>
      </motion.div>

      {/* Center Divider Line */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        style={{ left: `${smoothX}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </motion.div>

    </div>
  );
}
