import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
}

interface BestSeller5Props {
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

export function BestSeller5({ section }: BestSeller5Props) {
  const { content, style } = section;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="text-center mb-12">
        <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="w-full max-w-7xl h-[60vh] md:h-[70vh] flex flex-col md:flex-row gap-2 md:gap-4 px-2 md:px-0">
        {content.products.map((product, index) => {
          const isHovered = hoveredIndex === index;
          // Mobile stack vs Desktop horizontal accordion
          return (
            <motion.div
              key={product.id}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-black/5 flex-shrink-0"
              initial={false}
              animate={{
                flexGrow: isHovered ? 10 : 1,
                flexBasis: isHovered ? 'auto' : '60px',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => setHoveredIndex(index)}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: isHovered ? 1 : 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Collapsed State Rank Number */}
              <div 
                className={`absolute top-4 left-4 w-10 h-10 rounded-full flex flex-col items-center justify-center z-10 transition-colors ${isHovered ? 'bg-white text-black' : 'bg-black/50 backdrop-blur-sm text-white'}`}
              >
                <span className="text-lg font-black leading-none">{index + 1}</span>
              </div>

              {/* Expanded Content */}
              <motion.div 
                className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end text-white overflow-hidden whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {product.badge && (
                  <span className="inline-block self-start px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/10">
                    {product.badge}
                  </span>
                )}
                <p className="font-mono text-xs uppercase tracking-widest text-white/70 mb-1">{product.category}</p>
                <h3 className="text-2xl md:text-4xl font-bold truncate mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-6 mt-2">
                  <p className="text-xl md:text-2xl font-light">{product.price}</p>
                  <div className="flex items-center gap-1 text-yellow-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-bold text-white">{product.rating}</span>
                  </div>
                </div>
              </motion.div>

              {/* Vertical Title for Collapsed State on Desktop */}
              <div className="absolute inset-0 hidden md:flex items-end justify-center pb-12 pointer-events-none">
                <motion.p
                  className="text-white font-bold tracking-widest uppercase whitespace-nowrap origin-bottom-left -rotate-90 text-sm"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  style={{ y: '-50%' }}
                >
                  {product.name}
                </motion.p>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
