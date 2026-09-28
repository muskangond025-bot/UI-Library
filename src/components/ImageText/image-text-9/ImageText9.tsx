import React from 'react';
import { motion } from 'framer-motion';

interface ImageText9Props {
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

export default function ImageText9({ data }: ImageText9Props) {
  const isImageLeft = data.style.imageAlignment === 'left';

  return (
    <div 
      className="w-full py-24 px-6 md:px-12 lg:px-24 flex justify-center font-serif"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className="max-w-[1200px] w-full mx-auto">
        
        {/* Editorial Header */}
        <div className="border-b-2 border-current pb-8 mb-12 flex flex-col md:flex-row justify-between items-baseline gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl tracking-tighter uppercase font-medium"
          >
            {data.content.heading}
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-sans uppercase tracking-[0.3em] font-bold shrink-0"
            style={{ color: data.style.accentColor }}
          >
            {data.content.subheading}
          </motion.span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Main Copy (Takes up 2/3 of space) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`col-span-1 md:col-span-8 md:columns-2 gap-12 text-lg leading-relaxed ${isImageLeft ? 'md:order-last' : 'md:order-first'}`}
          >
            <p className="mb-6 drop-cap">
              <span className="float-left text-7xl leading-[0.8] mr-4 mt-2 font-black">
                {data.content.description.charAt(0)}
              </span>
              {data.content.description.slice(1)}
            </p>
            <p className="mb-6">
              This structural approach to layout design ensures that information is presented not just as data, but as a narrative flow. The reader's eye is guided purposefully.
            </p>
            <p>
              By combining strict typographic scales with ample whitespace, we achieve a balance that is both classic and highly functional in a digital context.
            </p>

            <div className="mt-12 mb-8 font-sans">
              <h4 className="text-sm uppercase tracking-widest font-bold mb-4 border-b border-current pb-2">Key Principles</h4>
              <ul className="flex flex-col gap-2 text-sm font-medium">
                {data.content.features.map((feature, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>0{idx + 1}</span>
                    <span className="uppercase">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={data.content.primaryAction.url}
              className="inline-block mt-8 font-sans text-xs uppercase tracking-widest font-bold hover:underline underline-offset-8"
              style={{ color: data.style.accentColor }}
            >
              {data.content.primaryAction.label} &rarr;
            </a>
          </motion.div>

          {/* Sidebar / Inset Image (Takes up 1/3) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-4 flex flex-col gap-6"
          >
            <div className="w-full aspect-[3/4] overflow-hidden bg-gray-200">
              <img 
                src={data.content.image.url} 
                alt={data.content.image.alt}
                className="w-full h-full object-cover filter grayscale sepia-[0.2]"
              />
            </div>
            <figcaption className="text-xs font-sans uppercase tracking-widest opacity-60 text-right">
              FIG 1. {data.content.image.alt}
            </figcaption>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
