import React from 'react';
import { motion } from 'framer-motion';

interface ImageText8Props {
  data: {
    content: {
      heading: string;
      subheading: string;
      description: string;
      features: string[];
      primaryAction: {
        label: string;
        url: string;
      };
      image: {
        url: string;
        alt: string;
      };
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
      imageAlignment: 'left' | 'right';
    };
  };
}

export default function ImageText8({ data }: ImageText8Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  return (
    <div 
      className="w-full min-h-[90vh] py-24 px-6 md:px-12 flex items-center overflow-hidden font-sans"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className={`max-w-[1400px] w-full mx-auto relative flex flex-col items-center ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* Text Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-20 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, rotate: -5, y: 50 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="bg-white/10 backdrop-blur-sm p-8 md:p-16 rounded-3xl"
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8"
              style={{ backgroundColor: data.style.accentColor, color: data.style.backgroundColor }}
            >
              {data.content.subheading}
            </span>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              {data.content.heading}
            </h2>
            
            <p className="text-xl md:text-2xl font-medium mb-10 leading-snug">
              {data.content.description}
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {data.content.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg font-bold">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: data.style.accentColor, color: data.style.backgroundColor }}>
                    {idx + 1}
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href={data.content.primaryAction.url}
              className="inline-flex items-center justify-center w-full md:w-auto px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: data.style.accentColor, color: data.style.backgroundColor }}
            >
              {data.content.primaryAction.label}
            </a>
          </motion.div>
        </div>

        {/* Image Area - Circular Mask */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10 mt-12 lg:mt-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative w-full max-w-[500px] aspect-square"
          >
            {/* Background decorative circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[40px] border-dashed rounded-full opacity-20"
              style={{ borderColor: data.style.accentColor }}
            />
            
            {/* Actual Image Circle */}
            <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
              <img 
                src={data.content.image.url} 
                alt={data.content.image.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
