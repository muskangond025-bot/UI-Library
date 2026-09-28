import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival17Props {
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

export function NewArrival17({ section }: NewArrival17Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[150vh] py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-32 sticky top-24 z-20">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mix-blend-difference">
            {content.title}
          </h2>
        </div>

        <div className="relative w-full flex justify-center gap-4 md:gap-8 z-10 mt-[20vh]">
          
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-8 mt-24 w-1/3">
            {[content.products[0], content.products[3]].filter(Boolean).map((product, i) => (
              <div key={product.id} className="w-full group cursor-pointer">
                <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl mb-4 bg-gray-100 shadow-xl">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight">{product.name}</h3>
                <p className="text-sm opacity-60">{product.price}</p>
              </div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-8 w-1/3">
            {[content.products[1], content.products[4]].filter(Boolean).map((product, i) => (
              <div key={product.id} className="w-full group cursor-pointer">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-gray-100 shadow-xl">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight">{product.name}</h3>
                <p className="text-sm opacity-60">{product.price}</p>
              </div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="flex flex-col gap-8 mt-48 w-1/3">
            {[content.products[2]].filter(Boolean).map((product, i) => (
              <div key={product.id} className="w-full group cursor-pointer">
                <div className="w-full aspect-[2/3] overflow-hidden rounded-2xl mb-4 bg-gray-100 shadow-xl">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight">{product.name}</h3>
                <p className="text-sm opacity-60">{product.price}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
