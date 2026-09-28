import React from 'react';
import { motion } from 'framer-motion';

interface ImageText13Props {
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
      accentColor: string; // Used as a gradient here
      imageAlignment: 'left' | 'right';
    };
  };
}

export default function ImageText13({ data }: ImageText13Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  return (
    <div 
      className="w-full min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden relative"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      {/* Background Glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 z-0 mix-blend-screen"
        style={{ background: data.style.accentColor }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 z-0 mix-blend-screen"
        style={{ background: data.style.accentColor }}
      />

      <div className={`max-w-[1400px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
        
        {/* Text Area */}
        <div className={`flex flex-col ${isImageRight ? 'order-first' : 'order-last'}`}>
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="text-sm font-bold uppercase tracking-[0.4em] mb-6 block"
              style={{ 
                background: data.style.accentColor, 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}
            >
              {data.content.subheading}
            </span>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              {data.content.heading}
            </h2>
            
            <p className="text-xl opacity-70 mb-10 leading-relaxed font-light border-l-2 pl-6" style={{ borderImage: `${data.style.accentColor} 1` }}>
              {data.content.description}
            </p>

            <ul className="flex flex-col gap-4 mb-12">
              {data.content.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ background: data.style.accentColor }} />
                  <span className="font-bold tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href={data.content.primaryAction.url}
              className="group relative inline-flex items-center justify-center px-12 py-5 font-bold uppercase tracking-widest overflow-hidden rounded-sm w-fit"
            >
              {/* Button Background Gradient */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: data.style.accentColor }}
              />
              {/* Button Inner dark fill for outline effect */}
              <div className="absolute inset-[2px] bg-[#050505] z-10 transition-colors duration-500 group-hover:bg-transparent" />
              
              <span className="relative z-20 transition-colors duration-500 text-white group-hover:text-black">
                {data.content.primaryAction.label}
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Area */}
        <div className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10" />
            
            <img 
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
            
            {/* Holographic overlay */}
            <div 
              className="absolute inset-0 opacity-20 mix-blend-color z-20 rounded-xl transition-opacity hover:opacity-0 duration-700"
              style={{ background: data.style.accentColor }}
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
