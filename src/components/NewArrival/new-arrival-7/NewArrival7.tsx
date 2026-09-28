import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
}

interface NewArrival7Props {
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

export function NewArrival7({ section }: NewArrival7Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="text-center mb-12 relative z-20">
        <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="relative w-full max-w-sm aspect-[3/4] mt-12 mb-32 group perspective-1000">
        {content.products.map((product, index) => {
          // Calculate spread rotations and translations
          // The last element is on top
          const isTop = index === content.products.length - 1;
          const rotateZ = (index - content.products.length / 2) * 8;
          const translateX = (index - content.products.length / 2) * 20;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
              className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-black/10 origin-bottom cursor-pointer transition-transform duration-500 ease-out"
              style={{
                transform: `rotateZ(${rotateZ}deg) translateX(${translateX}px)`,
                zIndex: index,
              }}
              whileHover={{
                scale: 1.05,
                y: -40,
                rotateZ: 0,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {product.badge && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-1 uppercase tracking-tight">{product.name}</h3>
                <p className="text-xl font-light">{product.price}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
