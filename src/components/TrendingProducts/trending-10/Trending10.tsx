import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  type: "large" | "small" | "wide" | "tall";
}

interface Trending10Props {
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

export function Trending10({ section }: Trending10Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1600px] mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              {content.title}
            </h2>
          </div>
          <button className="hidden md:block border-b border-current pb-1 text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
            View All Trending
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-2 md:gap-4">
          {content.products.map((product, index) => {
            let colSpan = "col-span-1";
            let rowSpan = "row-span-1";
            
            if (product.type === "large") {
              colSpan = "col-span-2 md:col-span-2";
              rowSpan = "row-span-2 md:row-span-2";
            } else if (product.type === "wide") {
              colSpan = "col-span-2 md:col-span-2";
              rowSpan = "row-span-1";
            } else if (product.type === "tall") {
              colSpan = "col-span-1";
              rowSpan = "row-span-2";
            }

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative group overflow-hidden bg-white/5 cursor-pointer ${colSpan} ${rowSpan}`}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Colored overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply"
                  style={{ backgroundColor: style.accentColor }}
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white z-10">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight mb-1">{product.name}</h3>
                  <p className="text-lg font-light">{product.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
