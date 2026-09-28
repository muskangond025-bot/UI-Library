import React from 'react';
import { motion } from 'framer-motion';

interface ImageText18Props {
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

export default function ImageText18({ data }: ImageText18Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  // Clip path determines the slant direction
  const clipPathStyle = isImageRight 
    ? 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' // Slanted left edge
    : 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'; // Slanted right edge

  return (
    <div 
      className="w-full min-h-screen flex flex-col md:flex-row items-center font-sans overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Image Area - Severely Cropped */}
      <div 
        className={`w-full md:w-[55%] h-[50vh] md:h-screen relative z-10 ${isImageRight ? 'md:order-last' : 'md:order-first'} md:-mx-10`}
        style={{ clipPath: clipPathStyle }}
      >
        <motion.img 
          initial={{ scale: 1.2, x: isImageRight ? 50 : -50 }}
          whileInView={{ scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={data.content.image.url} 
          alt={data.content.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      </div>

      {/* Text Area */}
      <div className="w-full md:w-[45%] h-full flex items-center justify-center p-8 md:p-16 lg:p-24 relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: isImageRight ? -50 : 50, skewX: isImageRight ? -5 : 5 }}
          whileInView={{ opacity: 1, x: 0, skewX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-md w-full"
        >
          <span 
            className="inline-block font-black italic text-xl md:text-2xl tracking-tighter mb-4"
            style={{ color: data.style.accentColor }}
          >
            /// {data.content.subheading}
          </span>
          
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-[0.9]">
            {data.content.heading}
          </h2>
          
          <p className="text-lg opacity-80 mb-10 leading-relaxed font-medium">
            {data.content.description}
          </p>

          <div className="flex flex-col gap-3 mb-10 border-l-4 pl-4" style={{ borderColor: data.style.accentColor }}>
            {data.content.features.map((feature, idx) => (
              <span key={idx} className="font-bold italic uppercase tracking-wider opacity-90">
                {feature}
              </span>
            ))}
          </div>

          <a 
            href={data.content.primaryAction.url}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-black italic uppercase tracking-widest overflow-hidden transform -skew-x-12 transition-transform hover:scale-105"
            style={{ backgroundColor: data.style.accentColor, color: data.style.backgroundColor }}
          >
            <span className="relative z-10 skew-x-12">{data.content.primaryAction.label}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
        </motion.div>
      </div>

    </div>
  );
}
