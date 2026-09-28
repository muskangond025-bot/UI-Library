import React from 'react';
import { motion } from 'framer-motion';

interface ImageText15Props {
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

export default function ImageText15({ data }: ImageText15Props) {
  // We ignore imageAlignment for this specific layout to force a central hero look
  
  return (
    <div 
      className="w-full py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center font-sans"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Header Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center mb-16 md:mb-24 relative z-20"
      >
        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-gray-200" style={{ color: data.style.accentColor }}>
          {data.content.subheading}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
          {data.content.heading}
        </h2>
        <p className="text-xl md:text-2xl opacity-70 font-medium">
          {data.content.description}
        </p>
      </motion.div>

      {/* Central Image & Floating Features */}
      <div className="w-full max-w-6xl relative flex flex-col items-center">
        
        {/* Floating Features (Desktop Only) */}
        <div className="hidden lg:block">
          {data.content.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (idx * 0.2) }}
              className={`absolute z-30 bg-white shadow-xl px-6 py-4 rounded-xl font-bold flex items-center gap-3
                ${idx === 0 ? 'top-10 left-10' : idx === 1 ? 'top-1/2 -translate-y-1/2 -right-10' : 'bottom-20 left-20'}
              `}
              style={{ color: data.style.textColor }}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.style.accentColor }} />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Central Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="relative z-10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-[16/9] w-full">
            <img 
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Bottom CTA on Image */}
          <div className="absolute bottom-8 left-0 w-full flex justify-center">
            <a 
              href={data.content.primaryAction.url}
              className="px-8 py-4 rounded-full font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: data.style.accentColor }}
            >
              {data.content.primaryAction.label}
            </a>
          </div>
        </motion.div>

        {/* Mobile Features List */}
        <div className="w-full max-w-md mt-16 flex flex-col gap-4 lg:hidden">
          {data.content.features.map((feature, idx) => (
            <div key={idx} className="bg-white shadow-md px-6 py-4 rounded-xl font-bold flex items-center gap-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.style.accentColor }} />
              {feature}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
