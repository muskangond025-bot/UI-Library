import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Trophy, ArrowRight } from 'lucide-react';

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

interface BestSeller2Props {
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

export function BestSeller2({ section }: BestSeller2Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = content.products[activeIndex];

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Left side: Sticky Leaderboard */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center sticky top-0 h-auto md:h-screen z-10 bg-white/50 backdrop-blur-3xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={18} style={{ color: style.accentColor }} />
            <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {content.products.map((product, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={product.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 ${isActive ? 'bg-white shadow-xl scale-105' : 'hover:bg-white/50'}`}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0 transition-colors ${isActive ? 'text-white' : 'bg-gray-100 text-gray-400'}`}
                  style={{ backgroundColor: isActive ? style.accentColor : '' }}
                >
                  {index + 1}
                </div>
                <div className="text-left flex-1">
                  <h4 className={`font-bold text-lg ${isActive ? 'text-black' : 'text-gray-600'}`}>{product.name}</h4>
                  <p className="text-sm text-gray-500 font-mono uppercase">{product.category}</p>
                </div>
                {isActive && <ArrowRight style={{ color: style.accentColor }} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right side: Dynamic Preview */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative p-4 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -50 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img 
              src={activeProduct.image} 
              alt={activeProduct.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
              {activeProduct.badge && (
                <span className="self-start px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  {activeProduct.badge} Award
                </span>
              )}
              
              <div className="flex items-center gap-2 mb-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(activeProduct.rating) ? "currentColor" : "none"} />
                ))}
                <span className="text-white font-bold ml-2">{activeProduct.rating}</span>
                <span className="text-white/60 text-sm">({activeProduct.reviews.toLocaleString()})</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mb-6">{activeProduct.name}</h3>
              
              <div className="flex justify-between items-center w-full">
                <p className="text-3xl font-light">{activeProduct.price}</p>
                <button 
                  className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-transform"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
