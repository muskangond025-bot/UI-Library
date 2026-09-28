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

interface BestSeller12Props {
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

export function BestSeller12({ section }: BestSeller12Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  
  const total = content.products.length;

  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-24"
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

      {/* Orbit Container */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center perspective-[1200px]">
        <AnimatePresence initial={false}>
          {content.products.map((product, index) => {
            // Calculate relative offset for 3D positioning
            let offset = index - activeIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;
            
            const isCenter = offset === 0;
            const rotationY = offset * 45; // Spread items in an arc
            const translateZ = Math.abs(offset) * -200; // Push non-center items back
            const opacity = 1 - (Math.abs(offset) * 0.3);

            return (
              <motion.div
                key={product.id}
                className={`absolute w-[280px] md:w-[350px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl cursor-pointer preserve-3d ${isCenter ? 'z-10' : 'z-0'}`}
                animate={{
                  rotateY: rotationY,
                  z: translateZ,
                  opacity: opacity,
                  x: offset * 150
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => setActiveIndex(index)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Ranking Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl bg-white text-black shadow-lg">
                  {index + 1}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                  {product.badge && (
                    <span className="self-start px-3 py-1 bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-white/20">
                      {product.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{product.name}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-xl font-light">{product.price}</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={14} fill="currentColor" />
                      <span className="font-bold text-sm">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 inset-x-0 flex justify-center gap-6 z-20">
        <button 
          onClick={prev}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md bg-white/5"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md bg-white/5"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-[1200px] { perspective: 1200px; }
      `}} />
    </div>
  );
}
