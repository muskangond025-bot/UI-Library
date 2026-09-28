import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ImageText12Props {
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

export default function ImageText12({ data }: ImageText12Props) {
  const isImageLeft = data.style.imageAlignment === 'left';

  return (
    <div 
      className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden font-sans"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Image Half */}
      <div className={`w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden ${isImageLeft ? 'md:order-first' : 'md:order-last'}`}>
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={data.content.image.url} 
          alt={data.content.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Text Half */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center p-8 md:p-16 lg:p-24 relative">
        <motion.div 
          className="max-w-xl w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: data.style.accentColor }} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: data.style.accentColor }}>
              {data.content.subheading}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight">
            {data.content.heading}
          </h2>
          
          <p className="text-lg md:text-xl opacity-80 mb-12 leading-relaxed">
            {data.content.description}
          </p>

          <div className="flex flex-col gap-4 mb-12">
            {data.content.features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="flex items-center gap-4 group"
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors group-hover:bg-white/10" 
                  style={{ borderColor: data.style.accentColor, color: data.style.accentColor }}
                >
                  <ArrowRight size={16} />
                </div>
                <span className="text-lg font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          <a 
            href={data.content.primaryAction.url}
            className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-sm transition-transform hover:scale-105"
          >
            {data.content.primaryAction.label}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

    </div>
  );
}
