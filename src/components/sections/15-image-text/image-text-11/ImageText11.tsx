import React from 'react';
import { motion } from 'framer-motion';

interface ImageText11Props {
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

export default function ImageText11({ data }: ImageText11Props) {
  const isImageLeft = data.style.imageAlignment === 'left';

  return (
    <div 
      className="w-full py-24 px-6 md:px-12 lg:px-24 flex justify-center overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className={`max-w-6xl w-full flex flex-col items-center gap-16 lg:gap-8 ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* Scrapbook Image Area */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          {/* Decorative tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm rotate-3 z-20 shadow-sm" />
          
          <motion.div
            initial={{ opacity: 0, rotate: isImageLeft ? -10 : 10, y: 50 }}
            whileInView={{ opacity: 1, rotate: isImageLeft ? -4 : 4, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="p-4 md:p-6 pb-16 md:pb-20 bg-white shadow-xl relative z-10 w-full max-w-md transform origin-bottom"
          >
            <div className="w-full aspect-square overflow-hidden bg-gray-100">
              <img 
                src={data.content.image.url} 
                alt={data.content.image.alt}
                className="w-full h-full object-cover filter contrast-110 saturate-50 sepia-[0.2]"
              />
            </div>
            <div className="absolute bottom-4 left-0 w-full text-center font-serif italic text-gray-500 text-lg opacity-80">
              {data.content.image.alt}
            </div>
          </motion.div>
          
          {/* Background decorative photo */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: isImageLeft ? 8 : -8 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-10 left-10 w-full max-w-md aspect-square bg-white shadow-lg p-4 pb-16 z-0 hidden md:block"
          >
            <div className="w-full h-full bg-gray-200 opacity-50" />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`bg-white/80 backdrop-blur-md p-8 md:p-12 shadow-2xl rounded-sm ${isImageLeft ? 'lg:-ml-24' : 'lg:-mr-24'} relative`}
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase mb-4 block" style={{ color: data.style.accentColor }}>
              {data.content.subheading}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
              {data.content.heading}
            </h2>
            
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              {data.content.description}
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {data.content.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-[1px]" style={{ backgroundColor: data.style.accentColor }} />
                  <span className="font-serif italic text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href={data.content.primaryAction.url}
              className="inline-block px-8 py-3 border-2 font-bold uppercase tracking-widest transition-colors hover:text-white"
              style={{ borderColor: data.style.textColor, hover: { backgroundColor: data.style.textColor } } as any}
            >
              {data.content.primaryAction.label}
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
