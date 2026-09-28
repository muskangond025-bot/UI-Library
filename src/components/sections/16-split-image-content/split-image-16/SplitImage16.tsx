import React from 'react';
import { motion } from 'framer-motion';

interface SplitImage16Props {
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

export default function SplitImage16({ data }: SplitImage16Props) {
  return (
    <div 
      className="w-full min-h-screen relative flex flex-col md:flex-row font-sans"
      style={{ backgroundColor: data.style.backgroundColor }}
    >
      
      {/* Left Panel Background */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <img 
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="w-full h-full object-cover filter grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
      </div>

      {/* Right Panel Background */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <img 
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="w-full h-full object-cover filter grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-orange-900/20 mix-blend-multiply" />
      </div>

      {/* Center Floating Card */}
      <div className="absolute inset-0 flex items-center justify-center p-6 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white max-w-4xl w-full rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col md:flex-row overflow-hidden pointer-events-auto"
        >
          {/* Card Left Side */}
          <a href={data.content.leftPanel.url} className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors group text-center md:text-right items-center md:items-end">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">The Emotion</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-gray-900 group-hover:-translate-x-2 transition-transform">
              {data.content.leftPanel.heading}
            </h2>
            <p className="text-gray-500 font-medium max-w-[250px]">
              {data.content.leftPanel.description}
            </p>
          </a>
          
          {/* Card Right Side */}
          <a href={data.content.rightPanel.url} className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center hover:bg-gray-50 transition-colors group text-center md:text-left items-center md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4 block">The Logic</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-gray-900 group-hover:translate-x-2 transition-transform">
              {data.content.rightPanel.heading}
            </h2>
            <p className="text-gray-500 font-medium max-w-[250px]">
              {data.content.rightPanel.description}
            </p>
          </a>
        </motion.div>
      </div>

    </div>
  );
}
