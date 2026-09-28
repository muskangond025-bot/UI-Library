import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface ImageText4Props {
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

export default function ImageText4({ data }: ImageText4Props) {
  const isImageLeft = data.style.imageAlignment === 'left';
  // Note: For this layout, "imageAlignment" determines which side the *text card* floats on.
  // Left means text is on the right, image focus is on the left.
  const cardPosition = isImageLeft ? 'lg:justify-end' : 'lg:justify-start';

  return (
    <div className="w-full min-h-[90vh] relative flex items-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
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
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle darkening overlay */}
      </div>

      <div className={`max-w-7xl mx-auto w-full relative z-10 flex ${cardPosition}`}>
        
        {/* Glassmorphism Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, backdropFilter: "blur(0px)" }}
          whileInView={{ opacity: 1, y: 0, backdropFilter: "blur(20px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-[500px] p-8 md:p-12 rounded-3xl bg-white/70 shadow-2xl border border-white/40"
          style={{ color: data.style.textColor }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/80" style={{ color: data.style.accentColor }}>
            {data.content.subheading}
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {data.content.heading}
          </h2>
          
          <p className="text-lg opacity-80 mb-8 leading-relaxed font-medium">
            {data.content.description}
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {data.content.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.style.accentColor }} />
                <span className="font-semibold text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={data.content.primaryAction.url}
              className="px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: data.style.accentColor }}
            >
              {data.content.primaryAction.label}
            </a>
            
            <button className="group flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md hover:scale-110 transition-transform">
              <Play size={20} className="ml-1" style={{ color: data.style.accentColor }} />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
