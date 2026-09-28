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

interface ProductGrid4Props {
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

export function ProductGrid4({ section }: ProductGrid4Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Moves the flex container horizontally based on scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[200vh] w-full bg-gray-50"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        <div className="absolute top-12 left-12 md:top-24 md:left-24 z-20">
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <motion.div 
          style={{ x }} 
          className="flex gap-8 px-4 md:px-24 mt-32 w-max"
        >
          {content.products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative w-[300px] md:w-[450px] aspect-[3/4] flex-shrink-0 cursor-pointer overflow-hidden rounded-sm"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {product.badge && (
                <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
                  {product.badge}
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/70 text-xs font-mono uppercase tracking-widest mb-2">{product.category}</p>
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  </div>
                  <p className="text-xl text-white font-light">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute bottom-12 right-12 z-20 flex items-center gap-4 hidden md:flex">
          <span className="text-sm font-mono uppercase tracking-widest">Scroll to explore</span>
          <div className="w-16 h-px bg-current opacity-30 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-current"
              style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
