import React from 'react';
import { motion } from 'framer-motion';

interface ImageText14Props {
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

export default function ImageText14({ data }: ImageText14Props) {
  const isImageLeft = data.style.imageAlignment === 'left';

  return (
    <div 
      className="w-full flex flex-col md:flex-row relative font-sans"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Sticky Image Panel */}
      <div className={`w-full md:w-1/2 md:sticky top-0 h-[50vh] md:h-screen ${isImageLeft ? 'md:order-first' : 'md:order-last'}`}>
        <div className="w-full h-full p-6 md:p-12 lg:p-24">
          <motion.div 
            initial={{ opacity: 0, filter: "grayscale(100%)" }}
            whileInView={{ opacity: 1, filter: "grayscale(0%)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
            className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <img 
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Scrolling Text Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 min-h-screen">
        <div className="max-w-xl w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest mb-4 block" style={{ color: data.style.accentColor }}>
              {data.content.subheading}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {data.content.heading}
            </h2>
            <p className="text-xl opacity-70 leading-relaxed">
              {data.content.description}
            </p>
          </motion.div>

          {/* Large Numbered Features */}
          <div className="flex flex-col gap-0 border-t-2" style={{ borderColor: `${data.style.accentColor}20` }}>
            {data.content.features.map((feature, idx) => {
              const [title, desc] = feature.split(': ');
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="py-10 border-b-2 flex gap-8 group"
                  style={{ borderColor: `${data.style.accentColor}20` }}
                >
                  <div className="text-4xl md:text-5xl font-black opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: data.style.accentColor }}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    {desc && <p className="text-lg opacity-70 leading-relaxed">{desc}</p>}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <a 
              href={data.content.primaryAction.url}
              className="inline-flex items-center justify-center px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
            >
              {data.content.primaryAction.label}
            </a>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
