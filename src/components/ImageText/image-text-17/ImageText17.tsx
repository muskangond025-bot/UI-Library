import React from 'react';
import { motion } from 'framer-motion';

interface ImageText17Props {
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

export default function ImageText17({ data }: ImageText17Props) {
  const isImageLeft = data.style.imageAlignment === 'left';
  // Alignment here determines where the text box anchors.
  const anchorClass = isImageLeft ? 'items-start md:items-end justify-end md:justify-center' : 'items-start md:items-start justify-end md:justify-center';

  return (
    <div className="w-full min-h-[90vh] relative flex font-sans overflow-hidden">
      
      {/* Full Bleed Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
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
        {/* Gradient overlay to ensure text legibility depending on alignment */}
        <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${isImageLeft ? 'from-black/80 md:from-transparent md:via-black/50 md:to-black/80' : 'from-black/80 md:from-black/80 md:via-black/50 md:to-transparent'}`} />
      </div>

      {/* Content Container */}
      <div className={`w-full max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 flex flex-col ${anchorClass}`}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-lg w-full"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-white/50" />
            <span className="text-sm font-bold uppercase tracking-widest text-white/80">
              {data.content.subheading}
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
            {data.content.heading}
          </h2>
          
          <p className="text-lg opacity-90 mb-10 leading-relaxed font-light text-white/90">
            {data.content.description}
          </p>

          <div className="flex flex-col gap-5 mb-12">
            {data.content.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="flex items-center gap-4 text-white"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                <span className="font-medium tracking-wide">{feature}</span>
              </motion.div>
            ))}
          </div>

          <a 
            href={data.content.primaryAction.url}
            className="group inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm"
          >
            <span className="border-b-2 border-white/30 pb-1 group-hover:border-white transition-colors">
              {data.content.primaryAction.label}
            </span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>

    </div>
  );
}
