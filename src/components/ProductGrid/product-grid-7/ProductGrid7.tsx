import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid7Props {
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

export function ProductGrid7({ section }: ProductGrid7Props) {
  const { content, style } = section;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-5xl mx-auto mb-16 border-b border-gray-200 pb-8 flex justify-between items-end">
        <div>
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-serif italic">
            {content.title}
          </h2>
        </div>
        <p className="text-sm uppercase tracking-widest hidden md:block">0{content.products.length} Items</p>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col relative">
        {content.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group py-6 md:py-8 border-b border-gray-100 flex items-center justify-between cursor-pointer relative z-10 hover:px-8 transition-all duration-500"
          >
            <div className="flex items-center gap-8 md:gap-16">
              <span className="text-sm font-mono text-gray-400 group-hover:text-black transition-colors duration-300 w-8">0{index + 1}</span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:italic transition-all duration-300">
                {product.name}
              </h3>
            </div>
            
            <div className="flex items-center gap-8 md:gap-16">
              <span className="text-sm font-mono uppercase tracking-widest text-gray-500 hidden md:block group-hover:text-black transition-colors duration-300">
                {product.category}
              </span>
              <span className="text-xl md:text-2xl font-light group-hover:font-bold transition-all duration-300">
                {product.price}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Hover Reveal Image */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none hidden md:flex items-center justify-center z-0 overflow-hidden">
          {content.products.map((product, index) => (
            <motion.div
              key={`img-${product.id}`}
              initial={false}
              animate={{ 
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 0.8,
                y: hoveredIndex === index ? 0 : 40,
                rotate: hoveredIndex === index ? (index % 2 === 0 ? 5 : -5) : 0
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute w-[400px] aspect-[3/4] shadow-2xl rounded-lg overflow-hidden mix-blend-multiply origin-center"
            >
              <img src={product.image} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
