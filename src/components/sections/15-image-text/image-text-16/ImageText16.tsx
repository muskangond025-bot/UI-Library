import React from 'react';
import { motion } from 'framer-motion';

interface ImageText16Props {
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

export default function ImageText16({ data }: ImageText16Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  return (
    <div 
      className="w-full py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center font-sans"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className="max-w-[1200px] w-full relative">
        
        <div className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
          
          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`w-full lg:w-[55%] bg-white p-10 md:p-16 shadow-2xl rounded-2xl relative z-20 ${isImageRight ? 'lg:-mr-20' : 'lg:-ml-20'} mt-16 lg:mt-0 order-last lg:order-none`}
            style={{ color: '#18181B' }} // Force dark text on white card
          >
            <span 
              className="inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest mb-6"
              style={{ backgroundColor: `${data.style.accentColor}20`, color: data.style.accentColor }}
            >
              {data.content.subheading}
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              {data.content.heading}
            </h2>
            
            <p className="text-lg opacity-70 mb-10 leading-relaxed font-medium">
              {data.content.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {data.content.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill={data.style.accentColor} fillOpacity="0.2"/>
                    <path d="M16 9L10.5 14.5L8 12" stroke={data.style.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href={data.content.primaryAction.url}
              className="inline-block px-8 py-4 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: data.style.accentColor }}
            >
              {data.content.primaryAction.label}
            </a>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[60%] relative z-10"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={data.content.image.url} 
                alt={data.content.image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            {/* Decorative dot pattern or abstract shape behind image */}
            <div 
              className={`absolute -z-10 w-64 h-64 rounded-full opacity-20 blur-3xl
                ${isImageRight ? '-top-20 -right-20' : '-bottom-20 -left-20'}
              `}
              style={{ backgroundColor: data.style.accentColor }}
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
