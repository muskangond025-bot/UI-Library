import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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

interface BestSeller14Props {
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

export function BestSeller14({ section }: BestSeller14Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const total = content.products.length;
  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-24"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-12 left-0 right-0 text-center z-20">
        <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center perspective-[1000px]">
        <AnimatePresence initial={false}>
          {content.products.map((product, index) => {
            const offset = index - activeIndex;
            const absoluteOffset = Math.abs(offset);
            const isCenter = offset === 0;
            
            // Render only closest items for performance and visual clarity
            if (absoluteOffset > 2 && absoluteOffset !== total - 1 && absoluteOffset !== total - 2) return null;

            // Handle wrap around math
            let renderOffset = offset;
            if (offset > 2) renderOffset -= total;
            if (offset < -2) renderOffset += total;

            const x = renderOffset * 200; // Spread out horizontally
            const z = Math.abs(renderOffset) * -150; // Push back non-center items
            const rotateY = renderOffset * -25; // Rotate to face center

            return (
              <motion.div
                key={product.id}
                className={`absolute w-[260px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-pointer preserve-3d ${isCenter ? 'z-20' : 'z-10'}`}
                animate={{
                  x: x,
                  z: z,
                  rotateY: rotateY,
                  opacity: 1 - Math.abs(renderOffset) * 0.3
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                onClick={() => setActiveIndex(index)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Dark overlay for side items */}
                {!isCenter && <div className="absolute inset-0 bg-black/50 transition-opacity duration-300" />}

                <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {index + 1}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {isCenter && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-0 bottom-0 p-6 text-white"
                  >
                    {product.badge && (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
                        {product.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-1 leading-tight">{product.name}</h3>
                    <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-3">{product.category}</p>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-light">{product.price}</p>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={14} fill="currentColor" />
                        <span className="font-bold text-sm">{product.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 inset-x-0 flex justify-center gap-6 z-20">
        <button 
          onClick={prev}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md bg-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md bg-white/10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-[1000px] { perspective: 1000px; }
      `}} />
    </div>
  );
}
