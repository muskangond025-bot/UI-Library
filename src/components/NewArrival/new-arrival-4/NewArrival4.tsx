import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  glowColor: string;
}

interface NewArrival4Props {
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

export function NewArrival4({ section }: NewArrival4Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-24 relative z-20">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative z-10">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group flex flex-col items-center"
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 rounded-full blur-[80px] opacity-30 group-hover:opacity-70 transition-opacity duration-700"
                style={{ backgroundColor: product.glowColor, transform: 'translateY(-20%) scale(0.8)' }}
              />

              {/* Glass Card */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-4 flex flex-col justify-between hover:border-white/20 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Add to Cart Button */}
                <div className="absolute bottom-8 right-8">
                  <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>

              <div className="mt-8 text-center relative z-20">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-xl font-light text-white/60">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
