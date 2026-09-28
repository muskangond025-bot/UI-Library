import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  discount: string;
}

interface Sale2Props {
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

export function Sale2({ section }: Sale2Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter" style={{ color: style.accentColor }}>
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-[0.4em] uppercase mt-4 opacity-70">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative flex bg-white/5 rounded-xl overflow-hidden cursor-pointer hover:bg-white/10 transition-colors border border-white/10"
            >
              
              {/* Ticket Left Side (Image) */}
              <div className="w-1/2 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div 
                  className="absolute inset-0 opacity-40 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"
                  style={{ backgroundColor: style.accentColor }}
                />
              </div>

              {/* Ticket Right Side (Details) */}
              <div className="w-1/2 p-6 md:p-8 flex flex-col justify-center relative border-l-2 border-dashed border-white/20">
                {/* Cutouts for ticket effect */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#111111]" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-[#111111]" />

                <div 
                  className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 w-fit"
                  style={{ backgroundColor: style.accentColor, color: style.backgroundColor }}
                >
                  SAVE {product.discount}
                </div>

                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-4">{product.name}</h3>
                
                <div>
                  <p className="text-sm font-medium text-white/40 line-through mb-1">{product.oldPrice}</p>
                  <p className="text-4xl font-bold" style={{ color: style.accentColor }}>{product.newPrice}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
