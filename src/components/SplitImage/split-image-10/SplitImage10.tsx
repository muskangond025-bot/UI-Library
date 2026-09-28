import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SplitImage10Props {
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

export default function SplitImage10({ data }: SplitImage10Props) {
  // Using Framer Motion scroll hooks for parallax effects
  const { scrollYProgress } = useScroll();
  const yLeft = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yRight = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <div 
      className="w-full h-[150vh] relative overflow-hidden font-sans flex flex-col md:flex-row"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Left Panel */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[150vh] relative overflow-hidden group">
        <motion.div 
          className="absolute inset-0 w-full h-[120%] origin-top"
          style={{ y: yLeft }}
        >
          <img 
            src={data.content.leftPanel.image.url} 
            alt={data.content.leftPanel.image.alt}
            className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
          />
        </motion.div>
        
        {/* Fixed Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm p-8 border border-white/10 rounded-2xl max-w-sm w-full pointer-events-auto transform transition-transform group-hover:scale-105 duration-500">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">
              {data.content.leftPanel.heading}
            </h2>
            <p className="text-lg font-light opacity-90">
              {data.content.leftPanel.description}
            </p>
            <a 
              href={data.content.leftPanel.url}
              className="inline-block mt-8 px-6 py-2 border border-white/50 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[150vh] relative overflow-hidden group">
        <motion.div 
          className="absolute inset-0 w-full h-[120%] origin-bottom top-[-20%]"
          style={{ y: yRight }}
        >
          <img 
            src={data.content.rightPanel.image.url} 
            alt={data.content.rightPanel.image.alt}
            className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
          />
        </motion.div>

        {/* Fixed Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10 pointer-events-none">
          <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 rounded-2xl max-w-sm w-full pointer-events-auto transform transition-transform group-hover:scale-105 duration-500 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">
              {data.content.rightPanel.heading}
            </h2>
            <p className="text-lg font-light opacity-90">
              {data.content.rightPanel.description}
            </p>
            <a 
              href={data.content.rightPanel.url}
              className="inline-block mt-8 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-bold"
            >
              Discover
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
