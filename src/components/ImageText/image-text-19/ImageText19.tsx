import React from 'react';
import { motion } from 'framer-motion';

interface ImageText19Props {
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

export default function ImageText19({ data }: ImageText19Props) {
  const isImageLeft = data.style.imageAlignment === 'left';

  return (
    <div 
      className="w-full py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Background blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] opacity-20 blur-3xl z-0"
        style={{ backgroundColor: data.style.accentColor, left: isImageLeft ? '-10%' : 'auto', right: isImageLeft ? 'auto' : '-10%', top: '10%' }}
      />

      <div className={`max-w-[1200px] w-full relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        
        {/* Blob Image Mask */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-[450px] aspect-square relative"
          >
            <motion.div
              animate={{ 
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full overflow-hidden shadow-2xl"
            >
              <img 
                src={data.content.image.url} 
                alt={data.content.image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Soft border ring */}
            <motion.div
              animate={{ 
                borderRadius: ["50% 50% 50% 50% / 50% 50% 50% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%"],
                rotate: [0, -90, -180]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] border-4 opacity-30 z-[-1]"
              style={{ borderColor: data.style.accentColor }}
            />
          </motion.div>
        </div>

        {/* Text Box */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase mb-6"
              style={{ backgroundColor: `${data.style.accentColor}30`, color: data.style.textColor }}
            >
              {data.content.subheading}
            </span>
            
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6 leading-tight">
              {data.content.heading}
            </h2>
            
            <p className="text-lg opacity-80 mb-10 leading-relaxed font-light">
              {data.content.description}
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {data.content.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <svg className="w-6 h-6 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href={data.content.primaryAction.url}
              className="inline-block px-10 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-1 text-center"
              style={{ backgroundColor: data.style.accentColor, color: data.style.textColor }}
            >
              {data.content.primaryAction.label}
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
