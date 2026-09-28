import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid18Props {
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

export function ProductGrid18({ section }: ProductGrid18Props) {
  const { content, style } = section;
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative min-h-[90vh] w-full py-24 flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full px-4 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={carouselRef}
        className="flex w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 md:px-12 lg:px-24 gap-6 pb-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product) => (
          <div 
            key={product.id}
            className="snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] flex flex-col group cursor-pointer"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {product.badge && (
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  {product.badge}
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest">{product.category}</p>
              </div>
              <p className="text-lg">{product.price}</p>
            </div>
          </div>
        ))}
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
