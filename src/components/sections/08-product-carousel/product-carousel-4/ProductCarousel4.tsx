import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel4Props {
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

export function ProductCarousel4({ section }: ProductCarousel4Props) {
  const { content, style } = section;
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 mix-blend-difference">
        <h2 className="text-2xl font-bold tracking-tighter uppercase">{content.title}</h2>
        <p className="text-xs tracking-widest uppercase font-mono mt-1" style={{ color: style.accentColor }}>{content.subtitle}</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product, index) => (
          <div 
            key={product.id}
            className="w-full h-full shrink-0 snap-start relative flex items-center justify-center overflow-hidden"
          >
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 text-center px-4 mix-blend-overlay">
              <motion.h3 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-none mb-4"
              >
                {product.name}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-4xl font-serif italic"
              >
                {product.price}
              </motion.p>
            </div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform duration-300">
                Explore Product
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Global Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20 z-20">
        <motion.div 
          className="h-full bg-white"
          style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
        />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
