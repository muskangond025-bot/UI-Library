import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

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

interface BestSeller3Props {
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

export function BestSeller3({ section }: BestSeller3Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to center active item on mobile
  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 768) {
      const activeEl = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        scrollRef.current.scrollTo({
          left: activeEl.offsetLeft - (window.innerWidth / 2) + (activeEl.offsetWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="text-center mb-16 z-10 px-4">
        <h2 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </h2>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h3>
      </div>

      <div 
        ref={scrollRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-[10vw] md:px-[30vw] items-center min-h-[500px]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product, index) => {
          const isActive = index === activeIndex;
          
          return (
            <motion.div
              key={product.id}
              className={`shrink-0 snap-center cursor-pointer relative transition-all duration-500 ease-out`}
              style={{
                width: isActive ? '300px' : '200px',
                height: isActive ? '450px' : '300px',
                margin: '0 10px',
                opacity: isActive ? 1 : 0.4,
                zIndex: isActive ? 10 : 1
              }}
              onClick={() => setActiveIndex(index)}
              layout
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Rank Number */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-lg bg-black text-white border-2 border-white/20">
                  {index + 1}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100" />
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-x-0 bottom-0 p-6 text-white"
                    >
                      <div className="flex items-center gap-1 mb-2 text-yellow-400">
                        <Star size={14} fill="currentColor" />
                        <span className="font-bold text-xs">{product.rating}</span>
                      </div>
                      <h4 className="text-2xl font-bold leading-tight mb-1">{product.name}</h4>
                      <p className="text-sm text-white/70 mb-4">{product.price}</p>
                      
                      <button 
                        className="w-full py-3 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105"
                        style={{ backgroundColor: style.accentColor, color: '#fff' }}
                      >
                        View Product <ChevronRight size={16} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
