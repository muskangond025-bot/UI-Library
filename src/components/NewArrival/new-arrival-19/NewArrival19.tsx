import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival19Props {
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

export function NewArrival19({ section }: NewArrival19Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[150vh]"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Image that scales */}
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={content.products[0]?.image} 
            alt="Cinematic Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 w-full max-w-7xl px-4 flex flex-col items-center justify-center h-full text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-[0.4em] uppercase mb-6" 
            style={{ color: style.accentColor }}
          >
            {content.subtitle}
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-12"
            style={{ 
              WebkitTextStroke: "2px rgba(255,255,255,0.2)",
              color: "transparent"
            }}
          >
            {content.title}
          </motion.h2>

          <div className="flex gap-4 md:gap-8 mt-8">
            {content.products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 mb-4 bg-black">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest">{product.name}</h3>
                <p className="text-xs opacity-60 mt-1">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
