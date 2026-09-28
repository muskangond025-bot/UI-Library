import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid9Props {
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

export function ProductGrid9({ section }: ProductGrid9Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className="relative min-h-screen w-full py-24 flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full px-4 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>
        <div className="flex items-center gap-4 hidden md:flex">
          <p className="text-sm uppercase tracking-widest text-gray-400">Scroll to view more</p>
          <ArrowRight size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Snap Scroll Container */}
      <div 
        ref={containerRef}
        className="flex w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 md:px-12 lg:px-24 pb-12 gap-8 md:gap-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product, index) => (
          <div 
            key={product.id}
            className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] flex flex-col group cursor-pointer"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-900 mb-8">
              {/* Internal Parallax image effect on hover instead of scroll (cleaner for horizontal overflow) */}
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {product.badge && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-sm shadow-xl">
                  {product.badge}
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-start border-t border-gray-700 pt-6">
              <div>
                <p className="text-sm font-mono uppercase tracking-widest mb-2" style={{ color: style.accentColor }}>{product.category}</p>
                <h3 className="text-2xl font-bold">{product.name}</h3>
              </div>
              <p className="text-2xl font-light">{product.price}</p>
            </div>
          </div>
        ))}
        {/* Spacer for last item to snap correctly */}
        <div className="shrink-0 w-4 md:w-12 lg:w-24" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
