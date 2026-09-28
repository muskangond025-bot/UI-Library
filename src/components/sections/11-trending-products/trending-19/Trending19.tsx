import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Trending19Props {
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

export function Trending19({ section }: Trending19Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-32 relative z-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mix-blend-difference" style={{ color: 'white' }}>
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-[0.4em] uppercase mt-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {content.products.map((product, index) => {
            // Random scatter initially, then animate to grid-like alignment
            const initialRotate = (Math.random() - 0.5) * 60;
            const initialX = (Math.random() - 0.5) * 200;
            const initialY = (Math.random() - 0.5) * 200;

            return (
              <motion.div
                key={product.id}
                initial={{ rotate: initialRotate, x: initialX, y: initialY, opacity: 0, scale: 0.8 }}
                whileInView={{ rotate: (index % 2 === 0 ? -2 : 3), x: 0, y: 0, opacity: 1, scale: 1 }}
                whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative bg-white p-4 md:p-6 pb-16 md:pb-24 shadow-2xl cursor-pointer w-[280px] md:w-[320px] rounded-sm group z-10"
              >
                <div className="w-full aspect-square overflow-hidden bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-500"
                  />
                </div>
                
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end font-sans">
                  <h3 className="text-xl font-bold text-black transform -rotate-1 origin-left truncate">{product.name}</h3>
                  <p className="text-lg font-medium text-gray-500">{product.price}</p>
                </div>

                {/* Tape detail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-white/50 backdrop-blur-sm border border-black/10 transform -rotate-2" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
