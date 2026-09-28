import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel1Props {
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

export function ProductCarousel1({ section }: ProductCarousel1Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = content.products[activeIndex];
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex flex-col justify-end"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Background Preview Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={activeProduct.image} 
            alt={activeProduct.name}
            className="w-full h-full object-cover"
          />
          {/* Glassmorphic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-24 pb-56 md:pb-64 pt-24 pointer-events-none flex flex-col justify-between h-full">
        <div className="w-full max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-widest uppercase mb-4" 
            style={{ color: style.accentColor }}
          >
            {content.subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter"
          >
            {content.title}
          </motion.h2>
        </div>

        {/* Selected Product Details */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`detail-${activeProduct.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-8 pointer-events-auto max-w-xl"
          >
            <div className="flex items-center gap-4 mb-2">
              <p className="text-gray-300 font-mono uppercase tracking-widest text-sm">
                {activeProduct.category}
              </p>
              {activeProduct.badge && (
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  {activeProduct.badge}
                </span>
              )}
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">{activeProduct.name}</h3>
            
            <div className="flex items-center gap-8 mt-6">
              <p className="text-2xl md:text-4xl font-light">{activeProduct.price}</p>
              <button 
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: style.accentColor, color: style.backgroundColor }}
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glassmorphic Thumbnail Carousel */}
      <div className="absolute bottom-0 inset-x-0 z-20 px-4 md:px-12 lg:px-24 pb-8 pt-8 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center gap-4">
          <button 
            onClick={scrollLeft}
            className="hidden md:flex w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            ref={carouselRef}
            className="flex-1 flex overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {content.products.map((product, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={product.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    snap-center shrink-0 cursor-pointer rounded-2xl overflow-hidden transition-all duration-300
                    ${isActive ? 'w-[200px] md:w-[280px] border-2 border-white' : 'w-[140px] md:w-[200px] border border-white/20 opacity-60 hover:opacity-100'}
                    relative aspect-video bg-white/5 backdrop-blur-sm
                  `}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {!isActive && <div className="absolute inset-0 bg-black/40" />}
                  
                  {isActive && (
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white font-bold text-xs md:text-sm truncate">{product.name}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button 
            onClick={scrollRight}
            className="hidden md:flex w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
