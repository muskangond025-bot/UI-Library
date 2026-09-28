import React from 'react';
import { motion } from 'framer-motion';

interface ImageText10Props {
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

export default function ImageText10({ data }: ImageText10Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  return (
    <div 
      className="w-full min-h-[90vh] py-32 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Background Marquee Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-5 pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[20vw] font-black uppercase tracking-tighter mx-8">
              {data.content.heading}
            </span>
          ))}
        </motion.div>
      </div>

      <div className={`max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center gap-16 lg:gap-24 ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* Text Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-4" style={{ color: data.style.accentColor }}>
            <span className="w-12 h-px bg-current" />
            {data.content.subheading}
          </h4>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            {data.content.heading}
          </h2>
          
          <p className="text-xl opacity-70 mb-10 leading-relaxed font-light">
            {data.content.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {data.content.features.map((feature, idx) => (
              <span 
                key={idx}
                className="px-6 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide"
              >
                {feature}
              </span>
            ))}
          </div>

          <a 
            href={data.content.primaryAction.url}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white uppercase tracking-wider overflow-hidden rounded-lg"
            style={{ backgroundColor: data.style.accentColor }}
          >
            <span className="relative z-10">{data.content.primaryAction.label}</span>
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>

        {/* Image - Archway Mask */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="w-full max-w-[450px] relative"
          >
            {/* The Archway shape using clip-path */}
            <div 
              className="w-full aspect-[2/3] overflow-hidden"
              style={{ clipPath: 'path("M 0 200 C 0 0, 450 0, 450 200 L 450 675 L 0 675 Z")' }}
            >
              <img 
                src={data.content.image.url} 
                alt={data.content.image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
            
            {/* Decorative outline */}
            <div 
              className="absolute inset-0 border-2 pointer-events-none transform translate-x-4 translate-y-4"
              style={{ 
                borderColor: data.style.accentColor,
                clipPath: 'path("M 0 200 C 0 0, 450 0, 450 200 L 450 675 L 0 675 Z")' 
              }}
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
