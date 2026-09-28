import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

interface BestSeller19Props {
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

export function BestSeller19({ section }: BestSeller19Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const total = content.products.length;
  const radius = 220; // pixels
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const actualRadius = isMobile ? 120 : radius;

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12 md:py-24"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="relative w-full text-center z-20 mb-12 md:mb-8 pt-12 md:pt-0">
        <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="relative w-full max-w-4xl h-[500px] md:h-[600px] flex items-center justify-center mt-16 md:mt-12">
        
        {/* The rotating ring of thumbnails */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            className="relative"
            animate={{ rotate: -(activeIndex * (360 / total)) }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            style={{ width: actualRadius * 2, height: actualRadius * 2 }}
          >
            {content.products.map((product, index) => {
              const angle = (index * (360 / total)) * (Math.PI / 180);
              const x = Math.sin(angle) * actualRadius;
              const y = -Math.cos(angle) * actualRadius;
              
              const isActive = index === activeIndex;

              return (
                <button
                  key={product.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute top-1/2 left-1/2 w-16 md:w-24 aspect-square -mt-8 -ml-8 md:-mt-12 md:-ml-12 rounded-full overflow-hidden border-2 md:border-4 transition-all duration-300 pointer-events-auto ${isActive ? 'scale-125 z-20 shadow-2xl' : 'scale-100 opacity-50 hover:opacity-100 z-10'}`}
                  style={{ 
                    transform: `translate(${x}px, ${y}px)`, 
                    borderColor: isActive ? style.accentColor : 'rgba(255,255,255,0.2)',
                  }}
                >
                  {/* Counter-rotate the image so it stays upright */}
                  <motion.div
                    className="w-full h-full"
                    animate={{ rotate: (activeIndex * (360 / total)) }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                  >
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </motion.div>
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-white bg-black/40 drop-shadow-md">
                      {index + 1}
                    </div>
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Center Active Detail */}
        <div className="relative z-30 pointer-events-none flex flex-col items-center justify-center text-center p-6 mt-64 md:mt-0 bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-3xl w-[90%] md:w-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto"
            >
              {content.products[activeIndex].badge && (
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                  {content.products[activeIndex].badge}
                </span>
              )}
              <h3 className="text-3xl md:text-5xl font-bold mb-2">{content.products[activeIndex].name}</h3>
              <p className="text-sm font-mono uppercase tracking-widest text-white/50 mb-6">{content.products[activeIndex].category}</p>
              
              <div className="flex flex-col items-center gap-2 mb-8">
                <p className="text-4xl font-light">{content.products[activeIndex].price}</p>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold">{content.products[activeIndex].rating}</span>
                </div>
              </div>

              <button 
                className="px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg"
                style={{ backgroundColor: style.accentColor, color: '#fff' }}
              >
                View Details
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
