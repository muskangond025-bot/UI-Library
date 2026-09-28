import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale14Props {
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

export function FlashSale14({ section }: FlashSale14Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-block"
          >
            <h2 
              className="text-7xl md:text-9xl font-black uppercase tracking-tighter"
              style={{ color: style.accentColor }}
            >
              {content.title}
            </h2>
          </motion.div>
          <p className="text-xl font-bold tracking-[0.2em] uppercase mt-2">
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {content.products.map((product, index) => (
            <div
              key={product.id}
              className="group relative cursor-pointer flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-3xl p-6 md:p-10 border border-white/10 hover:border-sky-400 transition-colors"
            >
              
              <div className="w-full md:w-1/2 relative aspect-video">
                
                {/* Normal Image (visible on hover) */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                />

                {/* Shattered Pieces (visible by default) */}
                <div className="absolute inset-0 w-full h-full group-hover:opacity-0 transition-opacity duration-700 z-0">
                  <motion.div 
                    animate={{ x: [-5, 5, -5], y: [-5, 5, -5], rotate: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-1/2 h-1/2 overflow-hidden"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
                  >
                    <img src={product.image} alt="" className="w-[200%] h-[200%] object-cover max-w-none" />
                  </motion.div>
                  <motion.div 
                    animate={{ x: [5, -5, 5], y: [-5, 5, -5], rotate: [2, -2, 2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden"
                    style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}
                  >
                    <img src={product.image} alt="" className="absolute right-0 w-[200%] h-[200%] object-cover max-w-none" />
                  </motion.div>
                  <motion.div 
                    animate={{ x: [-5, 5, -5], y: [5, -5, 5], rotate: [1, -1, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden"
                    style={{ clipPath: 'polygon(0 0, 40% 0, 100% 100%, 0 100%)' }}
                  >
                    <img src={product.image} alt="" className="absolute bottom-0 w-full h-[200%] object-cover max-w-none" />
                  </motion.div>
                  <motion.div 
                    animate={{ x: [5, -5, 5], y: [5, -5, 5], rotate: [-1, 1, -1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 w-3/5 h-1/2 overflow-hidden"
                    style={{ clipPath: 'polygon(33% 0, 100% 0, 100% 100%, 0 100%)' }}
                  >
                    <img src={product.image} alt="" className="absolute bottom-0 right-0 w-[166%] h-[200%] object-cover max-w-none" />
                  </motion.div>
                </div>

              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">{product.name}</h3>
                
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="text-xl line-through text-gray-500">{product.oldPrice}</span>
                  <Zap size={24} style={{ color: style.accentColor }} />
                </div>
                
                <span className="text-6xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
