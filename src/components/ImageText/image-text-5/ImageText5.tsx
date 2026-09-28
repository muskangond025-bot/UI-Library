import React from 'react';
import { motion } from 'framer-motion';

interface ImageText5Props {
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

export default function ImageText5({ data }: ImageText5Props) {
  const isImageLeft = data.style.imageAlignment === 'left';

  return (
    <div 
      className="w-full flex flex-col lg:flex-row relative"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Image Panel - Sticky on Desktop */}
      <div className={`w-full lg:w-1/2 lg:h-screen lg:sticky top-0 order-first ${isImageLeft ? '' : 'lg:order-last'}`}>
        <div className="w-full h-[50vh] lg:h-full relative overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Text Panel - Scrolling */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-24 px-8 md:px-16 lg:py-32">
        <div className="max-w-xl w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-black uppercase tracking-[0.3em] mb-4 block" style={{ color: data.style.accentColor }}>
              {data.content.subheading}
            </span>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {data.content.heading}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed opacity-80 mb-16 font-light"
          >
            {data.content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h4 className="text-lg font-bold uppercase tracking-wider mb-8 border-b pb-4 opacity-50">Core Tenets</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {data.content.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-2 group cursor-default">
                  <div className="h-0.5 w-8 bg-gray-300 group-hover:w-full transition-all duration-500" style={{ backgroundColor: data.style.accentColor }} />
                  <span className="text-lg font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href={data.content.primaryAction.url}
              className="inline-block px-10 py-5 rounded-sm font-bold text-white uppercase tracking-widest transition-colors hover:opacity-90"
              style={{ backgroundColor: data.style.textColor }}
            >
              {data.content.primaryAction.label}
            </a>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
