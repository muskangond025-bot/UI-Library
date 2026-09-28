import React from 'react';
import { motion } from 'framer-motion';

interface ImageText20Props {
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

export default function ImageText20({ data }: ImageText20Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  return (
    <div className="w-full min-h-screen relative flex items-center overflow-hidden font-sans bg-black">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={data.content.image.url} 
            alt={data.content.image.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Complex Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-r ${isImageRight ? 'from-black via-black/80 to-transparent' : 'from-transparent via-black/80 to-black'}`} />
      </div>

      <div className={`max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex ${isImageRight ? 'justify-start' : 'justify-end'}`}>
        
        {/* Premium Glass Panel */}
        <motion.div 
          initial={{ opacity: 0, backdropFilter: "blur(0px)", y: 50 }}
          whileInView={{ opacity: 1, backdropFilter: "blur(24px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full max-w-2xl p-10 md:p-16 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden"
          style={{ color: data.style.textColor }}
        >
          {/* Animated Glow inside card */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span 
                className="inline-block text-xs font-black uppercase tracking-[0.3em] mb-8 pb-2 border-b border-white/20"
                style={{ color: data.style.accentColor }}
              >
                {data.content.subheading}
              </span>
              
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05]">
                {data.content.heading}
              </h2>
              
              <p className="text-lg md:text-xl opacity-80 mb-12 leading-relaxed font-light">
                {data.content.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col gap-6 mb-16"
            >
              {data.content.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="w-12 h-px bg-white/30 relative">
                    <div className="absolute left-0 top-0 w-full h-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" style={{ backgroundColor: data.style.accentColor }} />
                  </div>
                  <span className="font-medium tracking-wide text-lg">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <a 
                href={data.content.primaryAction.url}
                className="group relative inline-flex items-center justify-center px-12 py-5 font-bold uppercase tracking-widest text-sm overflow-hidden bg-white text-black"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  {data.content.primaryAction.label}
                </span>
                <div 
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"
                  style={{ backgroundColor: data.style.accentColor }}
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
