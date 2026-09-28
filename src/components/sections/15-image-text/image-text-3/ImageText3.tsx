import React from 'react';
import { motion } from 'framer-motion';

interface ImageText3Props {
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

export default function ImageText3({ data }: ImageText3Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  return (
    <div 
      className="w-full min-h-screen py-32 px-6 md:px-12 flex items-center overflow-hidden font-serif"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className={`max-w-7xl mx-auto w-full relative flex flex-col items-center ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* Massive Background Text - Intersects Image */}
        <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none z-0 opacity-10">
          <motion.h1 
            initial={{ x: "20%" }}
            animate={{ x: "-20%" }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="text-[15vw] font-black uppercase tracking-tighter leading-none"
          >
            {data.content.subheading} &mdash; {data.content.subheading}
          </motion.h1>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-20 py-12 lg:py-0">
          <div className={`${isImageRight ? 'lg:pr-24' : 'lg:pl-24'}`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-sm font-sans uppercase tracking-[0.3em] mb-6" style={{ color: data.style.accentColor }}>
                {data.content.subheading}
              </h4>
              <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-[1.1]">
                {data.content.heading}
              </h2>
              <p className="text-xl opacity-70 mb-12 font-sans font-light leading-relaxed">
                {data.content.description}
              </p>

              <ul className="flex flex-col gap-4 mb-12 font-sans">
                {data.content.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-4 text-lg"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                    <span className="font-light">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <a 
                href={data.content.primaryAction.url}
                className="group relative inline-flex items-center gap-4 font-sans text-sm uppercase tracking-[0.2em] font-bold"
              >
                <span>{data.content.primaryAction.label}</span>
                <div className="w-12 h-px bg-current transition-all duration-300 group-hover:w-20" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 relative z-10 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, clipPath: isImageRight ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-white/5 shadow-2xl mix-blend-overlay" />
            <img 
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="w-full h-full object-cover filter contrast-125 saturate-50"
            />
            {/* Edge glow */}
            <div 
              className={`absolute top-0 bottom-0 w-px shadow-[0_0_20px_rgba(255,255,255,0.5)] ${isImageRight ? 'left-0' : 'right-0'}`}
              style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
