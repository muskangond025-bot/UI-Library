import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale4Props {
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

export function Sale4({ section }: Sale4Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-serif"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="flex flex-col items-center mb-24 relative">
          <div className="w-px h-24 mb-8" style={{ backgroundColor: style.textColor }} />
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase mb-4 opacity-60">
            {content.subtitle}
          </p>
          <h2 className="text-6xl md:text-8xl italic tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {content.products.map((product, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 group cursor-pointer`}
              >
                
                <div className="w-full md:w-3/5 overflow-hidden">
                  <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/5 flex flex-col justify-center font-sans">
                  <h3 className="text-4xl md:text-5xl font-light mb-8">{product.name}</h3>
                  <div className="flex items-center gap-6">
                    <span className="text-2xl opacity-40 line-through">{product.oldPrice}</span>
                    <span className="text-4xl font-bold">{product.newPrice}</span>
                  </div>
                  
                  <div className="mt-12 w-full h-px bg-black/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                  <button className="mt-6 text-left text-sm font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    Shop Piece
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
