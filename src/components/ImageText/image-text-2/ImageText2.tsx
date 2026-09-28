import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ImageText2Props {
  data: {
    content: {
      heading: string;
      subheading: string;
      description: string;
      stats: { value: string; label: string }[];
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

export default function ImageText2({ data }: ImageText2Props) {
  const isImageLeft = data.style.imageAlignment === 'left';

  return (
    <div 
      className="w-full min-h-screen py-24 px-6 md:px-12 flex items-center justify-center overflow-hidden relative"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className="max-w-[1400px] w-full mx-auto relative flex flex-col lg:flex-row items-center">
        
        {/* Image - takes up 60% width but positioned */}
        <motion.div 
          initial={{ opacity: 0, x: isImageLeft ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full lg:w-[65%] h-[50vh] lg:h-[80vh] relative z-0 ${isImageLeft ? 'lg:mr-auto' : 'lg:ml-auto order-last'}`}
        >
          <div className="w-full h-full relative overflow-hidden shadow-2xl">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Block - Overlapping */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`w-[90%] lg:w-[45%] bg-white p-8 md:p-16 shadow-2xl relative z-10 -mt-24 lg:mt-0 ${isImageLeft ? 'lg:-ml-[10%]' : 'lg:-mr-[10%]'}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12" style={{ backgroundColor: data.style.accentColor }} />
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: data.style.accentColor }}>
              {data.content.subheading}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-gray-900">
            {data.content.heading}
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            {data.content.description}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12 border-t border-gray-100 pt-8">
            {data.content.stats.map((stat, idx) => (
              <div key={idx}>
                <h4 className="text-4xl font-bold mb-2 text-gray-900">{stat.value}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          <a 
            href={data.content.primaryAction.url}
            className="group inline-flex items-center gap-4 text-lg font-bold uppercase tracking-wider text-gray-900"
          >
            <span className="group-hover:underline underline-offset-8 decoration-2" style={{ textDecorationColor: data.style.accentColor }}>
              {data.content.primaryAction.label}
            </span>
            <span 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-45"
              style={{ backgroundColor: data.style.accentColor, color: '#fff' }}
            >
              <ArrowUpRight size={24} />
            </span>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
