import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';

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

interface BestSeller16Props {
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

export function BestSeller16({ section }: BestSeller16Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-y-auto snap-y snap-mandatory hide-scrollbar"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="absolute top-8 left-8 z-50 mix-blend-difference pointer-events-none text-white">
        <p className="text-sm font-bold tracking-widest uppercase mb-1">{content.subtitle}</p>
        <h2 className="text-2xl font-black uppercase tracking-tighter">{content.title}</h2>
      </div>

      {content.products.map((product, index) => {
        return (
          <div 
            key={product.id}
            className="w-full h-screen snap-start relative flex items-center justify-center overflow-hidden group"
          >
            {/* Background Parallax */}
            <div className="absolute inset-0 z-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-24">
              
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl bg-white text-black shadow-2xl">
                      #{index + 1}
                    </div>
                    {product.badge && (
                      <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-2xl">
                    {product.name}
                  </h3>
                  
                  <p className="text-lg text-white/80 font-mono uppercase tracking-widest mb-12">{product.category}</p>
                  
                  <div className="flex flex-wrap items-center gap-8 justify-center md:justify-start">
                    <p className="text-5xl font-light text-white">{product.price}</p>
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                      <div className="flex text-yellow-400">
                        <Star size={18} fill="currentColor" />
                      </div>
                      <span className="font-bold text-xl text-white">{product.rating}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Product isolated view (mocking a floating product element) */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-[300px] md:w-[450px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/20 backdrop-blur-sm p-4"
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator */}
            {index < content.products.length - 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce text-white/50">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-2">Next Rank</span>
                <ChevronDown size={24} />
              </div>
            )}
          </div>
        );
      })}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
