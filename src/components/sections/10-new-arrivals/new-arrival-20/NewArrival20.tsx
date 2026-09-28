import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  size: "large" | "small" | "wide";
}

interface NewArrival20Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      products: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function NewArrival20({ section }: NewArrival20Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {content.products.map((product, index) => {
            
            // Map bento box sizes to grid column/row spans
            let colSpan = "md:col-span-1";
            let rowSpan = "md:row-span-1";
            
            if (product.size === 'large') {
              colSpan = "md:col-span-2";
              rowSpan = "md:row-span-2";
            } else if (product.size === 'wide') {
              colSpan = "md:col-span-2";
              rowSpan = "md:row-span-1";
            }

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative group rounded-3xl overflow-hidden bg-white shadow-lg cursor-pointer ${colSpan} ${rowSpan}`}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-1">{product.name}</h3>
                  <p className="text-lg font-light" style={{ color: style.accentColor }}>{product.price}</p>
                </div>
                
                {/* Hover Reveal Button */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
