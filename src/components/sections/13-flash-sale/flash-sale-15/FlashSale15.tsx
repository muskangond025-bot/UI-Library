import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale15Props {
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

export function FlashSale15({ section }: FlashSale15Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Hyperdrive Starfield Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: '50vw', y: '50vh', scale: 0, opacity: 0 
            }}
            animate={{ 
              x: `${Math.random() * 200 - 100}vw`, 
              y: `${Math.random() * 200 - 100}vh`, 
              scale: Math.random() * 2 + 1,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 1, 
              repeat: Infinity, 
              ease: "easeIn",
              delay: Math.random() * 2 
            }}
            className="absolute w-2 h-1 bg-white rounded-full"
            style={{ 
              backgroundColor: i % 3 === 0 ? style.accentColor : '#FFF',
              transformOrigin: '0 0'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic" style={{ textShadow: `0 0 30px ${style.accentColor}` }}>
            {content.title}
          </h2>
          <p className="text-lg font-bold tracking-[0.5em] uppercase mt-2 text-pink-400">
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -100, skewX: 20 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group cursor-pointer bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500 transition-colors"
            >
              <div className="flex flex-col md:flex-row">
                
                {/* Image */}
                <div className="w-full md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-pink-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 p-8 flex flex-col justify-center relative overflow-hidden">
                  
                  {/* Speed lines on hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute h-px bg-pink-500/50 w-full animate-pulse"
                        style={{ top: `${Math.random() * 100}%`, left: 0, animationDuration: `${Math.random() * 0.5 + 0.1}s` }}
                      />
                    ))}
                  </div>

                  <h3 className="text-4xl font-black uppercase tracking-tight mb-6 italic">{product.name}</h3>
                  
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase font-bold text-gray-500 mb-1">Was</span>
                      <span className="text-2xl line-through text-gray-400">{product.oldPrice}</span>
                    </div>
                    <div className="h-12 w-px bg-white/20 transform -skew-x-12" />
                    <div className="flex flex-col">
                      <span className="text-xs uppercase font-bold text-pink-400 mb-1">Now</span>
                      <span className="text-5xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
