import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ShoppingBag, Trophy } from 'lucide-react';

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

interface BestSeller1Props {
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

export function BestSeller1({ section }: BestSeller1Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = content.products[activeIndex];
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Massive Background Preview Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={activeProduct.image} 
              alt={activeProduct.name}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient for text readability and glass effect support */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Details Area (Positioned above the thumbnail carousel) */}
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-24 pb-72 md:pb-[400px] pt-24 pointer-events-none flex flex-col justify-between h-full overflow-y-auto hide-scrollbar">
        <div className="w-full max-w-4xl shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <Trophy size={20} style={{ color: style.accentColor }} />
            <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter"
          >
            {content.title}
          </motion.h2>
        </div>

        {/* Selected Product Information */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`detail-${activeProduct.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-8 mb-8 pointer-events-auto max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl shrink-0"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full">
                #1 in {activeProduct.category}
              </span>
              {activeProduct.badge && (
                <span 
                  className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border"
                  style={{ color: style.accentColor, borderColor: style.accentColor }}
                >
                  {activeProduct.badge}
                </span>
              )}
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{activeProduct.name}</h3>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex" style={{ color: style.accentColor }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(activeProduct.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-white/80 font-bold ml-2">{activeProduct.rating}</span>
              <span className="text-white/50 text-sm">({activeProduct.reviews} reviews)</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-4xl font-light">{activeProduct.price}</p>
              <button 
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                style={{ backgroundColor: style.accentColor, color: '#000' }}
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glassmorphic Thumbnail Carousel */}
      <div className="absolute bottom-0 inset-x-0 z-20 px-4 md:px-12 lg:px-24 pb-8 pt-8 bg-gradient-to-t from-[#0F172A] to-transparent">
        <div className="flex items-center gap-4">
          <button 
            onClick={scrollLeft}
            className="hidden md:flex w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            ref={carouselRef}
            className="flex-1 flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {content.products.map((product, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={product.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    snap-center shrink-0 cursor-pointer rounded-2xl overflow-hidden transition-all duration-500
                    ${isActive ? 'w-[180px] md:w-[260px] border-2 ring-4 ring-offset-4 ring-offset-[#0F172A] scale-100' : 'w-[140px] md:w-[200px] border border-white/20 opacity-50 hover:opacity-100 scale-95 hover:scale-100'}
                    relative aspect-[3/4] bg-white/5 backdrop-blur-sm
                  `}
                  style={{ 
                    borderColor: isActive ? style.accentColor : '', 
                    '--tw-ring-color': isActive ? style.accentColor : undefined 
                  } as React.CSSProperties}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Rank Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shadow-lg" style={{ backgroundColor: style.accentColor, color: '#000' }}>
                    {index + 1}
                  </div>

                  {!isActive && <div className="absolute inset-0 bg-black/50" />}
                  
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold text-xs md:text-sm line-clamp-2 leading-tight">{product.name}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            onClick={scrollRight}
            className="hidden md:flex w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-white/20 transition-colors z-10"
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
