import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  color: string;
}

interface Trending14Props {
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

export function Trending14({ section }: Trending14Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden bg-[#050505]"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(${style.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${style.accentColor} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter" style={{ color: style.textColor, textShadow: `0 0 20px ${style.accentColor}` }}>
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-[0.4em] uppercase mt-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-16">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group w-full md:w-1/3 max-w-sm"
            >
              
              {/* Neon Border Glow Base */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: product.color }}
              />

              <div className="relative bg-black rounded-3xl p-6 border-2 border-white/10 group-hover:border-transparent transition-colors z-10 flex flex-col items-center">
                
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-8 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 mix-blend-color opacity-50 group-hover:opacity-0 transition-opacity" style={{ backgroundColor: product.color }} />
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2 text-center" style={{ textShadow: `0 0 10px ${product.color}` }}>
                  {product.name}
                </h3>
                <p className="text-xl font-light text-white/70">{product.price}</p>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
