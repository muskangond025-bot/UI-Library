import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Trending12Props {
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

export function Trending12({ section }: Trending12Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter" style={{ WebkitTextStroke: `2px ${style.textColor}`, color: 'transparent' }}>
            {content.title}
          </h2>
          <motion.div 
            className="w-24 h-1 mx-auto mt-6"
            style={{ backgroundColor: style.accentColor }}
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group w-full md:w-1/3 flex flex-col items-center"
            >
              
              {/* Liquid Blob Background (CSS animation simulation) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <motion.div 
                  animate={{ 
                    borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full absolute inset-0 blur-xl"
                  style={{ backgroundColor: style.accentColor, opacity: 0.5 }}
                />
              </div>

              {/* Product Card */}
              <div className="relative z-10 w-[80%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl group-hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-all duration-500 bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-20 mt-8 text-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 -translate-y-12 group-hover:-translate-y-4 transition-transform duration-500 shadow-lg">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-1">{product.name}</h3>
                <p className="text-lg font-light" style={{ color: style.accentColor }}>{product.price}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
