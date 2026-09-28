import React from 'react';
import { motion } from 'framer-motion';

interface ImageText7Props {
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

export default function ImageText7({ data }: ImageText7Props) {
  const isImageLeft = data.style.imageAlignment === 'left';

  return (
    <div 
      className="w-full min-h-[90vh] py-32 px-6 md:px-12 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className="max-w-[1600px] w-full mx-auto relative h-full flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
        
        {/* Floating Image */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          className={`relative z-10 w-full max-w-md aspect-[3/4] ${isImageLeft ? 'md:order-first' : 'md:order-last'}`}
        >
          <div className="w-full h-full p-4 bg-white shadow-2xl rounded-sm transform transition-transform hover:scale-[1.02] duration-500">
            <img 
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating feature blocks */}
          {data.content.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (idx * 0.2), type: "spring" }}
              className={`absolute px-4 py-2 bg-white/80 backdrop-blur-md shadow-lg text-sm font-semibold tracking-widest uppercase whitespace-nowrap rounded-sm
                ${idx === 0 ? '-top-6 -left-12' : idx === 1 ? 'top-1/2 -right-16 -translate-y-1/2' : '-bottom-8 left-12'}
              `}
              style={{ color: data.style.textColor }}
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>

        {/* Text Area */}
        <div className="w-full max-w-lg relative z-20 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold opacity-60 mb-8 block">
              {data.content.subheading}
            </span>
            
            <h2 className="text-5xl md:text-7xl font-serif italic tracking-tight mb-8">
              {data.content.heading}
            </h2>
            
            <p className="text-lg opacity-70 mb-12 font-light leading-relaxed max-w-md">
              {data.content.description}
            </p>

            <a 
              href={data.content.primaryAction.url}
              className="group relative inline-flex items-center justify-center w-32 h-32 rounded-full border border-current transition-colors hover:bg-black hover:text-white"
            >
              <span className="text-sm font-medium uppercase tracking-widest">
                {data.content.primaryAction.label}
              </span>
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
